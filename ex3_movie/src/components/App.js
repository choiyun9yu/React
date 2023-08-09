// 프로젝트 최상위 컴포넌트

import { getReviews } from "../api";
import ReviewList from "./ReviewList";
// import mockItems from "../mock.json";
import { useEffect, useState } from "react";

function App() {
  // const [items, setItems] = useState(mockItems);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  // 정렬기능
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
  // const handleLoadClick = async () => {
  //   const { reviews } = await getReviews();
  //   setItems(reviews);
  // };

  // 페이지 열었을 때 자동으로 데이터 가져오기
  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };
  // 여기에서 그냥 handleLoad() 함수 호출하면 무한루프에 빠진다.
  // handleLoad 함수가 호출되면 다시 렌더링하기위해서 App이 호출되고 App안에 있는
  // handleLoad가 다시 호출되고 다시 렌더링되고 다시 App이 호출되는 무한루프
  // 해법은 useEffect 함수를 사용하는 것이다.
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleBestClick}>평점순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {/* <button onClick={handleLoadClick}>불러오기</button> */}
    </div>
  );
}

export default App;
