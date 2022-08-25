import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentNum,setCurrentNum]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum1=document.querySelector('#num1').value
    let currentNum2=document.querySelector('#num2').value
    if(currentNum1==='')
    return;
    if(currentNum2==='')
    return;
    let sum=parseInt( currentNum1)+parseInt(currentNum2);
    setCurrentNum(sum);
    document.querySelector('#num').value="";
      
  }

  const Mul=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum1=document.querySelector('#num1').value
    let currentNum2=document.querySelector('#num2').value
    if(currentNum1==='')
    return;
    if(currentNum2==='')
    return;
    let sum=parseInt( currentNum1)*parseInt(currentNum2);
    setCurrentNum(sum);
    document.querySelector('#num').value="";
      
  }

  const Divide=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum1=document.querySelector('#num1').value
    let currentNum2=document.querySelector('#num2').value
    if(currentNum1==='')
    return;
    if(currentNum2==='')
    return;
    let sum=parseInt( currentNum1)/parseInt(currentNum2);
    setCurrentNum(sum);
    document.querySelector('#num').value="";
      
  }

  const Sub=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum1=document.querySelector('#num1').value
    let currentNum2=document.querySelector('#num2').value
    if(currentNum1==='')
    return;
    if(currentNum2==='')
    return;
    if(parseInt(currentNum1)>parseInt(currentNum2)){
      var sum=parseInt( currentNum1)-parseInt(currentNum2);
    }
    if(parseInt(currentNum1)<parseInt(currentNum2)){
      var sum=parseInt( currentNum2)-parseInt(currentNum1);
    }

    
    setCurrentNum(sum);
    document.querySelector('#num').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
   document.querySelector('form').reset();
    setClear(true);
    setCurrentNum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1>Calculator</h1>
      </div>
      <form>
            <input type="text" id="result" value={currentNum}  readOnly />   
            <input type="text" id="num1" placeholder="enter a number" />
            <input type="text" id="num2" placeholder="enter a number" />
            <button onClick={Add}>Add</button>
            <button onClick={Sub}>Sub</button>
            <button onClick={Mul}>Mul</button>
            <button onClick={Divide}>Divide</button>
            <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
