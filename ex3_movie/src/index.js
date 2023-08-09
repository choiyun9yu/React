import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 배열 렌더링하기
// 1-1. map() : 많은 데이터 렌더링하기
// map 메소드는 요소마다  콜백함수를 실행한 결과로 새로운 배열을 만드는 함수
// 많은 데이터를 보여줄 때 유용
// map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작

// !주의 리스트의 각 child(map 메소드에서 렌더링한 것)는 고유한 key를 가져야한다.
// 요소들의 순서가 바뀌면 엉뚱한 위치에 렌더링 될 수 있기 때문이다.
// 이를 방지하기 위해 map 메소드로 렌더링할 때 최상위 태그에 key prop을 지정해주면 된다.
// 이때 key값은 변하지 않는 데이터의 고유한 값이어야한다.

// 1-2. sort() : 정렬기능
// 상위 컴포넌트에서 정렬할 객체의 컴포넌트로 정렬해서 prop을 내려주면 된다.
// 내림차순 정렬 .sort((a,b) => b - a )
// 오름차순 정렬 .sort((a,b) => a - b )

// 1-3. filter() : 삭제기능
// filter 메소드는 요소마다 콜백 함수를 실행해서 리턴 값이 true인 요소만 걸러내는 함수
// 필터는 에로우 펑션의 조건식이 true인 것만 반환해준다.

// 2. 데이터 가져오기 : (실습서버) https://learn.codeit.kr/9820
// Network탭의 Preview탭의 paging프로퍼티 : 데이터 추가 로딩에 쓸 값을 담고 있다.
// Network탭의 Preview탭의 reviews프로퍼티 : 받아서 사용할 데이터
// api.js 파일 : request 함수들을 모아두고 사용할 파일

// 2-1. useEffect() : 초기 데이터 가져오기
// 컴포넌트가 처음 렌더링 되었을때 리퀘스트를 보내고 싶고, 무한루프는 피하고 싶을 때 사용
// useEffect()를 사용하지 않고 그냥 함수를 호출하면 무한루프에 빠질 수 있다.
// useEffect(실행할 콜백함수, 빈배열[])
// 이렇게 하면 콜백함수를 맨처음 렌더링할 때만 호출한다.

// 3. 입력 폼 다루기

// 4. 데이터 보내기

// 5. 전역 데이터 다루기

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
