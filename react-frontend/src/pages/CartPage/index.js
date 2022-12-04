import { SearchBar, BackButton, CartCard } from "../../components";
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import "./index.css";
import { useNavigate } from "react-router-dom";
const CartPage = () => {

  const [cartTotal, setCartTotal] = useState(0);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

  const { authTokens } = useContext(AuthContext);
  
  const total = state.reduce((total, item) => {
    const totalPrice = total + item.product.total * item.quantity;
    return parseFloat(totalPrice.toFixed(2));
  }, 0);

  const totalEmissions = state.reduce((total, item) => {
    const totalEmissions = total + item.product.offset * item.quantity;
    return parseFloat(totalEmissions.toFixed(2));
  }, 0);

  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate(link);
  };

   const handleCheckout = async (e) => {
    // post cartitem with id and quantity to backend:
    const cartItems = state.map((item) => {
      return { id: item.product.id, quantity: item.quantity };
    });

    const response = await fetch("http://127.0.0.1:8000/api/orders/create_order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authTokens.access})}`
      },
      body: JSON.stringify(cartItems),
    });

    // get back order id
    const data = await response.json();
    console.log(data.id);
    // redirect to checkout page with order id
    handleLink(`/orderstatus/${data.id}`);
   }


  
  return (
    <>
      <SearchBar Heading="Your Shopping Cart" />
      <BackButton />
      <div class="cart">

        {state.map((cartItem) => (
          <CartCard id={ cartItem.id } cartItem={cartItem.product} itemQuantity={cartItem.quantity} cartTotal={cartTotal} setCartTotal={setCartTotal} dispatch={dispatch}/>
        ))}
      </div>
      {state.length > 0 && <div class="cart-page-footer">
        <div class="cart-page-footer-total">
           <div className="total"><p>Total: £{total}</p></div>
            <div className="total"><p>Total Emissions Offset: {totalEmissions}kg</p></div>
        </div>
        <div class="cart-page-footer-checkout">
        <Button variant="contained" onClick={() => handleCheckout()} sx={{backgroundColor:'#354F52', my:'5px'}}>Checkout</Button>
        </div>
      </div>}
    </>
  );
};

export default CartPage;
