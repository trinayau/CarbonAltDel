
import {Routes, Route} from 'react-router-dom';
import {default as Layout} from './layouts';
import { HomePage, LoginPage, SignUpPage, AllProductPage, AccountPage, OrderStatusPage, CartPage, SingleProductPage, NotFoundPage, SupplierPage, RestaurantsPage, ContactPage } from './pages';
import {Certificate} from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path ="/" element={<HomePage />} />
          <Route path ="/login" element={<LoginPage />} />
          <Route path ="/signup" element={<SignUpPage />} />
          <Route path ="/products" element={<AllProductPage />} />
          <Route path ="/account" element={<AccountPage />} />
          <Route path ="/orderstatus" element={<OrderStatusPage />} />
          <Route path = "/suppliers" element={<SupplierPage />} />
          <Route path = "/restaurants" element={<RestaurantsPage />} />
          <Route path = "/contact" element={<ContactPage />} />
          <Route path ="/certificate" element={<Certificate />} />
          
          <Route path ="/products">
            <Route path =":productId/:productName" element={<SingleProductPage />} />
          </Route>

          <Route path ="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
