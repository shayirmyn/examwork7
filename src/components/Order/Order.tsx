import React from 'react';

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
}

const Order: React.FC<IOrder> = props => {
    return (
        <div className="list">
            <h3>Order list</h3>
            {
                props.countState.map((every, index) => {
                    for (let i = 0; i < every.count; i++) {
                        const orderPrice = every.count * props.food[index].price;
                        return <p>{every.name} <span>x{every.count}</span> <span>price: <strong>{orderPrice} KGS</strong></span></p>;
                    }
                })
            }
            <p>Total price: <strong>{props.price} KGS</strong></p>
        </div>
    );
};

export default Order;