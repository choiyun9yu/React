function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;
  console.log(item);
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
}

function FoodList({ items }) {
  return (
    <ul>
      {/* map 메소드로 items 안에 있는 객체마다 에로우 펑션 적용
      객체마다 FoodListItem의 JSX 반환 */}
      {items.map((items) => {
        return <FoodListItem item={items} />;
      })}
    </ul>
  );
}

export default FoodList;
