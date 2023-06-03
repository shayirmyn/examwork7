import React from "react";

interface IFood {
  name: string;
  price: number;
  image: string;
  key: string;
  countPlus: (name: string) => void;
}

const Food: React.FC<IFood> = (props) => {
  return (
    <div className="foodBlock">
      <img
        className="image"
        onClick={() => props.countPlus(props.name)}
        src={props.image}
        alt="meat"
      />
      <p className="name">{props.name}</p>
      <p>
        Price: <strong>{props.price} KGS</strong>
      </p>
    </div>
  );
};

export default Food;
