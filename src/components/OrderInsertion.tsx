import "../App.scss";

import OrderForm from "./OrderForm";
import OrderModel from "../models/OrderModel";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function OrderInsertion() {
  //shitty 👇
  const navigate = useNavigate();

  const [data, setData] = useState({});
  let { id } = useParams();

  const insert = (_ord: OrderModel) => {
    console.log("3655636");
    if (id) {
      axios.get(`http://localhost:3004/orders/${id}`).then((res) => {
        console.log("in insert after get " + res.data.id);
        if (res.data.id) {
          console.log("already existing");
          let order = res.data;
          axios.put("http://localhost:3004/orders/" + order.id, {
            ...order,
            ..._ord,
          });

          navigate("/");
        } else {
          console.log("new one");
          axios.post("http://localhost:3004/orders", _ord).then((res) => {
            console.log(res);
            navigate("/");
            //TODO navugate does not work
          });
        }
      });
    } else {
      console.log("new one");
      axios.post("http://localhost:3004/orders", _ord).then((res) => {
        console.log(res);
        navigate("/");
        //TODO navugate does not work
      });
    }
  };

  const load = (id: string) => {
    axios.get(`http://localhost:3004/orders/${id}`).then((res) => {
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
      <OrderForm insertVV={insert} fillThisRecord={data} />
    </div>
  );
}

export default OrderInsertion;
