
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Component/Shop/Shop';
import Question from './Component/Question/Question';
import Header from './Component/Header/Header';

function App() {
  return (
    <div >
     <Header></Header>
     <div className='container-fluid'>
       <Shop></Shop>
       <Question></Question>
     </div>
    </div>
  );
}

export default App;
