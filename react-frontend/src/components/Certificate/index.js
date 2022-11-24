import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import './index.css'
import Button from '@mui/material/Button';

const Certificate = () => {
    const componentRef = useRef();
    // generate today's date
    const today = new Date();
    const date = today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear();
    
    return ( <>

    <div ref={componentRef} className="certificate" class="container" style={{border: '6px solid', padding: '2%', backgroundColor: '#f5f5f5'}}>
        <div className="certificate-header"><h1>Certification of Net Zero Supply Chain</h1></div>
        <div className="certificate-info">
            <div className="certificate-info-header"><h3>This restaurant has committed to sourcing net zero ingredients.</h3></div>
            <div className="certificate-info-text">
                <h2>This certificate is issued to:</h2>
                <h3>Kai Mayfair</h3>
                <p>65 S Audley St, London W1K 2QU</p>
                <p>www.kaimayfair.co.uk</p>
            </div>
            <div className="certificate-info-text">
                <h2>For the offset of:</h2>
                <h3>1 tonne of CO2</h3>
                <p>on {date}</p>
            </div>
            <div className="certificate-info-cad">
                <h2>Offset by:</h2>
                <h3>CarbonAltDel</h3>
                <p>www.carbonaltdel.com
                </p>
            </div>
        
        </div>
    </div>
    <div className="print-button"style={{textAlign: 'center', marginBottom: '5px'}} >
        <ReactToPrint
        trigger={() => <Button variant="contained" sx={{
            backgroundColor: "#354F52",
            my: "5px",
            "&:hover": {
              backgroundColor: "#52796f",
              color: "#ffffff",
              textDecoration: "none",
              transition: "all 0.2s ease-in",
            },
          }}>Print this certificate!</Button>}
        content={() => componentRef.current}
        documentTitle="Certificate of Net Zero Supply Chain"
        pageStyle="@page {size: landscape;}"

        />
    </div>
    <div className=" cert-info-wrapper">
        <p>CarbonAltDel is a platform that helps restaurants offset their carbon emissions by purchasing carbon credits from verified projects. This certificate is issued to restaurants that have offset their supply chain's carbon emissions by purchasing carbon credits from CarbonAltDel. This certificate is valid for one year from the date of issue.</p>
        
    </div>
    </> );
}
 
export default Certificate;
