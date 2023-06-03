import React, { useState } from "react";
import { nanoid } from "nanoid";
import Food from "./components/Food/Food";
import Order from "./components/Order/Order";
import hamburgerImage from "./assets/hamburger2.png";
import cheeseburgerImage from "./assets/cheeseburger2.png";
import friesImage from "./assets/fries2.png";
import coffeeImage from "./assets/coffee2.png";
import teaImage from "./assets/tea4.png";
import colaImage from "./assets/cola2.png";
import "./App.css";

type FoodType = {
  name: string;
  price: number;
  image: string;
  id: string;
};

const FOODS: FoodType[] = [
  { name: "Hamburger", price: 80, image: hamburgerImage, id: nanoid() },
  { name: "Tea", price: 50, image: teaImage, id: nanoid() },
  { name: "Fries", price: 45, image: friesImage, id: nanoid() },
  { name: "Coffee", price: 70, image: coffeeImage, id: nanoid() },
  { name: "Cheeseburger", price: 90, image: cheeseburgerImage, id: nanoid() },
  { name: "Cola", price: 40, image: colaImage, id: nanoid() },
];

const App = () => {
  type Count = {
    name: string;
    count: number;
  };

  const [foodsUseState, setFoodsUseState] = useState<Count[]>([
    { name: "Hamburger", count: 0 },
    { name: "Tea", count: 0 },
    { name: "Fries", count: 0 },
    { name: "Coffee", count: 0 },
    { name: "Cheeseburger", count: 0 },
    { name: "Cola", count: 0 },
  ]);

  const [priceCount, setPriceCount] = useState(0);

  const countPlus = (name: string) => {
    setFoodsUseState((prevState) => {
      return prevState.map((thing, index) => {
        if (thing.name === name) {
          const total = priceCount + FOODS[index].price;
          setPriceCount(total);
          return {
            ...thing,
            count: thing.count + 1,
          };
        }
        return thing;
      });
    });
  };

  const btnDelete = (name: string) => {
    setFoodsUseState((prevState) => {
      return prevState.map((thing, index) => {
        if (thing.name === name) {
          const totalPrice =
            priceCount - foodsUseState[index].count * FOODS[index].price;
          setPriceCount(totalPrice);
          return {
            ...thing,
            count: (thing.count = 0),
          };
        }
        return thing;
      });
    });
  };

  const showFood = FOODS.map((every) => {
    return (
      <Food
        name={every.name}
        price={every.price}
        image={every.image}
        key={every.id}
        countPlus={countPlus}
      />
    );
  });

  return (
    <div className="App">
      <div className="foodContainer">{showFood}</div>
      <div className="orderContainer">
        <Order
          price={priceCount}
          countState={foodsUseState}
          food={FOODS}
          delete={btnDelete}
        />
      </div>
    </div>
  );
};

export default App;
