import { Routes, Route } from "react-router-dom";
import { default as Layout } from "./layouts";
import {
  HomePage,
  LoginPage,
  SignUpPage,
  AllProductPage,
  AccountPage,
  OrderStatusPage,
  CartPage,
  SingleProductPage,
  NotFoundPage,
  SupplierPage,
  RestaurantsPage,
  ContactPage,
} from "./pages";
import { Certificate } from "./components";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <AllProductPage />
              </PrivateRoute>
            }
          />
          <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
          <Route path="/orderstatus/:orderId" element={<PrivateRoute><OrderStatusPage /></PrivateRoute>} />
          <Route path="/suppliers" element={<SupplierPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificate" element={<PrivateRoute><Certificate /></PrivateRoute>} />

          <Route path="/products">
            <Route
              path=":productId/:productName"
              element={<SingleProductPage />}
            />
          </Route>

          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
