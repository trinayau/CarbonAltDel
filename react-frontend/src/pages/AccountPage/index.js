import chart from './images/Chart.svg'
import './index.css';
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import AuthContext from "../../context/AuthContext";

const AccountPage = () => {

    const navigate = useNavigate();
    let {user} = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
    let {authTokens} = useContext(AuthContext);

    useEffect(() => {
        getOrders()}, []);

    let getOrders = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/orders/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            }
        })
        let data = await response.json();
        setOrders(data);

    }

    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

      useEffect(()=>{
        // check if url params has redirect=true
       if(window.location.href==='http://localhost:3000/account?redirect=true'){
           setState({open: true, vertical: 'top', horizontal: 'center'})
       } else {
              setState({open: false, vertical: 'top', horizontal: 'center'})
       }
    },[])

    const handleClick = (link) => {
        navigate(link);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setState({  vertical: 'top',
        horizontal: 'center', open: false });
      };


    return (
        <div class="account">
            <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Welcome to CarbonAltDel, {user.username}!
        </Alert>
      </Snackbar>

    <div class="account-header">
        <div class="hello-user">Hello, Kei</div>
        <div class="carbon-rating">Your carbon ranking: <span>#3 this week</span></div>
    </div>

    <div class="account-info">
        <div class="profile">
            <div class="profile-headers">
                <div class="profile-header">Customer Name</div>
                <div class="company-name">Company Name</div>
                <div class="company-email">Email</div>
                {/* <div class="affiliates">Affiliate</div> */}
            </div>
            <div class="profile-info">
                <div class="profile-name">Kei Chan</div>
                <div class="company-name-text">Kai Mayfair</div>
                <div class="company-email-text">kei@kaimayfair.com</div>
                {/* <div class="affiliate-text">affiliate link goes here</div> */}
            </div>
        </div>
        <div class="history">
            <div class="history-header">Order History</div>
            <div class="orders-list">
                <div class="orders">
                    {orders.map((order) => (
                        <div class="order">
                            <div class="order-date
                            ">{order.date}</div>
                            <div class="order-items">
                                {order.body}
                            </div>
                        </div>
                    ))}

                            
                </div>
            </div>
        </div>
    </div>
    <div class="carbon-history">
        <div class="carbon-history-info">
            <div class="carbon-history-header">Your Carbon History</div>
            <div class="carbon-history-chart"><img src={chart} alt="carbon chart" class="img-fluid"/></div>    
            <div class="certificate-text">
                <p>You have offset a total of : 1 ton of carbon </p>
                <p>View your certificate <span style={{fontWeight: 600, cursor: 'pointer'}}onClick={()=>{handleClick('/certificate')}}>HERE</span> to display at your storefront</p>  
            </div>
        </div>
        {/* <div class="last-ordered-products">
            <div class="last-ordered-products-header">Last Ordered Products</div>
            <div class="last-ordered-products-list">
                <div class="last-ordered-product-header row text-center">
                    <div class="last-ordered-product-name col-6">Product</div>
                    <div class="last-ordered-product-quantity col-6">Quantity</div>

                </div>
                <div class="last-ordered-product row text-center">
                    <div class="last-ordered-product-name col-6">Butter</div>
                    <div class="last-ordered-product-quantity col-6">2</div>
                </div>
                <div class="last-ordered-product row text-center">
                    <div class="last-ordered-product-name col-6">Raspberries</div>
                    <div class="last-ordered-product-quantity col-6">1</div>
                </div>
            </div>
        </div> */}

    </div>

    <div class="profile-offset">
        <div class="profile-offset-info">
            <div class="profile-offset-header">Offset Additional carbon</div>
            <div class="profile-offset-amount">
                <label for="donate">Enter offset amount:</label><br/>
                <input type="text" id="donate" name="donate"/> 
                <input type="submit" value="PAY NOW"/>
            </div>
            <div class="offset-info">
                <p>Every £10  can offset an average of 1 tonne  of CO2</p>
                <p>Your funding supports our Global Portfolio VCS certified carbon reduction programmes across the world</p>
            </div>
        </div>
    </div>

   
    </div>

  );
}
 
export default AccountPage;
