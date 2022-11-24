import './index.css'
const ContactPage = () => {
    return ( 
    <div class="contact">
        <div class="contact-info">
            <div class="contact-header">Contact US</div>
            <p>Carbon Alt Delete is helping SMEs and suppliers come to gether to help lower our carbon emissions in order to reach net zero</p>
            <span>Phone:</span> 0738495736<br/>
                <span>Email:</span> contactus@carbonaltdel.com<br/>  
            <p>Or fill in the form opposite if you have any questions, and we will try and reply within 2 hours.</p>
            <p>For Supplier information, please go <a href="/suppliers">HERE</a></p>
        </div>
        <div class="contact-form">
            <input type="text" name="name" placeholder="Full Name"/>
            <input type="text" name="company" placeholder="Company Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <textarea rows="5" cols="33" placeholder="Message"></textarea>
            <input type="submit" value="SEND"/>
        </div>
    </div>
 );
}
 
export default ContactPage;
