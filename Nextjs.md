# Next.js

## 1. What is Next.js
리액트를 위해 만든 프오ㄴ소스 자바스크립트 웹 프레임워크  
리액트에는 없는 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 증분 정적 재생성(ISR)과 같은 기능 제공  
수많은 내장 컴포넌트와 플러그인으로 확장가능하고 유지 보수가 쉬운 웹 앱 개발 지원  
리액트와 가증 큰 차이점, 리액트는 JS라이브러리이고 NEXT.js는 프레임 워크

## 2. About Proejct

### 2-1. 프로젝트 생성
Node.js, npm가 설치되어 있어야 한다.

    # 프로젝트 생성
    $ npx create-next-app [app-name]    // or yarn create-next-app [app-name]
    
    # npm을 기본으로 사용하고 싶은 경우    
    $ npx create-next-app [app-name]--use-npm   

    # 도커환경에서 실행하는 예시 보고싶은 경우    
    $ npx create-next-app [app-name]--example with-docker   # 

### 2-2. 프로젝트 구성
- node_modules : 현 프로젝트에 필요한 노드 모듈 모아놓은 폴더
- pages : 웹 사이트의 페이지들의 파일을 모아 놓은 폴더
- public : next.js 프로젝트에서 전역적으로 사용하는 사진, 동영상들을 모아 놓은 폴더
- styles : css 모아 놓은 폴더
- next.config.js : 웹팩 번들링 및 api 통신을 할 때 사용
- package.json : 현 프로젝트의 설정과 정보를 적어놓은 파일


### 2-3. 프로젝트 실행

    $ npm run dev // or yarn dev
    
#### 타입스크립트 지원
프로젝트의 최상위 디렉터리 안에 tsconfig.json이라는 타입스크립트 설정 파일만들면 된다.

    $ npm run dev

ssh-rsa 

