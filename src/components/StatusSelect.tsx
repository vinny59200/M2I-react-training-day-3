import React from "react";
import "../scss/MyOrder.scss";
import OrderStatus from "../enums/OrderStatus";
import OrderModel from "../models/OrderModel";

const StatusSelect = (props:any) => {
  const [_status, _setStatus] = React.useState(props.status);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let id= props.id;
    let status=event.target.value;
    console.log(status +" for record #"+ id);
    _setStatus(status)
     let _order= new OrderModel().initStatus(id,status);
     console.log(_order)
    props.onVVSelect(_order)
  };

  return (
    <select className={_status} value={_status} onChange={handleChange}>
      {Object.values(OrderStatus).map((key) => (
        <option className={OrderStatus[key]} aria-selected="true" key={OrderStatus[key]} value={OrderStatus[key]} >
          {OrderStatus[key]}
        </option>
      ))}
    </select>
  );
};

export default StatusSelect;
