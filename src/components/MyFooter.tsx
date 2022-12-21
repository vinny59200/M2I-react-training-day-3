/* function component */
import React from "react";
import { useState, useEffect } from "react";
import "../scss/MyFooter.scss";
import { increment, selectCount, assignAmount, vv1231121 } from "../redux/counterSlice";

import { useSelector, useDispatch } from "react-redux";

const MyFooter = () => {
  const dispatch = useDispatch<any>();
  const counter = useSelector(selectCount);

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };
  const clickHandlerRedux = () => {
    dispatch(increment());
  };
  const clickHandlerAssignAmount = () => {
    console.log('888889')
    dispatch(assignAmount(5));
  };

  const clickHandlervv1231121 = () => {
    console.log('vv1231121')
    dispatch(vv1231121(5));
  };

  const date = new Date().getFullYear() + 1;

  //hook useEffect = componentDidMount + componentDidUpdate
  useEffect(() => {
    // console.log('loaded');
  }); // or useEffect (() => {...},[]) for only componentDidMount

  // a fn component must return JSX
  // reminder: a link to legal notice
  return (
    <footer className="bgFooter">
      Copyright &copy; {date} - VV
      <button onClick={clickHandler}>{count}</button>
      <button onClick={clickHandlerRedux}>redux {counter}</button>
      <button onClick={clickHandlervv1231121}>+5 redux with 2s tempo{counter}</button>
    </footer>
  );
};

export default MyFooter;
