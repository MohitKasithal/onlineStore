import React from "react";
import Header from "../components/Header";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CleartheCart,
  decrementQuantity,
  incremntQuantity,
  removeFromCart,
} from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Cart = () => {
  const navigate = useNavigate();
  const cartitem = useSelector((state) => state.cart.cart);
  //  for cart checkout
  const total = cartitem
    .map((item) => item.price * item.quantity)
    .reduce((curr, prv) => curr + prv, 0);
  const shippingCharges = 10;
  // console.log(total, "total price");
  const Orders = [...cartitem];

  const dispatch = useDispatch();
  function handleOnDecrment(item) {
    dispatch(decrementQuantity(item));
  }
  function handleOnIncrement(item) {
    dispatch(incremntQuantity(item));
  }
  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item));
  }
  function handelBacktoHome() {
    navigate("/");
  }

  function handelOrderPlaced() {
    toast.success("Order Placed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/order", {
        state: {
          Orders: Orders,
        },
      });
    }, 3000);
    setTimeout(() => {
      dispatch(CleartheCart());
    }, 4000);
  }

  return (
    <>
      <Header />
      <Container className="cart">
        {/* left part */}
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
        <Box className="CartLeft">
          {cartitem.length === 0 ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 20,
              }}>
              {" "}
              <Typography sx={{ textAlign: "center", marginTop: 20 }}>
                Nothing in Cart
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { sm: 10, md: 14, xs: 8 },
                  marginTop: 1,
                  marginBottom: 1,
                }}
                onClick={handelBacktoHome}>
                Back to home
              </Button>
            </Box>
          ) : (
            cartitem?.map((item) => (
              <Box
                className="CartItem"
                key={item.id}
                sx={{ fontSize: { sm: 10, md: 14, xs: 8 } }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* <Card>
                    <CardMedia
                      sx={{ height: { sm: 80, md: 100, xs: 120 } }}
                      image={item.image}
                      title="image"
                    />
                  </Card> */}
                  <img
                    src={item.image}
                    alt=" "
                    style={{ width: 80, height: 80 }}
                  />
                </Box>
                <Box className="cartDescription">
                  <Typography
                    variant="p"
                    sx={{ fontWeight: 500 }}
                    component={"p"}>
                    {item.title.length > 30
                      ? item.title.substr(0, 30)
                      : item.title}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: 500 }}
                    component={"p"}>
                    Price :-{item.price}$
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: 500 }}
                    component={"p"}>
                    Description :-
                    {item.description.length > 40
                      ? item.description.substr(0, 40)
                      : item.description}
                  </Typography>
                </Box>
                <Box className="cartBtnContainer">
                  <Box className="cartButtons">
                    <Typography
                      variant="h6"
                      component={"h5"}
                      sx={{
                        fontSize: { sm: 10, md: 15, xs: 8 },
                        fontWeight: "bold",
                      }}
                      onClick={() => handleOnDecrment(item)}
                      style={{ cursor: "pointer" }}>
                      -
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.quantity}
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h5"}
                      sx={{
                        fontSize: { sm: 10, md: 15, xs: 8 },
                        fontWeight: "bold",
                      }}
                      onClick={() => handleOnIncrement(item)}
                      style={{ cursor: "pointer" }}>
                      +
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { sm: 10, md: 14, xs: 8 },
                      marginTop: 1,
                      marginBottom: 1,
                    }}
                    onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </Button>
                  <Typography
                    variant="h6"
                    component={"h5"}
                    sx={{
                      margin: 1,
                      fontWeight: "bold",
                      fontSize: { sm: 10, md: 15, xs: 8 },
                    }}>
                    {item.price * item.quantity}
                  </Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* right part */}

        {total === 0 ? (
          ""
        ) : (
          <Container sx={{ fontSize: { sm: 10, md: 15, xs: 8 } }}>
            <div className="CartRight">
              {/* Cupon info */}
              <Box sx={{ marginTp: 15, display: "flex" }}>
                <ConfirmationNumberIcon style={{ color: "gray", margin: 1 }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" component={"p"}>
                    Apply your Coupon
                  </Typography>

                  <Typography variant="body1" component={"p"}>
                    Apply coupons to avial offers on the products
                  </Typography>

                  <Typography variant="body1" component={"p"}>
                    * Term and Conditiones applied
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: 2,
                  borderRadius: 5,
                  padding: 3,
                  boxShadow: " 0 0 15px 5px gray",
                }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h6"
                    component={"h5"}
                    sx={{ fontSize: { sm: 10, md: 15, xs: 8 } }}>
                    Price
                  </Typography>
                  <Typography>{total}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h6"
                    component={"h5"}
                    sx={{ fontSize: { sm: 10, md: 15, xs: 8 } }}>
                    Discount
                  </Typography>
                  <Typography variant="h6" component={"h5"}>
                    -
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontSize: { sm: 10, md: 15, xs: 8 } }}
                    variant="h6"
                    component={"h5"}>
                    Shipping Cost
                  </Typography>
                  <Typography>{shippingCharges}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h6"
                    component={"h5"}
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: 10, md: 15, xs: 8 },
                    }}>
                    Total Price
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: 16, md: 20, xs: 22 },
                    }}
                    s>
                    {total + 10}
                  </Typography>
                </Box>

                <Box m={2}>
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    color="primary"
                    onClick={handelOrderPlaced}>
                    Place Order
                  </Button>
                </Box>
              </Box>
            </div>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Cart;
