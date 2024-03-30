import HandIcon from "./HandIcon";
import './HandButton.css'

// import circle from './assets/purple.svg';

// const style = {
//     width: '166px',
//     height: '166px',
//     border: 'none',
//     outline: 'none',
//     textAlign: 'center',
//     cursor: 'pointer',
//     backgroundColor: 'transparent',
//     backgroundImage: `url(${circle})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     backgroundSize: 'contain',
// }


// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick, className='' }) {
    const handleClick = () => onClick(value);
    return (
        <button className={className} onClick={handleClick}>
            <HandIcon className="HandButton-icon" value={value} />
        </button>
    );
}

export default HandButton;
