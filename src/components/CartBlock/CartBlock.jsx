import React, {useState} from "react";
import "./CartBlock.css";
import {BiCartAlt} from "react-icons/bi";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../items-in-cart/ItemsInCart";
import {useNavigate} from "react-router-dom";
const CartBlock = () => {
  const [isCartMenuVisiable, setIsCartMenuVisiable] = useState(false);
  const items = useSelector((state) => state.cart.itemsIncart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsCartMenuVisiable(false);
    navigate("/order");
  };
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        className="cart-icon"
        onClick={() => setIsCartMenuVisiable(!isCartMenuVisiable)}
      />
      <span className="cart-block__total-price">{totalPrice}$</span>
      {isCartMenuVisiable && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
