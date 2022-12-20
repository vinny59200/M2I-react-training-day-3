import React from "react";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import "../scss/MyOrder.scss";

const MyOrder = (props: any) => {
  const ttc = (fee: number, dayCount: number) => {
    console.log("haut");
    console.log(dayCount);
    console.log("bas");
    console.log(fee * dayCount * 1.2);
    return fee * dayCount * 1.2;
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.cust}</td>
      <td>{props.comment}</td>
      <td>{props.type}</td>
      <td>{props.fee}</td>
      <td>* {props.dayCount}</td>
      <td>= {ttc(props.fee, props.dayCount)}</td>
      <td className={props.status}>{props.status}</td>
      <td>
        <PencilSquare />
        <TrashFill />
      </td>
    </tr>
  );
};

export default MyOrder;
