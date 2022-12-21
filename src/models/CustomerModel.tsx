export default class CustomerModel {
  /*
"name": "Christophe",
      "tva": 20,
      "turnover": 12000,
      "status": "ACTIVE",
      "comment": "Commentaire pour customer Christophe",
      "id": 1
      */
  id: number;
  name: string;
  tva: number;
  turnover: number;
  status: string;
  comment: string;

  initStatus(_id: number, _status: string) {
    console.log(`inititaing customer model with ${_id} and ${_status}`);
    this.id = _id;
    this.status = _status;
    return this;
  }

  initFullCustomer(
    _id: number,
    _name: string,
    _tva: number,
    _turnover: number,
    _status: string,
    _comment: string
  ) {
    this.id = _id;
    this.name = _name;
    this.tva = _tva;
    this.turnover = _turnover;
    this.status = _status;
    this.comment = _comment;
    return this;
  }
}
