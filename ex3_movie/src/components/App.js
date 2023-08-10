// 프로젝트 최상위 컴포넌트

import { getReviews } from "../api";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
// import mockItems from "../mock.json";
import { useEffect, useState } from "react";

const LIMIT = 6;

function App() {
  // 상태 값
  // const [items, setItems] = useState(mockItems);
  // 정렬할 때 필요한 state
  const [order, setOrder] = useState("createdAt");
  // 데이터 로드 시 필요한 state
  const [items, setItems] = useState([]);
  // 데이터 추가 로드 시 필요한 state
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false); // disabled 속성과 맞추기 위해서 false 기본값
  // 네트워크 리퀘스트 여부 확인하는 state
  const [isLoading, setIsLoading] = useState(false);
  // 에러처리를 위해 필요한 state
  const [loadingError, setLoadingError] = useState(null);

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
  const handleLoad = async (options) => {
    let result;
    // 네트워크 리퀘스트 부분 try문 처리
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getReviews(options);
      // 에러처리
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }

    const { paging, reviews } = result;
    // const { paging, reviews } = await getReviews(options);
    if (options.offset === 0) {
      // offset 값이 0일 땐 전체를 바꾼다.
      setItems(reviews);
    } else {
      // offset 값이 0이 아닐 땐 기존 값에 새로 받은 값을 더 한다.
      // setter를 사용할 때 안에 콜백함수를 넣어서 비동기 함수가 동작되는 와중에
      // 밖에서 상태가 변한 것을 인지할 수 있도록 해준다.
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit); //기존 offset에 더보기로 받아온 값만큼 더한다, 근데 limit은 최대 개수 아닌가?
    setHasNext(paging.hasNext);
    // 네트워크 탭을 살펴보면 Preview 탭에 Paging 객체를 살펴보면 hasNext라는 프로퍼티가 다음 페이지가 리미트 만큼 받아올 수 있는지 여부를 불리언으로 가지고 있다.
  };

  // 여기에서 그냥 handleLoad() 함수 호출하면 무한루프에 빠진다.
  // handleLoad 함수가 호출되면 다시 렌더링하기위해서 App이 호출되고 App안에 있는
  // handleLoad가 다시 호출되고 다시 렌더링되고 다시 App이 호출되는 무한루프
  // 해법은 useEffect 함수를 사용하는 것이다.
  // 디펜던시 리스트에 order state를 추가하면 정렬 상태가 바뀔 때마다 재렌더링이 일어난다.
  // LIMIT는 고정값이라서 상수로 표현
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);
  // 처음 진입시에만 하려면 useEffect 두번째 아규먼트를 [] 빈배열
  // 특정 값이 바뀔 때도 하려면 useEffect 두번째 아규먼트를 [기억할 값 배열]

  // 다음 페이지를 불러올 함수
  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {/* <button onClick={handleLoadClick}>불러오기</button> */}

      {/* disabled는 기능 비활성화니까 반대로 해야함 */}
      {/* <button disabled={!hasNext} onClick={handleLoadMore}>
        더 보기
      </button> */}

      {/* 더 불러올 데이터가 없으면 아에 버튼이 보이지 않도록 설정 */}
      {/* hasNext가 참일 땐 뒤에 사용 버튼 렌더링, 거짓일 땐 hasNext값 사용 */}
      {/* disabled 프롭으로 네트워크 진행중일 때 더보기 못누르게 설정 */}
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {/* 옵셔널체이닝 : 앞의 객체가 있을 때만 프로피터릴 참조하겠다는 것 */}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
