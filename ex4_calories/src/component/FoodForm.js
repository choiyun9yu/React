import { useState } from "react";
import FileInput from "./FileInput";
import { createFoods } from "../api";

const INITIAL_VALUES = {
  title: "",
  calorie: 0,
  content: "",
  imgFile: null,
};

function FoodForm({ onSubmitSuccess }) {
  // // State 선언부
  // const [title, setTitle] = useState();
  // const [calorie, setCalorie] = useState();
  // const [content, setContent] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("calorie", values.calorie);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createFoods(formData); // api.js에 있는 createFoods 함수로 전달
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { food } = result; // 이걸 foods로 하든 food로하든 차이가 있나?
    setValues(INITIAL_VALUES); // 리퀘스트가 끝나면 폼 초기화
    onSubmitSuccess(food); // submit 성공 결과를 onSubmitSuccess에 넘겨준다.
  };

  // 하나의 State로 관리하기
  const [values, setValues] = useState(INITIAL_VALUES);

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
      <button disabled={isSubmitting} type="submit">
        확인
      </button>
      {submittingError && <div>{submittingError.message}</div>}
    </form>
  );
}

export default FoodForm;
