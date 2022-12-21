import React from "react";
import "../App.scss";
import MyCustomer from "./MyCustomer";
import Table from "react-bootstrap/Table";
import CustomerModel from "../models/CustomerModel";
import axios from "axios";
import { useState, useEffect } from "react";
/*
"name": "Christophe",
      "tva": 20,
      "turnover": 12000,
      "status": "ACTIVE",
      "comment": "Commentaire pour customer Christophe",
      "id": 1
      */
const MyCustomers = (props: any) => {
  const [isLoading, setLoader] = useState(true);
  const [customers, setCustomers] = useState([]);

  const logVV2 = (str: CustomerModel) => {
    console.log(str.id);
    axios.get("http://localhost:3004/customers/" + str.id).then((r) => {
      let cust = r.data;
      axios
        .put("http://localhost:3004/customers/" + str.id, {
          ...cust,
          status: str.status,
        })
        .then(() => setLoader(true));
    });
  };

  const load = () => {
    axios.get("http://localhost:3004/customers").then((res) => {
      setCustomers(res.data);
      setLoader(false);
    });
  };

  const processDel2 = (str: string) => {
    console.log("deleting3:" + str);
    axios.delete("http://localhost:3004/customers/" + str);
    load();
    setLoader(true);
    throw new Error('I crashed!');
  };

  const insert = (_cust: CustomerModel) => {
    setLoader(true);
    axios.post("http://localhost:3004/customers", _cust).then((res) => {
      console.log(res);
      setLoader(false);
      load();
    });
  };

  useEffect(() => {
    if (isLoading) {
      load();
    }
  }, [isLoading]);

  return (
    <div className="App">
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Tva</td>
          <td>turnover</td>
          <td>Comment</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {customers.map((cust: any) => (
          <MyCustomer
            name={cust.name}
            tva={cust.tva}
            comment={cust.comment}
            turnover={cust.turnover}
            id={cust.id}
            key={cust.id}
            status={cust.status}
            onVVSelect2={logVV2}
            delete={processDel2}
          />
        ))}
      </tbody>
    </Table></div>
  );
};

export default MyCustomers;
