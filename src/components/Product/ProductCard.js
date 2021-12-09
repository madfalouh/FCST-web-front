import React, { Component, Fragment } from "react";
import '../Pagination/Pagination.scss';
import './ProductCard.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

class ProductCard extends Component {


  render() {

    const startChat = async (e) => {
      e.preventDefault();


      this.props.socket.send(JSON.stringify(
        {

          content: 'hello i want more details about ' + this.props.product.title,
          sender: this.props.user.user_id,
          receiver: this.props.product.seller
        }
      ));

      window.location.replace("http://localhost:3001/chats");


    };

    return (
      <Fragment>

        <div className="container">
          <div className="card">
            <img src={this.props.product.image} />
            <div className="card-body">
              <div className="row">
                <div className="card-title">
                  <h4>{this.props.product.title}</h4>
                  <h3>{this.props.product.price}</h3>
                </div>
                <div className="view-btn">
                  <a href="" onClick={startChat} >Start chat</a>
                </div>
              </div>
              <hr />
              <p>
                {this.props.product.description}
              </p>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductCard;
