import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 배열 렌더링하기
// 1-1. map() : 많은 데이터 렌더링하기
//      map 메소드는 요소마다  콜백함수를 실행한 결과로 새로운 배열을 만드는 함수
//      많은 데이터를 보여줄 때 유용
//      map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작

//      !주의 리스트의 각 child(map 메소드에서 렌더링한 것)는 고유한 key를 가져야한다.
//      요소들의 순서가 바뀌면 엉뚱한 위치에 렌더링 될 수 있기 때문이다.
//      이를 방지하기 위해 map 메소드로 렌더링할 때 최상위 태그에 key prop을 지정해주면 된다.
//      이때 key값은 변하지 않는 데이터의 고유한 값이어야한다.

// 1-2. sort() : 정렬기능
//      상위 컴포넌트에서 정렬할 객체의 컴포넌트로 정렬해서 prop을 내려주면 된다.
//      내림차순 정렬 .sort((a,b) => b - a )
//      오름차순 정렬 .sort((a,b) => a - b )

// 1-3. filter() : 삭제기능
//      filter 메소드는 요소마다 콜백 함수를 실행해서 리턴 값이 true인 요소만 걸러내는 함수
//      필터는 에로우 펑션의 조건식이 true인 것만 반환해준다.

// 2. 데이터 가져오기 : (실습서버) https://learn.codeit.kr/9820
//      Network탭의 Preview탭의 paging프로퍼티 : 데이터 추가 로딩에 쓸 값을 담고 있다.
//      Network탭의 Preview탭의 reviews프로퍼티 : 받아서 사용할 데이터
//      api.js 파일 : request 함수들을 모아두고 사용할 파일

// 2-1-1. useEffect() : 초기 데이터 가져오기
//      컴포넌트가 처음 렌더링 되었을때 또는 특정 값이 바뀌었을 때만 리퀘스트를 보내고 싶고, 무한루프는 피하고 싶을 때 사용
//      useEffect()를 사용하지 않고 그냥 함수를 호출하면 무한루프에 빠질 수 있다.
//      useEffect(비동기로 실행할 콜백함수, 디펜던시 리스트 빈배열[])
//      useEffect를 사용하면 콜백함수를 예약해뒀다가 렌더링이 끝나면 실행해준다. 이때 디펜던시 리스트도 같이 기억해둔다.
//      콜백함수를 실행하면 State가 변경되니까 다시 렌더링이 시작된다. 이때 useEffect도 다시 실행하는데
//      이때 디펜던시 리스트에 있는 값들을 앞에서 기억한 값이랑 비교하고 값이 다른 경우에만 콜백을 실행
//      이렇게 하면 콜백함수를 맨처음 렌더링할 때만 호출한다.

// 2-1-2. 서버에서 정렬한 데이터 받아오기
//      전체 데이터에서 정렬하는 게 아니라 받아온 데이터안에서만 정렬하는 문제가 있을 때
//      웹 브라우저에서 정렬하는 것이 아니라 서버에서 정렬된 데이터를 받아와야한다.

// 2-2. 페이지네이션(Pagination) : 렌더링에 필요한 만큼만 데이터를 받아오고 추가 데이터는 더보기 버튼이나 필요할 때 받아오는 것, 책의 페이지 처럼 데이터를 나눠서 제공하는 것
//      오프셋 기반 페이지네이션 : 오프셋;상쇄하다;지금까지 받아온 데이터 개수,
//                                 지금 n개 까지 받았으니 m개 더 보내줘
//                                 이미 받아온 데이터가 추가되거나 삭제되면 데이터를 받아오는데 중복이나 누락이 발생한다.
//                                 그러나 서버에 부담이 적다. 데이터가 자주 안바뀔 때 유리
//

//      커서 기반 페이지네이션 : 커서;특정데이터를 가리키는 값;지금 까지 받은 데이터를 표시한 책갈피
//                               다음 받아올 데이터의 커서값을 함께 전달해준다.
//                               데이터의 중복이나 누락없이 가져올 수 있다.
//                               그러나 서버에 부담이 있다. 데이터가 자주 바뀔 때 유리

// 조건부 렌더링 : 논리 연산자와 JSX 사용해서 조건부 렌더링
//                 and는 전건이 참이면 후건을 출력하고, 전건이 거짓이면 전건을 출력하는 특성 이용
//                 or는 전건이 참이면 전건을 출력하고, 전건이 거짓이면 후건을 출력하는 특성을 이용
//                 삼항 연산자는 참일 경우와 거짓일 경우를 다르게 표현
//                      {toggle ? <p>✅</p> : <p>❎</p>} 이런 느낌

// !주의 비동기로 State를 변경할 때
//      비동기로 State의 값을 변경할 때 잘못된 시점의 값을 사용하는 문제가 있음.
//      비동기 함수가 fulfiled되기 전에 다른 기능이 State를 변경 하면,
//      비동기 함수 내부에서는 인지하지 못하기 때문이다.
//      이럴 땐 setter 함수의 값이 아니라 콜백을 전달해서 해결할 수 있다.
//      이때 콜백함수의 파라미터는 고정된 것이 아니다.
//      따라서 콜백함수가 호출되는 시점의 State값을 전달받는다.

// 3. 입력 폼 다루기

// 4. 데이터 보내기

// 5. 전역 데이터 다루기

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
