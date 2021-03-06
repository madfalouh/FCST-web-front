import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header";
import axios from 'axios';
import Pagination from "./../components/Pagination/Pagination";
import ProductCard from "./../components/Product/ProductCard";
import './chatcss.css';
import './product.css';
import '../components/Pagination/Pagination.scss';

const jwt = require("jsonwebtoken");


const PAGE_LIMIT = 10;

// This page is currently a example -> Have to be changed
export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      currentProducts: [],
      currentPage: null,
      totalPages: null
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_API_URL}/products`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
      },
    }).then((response) => {
      this.setState({ allProducts: response.data, currentProducts: response.data.slice(0, PAGE_LIMIT) });
    }).catch((error) => {
      console.error('There was an error!', error);
    });
  }

  onPageChanged = data => {
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  };

  render() {
    const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
    var newSocket = new WebSocket(`${process.env.REACT_APP_BASE_WEBSOCKET_URL}/chats?id=${decoded_token}`);
    const {
      allProducts,
      currentProducts,
      currentPage,
      totalPages
    } = this.state;
    const totalProducts = allProducts.length;

    if (totalProducts === 0) return null;

    const headerClass = [
      "text-dark py-2 pr-4 m-0",
      currentPage ? "border-gray border-right" : ""
    ]
      .join(" ")
      .trim();

    return (
      <>
        <Header />
        <br></br>
        <h2 className={headerClass}>
          <strong className="text-secondary">{totalProducts}</strong>{" "}
          Products
        </h2>
        <div className="container">

          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} user={decoded_token} socket={newSocket} className="item" />
          ))}
          <div className="w-100  d-flex flex-row flex-wrap align-items-center justify-content-between" >
            <div className="d-flex flex-row align-items-center">

              {currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row align-items-center">
              <Pagination
                totalRecords={totalProducts}
                pageLimit={6}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>

        </div>
        <div>

        </div>

      </>
    );
  }
}
