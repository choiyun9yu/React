# React

## 환경 설정

- node.js 설치  
  버전확인 : node -v / npm -v

- 리액트 개발자 도구(react developer tools) 설치 <- 크롬 확장 도구  
  Component Tap : 이페이지에 존재하는 리액트 컴포넌트 보여준다.  
  Profiler Tap :

## 리액트 시작하기

- 프로젝트 생성(create-react-app)

  > npm init react-app .

- 프로젝트 시작

  > npm run start

- 프로젝트 종료
  > [터미널창] ^C

## 프로젝트 살펴보기

#### public 디렉토리

##### index.html

- 웹 브라우저에서 가장 먼저 실행되는 파일

##### index.js

- index.html 파일이 실행되고 나서 실행되는 리액트 코드들 중 가장 먼저 실행되는 파일
- render(JSX문법으로 HTML 그리기, 그린 HTML 넣어줄 장소) : 리액트에서 HTML 태그 만들어주는 메소드
- JSX : JS에서 HTML 코드를 쓸 수 있음 -> 그러나 사용하지 못하는 HTML 문법도 있음  
  class 키워드 대신에 className 사용, for 키워드 대신에 htmlFor 사용  
  onblur -> onBlur, onfocuse -> onFocus, onmousedown -> onMouseDown (카멜 표기법 사용)
  JSX 요소는 반드시 하나의 태그로 감싸야 한다. <- 주로 Fragment 태그(이름 없는 태그)사용

## 문법

#### JSX

#### Component

#### Props

#### Styled Components
