import "./about.css";
import book from "../../img/book.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import React  from 'react';
import { aboutMe } from "../../data";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className='a'
        style={{backgroundColor:!theme.state.darkMode && "blanchedalmond"}}>
      <div className="a-left">
        <div className="a-card bg" 
          style={{backgroundColor:theme.state.darkMode && "rgb(158, 155, 155)"}}></div>
        <div className="a-card">         
          <img src={book} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          {aboutMe.first}
        </p>
        <p className="a-desc">
          {aboutMe.second}
        </p>
      </div>
    </div>
  )
}

export default About
