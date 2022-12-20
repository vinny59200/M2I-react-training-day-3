import './App.scss';
import MyOrders from './components/MyOrders'
import OrderModel from './models/OrderModel'
function App() {

let orders:OrderModel[]=[
  new OrderModel(1,5, 20, 'CONFIRMED','Training', 'M2I',1200, 'Android'),
  new OrderModel(2,4, 20, 'CONFIRMED','Training', 'Orsys',1500, 'Angular'),
  new OrderModel(3,3, 20, 'OPTION','Training', 'M2I',1200, 'React'),
  new OrderModel(4,5, 20, 'CANCELED','Training', 'VMWare',1200, 'Spring')
]

  return (
    <div className="App">
     <MyOrders orders={orders}/>
    </div>
  );
}

export default App;
