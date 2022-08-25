import React from "react";
import pic from "./images/logo01.png"

function Menu (){
    return(
    <div className="Menu">
        <a href="index.html">HOME</a>
        <a href="index.html">ABOUT US</a>
        <a href="index.html">TESTIMONIAL</a>
        <a href="index.html">GALLERY</a>
        <a href="index.html">PRICING</a>
        <div className="logo">
            <img src={pic} alt="logo1"/>
        </div>
        <a href="index.html">TRAINERS</a>
        <a href="index.html">PRODUCTS</a>
        <a href="index.html">HISTORY</a>
        <a href="index.html">TIMETABLE</a>
        <a href="index.html">CONTACTS</a>
    </div>
    );
}
export default Menu;