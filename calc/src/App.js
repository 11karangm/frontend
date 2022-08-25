
import './App.css';
import { useState } from 'react';


function App() {

  
  

const [Number,setNumber]=useState("0");
const [Number1,setNumber1]=useState("0");

const buttonadder = (n) =>{
  if(Number==="0")
  {
    setNumber(n);
    document.getElementById('pop').value=Number;
  }
  else
  {
    setNumber1(n);
  }
}

const Add = (n1,n2) =>
{
  document.getElementById('pop').innerHTML=n1+"+"+n2;
   var x = parseInt(n1)+parseInt(n2);
   x.toString();
   setNumber(x);
   document.getElementById('result').innerHTML=x;
   setNumber("0");
   setNumber1("0");
}

const Mul = (n1,n2) =>
{
  document.getElementById('pop').innerHTML=n1+"*"+n2;
   var x = parseInt(n1)*parseInt(n2);
   x.toString();
   setNumber(x);
   document.getElementById('result').innerHTML=x;
   setNumber("0");
   setNumber1("0");
}

const Div = (n1,n2) =>
{
  document.getElementById('pop').innerHTML=n1+"/"+n2;
   var x = parseInt(n1)/parseInt(n2);
   x.toString();
   setNumber(x);
   document.getElementById('result').innerHTML=x;
   setNumber("0");
   setNumber1("0");
}

return (
    <div>
    <button onClick={() => buttonadder("1")}>1</button>  
    <button onClick={() => buttonadder("2")}>2</button>  
    <button onClick={() => buttonadder("3")}>3</button>  
    <button onClick={() => buttonadder("4")}>4</button> 
    <button onClick={() => buttonadder("5")}>5</button> 
    <button onClick={() => buttonadder("6")}>6</button> 
    <button onClick={() => buttonadder("7")}>7</button> 
    <button onClick={() => buttonadder("8")}>8</button> 
    <button onClick={() => buttonadder("9")}>9</button> 
    
    <button onClick={() => Add(Number,Number1)}>+</button>
    <button onClick={() => Mul(Number,Number1)}>x</button>
    <button onClick={() => Div(Number,Number1)}>/</button>
    <p id='pop'></p>  
    <p id='pop'></p>
    <p id='pop'></p>
    
    <p id='result'></p>
    </div>

    
    );
    
}

export default App;
