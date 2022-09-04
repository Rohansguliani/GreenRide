import React from 'react'
import "./Home.css"
import "@fontsource/racing-sans-one"
import { IconButton } from "@material-ui/core";

import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
        <div className="Logo">
            <h1 className="Logo-Text">GREENRIDE</h1>
        </div>

        <div className="Intro-Text">
            <h1>Welcome Ronnie</h1>
            <h3>Let's ride <div className="intro-green">green</div></h3>
        </div>

        <div className="New-Trip">
            <IconButton >
                <p className="New-Trip-Button">New Trip</p>
            </IconButton>
        </div>


    </div>
  )
}

export default Home