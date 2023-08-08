// 버튼 태그안에 text 라는 프롭을 보여주는 컴포넌트
// function Button({ text }) {
//     return <button>{text}</button>;
// }

// style 객체
// const style = {
//     // 대시기호는 카멜 표기법으로
//     backgroundColor: 'pink',
// };

// 공통되는 부분
const baseButtonStyle = {
    padding: '14px 27px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '9999px',
    fontSize: '17px',
};

// 다른 부분1
const blueButtonStyle = {
    // 공통 부분 스프레드로 가져오고
    ...baseButtonStyle,
    // 다르게 적용되어야 하는 부분만 추가
    border: 'solid 1px #7090ff',
    color: '#7090ff',
    backgroundColor: 'rgba(0, 89, 255, 0.2)',
};

// 다른 부분2
const redButtonStyle = {
    // 공통 부분 스프레드로 펼쳐주고
    ...baseButtonStyle,
    // 다르게 적용되어야 하는 부분만 추가
    border: 'solid 1px #ff4664',
    color: '#ff4664',
    backgroundColor: 'rgba(255, 78, 78, 0.2)',
};

// 버튼 안에 온클릭 기능 들어간 컴포넌트
function Button({ color, children, onClick }) {
    const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    return (
    <button style={style} onClick={onClick}>
        {children}
    </button>
    );
}

export default Button;
