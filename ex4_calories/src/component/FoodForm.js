import { useState } from "react";

function FoodForm() {
  // State 선언부
  const [title, setTitle] = useState();
  const [calorie, setCalorie] = useState();
  const [content, setContent] = useState();

  // handler 선언부
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCalorieChange = (e) => {
    // 칼로리는 숫자니까 형변환 필요
    const nextCalorie = Number(e.target.value) || 0;
    setCalorie(nextCalorie);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <input value={title} name="title" onChange={handleTitleChange}></input>
      <input
        value={calorie}
        type="number"
        name="calorie"
        onChange={handleCalorieChange}
      ></input>
      <input
        value={content}
        name="content"
        onChange={handleContentChange}
      ></input>
    </form>
  );
}

export default FoodForm;
