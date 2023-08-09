import FoodList from "./FoodList";
// import mockItems from "../mock.json";
import { useEffect, useState } from "react";
import { getFoods } from "../api";

function App() {
  // const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setIsError] = useState(null);

  // 데이터 로드
  // 버튼 클릭시 로드
  // const handleLoadClick = async () => {
  //   // 데이터 로드시 foods 정확하게 입력해줘야한다.
  //   const { foods } = await getFoods();
  //   setItems(foods);
  // };

  // 정렬
  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 처음 진입, 정렬 시 이 함수로 데이터 로드 함수 호출 된다.
  useEffect(() => {
    handleLoad({
      order,
    });
  }, [order]);

  // 삭제는 데이터 로드 함수 호출하지 않음
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  // 더 보기 눌렀을 떼 이 함수로 데이터 로드 함수 호출
  const handleLoadMore = () => {
    handleLoad({
      order,
      cursor,
    });
  };

  // 초기 렌더링 or order상태 바뀌었을 때, 더보기눌렀을 때 호출
  const handleLoad = async (options) => {
    // try문 결과를 블록 밖으로 가져올 수 있는 더 넓은 스코프의 변수가 선언
    let result;
    try {
      setIsLoading(true);
      setIsError(null);
      result = await getFoods(options);
    } catch (error) {
      // 여기서 true가 아니라 error 넘겨줘야한다.
      setIsError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { foods, paging } = result;
    // useEffect를 통해 들어오는 처음 진입, 정렬의 경우에는 cursor 값이 없어서
    // 초기 데이터 값만 받아오고
    if (!options.cursor) {
      setItems(foods);
    } else {
      // 더보기를 누른 경우에는 cursor 값이 true니까
      // 데이터를 다 받아와서 cursor값이 false인 경우에는 추가하면서 렌더링이 일어날 버튼이 없음
      // 삭제는 데이터 로드하지 않아서 이 함수 호출되지 않음
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(paging.nextCursor); // 렌더링 했으니까 커서 값 지정해주고
  };

  // const nextItems = setItems((prevItems) => [...prevItems, ...nextItems]);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      {/* <button onClick={handleLoadClick}>불러오기</button> */}
      {cursor && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
