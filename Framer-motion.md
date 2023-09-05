# Framer-motion

**[Documents](https://www.framer.com/motion)** **[ref](https://kschoi.github.io/react/framer-motion/)**  
Framer가 제공하는 리액트용 애니메이션 라이브러리

## 시작하기

    # 프로젝트 생성
    $ npm init react-app .  // 프로젝트 루트 디렉토리에서
    $ npm create-react-app [projectName]

    $ yarn add framer-motion        // 모듈 추가
    $ npm install framer-motion     // 모듈이 없는 경우 설치

    # ~/src/App.js
    import { motion } from "framer-motion";

    export const MyCompoent = () => <motion.div animate= transition= />;

motion.div와 같이 HTML태그 앞에 motion 카워드를 붙인다.  
이렇게 motion 키워드가 붙은 요소를 motion component라고 한다.  
초기 상태를 initial 속성에 객체 형태로 넣고,  
애니메이션 할 상태를 animation 속성에 객체 형태로 넣으면 된다.

#### 디렉토리 구조

-   projectName/src/tempalte : Footer.js, Logo.js, Refresh.js 들어 있는 디렉토리
-   projectName/src/App.js : import { module } from "framer-motion", 모션 컴포넌트 구현
-   index.js : 모션 컴포넌트가 보여지는 장소
-   projectName/src/style.css : css 코드 구현

## API 둘러보기

### 1. animation : 간단하게 애니메이션 설정갑을 바로 사용할 수 있다.

    <motion.div animate= />

### 2. initial : 필요한 경우에 애니메이션 초기값을 지정한다.

    <motion.div initial= animate= />

### 3. transition : Motion은 애니메이션을 적용할 속성에 따라 적절한 트랜지션 기본값을 미리 제공한다.

예를 들어 x 또는 scale과 같은 프로퍼티는 spring을 사용한다. opacity나 color와 같은 프로퍼티는 tween을 사용한다.

    <motion.div animate= transition= />

#### 3-1. Srping

[example](https://csb-b3yhc.netlify.app/)

    <motion.div animate= transition= />

#### 3-2. Repeat and delay

[example](https://csb-gp4b9.netlify.app/)

    <motion.div animate= transition= />

#### 3-3. Dealy between repetitions

[example](https://csb-7zw1d.netlify.app/)

    <motion.div
    animate=
    transition=
    />

#### 3-4. Repeat type and Bezier curves

[example](https://csb-tz3ht.netlify.app/)

    <motion.div
    y={-90}
    animate=
    transition=
    />

#### 3-5. Repeating spring animations

[example](https://csb-vedl9.netlify.app/)

    <motion.div
    initial=
    animate=
    transition=
    />

### 4. Gestures

#### 4-1. hover : hover는 실제 마우스 기기 동작에 의해서만 발생하는 것을 보장

(브라우저의 마우스 이벤트가 터치 입력에서도 마우스 동작으로 간주되는 것과 상반된다.)

    <motion.a
    whileHover= // Animation helper
    onHoverStart={(event, info) => {}}
    onHoverEnd={(event, info) => {}}
    />

#### 4-2. tap : tap은 포인터가 동일한 컴포넌트를 눌렀다가 놓았을 때 감지

tap이 성공적으로 완료되면 tap 이벤트가 발생하고,  
tap이 컴포넌트 외부에서 종료되면 tapCancel 이벤트가 발생

만약에 tap이 가능한 컴포넌트가 draggable 컴포넌트의 자식이라면,  
3px 이상 포인터가 이동할 때 tap 제스처가 자동으로 취소

    function onTap(event, info) {
    console.log(info.point.x, info.point.y);
    }

    <motion.a
    whileTap= // Animation helper
    onTap={onTap}
    onTapStart={(event, info) => {}}
    onTapCancel={(event, info) => {}}
    />;

#### 4-3. pan : pan은 포인터가 구성 요소를 누르고 3px 이상 이동할 때 인식,

(pan 제스처는 포인터가 해제되면 종료된다.)

    function onPan(event, info) {
    console.log(info.point.x, info.point.y);
    }

<motion.a onPan={onPan} onPanStart={(event, info) => {}} onPanEnd={(event, info) => {}} />;

#### 4-4. Drag : drag는 pan의 규칙을 따르지만 컴포넌트의 x축/y축 포인터 이동을 적용

    <motion.div drag />

    // draggable 컴포넌트가 layout 애니메이션에도 사용되는 경우
    // drag 제스처가 x/y 변형 대신 컴포넌트 뷰포트 박스에 적용됩니다.
    <motion.div drag layout />

    // drag: 이동한 축을 설정합니다.
    <motion.div drag="x" /> //false(default), ture(both), x, y

    // dragConstraints: 이동 가능한 픽셀을 제한합니다.
    <motion.div
    drag="x"
    dragConstraints=
    />

    // dragConstraints: 다른 컴포넌트 ref로 제한할 수 있습니다.
    const MyComponent = () => {
    const constraintsRef = useRef(null)

    return (
        <motion.div ref={constraintsRef}>
            <motion.div drag dragConstraints={constraintsRef} />
        </motion.div>
    )
    }

    // dragElastic: 제한범위 바운더리에서의 움직임 허용치를 나타냅니다.
    <motion.div
    drag
    dragConstraints=
    dragElastic={0.2} // 0.5(default), 0(no movement), 1(full movement)
    />

    // dragMomentum: 드래그가 끝났을 때 pan 제스처 탄력을 적용합니다.
    <motion.div
    drag
    dragConstraints=
    dragMomentum={false} // treu(default), false
    />

    // dragTransition: 드래그 관성을 변경할 수 있습니다.
    <motion.div
    drag
    dragTransition=
    />

    // dragPropagation: drag 버블링 허용여부를 설정합니다.
    <motion.div drag="x" dragPropagation />

    // dragControls & useDragControls
    // 일반적으로 누르는 동작으로 컴포넌트가 드래그가 시작되고 움직입니다.
    // dragContrls는 다른 컴포넌트를 통해 드래그를 컨트롤할 때 유용합니다.
    const dragControls = useDragControls()

    function startDrag(event) {
    dragControls.start(event, { snapToCursor: true })
    }

    return (
    <>
        <div onPointerDown={startDrag} />
        <motion.div drag="x" dragControls={dragControls} />
    </>
    )

    // onDrag, onDragStart, onDragEnd
    <motion.div
    drag
    onDrag={
        (event, info) => console.log(info.point.x, info.point.y)
    }
    onDragStart={
        (event, info) => console.log(info.point.x, info.point.y)
    }
    onDragEnd={
        (event, info) => console.log(info.point.x, info.point.y)
    }
    />

    // dragDirectionLock
    <motion.div
    drag
    dragDirectionLock
    onDirectionLock={axis => console.log(axis)}
    />

## 컴포넌트

### 1. motion

motion 컴포넌트는 60fps 애니메이션과 제스처에 최적화된 DOM 기본 요소이다.  
모든 HTML, SVG 엘리먼트에 mtion.을 붙이면 motion 컴포넌트가 된다.

아무런 props도 전달하지 않으면 기본 엘리먼트처럼 동작하지만,  
props 전달을 통해 다양한 일을 할 수 있다.

-   컴포넌트 애니메이션
-   drag, pan, hover, tap 제스처 추가
-   제스처에 대한 애니메이션 응답
-   리액트 트리에 대해 variants를 통한 깊은 애니메이션 제공

### 2. animateSharedLayout : 레이아웃 애니메이션을 수행

#### 2-1. 상태를 공유하지 않는 컴포넌트 그룹 애니메이션

[example](https://codesandbox.io/embed/framer-motion-2-animating-shared-layouts-1cpd0?fontsize=14&hidenavigation=1&theme=dark)

    import { AnimateSharedLayout } from "framer-motion";

    function Item({ content }) {
    const [isOpen, setIsOpen] = useState(false);

    return <motion.div layout>{isOpen && content}</motion.div>;
    }

    function List({ items }) {
    /**
    * This wrapping motion.ul, and sibling
    * Item components won't animate layout
    * when an Item opens/closes
    */
    return (
        <motion.ul layout>
        {items.map((item) => (
            <Item content={item.content} />
        ))}
        </motion.ul>
    );
    }

    function List({ items, selectedId }) {
    return (
        <AnimateSharedLayout>
        <motion.ul layout>
            {items.map((item) => (
            <Item content={item.content} />
            ))}
        </motion.ul>
        </AnimateSharedLayout>
    );
    }

#### 2-2. layoutld를 공유하는 서로 다른 컴포넌트 애니메이션

[example](https://codesandbox.io/embed/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?fontsize=14&hidenavigation=1&theme=dark)

    import { motion, AnimateSharedLayout } from "framer-motion";
    import "./styles.css";

    export default function App() {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <AnimateSharedLayout>
        <ul>
            {colors.map((color) => (
            <Item key={color} color={color} isSelected={selected === color} onClick={() => setSelected(color)} />
            ))}
        </ul>
        </AnimateSharedLayout>
    );
    }

    function Item({ color, isSelected, onClick }) {
    return (
        <li className="item" onClick={onClick} style=>
        {isSelected && <motion.div layoutId="outline" className="outline" initial={false} animate= transition={spring} />}
        </li>
    );
    }

    const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

    const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    };

### 3. AnimatePresence : React 트리에서 컴포넌트가 제거될 때의 애니메이션을 처리

컴포넌트가 언마운트될 때를 알리고, 애니메이션이 끝날때까지 컴포넌트의 언마운트 시점을 미룰 수 있다.

    import { motion, AnimatePresence } from "framer-motion";

    export const MyComponent = ({ isVisible }) => <AnimatePresence>{isVisible && <motion.div initial= animate= exit= />}</AnimatePresence>;
