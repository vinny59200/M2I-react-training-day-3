import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OrderModel from "../models/OrderModel";
import { useState, useEffect } from "react";
import OrderStatus from "../enums/OrderStatus";

function OrderForm(props: any) {
  //{id:1,dayCount:1, tva:20, status:'CANCELED', type:'Training', customer:'M2I', fee:1200, comment:'shukran'},

  const [d, setD] = useState(0);
  const [t, setT] = useState(0);
  const [s, setS] = useState("");
  const [ty, setTy] = useState("");
  const [c, setC] = useState("");
  const [f, setF] = useState(0);
  const [n, setN] = useState("");

  const insertOrder = (event:any) => {
    
    event.preventDefault();
    const random_number = Math.floor(Math.random() * 1000000) + 1;

    let _order = new OrderModel().initFullOrder(
      random_number,
      d,
      t,
      s,
      ty,
      c,
      f,
      n
    );
    console.log(_order);
    props.insertVV(_order);
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let status = event.target.value;
    setS(status);
  };

  useEffect(() => {
    console.log('8798897')
    console.log(props.fillThisRecord)
    if (props.fillThisRecord) {
      let _o = props.fillThisRecord;
      setD(_o.dayCount);
      setT(_o.tva);
      setS(_o.status);
      setTy(_o.type);
      setC(_o.customer);
      setF(_o.fee);
      setN(_o.comment);
    }
  }, [props]);
  return (
    <Form onSubmit={insertOrder}>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicCustomer">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicDays">
            <Form.Label>Day count</Form.Label>
            <Form.Control
              type="number"
              placeholder="Days count"
              value={d}
              onChange={(e) => setD(parseInt(e.target.value))}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicFee">
            <Form.Label>Fee</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fee"
              value={f}
              onChange={(e) => setF(parseInt(e.target.value))}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicTva">
            <Form.Label>TVA</Form.Label>
            <Form.Control
              type="number"
              placeholder="TVA"
              value={t}
              onChange={(e) => setT(parseInt(e.target.value))}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type"
              value={ty}
              onChange={(e) => setTy(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={s}
              onChange={handleChange}
            >
              {Object.values(OrderStatus).map((key) => (
                <option
                  className={OrderStatus[key]}
                  aria-selected="true"
                  key={OrderStatus[key]}
                  value={OrderStatus[key]}
                >
                  {OrderStatus[key]}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        <div className="col">
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default OrderForm;
