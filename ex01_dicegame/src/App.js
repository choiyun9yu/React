import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import './App.css';

function random(n) { 
  return Math.ceil(Math.random() * n);
}

function App() {
    // useState 함수는 파라미터로 초기값을 전달받고,
    // 배열의 형태로 요수 2개를 반환한다.
    // 첫번째 요소는 State 값 (현재 변수의 값)
    // 두번째 요소는 setter 함수 (이 함수를 호출할 때 파라미터로 전달하는 값으로 State값 변경)
  
    // return (
    //   <div>
    //     <div>
    //       {/* <Button text="던지기" />
    //       <Button text="처음부터"/> */}
    //       <Button onClick={handleRollClick}>던지기</Button>
    //       <Button onClick={handleClearClick}>처음부터</Button>
    //     </div>
    //     <Dice color="red" num={num} />
    //   </div>
    // );



    // // 나
    // const [num, setNum] = useState(1);
    // // 총점
    // const [sum, setSum] = useState(0);
    // // 기록
    // const [gameHistory, setGameHistory] = useState([]); // 빈배열을 초기값으로 가짐

    // const handleRollClick = () => {
    //   const nextNum = random(6);
    //   setNum(nextNum);
    //   setSum(sum + nextNum);
    //   // gameHistory.push(nextNum);
    //   // setGameHistory([gameHistory]);
    //   setGameHistory([...gameHistory, nextNum]);  // 스프레드 문법 활용하여 배열 새로
    // };

    // const handleClearClick = () => {
    //   setNum(1);
    //   setSum(0);
    //   setGameHistory([]);
    // };

    // return (
    //   <div>
    //     <div>
    //       <Button onClick={handleRollClick}>던지기</Button>
    //       <Button onClick={handleClearClick}>처음부터</Button>
    //     </div>
    //     <div>
    //       <h2>나</h2>
    //       <Dice color='blue' num={num} />
    //       <h2>총점</h2>
    //       <p>{sum}</p>
    //       <h2>기록</h2>
    //       <p>{gameHistory.join(', ')}</p>
    //     </div>
    //   </div>
    // );



  // 나
  const [myHisoty, setMyHistory] = useState([]);
  // 상대
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHisoty, nextMyNum]);

    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHisoty} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>  
    );


}

// 다른 파일에서 쓸 수 있도록 export
export default App;