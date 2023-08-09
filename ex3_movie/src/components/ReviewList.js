import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item }) {
  return (
    <div>
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        {/*  mock.js에서 생성한 날짜를 나타내는 createdAt은 숫자형이다. */}
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function ReviewList({ items }) {
  console.log(items);
  return (
    <ul>
      {/* // map 메소드는 콜백함수를 실행한 결과를 가지고 새로운 배열을 만들때 사용
      // map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작 */}
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
