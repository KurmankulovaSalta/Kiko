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

import { useCart } from "../../contexts/CartContextProvider";

export default function ProductCard({ item }) {
  const { deleteCosmetics } = useProducts();
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  // корзина/

  const { addProductToCart, checkProductInCart } = useCart();

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
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
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
      </CardActionArea>

      <Button
        onClick={() => navigate(`/edit/${item.id}`)}
        size="small"
        color="primary"
      >
        edit
      </Button>

      <IconButton onClick={() => addProductToCart(item)}>
        <LocalMallIcon color={checkProductInCart(item.id) ? "primary" : ""} />
      </IconButton>

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
