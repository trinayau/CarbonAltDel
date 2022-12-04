import { BackButton, SearchBar } from "../../components";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';

const OrderStatusPage = () => {

  const { orderId } = useParams();
  const [orderTotal, setOrderTotal] = useState(null);
  const [orderEmissions, setOrderEmissions] = useState(null);
  const [customerName, setCustomerName] = useState(null);


  useEffect(() => {
    // call api to get order status:
    const searchApi = async () => {
      const request = `http://127.0.0.1:8000/api/orders/get_order/${orderId}/`;
      const response = await fetch(request);
      const data = await response.json();
      setOrderTotal(data.total_price);
      setOrderEmissions(data.total_emissions);
      setCustomerName(data.customer.first_name[0].toUpperCase() + data.customer.first_name.slice(1));
      console.log(data);
    }
    searchApi();
  }, []);



  return (
    <div className="order-status-wrapper">
    
        <div className="order-status-body">
            <h1>Success!</h1>
            <p>Your order has been placed.</p>
            <p>Order ID: {orderId}</p>
            <p>Order Status: Success</p>
            {orderTotal && <p>Order Total: £{orderTotal}</p>}
           <p>Carbon Emissions Offset Today: {orderEmissions}kg</p>

            <p>Thank you for shopping with us today at CarbonAltDel, {customerName}!</p>
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
