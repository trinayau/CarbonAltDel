import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/Context';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';


const Supplier = ({product, lowestOffset}) => {
    const totalPrice = product.price + product.offset;
    const twoDecPlace = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }
     const [quantity, setQuantity] = useState(1);
     const Globalstate = useContext(CartContext);
  const state = Globalstate.info.state;
  const dispatch = Globalstate.info.dispatch;

    // cart function
    const addToCart = () => {
        // send quantity and id to cart through context
        // add supplier and quantity to a product object
        
        dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });
        // add toast
    }

    const handleLowestOffset = () => {
        if (product.offset == lowestOffset) {
            return <span className="offset">{twoDecPlace(product.offset)}<EnergySavingsLeafIcon sx={{fontSize: '20px', color:'#52796f'}}/></span>
        } else {
            return <span className="offset">{twoDecPlace(product.offset)}</span>
        }

    }

    return (<div className="supplier">
    <div className="supplier-name">{product.supplier}</div>
    <div className="product-price">£{twoDecPlace(product.price)}</div>
    <div className="offset-price">£{handleLowestOffset()}</div>
    {/* <div className="offset-price">£{twoDecPlace(supplier.offset)}</div> */}
    <div className="total-price">£{twoDecPlace(product.total)}</div>
    <div className="add-cart">
        {/* input for number of items */}
        <input type="number" min="1" max="90" value={quantity} onChange={(e) => setQuantity(e.target.value)}className="quantity" style={{textAlign: 'center'}}/>
   </div>
    <div className="add-cart">
    <ShoppingCartIcon onClick={addToCart} sx={{
        ":hover": {
            color: "#52796f",
            cursor: "pointer"
        }
    }}/>
    </div>
</div> );
}
 
export default Supplier;
