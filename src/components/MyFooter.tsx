/* function component */
import React from "react";
import { useState, useEffect } from "react";
import '../scss/MyFooter.scss'

const MyFooter = () => {
  const [count,setCount] = useState(0);

  const clickHandler = ()=>{
    setCount(count+1);
  }
  const date = new Date().getFullYear() + 1;

//hook useEffect = componentDidMount + componentDidUpdate
useEffect(()=>{
  // console.log('loaded');
})// or useEffect (() => {...},[]) for only componentDidMount


  // a fn component must return JSX
  // reminder: a link to legal notice
  return (
    <footer className="bgFooter">
      Copyright &copy; {date} - VV
      <button onClick={clickHandler}>{count}</button>
    </footer>
  );
};

export default MyFooter;
