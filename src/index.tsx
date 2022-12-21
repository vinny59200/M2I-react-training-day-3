import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderInsertion from "./components/OrderInsertion";
import MyCustomers from "./components/MyCustomers";
import CustomerInsertion from "./components/CustomerInsertion";
import ErrorBoundary from './components/ErrorBoundary'
import {Provider} from 'react-redux'
import {store} from './redux/store'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      <MyHeader title={"Vincent VAUBAN"} punchline={"VV TGV"} />
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/insert/:id" element={<OrderInsertion />} />
          <Route path="/insert" element={<OrderInsertion />} />
          <Route path="/customers/:id" element={<CustomerInsertion />} />
          <Route path="/customers" element={<MyCustomers />} />
        </Routes>
      </Router>
      <MyFooter />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
