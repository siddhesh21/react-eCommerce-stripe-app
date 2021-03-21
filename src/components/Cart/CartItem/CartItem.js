import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";

function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart }) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h4">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
        </div>
        <Button
          onClick={() => handleRemoveFromCart(item.id)}
          variant="contained"
          color="secondary"
          type="button"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
