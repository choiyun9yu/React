import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 배열 렌더링하기
// 1-1. map() : 많은 데이터 정제해서 보여주기
// map 메소드는 요소마다  콜백함수를 실행한 결과로 새로운 배열을 만드는 함수
// 많은 데이터를 보여줄 때 유용
// map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작

// 1-2. sort() : 정렬기능
// 상위 컴포넌트에서 정렬할 객체의 컴포넌트로 정렬해서 prop을 내려주면 된다.
// 내림차순 정렬 .sort((a,b) => b - a )
// 오름차순 정렬 .sort((a,b) => a - b )

// 1-3. filter() : 삭제기능
// filter 메소드는 요소마다 콜백 함수를 실행해서 리턴 값이 true인 요소만 걸러내는 함수
// 필터는 에로우 펑션의 조건식이 true인 것만 반환해준다.

// 2. 데이터 가져오기

// 3. 입력 폼 다루기

// 4. 데이터 보내기

// 5. 전역 데이터 다루기

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
