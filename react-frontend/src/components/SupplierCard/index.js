

const SupplierCard = ({name, desc, website}) => {
    return ( <>
         <div class="suppliers-info">
            <h3>{name}</h3>
            <p>{desc}</p>
            <p><span class="supplier-website"><a href={website} target="_blank" rel="noreferrer">Learn more</a></span></p>
        </div>
        </> );
}
 
export default SupplierCard;
