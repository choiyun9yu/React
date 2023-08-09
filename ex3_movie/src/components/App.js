// 프로젝트 최상위 컴포넌트

import ReviewList from "./ReviewList";
// import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  // const [items, setItems] = useState(mockItems);
  const [items, setItems] = useState([]);

  // 정렬기능
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]); // rating이 내림차순 정렬
  // 만약 오름차순 정렬하고 싶다면 a.rating - b.rating 하면 된다.
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  // 삭제기능
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // 서버에서 데이터 가져올 버튼
  const handleLoadClick = async () => {};

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>평점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
