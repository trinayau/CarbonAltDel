import { useEffect, useState} from 'react';

import "./index.css";
import { SearchBar, ProductCardMUI, CategoryCardMUI } from "../../components";
import { CircularProgress } from '@mui/material';
import axios from 'axios';

import { CartContext } from '../../context/Context';
import { useContext } from 'react';



const AllProductPage = () => {

  const [latestProducts, setLatestProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.info.dispatch;

  useEffect(() =>{ 
    async function searchApi() {
      const requestLatest = "https://lloyds-hackathon-server.vercel.app/api/v1/latest-products/";
      const requestCategories = "https://lloyds-hackathon-server.vercel.app/api/v1/categories/";

        try{
            const resultLatest = await axios.get(requestLatest,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
         
        });
            const resultCategories = await axios.get(requestCategories,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        });

            setLatestProducts(resultLatest.data);
            setCategories(resultCategories.data); 
            setLoading(true);
        }catch(err){
            console.error(err)
        }
    }
    searchApi();
    }, [])

  
    

  return (
    <div className="productsPage">

      {/* latest products */}
      <section className="search-bar">
          <p className="product-heading">Latest Products</p>
      </section>

      <section className="latest-products">
        {loading ? latestProducts.map((product) => {
          return (
            <ProductCardMUI
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              offset={product.offset}
              id={product.id}
              dispatch={dispatch}
              product={product}
   
            />
          );
        }) : <CircularProgress sx={{color: '#52796f', textAlign:'center'}}/>}

      </section>
      <SearchBar Heading="Products" />

      <section>

        {loading ? categories.map((category) => {
          return (
            <CategoryCardMUI
              key={category.id}
              catName={category.name}
              catPrice={category.minimum_product_price}
              catImage={category.image_url}
              catOffset={category.minimum_offset_price}
              catId={category.id}
              dispatch={dispatch}
              product={category.cheapest_product}

            />
          );
        }) : <CircularProgress sx={{color: '#52796f'}}/>}

      
        {/* <ProductCard
          image={Sugar}
          name="Castor Sugar"
          price="1.00"
          offset="0.10"
          id="1"
        />
        <ProductCard
          image={Raspberries}
          name="Raspberries"
          price="2.00"
          offset="0.20"
          id="2"
        />
        <ProductCard
          image={Flour}
          name="Flour"
          price="3.00"
          offset="0.30"
          id="3"
        />
        <ProductCard
          image={Chocolate}
          name="Chocolate"
          price="4.00"
          offset="0.40"
          id="4"
        />
        <ProductCard
          image={Butter}
          name="Butter"
          price="5.00"
          offset="0.50"
          id="5"
        />
        <ProductCard
          image={Orange}
          name="Orange"
          price="6.00"
          offset="0.60"
          id="6"
        />
        <ProductCard
          image={Honey}
          name="Honey"
          price="7.00"
          offset="0.70"
          id="7"
        />
        <ProductCard
          image={Eggs}
          name="Eggs"
          price="8.00"
          offset="0.80"
          id="8"
        /> */}
      </section>
    </div>
  );
};

export default AllProductPage;
