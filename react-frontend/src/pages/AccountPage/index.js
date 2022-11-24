import chart from './images/Chart.svg'
import './index.css';
import { useNavigate } from 'react-router-dom';
import {Button} from '@mui/material';
const AccountPage = () => {

    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    }


    return (
        <div class="account">
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
                    <div class="order-id">Order #102</div>
                    <div class="order-id">Order #101</div>
                    <div class="order-id">Order #100</div>
                </div>
                <div class="order-date">
                    <div class="order-date">12/11/2022</div>
                    <div class="order-date">12/10/2022</div>
                    <div class="order-date">12/09/2022</div>
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
