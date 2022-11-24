import "./index.css";
import Button from "@mui/material/Button";

const ProductCard = ({ image, name, price, offset, id }) => {
  return (
    <>
      <div className="product-box">
        <div className="product-img">
          <img src={image} alt={name}/>
        </div>
        <div className="product-info">
          <h4>{name}</h4>
          Price from: £{price}
          <br />
          Offset carbon from: £{offset}
        </div>
        <div className="product-links">
          <a className="compare-link"href={`/products/${id}/${name}`}>Compare</a>
          {/* <div className="add-button" onClick={(e) => e.preventDefault}>
            ADD
          </div> */}
          <Button
            variant="contained"
            href="/cart"
            sx={{
              my: "5px",
              backgroundColor: "#84a98c",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
                
              },
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
