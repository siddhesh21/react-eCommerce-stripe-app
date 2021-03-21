import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/shop-app.webp";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

function NavBar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();


    return (
      <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="Commerce.js"
                height="35px"
                className={classes.image}
              />
            </Typography>
            <div className={classes.grow} />
            {(location.pathname === "/") && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div> )}
          </Toolbar>
        </AppBar>
      </>
    );
}

export default NavBar;
