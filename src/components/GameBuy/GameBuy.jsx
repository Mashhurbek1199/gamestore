import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemIncart} from "../../redux/cart/reducer";
import React from "react";
import "./GameBuy.css";
import Button from "../button/button";

const GameBuy = ({game}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsIncart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemIncart(game));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price}$</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}>
        {isItemInCart ? "Remove from cart " : "add to cart"}
      </Button>
    </div>
  );
};

export default GameBuy;
