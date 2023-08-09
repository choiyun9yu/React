import FoodList from "./FoodList";
import items from "../mock.json";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState("createdAt");

  const sortItems = items.sort((a, b) => b[order] - a[order]);

  const dateOnClick = () => setOrder("createdAt");
  const calOnClick = () => setOrder("calorie");

  return (
    <div>
      <button onClick={dateOnClick}>최신순</button>
      <button onClick={calOnClick}>칼로리순</button>
      <FoodList items={sortItems} />
    </div>
  );
}

export default App;
