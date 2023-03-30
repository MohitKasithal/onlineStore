import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
function Carousal() {
  return (
    <Box>
      <Carousel
        autoPlay={true}
        useKeyboardArrows={true}
        showThumbs={false}
        infiniteLoop={true}>
        <div>
          <img
            style={{ maxHeight: 800, minHeight: 400, width: "100%" }}
            src="https://www.igeeksblog.com/wp-content/uploads/2021/06/Download-the-official-iOS-15-Wallpapers-for-iPhone-and-iPad.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ maxHeight: 800, minHeight: 400, width: "100%" }}
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/04/Google.png?fit=1200%2C675&ssl=1 "
            alt=""
          />
        </div>
        <div>
          <img
            style={{ maxHeight: 800, minHeight: 400, width: "100%" }}
            src="https://wallpaper.dog/large/476574.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ maxHeight: 800, minHeight: 400, width: "100%" }}
            src="https://cdn.ytechb.com/wp-content/uploads/2022/09/iPhone-14-wallpapers.webp"
            alt=""
          />
        </div>
      </Carousel>
    </Box>
  );
}

export default Carousal;
