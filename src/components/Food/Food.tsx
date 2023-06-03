import React from 'react';

interface IFood {
    name: string;
    price: number;
    image: string;
    key: string;
    count: number;
    countPlus: (name: string) => void;
}

const Food: React.FC<IFood> = props => {
    return (
            <div className="foodBlock">
                <img className="image" onClick={() => props.countPlus(props.name)} src={props.image} alt="meat" />
                <span className="name">{props.name}</span>
                <span className="count">x{props.count}</span>
                <span>price: <strong>{props.price} KGS</strong></span>
            </div>
    );
};

export default Food;