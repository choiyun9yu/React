import Dice from './Dice';
// import HandIcon from './HandIcon';

function App() { 
  return (
    <div>
      {/* Dice 컴포넌트에 색상 속성 지정, 리액트 개발자 컴포넌트에서 확인 가능 */}
      <Dice color="blue" />
    </div>
  );
}

// 다른 파일에서 쓸 수 있도록 export
export default App;