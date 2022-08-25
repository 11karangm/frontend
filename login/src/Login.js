import React from "react";
import {Link} from "react-router-dom";

function Login () {

    return(

        <>
        <main>
            <h1>This is the Login Page</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button>Login</button>
            <button>Forgot Password</button>

        </main>
        </>

    );
}

export default Login;