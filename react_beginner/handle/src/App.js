import HandIcon from "./HandIcon";
import HandButton from './HandButton';
import Button from "./Button";
import { useState } from "react";
import { compareHand, generateRandomHand } from './utils';

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

  const [hand, setValue] = useState('rock');
  const [otherHand, setOtherValue] = useState('scissor')

  const handleButtonClick = (nextHand) => {
    setValue(nextHand);
    setOtherValue(generateRandomHand());
  };

  const handleClearClick = () => {
    setValue('rock');
    setOtherValue('scissor');
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );

}

export default App;

