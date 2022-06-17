import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";
import React  from 'react';
import {CreateRounded } from "@material-ui/icons";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Create & Inspire.
          <CreateRounded/>
        </h1>
        <p className="pl-desc">
            Some of my projects....
        </p>
      </div>

      <div className="pl-list">
        {products.map(items=>(
          <Product key={items.id} img={items.img} link={items.link} title={items.title} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
