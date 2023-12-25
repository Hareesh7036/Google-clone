import React from "react";
import './Home.css';
import { Apps } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Search from "./search";

function Home() {
    return(
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                <Apps/>
                <Avatar/>
            </div>
            </div>
            <div className="home_body">
                <img src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"/>
                <div className="home_inputContainer">
                    <Search /*hideButtons*//>
                </div>
            </div>
        </div>
    )
}
export default Home