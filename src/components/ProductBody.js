import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Carousal from "../components/Carousal";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProduct, removeFromCart } from "../Redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

import {
  Box,
  Card,
  CardActions,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

const ProductBody = () => {
  const dispatch = useDispatch();
  const { users, isloading } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(
    () => {
      dispatch(getProduct());
    },
    // eslint-disable-next-line
    []
  );

  if (isloading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 250,
        }}>
        <CircularProgress />
      </div>
    );
  }
  // // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");

  //     const Container = await res.json(cart);
  //     // console.log(Container);
  //     setProduct(Container);
  //   };
  //   fetchProducts();
  // }, []);

  function handelAddtoCart(item) {
    toast.success("ADD TO CART", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(addToCart(item));
  }
  function handelRemovetoCart(item) {
    toast.warn("REMOVE TO CART", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(removeFromCart(item));
  }

  return (
    <>
      <Carousal />
      <Box sx={{ backgroundColor: "#e1e8f0" }}>
        <Grid container>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          {users?.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={4}
              lg={3}
              p={2}
              mt={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: " auto",
              }}>
              <Card sx={{ padding: 1 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt=""
                  width={275}
                  height={275}
                />
                <Typography m={1} variant="h5" component="h5">
                  {item.title.length > 28
                    ? item.title.substr(0, 28)
                    : item.title}
                </Typography>
                <Typography m={1} variant="h6" component="h6">
                  ${item.price}
                </Typography>
                <Typography m={1}>
                  {item.description.length > 60
                    ? item.description.substr(0, 60)
                    : item.description}
                </Typography>

                <CardActions>
                  {cart.some((e) => e.id === item.id) ? (
                    <Button
                      sx={{ backgroundColor: "#ffd700" }}
                      variant="contained"
                      color="primary"
                      onClick={() => handelRemovetoCart(item)}
                      // className="productItemButton"
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      sx={{ backgroundColor: "#ffd700" }}
                      variant="contained"
                      onClick={() => handelAddtoCart(item)}>
                      Add to Cart
                    </Button>
                  )}
                  <Button
                    sx={{ backgroundColor: "#febe10" }}
                    variant="contained"
                    className="productItemButton BuyBtn">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductBody;
