import React from "react";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import CustomerModel from "../models/CustomerModel";
import "../scss/MyCustomer.scss";
import CustStatusSelect from "./CustStatusSelect";
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';
const MyCustomer = (props: any) => {

  const logVV =(str:CustomerModel)=>{
    console.log("VV"+str)
    props.onVVSelect2(str)
  }
/*
          <td>#</td>
          <td>Name</td>
          <td>Tva</td>
          <td>turnover</td>
          <td>Comment</td>
          <td>Status</td>
          <td>Actions</td>*/
  return (
    <tr>
      <td> <Nav.Link as={Link} to={'/customers/'+props.id} >{props.id}</Nav.Link></td>
      <td>{props.name}</td>
      <td>{props.tva}</td>
      <td>{props.turnover}</td>
      <td>{props.comment}</td>
      <td><CustStatusSelect status={props.status} id={props.id} onVVSelect={logVV}/></td>
      <td>
      <span><Link to={'/customers/'+props.id} ><PencilSquare /></Link>
        <TrashFill onClick={()=>{props.delete(props.id)}}  color="red"/></span>
      </td>
    </tr>
  );
};

export default MyCustomer;
