import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BackButton, SearchBar, Supplier } from "../../components";
import "./index.css";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { CircularProgress } from "@mui/material";

const SingleProductPage = ({ image, productDesc }) => {
  const { productId, productName } = useParams();
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchApi() {
      const request = `https://lloyds-hackathon-server.vercel.app/api/v1/categories/${productName.toLowerCase()}`;
      try {
        const result = await axios.get(request, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setCategory(result.data);
        setLoading(true);
      } catch (err) {
        console.error(err);
      }
    }
    searchApi();
  }, [productName]);

  const checkProductsExist = (category) => {
    if (category.products.length > 0) {
        
      return(category.products.map((product, index) => {
        return <Supplier key={product.id} product={product} lowestOffset={category.minimum_offset_price} />;
      }))
    } else {
        document.querySelector(".supplier-list-heading").style.display = "none";
      return <div className="no-products">No products found, sorry! Please check back again later for new {category.name} products.</div>;
    }
  };

  return (
    <span className="single-product-page">
      <SearchBar Heading="Products" />
      <BackButton />
      <div className="single-product-section">
        {loading ? (
          <div className="single-product-img">
            <img
              clas="image_fluid"
              src={category.image_url}
              alt={`${productName}`}
              style={{ maxHeight: "200px", borderRadius: 5 }}
            />
          </div>
        ) : (
          <BrokenImageIcon sx={{ fontSize: "200px" }} />
        )}

        <div className="single-product-info">
          <div className="single-product-name">{productName}</div>
          <div className="singel-product-text">
            {category.description == null ? (
              <div className="no-desc">
                {productName} has yet to be given a description!
              </div>
            ) : (
              <div className="desc">{category.description}</div>
            )}
          </div>
        </div>
      </div>
      <div className="supplier-list">
        <div
          className="supplier-list-heading supplier" id="supplierHeading"
          style={{ fontWeight: 600}}
        >
          <div>Supplier</div>
          <div>RRP</div>
          <div>Carbon Offset</div>
          <div>Total Price</div>
          <div>Amount</div>
        </div>
        {loading ? checkProductsExist(category) : <CircularProgress />}
      </div>
    </span>
  );
};

export default SingleProductPage;
