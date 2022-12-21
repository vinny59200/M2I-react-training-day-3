import React from "react";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import OrderModel from "../models/OrderModel";
import "../scss/MyOrder.scss";
import StatusSelect from "./StatusSelect";
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';
const MyOrder = (props: any) => {
  const ttc = (fee: number, dayCount: number) => {
    // console.log("haut");
    // console.log(dayCount);
    // console.log("bas");
    // console.log(fee * dayCount * 1.2);
    return fee * dayCount * 1.2;
  };
  const logVV =(str:OrderModel)=>{
    console.log("VV"+str)
    props.onVVSelect2(str)
  }

  return (
    <tr>
      <td> <Nav.Link as={Link} to={'/insert/'+props.id} >{props.id}</Nav.Link></td>
      <td>{props.cust}</td>
      <td>{props.comment}</td>
      <td>{props.type}</td>
      <td>{props.fee}</td>
      <td>* {props.dayCount}</td>
      <td>= {ttc(props.fee, props.dayCount)}</td>
      <td><StatusSelect status={props.status} id={props.id} onVVSelect={logVV}/></td>
      <td>
      <span><Link to={'/insert/'+props.id} ><PencilSquare /></Link>
        <TrashFill onClick={()=>{props.delete(props.id)}}  color="red"/></span>
      </td>
    </tr>
  );
};

export default MyOrder;
