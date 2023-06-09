import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import CardBlock from "../../components/Product/ProductCard";
import HMcard from "../../components/Product/ProductList/HMcard";
import "./HomePage.css";
import ProductList from "../../components/Product/ProductList/ProductList";
import { useNavigate } from "react-router";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import { Button } from "@mui/material";

let cosmetics = [];
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.kikocosmetics.com/mediaObject/2023/launches/greenme-2023/Launch_GreenMe_HPslider-Desktop/webp-resolutions/res-1920x600/Launch_GreenMe_HPslider-Desktop.webp"
          />
          <Carousel.Caption>
            <h3 className="carousel_text1">NEW GREEN ME</h3>
            <p className="carousel_text2">REDUCED PLASTIC PACKAGING</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.kikocosmetics.com/mediaObject/2023/launches/welcome-flawless/Launch_WelcomeFlawless_Landing_Header-Desktop/webp-resolutions/res-1920x600/Launch_WelcomeFlawless_Landing_Header-Desktop.webp"
          />

          <Carousel.Caption>
            <h3 className="carousel_text1">NEW BEAUTY ESSENTIALS COLLECTION</h3>
            <p className="carousel_text2">
              YOUR DAILY ROUTINE TO RECHARGE YOURSELF
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.kikocosmetics.com/mediaObject/2023/launches/reshape-your-lips/Launch_ReshapeYourLips_HP-Desktop/webp-resolutions/res-1920x600/Launch_ReshapeYourLips_HP-Desktop.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel_text1">MakeUp</h3>
            <p className="carousel_text2">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <center>
        <h1 style={{ marginTop: "2%" }}>PROMO</h1>
        <div
          className="promo"
          style={{ display: "flex", margin: "20px 10px", paddingLeft: "5%" }}
        >
          <div className="promo1">
            <img
              className="promo_img"
              style={{ borderRadius: "10px" }}
              width={600}
              height={400}
              src="https://images.kikocosmetics.com/mediaObject/2023/promo/promo-gwp/us/US_Promo_GWP_01_Carousel/webp-resolutions/res-720x600/US_Promo_GWP_01_Carousel.webp"
            />
          </div>
          <div className="promo_left">
            <h3 className="promo_h3">
              GET UP TO 2 FREE PRODUCTS
              <br />
              WITH YOUR ONLINE ORDER
            </h3>
            <p>The more you buy, the more you save</p>
            <button className="promo_btn" onClick={() => navigate("/best")}>
              SHOP NOW
            </button>
          </div>
          <div className="promo2">
            <img
              className="promo_img"
              style={{ borderRadius: "10px" }}
              width={600}
              height={400}
              src="https://images.kikocosmetics.com/mediaObject/2023/promo/promo2-1ES/Promo_2-1ES_Carousel/webp-resolutions/res-720x600/Promo_2-1ES_Carousel.webp"
            />
          </div>
          <div className="promo_right">
            <h4 className="promo_h3">1 PRODUCT FOR FREE</h4>
            <button className="promo_btn" onClick={() => navigate("/best")}>
              SHOP NOW
            </button>
          </div>
        </div>
        <h1 className="must_have">THE MUST-HAVES OF THE MOMENT</h1>
        <div className="d-flex justify-content-between container  flex-wrap">
          {cosmetics.map((item) => (
            <CardBlock key={item.id} item={item} />
          ))}
        </div>

        <div>
          <ProductList />
          <h2>NEWS</h2>
          <HMcard />
        </div>
      </center>
      <center>
        <h2 className="kikoName">KIKO is...</h2>
      </center>

      <div
        style={{ display: "flex", marginTop: "1rem", marginLeft: "1rem" }}
        className="kiko_is"
      >
        <div>
          <h3 className="kikoIs">COLOUR</h3>
          <img
            className="kikoIsImg"
            style={{ marginLeft: "25px", borderRadius: "10px" }}
            width={350}
            src={img1}
            alt="a"
          />
        </div>
        <div>
          <h3 className="kikoIs">INNOVATION</h3>
          <img
            className="kikoIsImg"
            style={{ marginLeft: "25px", borderRadius: "10px" }}
            width={350}
            src={img2}
            alt="a"
          />
        </div>
        <div>
          <h3 className="kikoIs">SAFETY</h3>
          <img
            className="kikoIsImg"
            style={{ marginLeft: "25px", borderRadius: "10px" }}
            width={350}
            src={img3}
            alt="a"
          />
        </div>
        <div>
          <h3 className="kikoIs">OUR MISSION</h3>
          <img
            className="kikoIsImg"
            style={{ marginLeft: "25px", borderRadius: "10px" }}
            width={350}
            src={img4}
            alt="a"
          />
        </div>
      </div>
      <center>
        <Button
          className="our_brand"
          onClick={() => navigate("/aboutus")}
          style={{
            border: "2px solid black",
            borderRadius: "100rem",
            width: "250px",
            marginTop: "2rem",
            color: "black",
            fontSize: "10px",
          }}
        >
          Our Brand
        </Button>
      </center>
      <div className="ourBrand">
        <img
          className="ourBrandImg"
          src={img5}
          width={1500}
          style={{ marginTop: "2rem" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
