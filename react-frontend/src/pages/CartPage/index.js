import { SearchBar, BackButton, CartCard } from "../../components";
import Button from '@mui/material/Button';
import { useContext, useState } from "react";
import { CartContext } from "../../context/Context";
import "./index.css";
import { useNavigate } from "react-router-dom";
const CartPage = () => {

  const [cartTotal, setCartTotal] = useState(0);

  const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;
  
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
  
  return (
    <>
      <SearchBar Heading="Your Shopping Cart" />
      <BackButton />
      <div class="cart">

        {state.map((cartItem) => (
          <CartCard cartItem={cartItem.product} itemQuantity={cartItem.quantity} cartTotal={cartTotal} setCartTotal={setCartTotal} dispatch={dispatch}/>
        ))}
      </div>
      {state.length > 0 && <div class="cart-page-footer">
        <div class="cart-page-footer-total">
           <div className="total"><p>Total: £{total}</p></div>
            <div className="total"><p>Total Emissions Offset: {totalEmissions}kg</p></div>
        </div>
        <div class="cart-page-footer-checkout">
        <Button variant="contained" onClick={() => handleLink('/orderstatus')} sx={{backgroundColor:'#354F52', my:'5px'}}>Checkout</Button>
        </div>
      </div>}
    </>
  );
};

export default CartPage;
