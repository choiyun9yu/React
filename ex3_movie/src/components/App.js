// 프로젝트 최상위 컴포넌트

import ReviewList from "./ReviewList";
import items from "../mock.json";

function App() {
  return (
    <div>
      <ReviewList items={items} />
    </div>
  );
}

export default App;
