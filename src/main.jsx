import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductPage from './pages/ProductPage/ProductPage.component.jsx'
import Cart from './pages/Cart/Cart.component.jsx'



createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Routes>
        <Route path='/' index={true} element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  
  ,
)
