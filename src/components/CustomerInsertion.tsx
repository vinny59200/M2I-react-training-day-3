import "../App.scss";

import CustomerForm from "./CustomerForm";
import CustomerModel from "../models/CustomerModel";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function CustomerInsertion() {
  //shitty 👇
  const navigate = useNavigate();

  const [data, setData] = useState({});
  let { id } = useParams();

  const insert = (_cust: CustomerModel) => {
    console.log("7856556");
    if (id) {
      axios.get(`http://localhost:3004/customers/${id}`).then((res) => {
        console.log("in insert after get " + res.data.id);
        if (res.data.id) {
          console.log("already existing");
          let cust = res.data;
          axios.put("http://localhost:3004/customers/" + cust.id, {
            ...cust,
            ..._cust,
          });

          navigate("/customers");
        } else {
          console.log("new one");
          axios.post("http://localhost:3004/customers", _cust).then((res) => {
            console.log(res);
            navigate("/customers");
            //TODO navugate does not work
          });
        }
      });
    } else {
      console.log("new one");
      axios.post("http://localhost:3004/customers", _cust).then((res) => {
        console.log(res);
        navigate("/customers");
        //TODO navugate does not work
      });
    }
  };

  const load = (id: string) => {
    axios.get(`http://localhost:3004/customers/${id}`).then((res) => {
      // console.log("fetch");
      // console.log(res.data);
      // console.log("end fetch");
      setData(res.data);
    });
  };

  useEffect(() => {
    // console.log("vv routing:" + id);
    if (id) {
      load(id);
    }
  }, []);

  return (
    <div className="App">
      <CustomerForm insertVV={insert} fillThisRecord={data} />
    </div>
  );
}

export default CustomerInsertion;
