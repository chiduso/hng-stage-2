import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />        
        <Route path="/detail/:id" element={<DetailPage />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
