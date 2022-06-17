import "./intro.css";
import profile from "../../img/profile.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import React from 'react';
import {introData} from "../../data";

const Intro = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="i"
    style={{backgroundColor:!theme.state.darkMode && "azure"}}>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">{introData.name}</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        {introData.scroller.map(items=>(
                            <div className="i-title-item" style={{color: items.color}}>{items.role}</div>
                        ))}
                    </div>
                </div>
                <div className="i-desc">
                    <div className="i-desc-items">
                        <b>Langulages: </b> 
                        {introData.languages.map(items=>(
                            <div className="animate-charcter" style={{ marginLeft: '.5rem'}}>
                                {items}
                            </div>
                        ))}
                        
                    </div>
                    <div className="i-desc-items">
                        <b>Technologies: </b>
                        {introData.technologies.map(items=>(
                            <div className="animate-charcter" style={{ marginLeft: '.5rem'}}>
                                {items}
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={profile} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro