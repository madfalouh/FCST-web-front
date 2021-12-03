import React, { Component, Fragment } from "react";
import '../Pagination/Pagination.scss';

class ProductCard extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-sm-6 col-md-4 product-card">
          <div className="product-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="px-3">
              <span className="product-name text-dark d-block font-weight-bold">
                {this.props.product.title}
              </span>
              <span className="product-desc text-secondary text-uppercase">
                {this.props.product.description}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductCard;
