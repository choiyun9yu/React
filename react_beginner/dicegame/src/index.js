import ReactDOM from 'react-dom/client';
import App from './App';


// JSX로 작성한 코드가 나타날 위치 설정
const root = ReactDOM.createRoot(document.getElementById('root'));


// 1. JSX에서 JS 사용하기 
    //중괄호로 감싸주면 된다. if문이나 for문 함수 선언 등은 안됨, 표현식만 가능
// const product = 'MacBook';
// const model = 'Pro';
// const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';
// const handleClick = function (e) {
//     alert('곧 도착합니다!');
// }
// const element = (
//     <>
//         <h1>{product + ' ' + model} 주문하기</h1>
//         <img src={imageUrl} alt="제품 사진" />
//         <button onClick={handleClick}>확인</button>
//     </>
// );



// 2. 컴포넌트
    // 함수의 첫글자를 대문자로 써야한다.
    // JSX문법으로 만든 리액트 엘리먼트를 리턴해야 한다.
    // 재사용에 유리하다.
    // 이 객체는 리액트 엘리먼트라고 한다. 이것을 ReactDOM의 render 메소드로 전달하면 리액트가 이 객체를 해석해서 HTML로 렌더링 하는 것이다.
    // 리액트 엘리먼트를 함수 형태로 만들어내면 JSX 문법을 작성할 때 커스텀 태그처럼 활용할 수도 있다.
// const Hello = () => <h1>안녕 리액트</h1>;   // 이 함수를 리액트 컴포넌트라고 한다.
// const element = (
//     <>
//         <Hello />   // 컴포넌트 태그 형태
//         <Hello />
//         <Hello />
//     </>  
// );



// 3. Props : 컴포넌트에 지정한 속성 (리액트 개발자도구 컴포넌트 탭에서 확인 가능)
    //



// 주사위 게임
// root.render(<App />);    // 컴포넌트 태그 형태로 출력




// 가위바위보 게임
// const WINS = {
//     rock: 'scissor',
//     scissor: 'paper',
//     paper: 'rock',
// };
// const getResult = function (left, right) {
//     if (WINS[left] === right) return '승리';
//     else if (left === WINS[right]) return '패배';
//     return '무승부';
// }
// const handleClick = function () { 
//     console.log('가위바위보!');
// }
// const me = 'rock';
// const other = 'scissor';
// const element = (
//     <>
//         <h1 id="title">가위바위보</h1>
//         <h2>{getResult(me, other)}</h2>
//         <button onClick={handleClick} className="hand">가위</button>
//         <button onClick={handleClick} className="hand">바위</button>
//         <button onClick={handleClick} className="hand">보</button>
//     </>
// );





root.render(<App />);
// root.render(element);
