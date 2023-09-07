import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

// Miscellaneous
const show = {
    opacity: 1,
    display: 'block',
    y: '0%',
};

const hide = {
    opacity: 0,
    y: '-110%',
    // transitionEnds는 애니메이션이 종료 될 때 설정할 값을 지정
    transitionEnd: {
        display: 'none',
    },
};

export default function App() {
    // 2. transition 관련 useState
    // x : 가로 이동
    // y : 세로 이동
    // rotate : 회전
    const [rotate, setRotate] = useState(0);

    // Miscellaneous
    const [isVisible, setIsVisible] = useState(true);

    // CSS로 값 넘겨주기
    const [isTrue, setIsTrue] = useState(false);

    return (
        <>
            <h1>Framer-Motion</h1>
            <hr />
            <div>
                <h2> Motion Compoents </h2>
                <p>html 태그 앞에 motion. 붙이면 motion 컴포넌트가 된다.</p>
                <p>motion.div</p>
                <h2> Animate </h2>
                <p>initial = 초기값, animate = 에니메이션 적용값</p>
                <p>animate는 (렌더링 될 때?) initail에서 animate 값으로 변동</p>
                <p>motion.div className="circle" initial=opacity: 0 animate=opacity: 1</p>
                <motion.div className="circle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
            </div>
            <hr />
            <div>
                <h2> Transition </h2>
                <p>값이 한 상태에서 다른 상태로 애니메이션되는 방식을 정의</p>
                <p>기본적으로 제공하는 transition type이 존재, spring 같은 </p>
                <p>motion.div className="box" animate=rotate transition=type: 'spring'</p>
                <div>
                    <button onClick={(e) => setRotate(360)}> Click! </button>
                    <motion.div className="box" animate={{ rotate }} transition={{ type: 'spring' }} />
                </div>
                <p>motion.div className="box" animate=rotate transition=ease:'easeOut', duration: 2</p>
                <div>
                    <motion.div className="box" animate={{ rotate }} transition={{ ease: 'easeIn', duration: 2 }} />
                </div>
            </div>
            <div>
                <h2>Miscellaneous</h2>
                <div>
                    <div className="controls"></div>
                    <div className="Miscellaneous">
                        <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? 'Hide' : 'Show'}
                        </motion.button>
                        <motion.div className="box" animate={isVisible ? show : hide} />
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h2> layout </h2>
                <p>framer-motion에서 layout 속성을 사용하면 요소의 레이아웃 변화에 대한 애니메이션 적용 가능</p>
                <div></div>
            </div>
            <hr />
            <div>
                <h2> keyframe </h2>
                <div></div>
            </div>
            <hr />
            <div>
                <h2>Gesture</h2>
                <p>브라우저 이벤트인 Hover, Tap, Pan, Drag 감지</p>
                <div></div>
            </div>
            <hr />
            <div>
                <h1>CSS로 값 넘겨주기</h1>
                <p>js code : button className="cssBtn" onClick= () 에로우펑션 setIsTrue(!isTrue) data-isTrue=isTrue </p>
                <p>css code : .cssBtn[data-isTrue="true"], true일 때 동작하는 CSS선택자 </p>
                <button className="cssBtn" onClick={() => setIsTrue(!isTrue)} data-isTrue={isTrue}>
                    {' '}
                    {isTrue ? 'true : blue' : 'false : red'}
                </button>
            </div>
        </>
    );
}
