import React from 'react';
import "../App.css";
import logo from "../Component/logo.jpg"

 function Navbar() {
    return (
        <div className="Navbar">
           
            <div className='leftSide'>
            <div className='logo'>
                <img id='logo' src='https://resources.sonyliv.com/image/fetch/w_40,c_fill,fl_lossy,f_auto,q_auto:eco,e_contrast:30,e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/sonyliv_new_revised_header_logo.png'
                 />
            </div>
            <div className='links'>
                <a href="/TV Shows">TV SHOWS</a>
                <a href="Games">GAMES</a>
                <a href="Movies">MOVIES</a>
                <a href="Sports">SPORTS</a>
                <a href="Channel">CHANNEL</a>
                <a href="Premium">PREMIUM</a>
                </div>
            </div>
            <div className='rightSide'>
            <div className='link'>
               
            </div>
            </div>
        </div>
    )
}

export default Navbar
