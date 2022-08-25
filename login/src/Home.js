import React from "react";
import { Link } from 'react-router-dom';

function Home () {

    return(
    <>
    <main>
        <h1>
            Welcome to Homepage
        </h1>
        <nav>
            <Link to="/login">
            Login
            </Link>
        </nav>
    </main>
    
    </>
    );
}

export default Home;
