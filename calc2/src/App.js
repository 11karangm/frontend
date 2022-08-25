
import './App.css';
import { useState } from 'react';
import React from 'react';


function App() {

  
  

const [val,setVal]=useState("");
const backspace = () =>{
  try{
    setVal(val.slice(0,-1))
  }catch(error){
    setVal("");
  }
}

const calculate = () =>{
  try{
    setVal(eval(val));
  }
  catch(error){
    setVal("Error")
  }
  

}



 

  
  return (
  

  <div>
    <input type="text" className='text area' value={val} />
    <div className='buttons'>
    <button className="btn" value="1" onClick = {(e) => setVal(val + e.target.value)}>1</button>
    <button className="btn" value="2" onClick = {(e) => setVal(val + e.target.value)}>2</button>
    <button className="btn" value="3" onClick = {(e) => setVal(val + e.target.value)}>3</button>
    <button className="btn" value="C" onClick = {()=> backspace()}>C/CE</button>
    </div>

    <div className='buttons'>
    <button className="btn" value="4" onClick = {(e) => setVal(val + e.target.value)}>4</button>
    <button className="btn" value="5" onClick = {(e) => setVal(val + e.target.value)}>5</button>
    <button className="btn" value="6" onClick = {(e) => setVal(val + e.target.value)}>6</button>
    <button className="btn" value="+" onClick = {(e) => setVal(val + e.target.value)}>+</button>
    </div>

    <div className='buttons'>
    <button className="btn" value="7" onClick = {(e) => setVal(val + e.target.value)}>7</button>
    <button className="btn" value="8" onClick = {(e) => setVal(val + e.target.value)}>8</button>
    <button className="btn" value="9" onClick = {(e) => setVal(val + e.target.value)}>9</button>
    <button className="btn" value="*" onClick = {(e) => setVal(val + e.target.value)}>x</button>
    </div>

    <div className='buttons'>
    <button className="btn" value="." onClick = {(e) => setVal(val + e.target.value)}>.</button>
    <button className="btn" value="0" onClick = {(e) => setVal(val + e.target.value)}>0</button>
    <button className="btn" value="=" onClick = {() => calculate()}>=</button>
    <button className="btn" value="/" onClick = {(e) => setVal(val + e.target.value)}>/</button>
    </div>
    

  </div>
    
    );
    
}

export default App;
