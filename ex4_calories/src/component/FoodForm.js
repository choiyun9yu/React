import { useState } from "react";
import FileInput from "./FileInput";

function FoodForm() {
  // // State 선언부
  // const [title, setTitle] = useState();
  // const [calorie, setCalorie] = useState();
  // const [content, setContent] = useState();

  // // handler 선언부
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleCalorieChange = (e) => {
  //   // 칼로리는 숫자니까 형변환 필요
  //   const nextCalorie = Number(e.target.value) || 0;
  //   setCalorie(nextCalorie);
  // };
  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // 네트워크 연동은 아직 X
  };

  // 하나의 State로 관리하기
  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.title} name="title" onChange={handleChange}></input>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        value={values.calorie}
        type="number"
        name="calorie"
        onChange={handleInputChange}
      ></input>
      <input
        value={values.handleInputChange}
        name="content"
        onChange={handleInputChange}
      ></input>
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
