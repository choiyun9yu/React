import Button from "./Button";
import Dice from './Dice';
// state 사용하기 위해서 모듈 삽입
import { useState } from "react";

function random(n) { 
  return Math.ceil(Math.random() * n);
}

function App() { 
  // useState 함수는 파라미터로 초기값을 전달받고,
  // 배열의 형태로 요수 2개를 반환한다.
    // 첫번째 요소는 State 값 (현재 변수의 값)
    // 두번째 요소는 setter 함수 (이 함수를 호출할 때 파라미터로 전달하는 값으로 State값 변경)
  const [num, setNum] = useState(1);
  
  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  };

  const handleClearClick = () => {
    setNum(1);
  };

  return (
    <div>
      <div>
        {/* <Button text="던지기" />
        <Button text="처음부터"/> */}
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );

}

// 다른 파일에서 쓸 수 있도록 export
export default App;