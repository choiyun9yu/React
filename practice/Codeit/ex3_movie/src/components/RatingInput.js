import { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

// name과 value는 HTML input 태그 처럼 키값과 벨류에 해당, onChange 프롭은 input을 선택했을 때 실행할 함수
function RatingInput({ name, value, onChange }) {
  // rating state는 선택한 별점을 보여주거나, 마우스를 올렸을 때 별점을 미리 보여주는 용도
  const [rating, setRating] = useState(value);

  // 파라미터로 받은 nextValue를
  const handleSelect = (nextValue) => onChange(name, nextValue);

  // 마우스가 벗어났을 때 실행할 함수
  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
