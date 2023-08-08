// 버튼 태그안에 text 라는 프롭을 보여주는 컴포넌트
// function Button({ text }) {
//     return <button>{text}</button>;
// }

function Button({ children }) {
    return <button>{children}</button>;
}

export default Button;