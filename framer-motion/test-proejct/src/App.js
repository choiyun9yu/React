import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

// Miscellaneous animate state
const show = {
    opacity: 1,
    display: 'block',
    y: '0%',
};

const hide = {
    opacity: 0,
    y: '-100%',
    // transitionEnds는 애니메이션이 종료 될 때 설정할 값을 지정
    transitionEnd: {
        display: 'none',
    },
};

export default function App() {
    // Transition e
    // x : 가로 이동
    // y : 세로 이동
    // rotate : 회전
    const [rotate, setRotate] = useState(0);

    // Miscellaneous
    const [isVisible, setIsVisible] = useState(true);

    // AnimatePresence
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                <p>motion.div className="box" animate=isVisible ? show : hide</p>
                <div>
                    <motion.button onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? 'Hide' : 'Show'}
                    </motion.button>
                    <div className="miscellaneousDiv">
                        <motion.div className="box" animate={isVisible ? show : hide} />
                    </div>
                </div>
            </div>
            <div>
                <h2>AnimatePresence</h2>
                <p>자식요소 관리 : 내부에 포함된 자식 요소들의 등장 및 퇴장은 관리, 자식요소가 추가되거나 삭제될 때</p>
                <p>
                    애니메이션 트리거 : 자식요소가 추가될 때 애니메이션을 시작하거나, 제거될 때 애니메이션을 완료하는
                    역할
                </p>
                <p>이를 위해 initail, animate, exit등의 속성을 설정하여 애니메이션 효과 정의</p>
                <p>isModalOpen && ( motion.div initial=opacity: 0, scale: 0.8 </p>
                <p>animate= opacity: 1, scale: 1</p>
                <p>exit= opacity: 0, scale: 0.8 </p>
                <p>motion.div className="box"</p>
                <p>motion.div )</p>
                <div>
                    <button onClick={toggleModal}>Toggle Modal</button>
                    <AnimatePresence>
                        {isModalOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <motion.div className="box" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <hr />
            <div>
                <h2> layout </h2>
                <p>요소의 레이아웃 변화를 애니메이션화하는데 사용되는 옵션 중 하나</p>
                <p>요소가 추가되거나 제거될때, 또는 크기와 위치가 변경될 때 애니메이션을 적용하는데 도움을 준다.</p>
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
