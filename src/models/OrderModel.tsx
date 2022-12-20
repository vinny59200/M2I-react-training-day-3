export default class OrderModel {
  id: number;
  dayCount: number;
  tva: number;
  status: string;
  type: string;
  customer: string;
  fee: number;
  comment: string;
  //{id:1,dayCount:1, tva:20, status:'CANCELED', type:'Training', customer:'M2I', fee:1200, comment:'shukran'},

  constructor(
    _id: number,
    _dayCount: number,
    _tva: number,
    _status: string,
    _type: string,
    _customer: string,
    _fee: number,
    _comment: string
  ) {
    Object.assign(this, {
      id: _id,
      dayCount: _dayCount,
      tva: _tva,
      status: _status,
      type: _type,
      customer: _customer,
      fee: _fee,
      comment: _comment,
    });
  }
}
