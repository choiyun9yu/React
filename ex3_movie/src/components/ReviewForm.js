import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  // 리액트에서 인풋과 스테이 값을 일치시키는 것이 핵심 포인트이다.
  const [title, setTitle] = useState(); // 제목
  const [rating, setRating] = useState(); // 점수
  const [content, setContent] = useState(); // 리뷰 내용

  // 이 이벤트 핸들러에서는 input의 value가 변경될 때마다 그 값을 state에 반영
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    // Rating은 숫자니까 여기서 형변환 해줘야한다.
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
      <input type="number" value={rating} onChange={handleRatingChange}></input>
      <textarea value={content} onChange={handleContentChange}></textarea>
    </form>
  );
}

export default ReviewForm;
