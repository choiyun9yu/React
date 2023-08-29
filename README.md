# React

## 0. 환경 설정

- node.js 설치  
- 버전확인 : node -v / npm -v
- 리액트 개발자 도구(react developer tools) 설치 <- 크롬 확장 도구  
  Component Tap : 이페이지에 존재하는 리액트 컴포넌트 보여준다.  
  Profiler Tap :

## 1. 리액트 시작하기

**프로젝트 생성(create-react-app)**

    $ npm init react-app .

**프로젝트 시작**

    $ npm run start

**프로젝트 종료**
 
    ^C

**프로젝트 빌드**

    $ npm run build
    $ npx serve -s build

## 2. 프로젝트 살펴보기

### 2-1. project-name/public/index.html
웹 브라우저에서 가장 먼저 실행되는 파일

    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>[Page Name]</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>

### 2-2. project-name/src/index.js

index.html 파일이 실행되고 나서 실행되는 리액트 코드들 중 가장 먼저 실행되는 파일

    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css';   // js 파일에 css 파일 삽입하기 -> html head 태그안에 자동 작성됨

    // JSX로 작성한 코드가 나타날 위치 설정
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);   // render() 메소드 안에 JSX문법으로 HTML 그리기

## 3. 개념

### 3-1. JSX
- JS에서 HTML 코드를 쓸 수 있음 -> 그러나 사용하지 못하는 HTML 문법도 존재
- class 키워드 대신에 className 사용, for 키워드 대신에 htmlFor 사용
- onblur -> onBlur, onfocuse -> onFocus, onmousedown -> onMouseDown (카멜 표기법 사용)
- JSX 요소는 반드시 하나의 태그로 감싸야 한다. <- 주로 Fragment 태그(이름 없는 태그)사용
- 중괄호로 감싸주면 HTML 내에서 JS 사용가능, 표현식 O, if문이나 for문 함수 선언 X 

### 3-2. Component
- 함수의 첫글자는 대문자
- JSX문법으로 만든 리액트 엘리먼트를 리턴
- 리엑트 엘리먼트를ReactDOM의 render 메소드로 전달하면 HTML 렌더링 가능를
- 리액트 엘리먼트를 함수 형태로 만들면 JSX 문법을 작성할 때 커스텀 태그처럼 활용 가능

### 3-3. Props
- 컴포넌트에 지정한 속성
- 컴포넌트에 지정한 프롭은 객체 형태로 컴포넌트 함수의 첫번째 파리미터로 전달

#### children
- JSX 문법으로 컴포넌트를 작성할 때 여는 태그와 닫는 태그의 형태로 작성하면 그안에 작성된 코드가 children 값에 대입된다.
- 리액트에 기본적으로 존재하는 프롭, 컴포넌트의 자식들을 값으로 갖는 프롭
- 컴포넌트 함수에서 따로 가공하지 않고, 단순히 보여주기만 할 모습은 child Prop으로 표현

### 3-4. State
리액트에서 변수 같은것, state를 바꾸면 리액트가 알아서 화면을 새로 렌더링  
  
    import { useState } from "react";
    const [stateName, stateSetter] = useState([init value]);

#### 참조형 State
참조형 State는 참조형 자체를 값으로 갖는게 아니라, 그 참조형을 가리키고 있는 주소값을 가짐  


#### State Lifting

### 3-5. 스타일

#### 인라인 스타일

#### CSS 클래스로 컴포넌트 디자인


## 4. 

















## VScode Tip

- 멀티커서 선택1 : 단어 위에 커서를 올린 뒤 [cmd + shift + L]  
  (더블클릭하면 대소문자 상관없이 단어만 같으면 하이라이팅 된다)
- 멀티커서 선택2 : [option + click]
- 찾아바꾸기 : 단어 위에 커서를 올린 뒤 [ F2 ]
- 해당 파일로 이동 : [cmd + click]
- 줄 이동 : [option + 방향키 위/아래]
- 줄 복사 : [option + shift + 방향키 위/아래]

#### Prettier : 코드 정렬 (코드 포매터)

- VScod Extention : Prettier 설치 -> 좌화단 톱니바퀴 설정버튼 -> Settings  
  -> formatt 검색 -> Default Formatter : Prettier  
  -> Format On Save 검색 -> 체크

## React Router
리액트 컴포넌트로 페이지를 나누고 이동하는 라이브러리  

- 페이지 나누기  
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="courses" element={<CourseListPage />} />
  <Route path="courses/1" element={<CoursePage />}/>
  <Route patrh="*" element={<NotFoundPage />} />
</Routes>

- 페이지 이동
<Link to="/">홈페이지</Link>
<Link to="/course">수업 탐색</Link>
<Link to="/questions">커뮤니티</Link>

#### 핵심 컴포넌트
- Router : React Router에서 사용하는 데이터를 모두 갖고 있는 녀석, 현재 주소, 페이지 기록 등 보통 최상위 컴포넌트에서 감싸서 사용한다.
- Routes, Route :  Routes 컴포넌트 아래에서 Route 컴포넌트로 페이지의 경로랑 보여줄 컴포넌트를 지정한다. 
- Link : 리액트 라우터에서 a태그 대신에 사용한다.

#### 리액트 라우터 설치
- package.json이 있는 폴더에서 터미널을 열고 npm install <패키지이름>
- 리액트 라우터의 패키지 이름은 npm (@6의 의미는 버전을 6전대로 설치하겠다는 의미이다.)
