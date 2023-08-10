import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import { createReview } from "../api";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

// submit하고 받아온 response를 사용하기 위해서 prop 추가
function ReviewForm({ onSubmitSuccess }) {
  // 리액트에서 인풋과 스테이 값을 일치시키는 것이 핵심 포인트이다.
  // const [title, setTitle] = useState(); // 제목
  // const [rating, setRating] = useState(); // 점수
  // const [content, setContent] = useState(); // 리뷰 내용

  // 이 이벤트 핸들러에서는 input의 value가 변경될 때마다 그 값을 state에 반영
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleRatingChange = (e) => {
  //   // Rating은 숫자니까 여기서 형변환 해줘야한다.
  //   const nextRating = Number(e.target.value) || 0;
  //   setRating(nextRating);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  // 하나의 State로 입력값 관리하기
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 여기서 handleInputChange와 handleChange로 추상화 하는 이유는
  // handleInputChange 핸들러는 인자를 e 하나만 받는다.
  // 반면 아래로 내려보내야하는 handleCahnge 핸들러는 name, value 두개를
  // 인자로 받아야한다. 그래서 핸들러가 두개가 된 것이다.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // 비동기 함수로 바꾸기
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 네트워크 연동
    const formData = new FormData(); // 새 FormData 인스턴스 생성
    formData.append("title", values.title); // 각 필드 값 지정
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createReview(formData); // api.js에 있는 createReview 함수로 전달
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    setValues(INITIAL_VALUES); // 리퀘스트가 끝나면 폼 초기화
    onSubmitSuccess(review); // submit 성공 결과를 onSubmitSuccess에 넘겨준다.
  };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       {/* <input value={title} onChange={handleTitleChange}></input>
  //       <input type="number" value={rating} onChange={handleRatingChange}></input>
  //       <textarea value={content} onChange={handleContentChange}></textarea> */}
  //       <FileInput
  //         name="imgFile"
  //         value={values.imgFile}
  //         onChange={handleChange}
  //       />
  //       <input name="title" value={values.title} onChange={handleInputChange} />
  //       <RatingInput
  //         name="rating"
  //         value={values.rating}
  //         onChange={handleChange}
  //       />
  //       <textarea
  //         name="content"
  //         value={values.content}
  //         onChange={handleInputChange}
  //       ></textarea>
  //       <button type="submit">확인</button>
  //     </form>
  //   );
  // }

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button disabled={isSubmitting} type="submit">
        확인
      </button>
      {submittingError && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
