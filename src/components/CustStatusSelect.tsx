import React from "react";
import "../scss/MyOrder.scss";
import CustomerStatus from "../enums/CustomerStatus";
import CustomerModel from "../models/CustomerModel";

const CustStatusSelect = (props:any) => {
  const [_status, _setStatus] = React.useState(props.status);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let id= props.id;
    let status=event.target.value;
    console.log(status +" for record #"+ id);
    _setStatus(status)
     let _cust= new CustomerModel().initStatus(id,status);
     console.log(_cust)
    props.onVVSelect(_cust)
  };

  return (
    <select className={_status} value={_status} onChange={handleChange}>
      {Object.values(CustomerStatus).map((key) => (
        <option className={CustomerStatus[key]} aria-selected="true" key={CustomerStatus[key]} value={CustomerStatus[key]} >
          {CustomerStatus[key]}
        </option>
      ))}
    </select>
  );
};

export default CustStatusSelect;
