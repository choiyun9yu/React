// 버튼 태그안에 text 라는 프롭을 보여주는 컴포넌트
// function Button({ text }) {
//     return <button>{text}</button>;
// }

// 버튼 안에 온클릭 기능 들어간 컴포넌트
function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}

export default Button;
