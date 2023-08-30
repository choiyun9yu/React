import Rating from "./Rating";
import "./ReviewList.css";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
// import { useLocale } from "../contexts/LocaleContext";
import useTranslate from "../hooks/useTranslate";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  // context 값 가져오기
  // const locale = useContext(LocaleContext);
  // const locale = useLocale();   // 내가 만든 컴포넌트로 값 가져오기
  const t = useTranslate();

  // 여기서 onDelete()는 onDelete prop으로 내려받은 함수를 실행 것이다.
  // 자바스크립트에서 함수는 일급객체이기 때문에 변수에 함수를 전달할 수 있다.
  // 이 코드에서는 타고 올라가보면 handleDelete함수를 전달받았음을 알 수 있다.
  const handleDeleteClick = () => onDelete(item.id);

  // 수정 버튼 눌렀을 때 이벤트 핸들러
  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div>
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        {/* <p>{item.rating}</p> 숫자로 보여주던 평점을 Rating 컴포넌트로 바꾸기 */}
        <Rating value={item.rating} />
        {/*  mock.js에서 생성한 날짜를 나타내는 createdAt은 숫자형이다. */}
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        {/* <p>현재 언어 : {locale}</p> */}
        <button onClick={handleEditClick}>{t('edit button')}</button>
        <button onClick={handleDeleteClick}>{t('delete button')}</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess}) {
  // 글 수정 시 사용, 현재 수정중인 요소의 id를 저장할 값
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {/* // map 메소드는 콜백함수를 실행한 결과를 가지고 새로운 배열을 만들때 사용
      // map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작 */}
      {items.map((item) => {
        // 요소 렌더링 하는 부분에서 id가 editingId인 경우에만 reviewForm 렌더링
        if (item.id === editingId) {
          // 내려줄 initial value값 생성
          const { id, imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content, imgFile: null };
          const handleSubmit = (formData) => onUpdate(id, formData);
          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          }
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
