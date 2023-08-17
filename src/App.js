import logo from './logo.svg';
import './App.css';
import Navigation from './component/navigation/Navigation';
import Services from './component/services/Services';
import Happy from './component/happy/Happy';
import Dibba from './component/dibba/Dibba';
import Product from './component/product/Product';
import Login from './component/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (



   <div>

    <Navigation/>
    <Services/>
    <Happy/>
    <Dibba/>
    <Product/>
  <Login/>
    </div>
    
  );
}

export default App;
