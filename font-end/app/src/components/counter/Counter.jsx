import React,{useState} from "react";
import Button from './button.jsx';
import './counter.css'

const Counter=()=>{

    const [counter,setCounter]=useState("0")
    const [trigger,setTrigger]=useState(false);
    const [numA,setOperator1]=useState("");
    const [numB,setOperator2]=useState("");

    function handleReset(){
        setOperator1("")
        setOperator2("")
        setCounter(0)
    }
    function check(){
        if(numA===""||numB===""){
            setCounter("Enter Values")
            setTrigger(true)
            return false;
        }
        setTrigger(false)
        return true;
    }
    function handleAdd(){
        if(check()){
        setCounter(parseInt(numA)+parseInt(numB))}  
    }
    function handleSubstract(){
        if(check()){
            setCounter(numA-numB)
        } 
    }
    function handleMultiply(){
        if(check()){
            setCounter(numA*numB)
        } 
    }
    function handleDivide(){
        if(check()){
            setCounter(numA/numB)
        } 
    }

    return(
        <div className="counter">
            <div></div>
            <div className="container">
            <h1 className={trigger?"totalCountActive":"totalCount"}>{counter}</h1>
            <div className="input">
                <input placeholder="enter number" onChange={e=>setOperator1(e.target.value)} value={numA}/>
                <input placeholder="enter number" onChange={e=>setOperator2(e.target.value)} value={numB}/>
            </div>
            <div className="buttons">
                <Button onClickEvent={handleAdd}>Add</Button>
                <Button onClickEvent={handleSubstract}>Substract</Button>
                <Button onClickEvent={handleMultiply}>Multiply</Button>
                <Button onClickEvent={handleDivide}>Divide</Button>
                <Button onClickEvent={handleReset}>reset</Button>
            </div>
            </div>
            <div></div>
        </div>
    );
}

export default Counter;