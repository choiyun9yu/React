import FoodList from "./FoodList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);

  // 정렬
  const [order, setOrder] = useState("createdAt");
  const sortItems = items.sort((a, b) => b[order] - a[order]);
  const dateOnClick = () => setOrder("createdAt");
  const calOnClick = () => setOrder("calorie");

  // 삭제
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={dateOnClick}>최신순</button>
      <button onClick={calOnClick}>칼로리순</button>
      <FoodList items={sortItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
