import "./contact.css";
import React,{ useContext } from 'react';
import { ThemeContext } from "../../context";
import {contactDetails} from "../../data";
import { Email, GitHub, LinkedIn, CodeSharp} from "@material-ui/icons";

const Contact = () => {
    const theme = useContext(ThemeContext);
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact Details</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <Email style={{paddingRight:20}} className="icon-size"/>
                        {contactDetails.emailId}
                    </div>
                    <div className="c-info-item">
                        <GitHub className="icon-size"/>
                        <a 
                            style={{color:theme.state.darkMode && "white"}}
                            className="link"
                            target="_blank" rel="noreferrer"
                            href={contactDetails.githubLink}>
                            Git Hub
                        </a>
                    </div>
                    <div className="c-info-item">
                        <LinkedIn className="icon-size"/>
                        <a 
                            style={{color:theme.state.darkMode && "white"}}
                            className="link"
                            target="_blank" rel="noreferrer"
                            href={contactDetails.linkedin}>
                            Linkedin
                        </a>
                    </div>
                    <div className="c-info-item">
                        <CodeSharp className="icon-size"/>
                        <a 
                            style={{color:theme.state.darkMode && "white"}}
                            className="link"
                            target="_blank" rel="noreferrer"
                            href={contactDetails.leetCode}>
                            LeetCode
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Contact