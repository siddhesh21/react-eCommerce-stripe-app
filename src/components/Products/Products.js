import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    description: "A14 Bionic Chip",
    price: "$1099",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80",
  },
  {
    id: 2,
    name: "Macbook Pro",
    description: "Apple M1 Chip with 8‑Core CPU and GPU 512GB Storage",
    price: "$1679",
    image:
      "https://images.unsplash.com/photo-1612383401559-c32a290d6b17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1025&q=80",
  },
  {
    id: 3,
    name: "Apple Mac Mini ",
    description: "Apple M1 Chip with 8‑Core CPU and GPU 512GB Storage",
    price: "$1029",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-202011-gallery-3?wid=2000&hei=1536&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603755840000",
  },
];

function Products() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
