import MyVideo from './openingvid.mp4';
import './index.css';
import {Banner} from '../../components';
import Join from './images/join.svg';
import Compare from './images/compare.svg';
import Offset from './images/offset.svg';
import {Button} from '@mui/material';

const HomePage = () => {
    return (
      <div class="d-flex flex-column">
      <Banner MyVideo={MyVideo} buttonText={"Start Your Journey"}/>

    <div className="how-it-works">
        <h1>How It Works</h1>
    </div>
    <div className="main-points">
        <div className="statement">
            <div className="icon"><img src={Join} alt="Join icon"/></div>
            <div className="text">
                <h4>Simplifying Your Orders</h4>
                You don't need to call up your regular suppliers separately, just order the ingredients you need from the suppliers you want in one click.
            </div>
        </div>
        <div className="statement">
            <div className="icon"><img src={Compare} alt="Join icon"/></div>
            <div className="text">
                <h4>Offset with One Click</h4>
                No need to worry about your carbon footprint, we offset your order's emissions for you by purchasing carbon credits, making all your orders Net Zero.
            </div>
        </div>
        <div className="statement">
            <div className="icon"><img src={Offset} alt="Join icon"/></div>
            <div className="text">
                <h4>Track Your Emissions</h4>
                Track your supply chain's carbon emissions and how much you have offset to date from your profile page. We provide certificates for each milestone amount you have offset.
            </div>
        </div>
    </div>

    <div className="about">
        <div className="about-text">
        <h3>Welcome to CarbonAltDel</h3>
        <ol class="text-decoration-none">
            <li>After joining us you will be able to purchase your ingredients from your regular suppliers and offset your ingredient's carbon emissions with just one click.</li>
            <li>We calculate the carbon footprint of every ingredient from all of our suppliers and present it to you in a way that helps make the sustainable choice the easy choice. </li>
            <li>Our carbon credits are purchased from verified projects that are helping to reduce carbon emissions in the world. </li>
        </ol>
        </div>
        <div className="register">
        <Button
            variant="contained"
            href="/account"
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
          >
            Join Us Today
          </Button>
          </div>
    </div>
      </div>
    );
}
 
export default HomePage;
