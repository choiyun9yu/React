import HandButton from './HandButton';

function App() { 
  const handleClick = (value) => console.log(value);
  return (
    <div>
      {/* Dice 컴포넌트에 색상 속성 지정, 리액트 개발자 컴포넌트에서 확인 가능 */}
      {/* 컴포넌트에 지정한 프롭은 객체 형태로 컴포넌트 함수의 첫번째 파라미터로 전달된다. */}
      {/* <Dice color="red" num={2} /> */}
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
      {/* 컴포넌트 속성명과 함수 선언에서의 파라미터 이름을 매칭시켜줘야한다. */}
    </div>
  );
}

// 다른 파일에서 쓸 수 있도록 export
export default App;

