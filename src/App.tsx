import "./App.scss";
import { useState, useEffect } from "react";
import MyOrders from "./components/MyOrders";
import OrderModel from "./models/OrderModel";
import axios from "axios";
import OrderForm from "./components/OrderForm";
import React from "react";
import MySlot from "./components/MySlot";
import {useSelector, useDispatch} from 'react-redux'
import { increment,selectCount } from "./redux/counterSlice";
function App() {

const count = useSelector(selectCount);

  const logVV3 = (str: OrderModel) => {
    // console.log("VV3" + str);
    console.log(str.id);
    axios.get("http://localhost:3004/orders/" + str.id).then((r) => {
      let order = r.data;
      axios
        .put("http://localhost:3004/orders/" + str.id, {
          ...order,
          status: str.status,
        })
        .then(() => setLoader(true));
    });
  };

  const processDel3 = (str: string) => {
    console.log("deleting3:" + str);
    axios.delete("http://localhost:3004/orders/" + str);
    load();
    setLoader(true);
  };
  const [orders, setOrders] = useState([]);

  const [isLoading, setLoader] = useState(true);
  // let orders:OrderModel[]=[
  //   new OrderModel(1,5, 20, 'CONFIRMED','Training', 'M2I',1200, 'Android'),
  //   new OrderModel(2,4, 20, 'CONFIRMED','Training', 'Orsys',1500, 'Angular'),
  //   new OrderModel(3,3, 20, 'OPTION','Training', 'M2I',1200, 'React'),
  //   new OrderModel(4,5, 20, 'CANCELED','Training', 'VMWare',1200, 'Spring')
  // ]

  //Making the API call and once resolved updating the state
  useEffect(() => {
    if (isLoading) {
      load();
    }
  }, [isLoading]);

  const load = () => {
    axios.get("http://localhost:3004/orders").then((res) => {
      setOrders(res.data);
      setLoader(false);
    });
  };

  const insert = (_ord: OrderModel) => {
    setLoader(true);
    axios.post("http://localhost:3004/orders", _ord).then((res) => {
      console.log(res);
      setLoader(false);
      load();
    });
  };

  return (
    <div className="App">
      <MyOrders orders={orders} onVVSelect3={logVV3} delete3={processDel3} />
      <br />
      <br />
      <ErrorBoundary2>
        <ButtonComponent />
      </ErrorBoundary2>
      <MySlot><span>Just a tiny Slot component test</span>
      <h3>still in my slot</h3>
      <h4>count from redux: {count}</h4></MySlot>

      <OrderForm insertVV={insert} />
    </div>
  );
}

export default App;

const ErrorComponent = () => {
  return <h1 style={{color:'red'}}>Something went wrong</h1>;
};

class ErrorBoundary2 extends React.Component<any, any> {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error: any) => {
    return { hasError: true };
  };

  componentDidCatch = (error: any, info: any) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    console.log(error, info);
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

const ButtonComponent = () => {
  const [v,setV]=useState(0);
  const increment = () => {
    setV(v+1)
  };
  if(v===1){    
    throw Error("error!");
  }
  return (
    <>
      <button onClick={increment} >throw an Error</button>
    </>
  );
};
// const ButtonComponent = () => {
//   throw Error("error!");
//   return <></>;
// };

