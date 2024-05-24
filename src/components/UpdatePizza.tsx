import React, { useState } from "react";

//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {
  const [pizza, setPizza] = useState({
    name: "King Aurthor Supreme",
    toppings: ["Mushroom,", "Onions,"],
  });

  const handleClick = () => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      toppings: [...prevPizza.toppings, "Cheese"],
    }));
  };

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>{pizza.toppings}</p>
      <button onClick={handleClick}>Add Cheese</button>
    </div>
  )
}

export default UpdatePizza;
