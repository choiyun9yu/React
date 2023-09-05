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

#### animation : 간단하게 애니메이션 설정갑을 바로 사용할 수 있다.

#### initial : 필요한 경우에 애니메이션 초기값을 지정한다.

#### transition : Motion은 애니메이션을 적용할 속성에 따라 적절한 트랜지션 기본값을 미리 제공한다.

예를 들어 x 또는 scale과 같은 프로퍼티는 spring을 사용한다. opacity나 color와 같은 프로퍼티는 tween을 사용한다.

#### Srping
