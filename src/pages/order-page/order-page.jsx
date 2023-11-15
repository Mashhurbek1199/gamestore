import React from "react";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../components/utils";
import OrderItem from "../../components/order-item/order-item";
import "./order-page.css";
const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsIncart);

  if (items.length < 1) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} product -total {calcTotalPrice(items)}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
