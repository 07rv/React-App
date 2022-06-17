import"./product.css";
import React  from 'react';
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Product = ({img, link, title}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" style={{backgroundColor:theme.state.darkMode && "white"}}></div>
        <div className="p-circle" style={{backgroundColor:theme.state.darkMode && "white"}}></div>
        <div className="p-circle" style={{backgroundColor:theme.state.darkMode && "white"}}></div>
      </div>
      <div>{title}</div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product