import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import CustomerModel from "../models/CustomerModel";
import CustomerStatus from "../enums/CustomerStatus";

function CustomerForm(props: any) {
  /*
          <td>#</td>
          <td>Name</td>
          <td>Tva</td>
          <td>turnover</td>
          <td>Comment</td>
          <td>Status</td>
          <td>Actions</td>*/

  const [n, setN] = useState("");
  const [t, setT] = useState(0);
  const [tu, setTu] = useState(0);
  const [c, setC] = useState("");
  const [s, setS] = useState("");

  const insertCustomer = (event: any) => {
    event.preventDefault();
    
    const random_number = Math.floor(Math.random() * 1000000) + 1;
/*
    _id: number,
    _name: string,
    _tva: number,
    _turnover: number,
    _status: string,
    _comment: string*/
    let _cust = new CustomerModel().initFullCustomer(
      random_number,
      n,
      t,
      tu,
      s,
      c      
    );
    console.log(_cust);
    props.insertVV(_cust);
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let status = event.target.value;
    setS(status);
  };

  useEffect(() => {
    console.log("414774174");
    console.log(props.fillThisRecord);
    if (props.fillThisRecord) {
      let _c = props.fillThisRecord;
      setN(_c.name);
      setT(_c.tva);
      setTu(_c.turnover);
      setC(_c.comment);
      setS(_c.status);
    }
  }, [props]);
  return (
    <Form onSubmit={insertCustomer}>
      <div className="row">
        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicName">
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
          <Form.Group className="mb-3" controlId="formBasicTurnover">
            <Form.Label>Turnover</Form.Label>
            <Form.Control
              type="text"
              placeholder="Turnover"
              value={tu}
              onChange={(e) => setTu(parseInt(e.target.value))}
            />
          </Form.Group>
        </div>

        <div className="col">
          <Form.Group className="mb-3" controlId="formBasicComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment"
              value={c}
              onChange={(e) => setC(e.target.value)}
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
              {Object.values(CustomerStatus).map((key) => (
                <option
                  className={CustomerStatus[key]}
                  aria-selected="true"
                  key={CustomerStatus[key]}
                  value={CustomerStatus[key]}
                >
                  {CustomerStatus[key]}
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

export default CustomerForm;
