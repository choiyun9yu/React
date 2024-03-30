// 버튼 태그안에 text 라는 프롭을 보여주는 컴포넌트
// function Button({ text }) {
//     return <button>{text}</button>;
// }

// 1. style 객체
// const style = {
//     // 대시기호는 카멜 표기법으로
//     backgroundColor: 'pink',
// };

    // // 공통되는 부분
    // const baseButtonStyle = {
    //     padding: '14px 27px',
    //     outline: 'none',
    //     cursor: 'pointer',
    //     borderRadius: '9999px',
    //     fontSize: '17px',
    // };

    // // 다른 부분1
    // const blueButtonStyle = {
    //     // 공통 부분 스프레드로 가져오고
    //     ...baseButtonStyle,
    //     // 다르게 적용되어야 하는 부분만 추가
    //     border: 'solid 1px #7090ff',
    //     color: '#7090ff',
    //     backgroundColor: 'rgba(0, 89, 255, 0.2)',
    // };

    // // 다른 부분2
    // const redButtonStyle = {
    //     // 공통 부분 스프레드로 펼쳐주고
    //     ...baseButtonStyle,
    //     // 다르게 적용되어야 하는 부분만 추가
    //     border: 'solid 1px #ff4664',
    //     color: '#ff4664',
    //     backgroundColor: 'rgba(255, 78, 78, 0.2)',
    // };

    // 버튼 안에 온클릭 기능 들어간 컴포넌트
    // function Button({ color, children, onClick }) {
    //     const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    //     return (
    //     <button style={style} onClick={onClick}>
    //         {children}
    //     </button>
    //     );
    // }

// 2. css 파일
import './Button.css';

// prop 값에 className을 주면 컴포넌트 태그를 작성할 때 전달한 className이라는 prop이 
// 마치 HTML 태그의 className 속성을 사용하는 것 처럼 사용할 수 있다.
function Button({ children, onClick, color='blue', className='' }) {
    // color prop에 따라 스타일 객체 값이 바뀌는게 아니라 className 값이 달라지도록 설정
    const classNames = `Button ${color} ${className}`;    // 공백이 있어야 두개의 클래스임에 주의!
    return (
    <button className={classNames} onClick={onClick}>
        {children}
    </button>
    );
}

export default Button;
