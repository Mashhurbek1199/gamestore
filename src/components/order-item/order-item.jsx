import React from "react";
import "./order-item.css";
import {useDispatch} from "react-redux";
import GameImage from "../GameImage/GameImage";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteItemFromCart} from "../../redux/cart/reducer";
const OrderItem = ({game}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className="order-item">
      <div className="order-item__image">
        <GameImage image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price}$</span>
        <AiOutlineCloseCircle
          size={25}
          className="delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;
