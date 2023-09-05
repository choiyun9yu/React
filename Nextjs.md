# Next.js

## What is Next.js

Client side rendering의 단점

-   초기 로딩이 느리다.
-   검색 엔진에 제공할 수 있는 정보가 적다.

######

Pre rendering

-   미리 렌더링해서 보낼 html을 서버에 저장해 놓거나, 서버가 그때그때 렌더링해서 html을 보내주는 것
-   프리렌더링을 위해선 서버가 필요, 주로 호스팅 서비스 이용 (Vercel로 서버 호스팅)

######

리액트를 위해 만든 프오ㄴ소스 자바스크립트 웹 프레임워크  
리액트에는 없는 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 증분 정적 재생성(ISR)과 같은 기능 제공  
수많은 내장 컴포넌트와 플러그인으로 확장가능하고 유지 보수가 쉬운 웹 앱 개발 지원  
파일 시스템 기반 라우팅(페이지 나누기) 가능  
리액트와 가증 큰 차이점, 리액트는 JS라이브러리이고 NEXT.js는 프레임 워크

## 1. Next.js 시작하기

### 1-1. 프로젝트 생성

Node.js, npm가 설치되어 있어야 한다.

    # 프로젝트 생성
    $ npx create-next-app [app-name]    // or yarn create-next-app [app-name]
    $ npx create-next-app .             // .은 해당 디렉토리를 루트로 잡고 생성

        ESLin : 코드 올바로 사용했는지 검사해주는 것
        App Router : 리액트 서버 컴포넌트를 사용해 페이지 만들 수 있음 (최근에 나온 것)
        Pages router : app router 안정화 될때 까지 지원 (이번 실습에서 사용)

    # npm을 기본으로 사용하고 싶은 경우
    $ npx create-next-app [app-name]--use-npm

    # 도커환경에서 실행하는 예시 보고싶은 경우
    $ npx create-next-app [app-name]--example with-docker

#### 타입스크립트 지원

프로젝트의 최상위 디렉터리 안에 tsconfig.json이라는 타입스크립트 설정 파일만들면 된다.

### 1-2. 프로젝트 구성

-   node_modules : 현 프로젝트에 필요한 노드 모듈 모아놓은 폴더
-   pages : 웹 사이트의 페이지들의 파일을 모아 놓은 폴더
    -   \_document.js : 공통된 html 코드를 지정할 수 있는 파일
-   public : next.js 프로젝트에서 전역적으로 사용하는 사진, 동영상들을 모아 놓은 폴더
-   styles : css 모아 놓은 폴더
-   next.config.js : 웹팩 번들링 및 api 통신을 할 때 사용
-   package.json : 현 프로젝트의 설정과 정보를 적어놓은 파일
    -   package.json : "script" 객체는 명령어 모음  
        (프로젝트 실행 : $ npm run dev // or yarn dev)

### 1-3. CSS 적용

#### ~/styles/Home.module.css

모듈 CSS 파일 만들기

    # 적용할 css, 프로퍼티 이름이
    .title {
        font-size: 120px;
    }

#### ~/pages/index.js

    # CSS 파일에서 정리한 클래스 이름이 styles의 프로퍼티로 들어가 있다.
    import styles from '../styles/Home.module.css';

    export default function Home() {
        return (
            <h1 className={styles.title}>
                안녕 Next.js!
            </h1>
        )
    }

### 1-4. 사이트 전체에 CSS 적용

#### ~/styles/global.css

    body {
        background-color: #121212;
        color: #f9f9f9;
    }

    a {
        color: #f9f9f9;
    }

#### ~/pages/\_app.js

    # 사이트 전체에 적용할 땐 이곳에서 정의 (상대경로)
    import '../styles/global.css'

    # @를 사용하면 프로젝트 최상위 폴더 기준으로 경로 설정 (절대경로)
    import '@s/styles/globall/css'

## 2. 라우팅

어떤 주소에 어떤 페이지를 보여줄지 정하는 것

#### React router

    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} / >
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
        </Route>
    </Route>

#### page router

파일시스템 기반 라우팅 : 파일의 경로가 주소에 매칭되는 라우팅 방식

## 3. 사이트 완성

## 4. 프리렌더링
