import "./FoodList.css";

function FoodListItem({ item, onDelete }) {
  // const { imgUrl, title, calorie, content, id } = item;
  const deleteClick = () => onDelete(item.id);
  console.log(`이게 아이디다 : ${item.id}`);

  return (
    <div>
      <img src={item.imgUrl} alt={item.title} />
      <div>{item.title}</div>
      <div>{item.calorie}</div>
      <div>{item.content}</div>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul>
      {/* map 메소드로 items 안에 있는 객체마다 에로우 펑션 적용
      객체마다 FoodListItem의 JSX 반환 */}
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FoodListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default FoodList;
