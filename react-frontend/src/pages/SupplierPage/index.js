import './index.css'
import { SupplierCard } from '../../components';
const SupplierPage = () => {
    return ( <>
    <div class="suppliers">
        <div class="suppliers-header">
            <h2>Here is a list of our local sustainable suppliers:</h2>
            <p>Please <a href="/contact">get in touch</a> if you are a supplier who wants to connect with sustainable restaurants.</p>
        </div>
        <SupplierCard name={"Nettlebred Creamery"} desc="Nettlebed Creamery makes three multi-award winning organi cheeses as well as organic milk, kefir, cream and ice cream" website="https://www.nettlebedcreamery.com/"/>
        <SupplierCard name={"Organic North"} desc="We're a members run co-operative, the largest and longest-established wholesalers of certified organic produce in the north and from our base on New Smithfield’s Market in Manchester, we’re on a mission to help mend our broken, wasteful and polluting food system<" website="https://www.organicnorth.co.uk/"/>
        <SupplierCard name={"The Cheese Press"} desc="The Cheese Press is a family run business based in the heart of the Chilterns. They make a range of award winning cheeses from their own milk and from milk supplied by local farmers." website="https://www.thecheesepress.co.uk/"/>
        <SupplierCard name={"Caterfood"} desc="Caterfood is proud support local farmers, suppliers and manufacturers by stock" website="https://www.caterfood.co.uk/"/>
        <SupplierCard name={"Harveys Pure Meat"} desc="Purveyors of guaranteed, high welfare produced free range, drug free local meats." website="https://www.puremeat.co.uk/"/>
        <SupplierCard name={"The Organic Butcher"} desc="The Organic Butcher is a family run business based in the heart of the Chilterns. They make a range of award winning cheeses from their own milk and from milk supplied by local farmers." website="https://www.theorganicbutcher.co.uk/"/>
    </div>
    </> );
}
 
export default SupplierPage;
