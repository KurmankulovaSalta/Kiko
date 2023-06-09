import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Product.css";

import { useCart } from "../../contexts/CartContextProvider";
import { pink } from "@mui/material/colors";
import { useState } from "react";

export default function ProductCard({ item }) {
  const { deleteCosmetics } = useProducts();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  // корзина/

  const { addProductToCart, checkProductInCart } = useCart();

  const [like, setLike] = useState(0);
  let [heartOpen, setHeartOpen] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 325,
        display: "flex",
        flexDirection: "row",
        margin: "1rem",
        flexWrap: "wrap",
        justifyContent: "space-around",
        height: 400,
        width: 280,
        margin: 2,
        marginLeft: 10,

        marginLeft: { xl: 10, lg: 8, md: 20, sm: 10, xs: 5 },
        with: { xl: 325, lg: 300, md: 200, sm: 160 },
        height: { xl: 430, lg: 430, md: 460, sm: 460 },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item.price} $
          </Typography>
        </CardContent>

        <IconButton>
          <FavoriteIcon
            className={`likes ${heartOpen && "active"}`}
            onClick={() => {
              setLike(like + 1);
              setHeartOpen((heartOpen = !heartOpen));
            }}
          />
          <p>{like}</p>
        </IconButton>
      </CardActionArea>
      <div className="btn_cart">
        <IconButton
          onClick={() => addProductToCart(item)}
          sx={{
            border: "2px solid black",
            width: "250px",
            borderRadius: "2rem",
            height: "40px",
            fontSize: "15px",
            backgroundColor: "black",
            color: "white",
            hover: "pink",
          }}
          className="iconButton"
        >
          <LocalMallOutlinedIcon
            className="icon"
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
          <span>Add to bag</span>
        </IconButton>
      </div>

      {email === ADMIN ? (
        <>
          <Button
            onClick={() => navigate(`/edit/${item.id}`)}
            size="small"
            color="primary"
          >
            edit
          </Button>
          <Button
            onClick={() => deleteCosmetics(item.id)}
            size="small"
            color="primary"
          >
            delete
          </Button>
        </>
      ) : null}
    </Card>
  );
}
