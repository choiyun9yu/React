import "./Rating.css";

const RATINGS = [1, 2, 3, 4, 5];

// Star 컴포넌트는 별 하나를 보여주는 컴포넌트
// selected라는 프롭은 값이 참일 때 CSS클래스를 추가해서 색깔을 다르게 보여줄 것이다.
function Star({ selected = false, rating = 0, onSelect, onHover }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;

  // 별점을 클릭했을 때 실행할 함수
  // onSelect 프롭이 존재할 때만 동작
  const handleClick = onSelect ? () => onSelect(rating) : undefined;

  // 별 모양에 마우스를 올렸을 때 해당하는 별점 값으로 실행할 함수
  const handleMouesOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouesOver}
    >
      ★
    </span>
  );
}

// 별 5개를 보여주는 컴포넌트
function Rating({ className, value = 0, onSelect, onHover, onMouseOut }) {
  return (
    // <div>
    //   <Star selected={value >= 1} />
    //   <Star selected={value >= 2} />
    //   <Star selected={value >= 3} />
    //   <Star selected={value >= 4} />
    //   <Star selected={value >= 5} />
    // </div>

    // // 배열 렌더링을 적용해 코드 정리
    // <div>
    //   {RATINGS.map((rating) => (
    //     // 배열을 렌더링할 때 키값을 지정해야하는 이유? -> 교유한 식별자 같은 값을 가져야해서
    //     <Star key={rating} selected={value >= rating} />
    //   ))}
    // </div>

    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;
