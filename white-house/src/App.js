import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import Hero from './hero';
import Dark from './Dark';
import { useState } from 'react';



function App() {

  const [currentPage, setCurrentPage] = useState("light");

  const buttonclick = () => {
    if(currentPage==="light")
    setCurrentPage("Dark");
    if(currentPage==="Dark")
    setCurrentPage("light")
}

const renderMainPage = () => {
  if (currentPage === "Dark") {
    return <Dark />;
  }else if (currentPage === "light") {
    return <Hero />;
  }
}
  return (
    <div>
      <Header />
      <button onClick={()=>buttonclick()}>toggle</button>
      {renderMainPage()}
    </div>
  );
}

export default App;
