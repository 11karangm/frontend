import React from "react";


function Blog(props){
    return(
        <div className="blog-section">
            <img src={props.images} alt="blog" />
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default Blog;