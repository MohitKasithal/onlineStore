import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./OrderPlaced.css";
function OrderPlace() {
  const location = useLocation([]);
  const data = location.state.Orders;
  console.log(data, "kjbkjb");

  return (
    <>
      <Header />
      <h4 style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        Your Orders...
      </h4>
      <Container>
        {data.map((item) => (
          <Stack
            sx={{ border: "1px solid 	#1e90ff", padding: 2 }}
            m={2}
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}>
            <img src={item.image} alt="" style={{ width: 100, height: 100 }} />
            <Container>
              <Typography variant="h6" component={"h5"}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1">
                {item.description.length > 80
                  ? item.description.substr(0, 80)
                  : item.description}
              </Typography>
              <Typography>Price - {item.price * item.quantity}$</Typography>
            </Container>
            <Stack direction="column" spacing={1}>
              <Button
                color="success"
                variant="outlined"
                sx={{ fontSize: 8, fontWeight: "bold" }}>
                {" "}
                <p>Return Product</p>
              </Button>

              <Button
                variant="contained"
                color="info"
                sx={{ fontSize: 7, fontWeight: "bold" }}>
                <p> Download invoice</p>
              </Button>

              <Button
                variant="outlined"
                color="error"
                sx={{ fontSize: 8, fontWeight: "bold" }}>
                Rate Product
              </Button>
            </Stack>
          </Stack>
        ))}
      </Container>
    </>
  );
}

export default OrderPlace;
