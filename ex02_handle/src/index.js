import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


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
// // const element = (
// //     <>
// //         <h1 id="title">가위바위보</h1>
// //         <h2>{getResult(me, other)}</h2>
// //         <button onClick={handleClick} className="hand">가위</button>
// //         <button onClick={handleClick} className="hand">바위</button>
// //         <button onClick={handleClick} className="hand">보</button>
// //     </>
// // );


root.render(<App />);


