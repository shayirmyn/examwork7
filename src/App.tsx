import React, {useState} from 'react';
import {nanoid} from "nanoid";
import Food from "./components/Food/Food";
import hamburgerImage from "./assets/hamburger.jpeg";
import cheeseburgerImage from "./assets/cheeseburger.jpeg";
import friesImage from "./assets/fries.webp";
import coffeeImage from "./assets/coffee.png";
import teaImage from "./assets/tea.jpeg";
import colaImage from "./assets/cola.jpeg";
import './App.css';


type FoodType = {
    name: string;
    price: number;
    image: string;
    id: string;
};

const FOODS: FoodType[] = [
    { name: "Hamburger", price: 80, image: hamburgerImage, id: nanoid() },
    { name: "Cheeseburger", price: 90, image: cheeseburgerImage, id: nanoid() },
    { name: "Fries", price: 45, image: friesImage, id: nanoid() },
    { name: "Coffee", price: 70, image: coffeeImage, id: nanoid() },
    { name: "Tea", price: 50, image: teaImage, id: nanoid() },
    { name: "Cola", price: 40, image: colaImage, id: nanoid() },
];

const App = () => {

    type Count = {
        name: string;
        count: number;
    };

    const [foodsUseState, setFoodsUseState] = useState<Count[]>([
        { name: "Hamburger", count: 0 },
        { name: "Cheeseburger", count: 0 },
        { name: "Fries", count: 0 },
        { name: "Coffee", count: 0 },
        { name: "Tea", count: 0 },
        { name: "Cola", count: 0 },
    ]);

    const [priceCount, setPriceCount] = useState(0);

    const countPlus = (name: string) => {
        setFoodsUseState((prevState) => {
            return prevState.map((thing, index) => {
                if (thing.name === name) {
                    setPriceCount((prevState) => prevState + FOODS[index].price);
                    return {
                        ...thing,
                        count: thing.count + 1,
                    };
                }
                return thing;
            });
        });
    };

    const showFood = FOODS.map((every, i) => {
        return (
            <Food name={every.name}
                  price={every.price}
                  image={every.image}
                  count={foodsUseState[i].count}
                  key={every.id}
                  countPlus={countPlus}
            />
        );
    });

  return (
      <div className="App">
          {showFood}
      </div>
  );
};

export default App;
