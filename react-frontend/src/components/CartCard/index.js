import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const CartCard = ({ cartItem, itemQuantity, setCartTotal, cartTotal, dispatch }) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const [totalPrice, setTotalPrice] = useState(
    (cartItem.price / cartItem.quantity) * quantity
  );
  const [totalOffset, setTotalOffset] = useState(cartItem.offset * quantity);
  const [totalCost, setTotalCost] = useState(cartItem.total);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setQuantity(itemQuantity);
    setTotalPrice(cartItem.total * itemQuantity);
    setTotalOffset(cartItem.offset * itemQuantity);
    setTotalCost(totalPrice + totalOffset);
  }, [itemQuantity]);

  useEffect(() => {
    if (quantity < 0) {
      // delete item from cart
    }
  }, [quantity]);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    setQuantity(newQuantity);
    setTotalPrice(cartItem.price * newQuantity);
    setTotalOffset(cartItem.offset * newQuantity);
    setTotalCost(totalPrice + totalOffset);
    
  };

  const minus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      // handleQuantityChange(-1);
      dispatch({ type: "DECREASE", payload: { id: cartItem.id } });
    }
  };

  const plus = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      // handleQuantityChange(1);
      dispatch({ type: "INCREASE", payload: { id: cartItem.id } });
    }
  };

  // turn number to 2 dp
  const formatNumber = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };

  // const handleEdit = () => {
  //     setIsEditing(!isEditing);
  // }

  return (
    <div class="cart-item">
      <div>
        <img
          class="cart-img"
          src={`${cartItem.image}`}
          alt={`${cartItem.name}`}
        />
      </div>
      <div class="cart-info">
        <div class="cart-item-name">
            {cartItem.name}</div>
            <div cart-item-supplier>Supplier: {cartItem.supplier}</div>

        <div className="cart-item-info">
          <div class="cart-item-details">
            Carbon offset: £{formatNumber(totalOffset)}
          </div>
          <div class="cart-item-details">
            Total Price: £{formatNumber(totalPrice)}
          </div>
          <div class="cart-item-details">
            <span className="quantity-changers" onClick={minus} style={{cursor: 'pointer'}}>
              -
            </span>{" "}
            <span class="quantity-box">{quantity}</span>{" "}
            <span className="quantity-changers" onClick={plus} style={{cursor: 'pointer'}}>
              +
            </span>
          </div>
          <div class="cart-item-details">
            <DeleteIcon sx={{
              ":hover": {
                color: "#354F52",
                cursor: "pointer",
              },
            }} onClick={() => dispatch({ type: "REMOVE", payload: { id: cartItem.id } })}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
