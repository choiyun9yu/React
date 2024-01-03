import HandIcon from "./HandIcon";
import HandButton from './HandButton';
import Button from "./Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from './utils';


const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}


function App() {
  // const handleClick = (value) => console.log(value);

  // return (
  //   <div>
  //     {/* Dice 컴포넌트에 색상 속성 지정, 리액트 개발자 컴포넌트에서 확인 가능 */}
  //     {/* 컴포넌트에 지정한 프롭은 객체 형태로 컴포넌트 함수의 첫번째 파라미터로 전달된다. */}
  //     {/* <Dice color="red" num={2} /> */}
  //     <HandButton value="rock" onClick={handleClick} />
  //     <HandButton value="scissor" onClick={handleClick} />
  //     <HandButton value="paper" onClick={handleClick} />
  //     {/* 컴포넌트 속성명과 함수 선언에서의 파라미터 이름을 매칭시켜줘야한다. */}
  //   </div>
  // );

  // 패
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  // 점수
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    // input의 value 속성을 참조하려면 e.target.value로 가져올 수 있다.
    // 그러나 이 값은 문자열이기 때문에 Number 생성자를 써서 숫자형으로 바꿔줘야 한다.
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      {/* 배점을 정하는 input tag */}
      <div>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p>
      <div>
        <HandButton className="HandButton" value="rock" onClick={handleButtonClick} />
        <HandButton className="HandButton" value="scissor" onClick={handleButtonClick} />
        <HandButton className="HandButton" value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );

}

export default App;

