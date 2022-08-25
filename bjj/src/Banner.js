import React from "react";

function Banner (){

    return(
        <div className="Banner">
        <div className="form">
            <p id="ben">BEN HALL</p>
            <p>Brazilian Jiu Jitsu</p>
            <div className="book">
            <button className="signin">Sign Up/Login</button>
            <button className="freetrial" onclick="location.href='reg.html'">Book A Free Trial</button>
            </div>
        </div>
        </div>
    )
}

export default Banner;