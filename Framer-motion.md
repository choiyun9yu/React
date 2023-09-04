# Framer-motion

Framer가 제공하는 리액트용 애니메이션 라이브러리

#### 기본 사용 방법

    # 프로젝트 생성
    $ npm init react-app .

    # 모듈 설치
    $ npm install framer-motion

motion.div와 같이 HTML태그 앞에 motion 카워드를 붙인다.  
이렇게 motion 키워드가 붙은 요소를 motion component라고 한다.  
초기 상태를 initial 속성에 객체 형태로 넣고,  
애니메이션 할 상태를 animation 속성에 객체 형태로 넣으면 된다.

#### 디렉토리 구조

-   projectName/src/tempalte : Footer.js, Logo.js, Refresh.js 들어 있는 디렉토리
-   projectName/src/App.js : import { module } from "framer-motion", 모션 컴포넌트 구현
-   index.js : 모션 컴포넌트가 보여지는 장소
-   projectName/src/style.css : css 코드 구현

## [Documents](https://www.framer.com/motion)
