import { BackButton, SearchBar } from "../../components";
import { Button } from "@mui/material";
import './index.css';

const OrderStatusPage = () => {
  return (
    <div className="order-status-wrapper">
    
        <div className="order-status-body">
            <h1>Success!</h1>
            <p>Your order has been placed.</p>
            <p>Order ID: 123456789</p>
            <p>Order Status: Processing</p>

            <p>Thank you for shopping with us at CarbonAltDel, Kei!</p>
            <Button
            variant="contained"
            href="/products"
            sx={{
              backgroundColor: "#354F52",
              my: "5px",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
              },
            }}
          >Back to Products</Button>

        </div>
    <BackButton />
    </div>
  );
};

export default OrderStatusPage;
