import React from "react";
import "./App.css";
import Topmenu from "./highmenu";
import Menu from "./menu";
import Banner from "./Banner";
import Blog from "./Blog";
import pic1  from "./images/ben_hall_img01.png";
import pic  from "./images/banner_instructor.png";
import pic2  from "./images/banner_timetable.png"; 

function App() {
  const blogList = [
    {
      
      blogName: "Blog 1",
      blgDesc: "desc one ",
    },
    {
      
      blogName: "Blog 2",
      blgDesc: "desc two ",
    },
    {
      
      blogName: "Blog 3",
      blgDesc: "desc three",
    }
];
  
  return (
    <div>
    
    <Topmenu />
    <Menu />
    <Banner />
    



    <div className="blog-container">
				{blogList.map((data, index) => (
					<Blog name={data.blogName} message={data.blgDesc} key={index} images={pic} />
				))}
			</div>


    </div>
  );
}

export default App;
