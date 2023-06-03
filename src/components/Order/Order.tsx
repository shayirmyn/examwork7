import React from "react";

type Count = {
  name: string;
  count: number;
};

type orderType = {
  name: string;
  price: number;
  image: string;
  id: string;
};

interface IOrder {
  price: number;
  countState: Count[];
  food: orderType[];
  delete: (name: string) => void;
}

const Order: React.FC<IOrder> = (props) => {
  return (
    <div className="list">
      <h3 className="orderList">Order list</h3>
      {props.countState.map((every, index) => {
        if (props.price === 0) {
          return <p>Please add something..</p>;
        }
        for (let i = 0; i < every.count; i++) {
          const orderPrice = every.count * props.food[index].price;
          return (
            <p>
              {every.name}:{" "}
              <strong className="orderCount">x{every.count}</strong>
              <strong>|</strong>
              <span className="orderPrice">
                price: <strong>{orderPrice} KGS</strong>
              </span>
              <button
                className="btnDelete"
                onClick={() => props.delete(every.name)}
              >
                Delete
              </button>
            </p>
          );
        }
      })}
      <strong>
        <p className="totalPrice">Total price: {props.price} KGS</p>
      </strong>
    </div>
  );
};

export default Order;
