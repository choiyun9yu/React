import FoodList from "./FoodList";
// import mockItems from "../mock.json";
import { useState } from "react";
import { getFoods } from "../api";

function App() {
  // const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);

  // 데이터 로드
  const handleLoadClick = async () => {
    // 데이터 로드시 foods 정확하게 입력해줘야한다.
    const { foods } = await getFoods();
    setItems(foods);
  };

  // 정렬
  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");

  // 삭제
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
