import React from "react";
import MyOrder from "./MyOrder";
import Table from "react-bootstrap/Table";
const MyOrders = (props: any) => {
  return (
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
            <td>#</td>
          <td>Cust</td>
          <td>Name</td>
          <td>Type</td>
          <td>Fee</td>
          <td>Days</td>
          <td>TTC</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((ord: any) => (
          <MyOrder
            cust={ord.customer}
            comment={ord.comment}
            type={ord.type}
            fee={ord.fee}
            id={ord.id}
            key={ord.id}
            dayCount={ord.dayCount}
            status={ord.status}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MyOrders;
