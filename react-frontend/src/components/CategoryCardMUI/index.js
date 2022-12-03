import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

const CategoryCardMUI = ({
  catName,
  catId,
  catImage,
  catPrice,
  catOffset,
  product,
  dispatch,
}) => {
  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate("/products/" + catId + "/" + catName);
  };

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ vertical: "top", horizontal: "center", open: false });
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity: 1 } });
    setState({ vertical: "top", horizontal: "center", open: true });
  };

  return (
    <Card sx={{ minWidth: "300px", maxWidth: 300 }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added to cart!
        </Alert>
      </Snackbar>

      <CardMedia component="img" alt={catName} height="150" image={catImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {catName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price from: £{catPrice}
          <br />
          Offset carbon from: £{catOffset}
        </Typography>
      </CardContent>
      <CardActions>
        <div
          className="compare-link"
          onClick={() => handleLink(`/products/${catId}/${catName}`)}
          style={{ marginLeft: "10px" }}
        >
          Compare
        </div>
        {/* <div className="add-button" onClick={(e) => e.preventDefault}>
            ADD
          </div> */}
        <Button
          variant="contained"
          style={{ marginRight: "10px" }}
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
            // dispatch({
            //   type: "ADD_TO_CART",
            //   payload: { product, quantity: 1 },
            // });
            addToCart();
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCardMUI;
