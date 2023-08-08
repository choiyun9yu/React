import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';


const hand = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
}

// 컴포넌트 태그의 속성명과 파라미터의 변수명을 통일시켜줘야한다?
const HandIcon = function ({ value }) {
    const src = hand[value];
    const alt = `${value}`;
    return <img src={src} alt={alt} />
}

export default HandIcon;