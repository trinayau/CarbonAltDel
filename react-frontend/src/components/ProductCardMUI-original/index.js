import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductCardMUIo = ({name, id, image, price, offset, dispatch, product}) => {

    return (
      <Card sx={{ minWidth: '300px', maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={name}
          height="150"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Price: £{price}
          <br />
          Offset price: £{offset}
          </Typography>
        </CardContent>
        <CardActions>
        <a className="compare-link"href={`/products/${id}/${name}`} style={{marginLeft: '10px'}}>Compare</a>
          {/* <div className="add-button" onClick={(e) => e.preventDefault}>
            ADD
          </div> */}
          <Button
            variant="contained"
            // href="/cart"
            sx={{
              mx: "30px",
              backgroundColor: "#84a98c",
              "&:hover": {
                backgroundColor: "#52796f",
                color: "#ffffff",
                textDecoration: "none",
                transition: "all 0.2s ease-in",
                
              },
            }}
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { product, quantity: 1 },
              });
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    );
  }

export default ProductCardMUIo;
