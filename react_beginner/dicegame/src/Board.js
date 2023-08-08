import Dice from './Dice';
// import Button from "./Button";
// state 사용하기 위해서 모듈 삽입
// import { useState } from "react";

// 전역 함수도 App 컴포넌트로 이동
    // function random(n) { 
    //   return Math.ceil(Math.random() * n);
    // }

function Board({ name, color, gameHistory }) { 
    // 기능을 관리하기 쉽도록 State를 App컴포넌트로 이동
        // const [num, setNum] = useState(1);
        // const [sum, setSum] = useState(0);
        // const [gameHistory, setGameHistory] = useState([]); // 빈배열을 초기값으로 가짐
    
    // 함수 역시 App 컴포넌트로 이동
        // const handleRollClick = () => {
        // const nextNum = random(6);
        // setNum(nextNum);
        // setSum(sum + nextNum);
        // setGameHistory([...gameHistory, nextNum]);  // 스프레드 문법 활용하여 배열 새로 만들기
        // };

        // const handleClearClick = () => {
        //     setNum(1);
        //     setSum(0);
        //     setGameHistory([]);
        // };

    const num = gameHistory[gameHistory.length - 1] || 1;
    // setMyHistory([...myHisoty, nextMyNum]) 에서 ...myHistory와 nextMyNum을 a, b로 받는듯
    const sum = gameHistory.reduce((a, b) => a + b, 0);
    
    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );

}

export default Board;