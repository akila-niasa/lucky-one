
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div >
     <h1 className='bg-dark text-light p-5'>JEWELLERY STORE</h1>
     <div className='container-fluid'>
       <Shop></Shop>
     </div>
    </div>
  );
}

export default App;
