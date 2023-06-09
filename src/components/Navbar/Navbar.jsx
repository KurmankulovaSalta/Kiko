import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";
import { getCountProductsInCart } from "../../helpers/functions";
import { useCart } from "../../contexts/CartContextProvider";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Navbar.css";
import { useState } from "react";
import "./Navbar.css";
import { Directions } from "@mui/icons-material";

const pages = [
  { name: "Best Sellers", link: "/best", id: 2 },
  { name: "Offers", link: "/offers", id: 3 },
  { name: "Accessories", link: "/accessories?type=accessories", id: 5 },
  { name: "About Us", link: "/aboutus", id: 1 },
  { name: "Contact Us", link: "/contacts", id: 4 },
  { name: "", link: "/*", id: 6 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const {
    handleLogOut,
    user: { email },
  } = useAuth();

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // корзина//

  const [count, setCount] = React.useState(0);
  const { addProductToCart } = useCart();

  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCart]);

  let [heartOpen, setHeartOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="nav_logo"
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <img
          onClick={() => {
            navigate("/");
          }}
          width={100}
          src="https://static.kikocosmetics.com/docroot/dist/images/kiko-logo-text.svg"
          alt="Hello"
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>

        <IconButton>
          <FavoriteIcon
            onClick={() => setHeartOpen((heartOpen = !heartOpen))}
            className={`favorites ${heartOpen && "active"}`}
            color="primary"
          />
          {heartOpen && (
            <div className="shop-cart"> THANK YOU FOR YOUR LIKE</div>
          )}
        </IconButton>

        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
            },
            display: "flex",
            justifyContent: "end",
          }}
        >
          {email === ADMIN ? (
            <Button
              onClick={() => navigate("/admin")}
              sx={{ my: 2, display: "block" }}
            >
              <Typography id="pages_link">Admin Page</Typography>
            </Button>
          ) : null}

          {email ? (
            <Button onClick={handleLogOut} sx={{ my: 2, display: "block" }}>
              <Typography id="pages_link">Log Out</Typography>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              sx={{ my: 2, display: "block" }}
            >
              <Typography id="pages_link">Log In</Typography>
            </Button>
          )}
          <IconButton onClick={() => navigate("/cart")}>
            <Badge badgeContent={count} color="primary">
              <LocalMallOutlinedIcon className="cart_logo" color="info" />
            </Badge>
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
