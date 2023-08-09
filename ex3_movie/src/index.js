import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 배열 렌더링하기
// 1-1. map() 메소드 : map 메소드는 콜백함수를 실행한 결과를 가지고 새로운 배열을 만들때 사용
// 많은 데이터를 보여줄 때 유용
// map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작

// 1-2. sort() : 정렬하기
//

// 2. 데이터 가져오기

// 3. 입력 폼 다루기

// 4. 데이터 보내기

// 5. 전역 데이터 다루기

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
