// 프로젝트 최상위 컴포넌트

import ReviewList from "./ReviewList";
import items from "../mock.json";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState("createdAt");

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // rating이 내림차순 정렬
  // 만약 오름차순 정렬하고 싶다면 a.rating - b.rating 하면 된다.

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>평점순</button>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;
