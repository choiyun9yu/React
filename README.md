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

### 1. public 디렉토리
#### 1-1. projectName/public/index.html
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

#### 1-2. projectname/src/index.js


index.html 파일이 실행되고 나서 실행되는 리액트 코드들 중 가장 먼저 실행되는 파일


- render(JSX문법으로 HTML 그리기, 그린 HTML 넣어줄 장소) : 리액트에서 HTML 태그 만들어주는 메소드
- JSX : JS에서 HTML 코드를 쓸 수 있음 -> 그러나 사용하지 못하는 HTML 문법도 있음  
  class 키워드 대신에 className 사용, for 키워드 대신에 htmlFor 사용  
  onblur -> onBlur, onfocuse -> onFocus, onmousedown -> onMouseDown (카멜 표기법 사용)
  JSX 요소는 반드시 하나의 태그로 감싸야 한다. <- 주로 Fragment 태그(이름 없는 태그)사용

## 문법

- 문법이 맞는데 기능이 적용이 안되는 경우 -> 리액트를 내렸다가 다시 올리면 되기도 한다.

#### JSX

#### Component

#### Props

#### Styled Components

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
