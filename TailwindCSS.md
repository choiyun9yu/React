# Tailwind CSS

[document](https://tailwindcss.com/docs/utility-first)

CSS Framework,  
HTML 태그의 class, react의 className으로 디자인하는 방법(?)

#### 유틸리티 우선

CSS를 작성하지 않고 유틸리티 클래스를 사용하여 맞춤형 디자인 구축 가능

-   클래스 이름을 만드는 데 에너지를 낭비하지 않게 된다.
-   새로운 CSS를 작성할 필요가 거의 없다.
-   HTML class는 로컬이므로 변화에 두려움이 낮아진다.

#### 호버, 포커스 및 기타 상태

조건부 수정자를 사용하여 마우스 오버, 포커스 등과 같은 대화형 상태에서 요소 스타일 지정 가능

#### 반응형 디자인

반응형 수정자를 사용하여 모든 화면 크기에 적응하는 완벽하게 반응하는 사용자 인터페이스 구축

#### 다크 모드

다크 모드 수정자를 사용하여 HTML에서 직접 다크 모드에 맞게 사이트를 최적화

#### 스타일 재사용

재사용 가능한 추상화를 생성하여 중복을 관리하고 프로젝트를 유지 관리 가능하게 유지

#### 사용자 정의 스타일 추가

브랜드에 맞게 프레임워크를 사용자 정의하고 자신만의 사용자 정의 스타일 확장 가능

#### 기능 및 지시어

## install

    $ sudo apt-get install -y nodejs npm
    $ sudo npm install npm
    $ sudo npm install -g n
    $ sudo n stable
    $ hash -r

## 프로젝트 생성

    $ npx create-react-app [projectname]
    $ cd [projectName]

    # tailwindcss와 크로스브라우징을 대응 해주는 postcss autoprefixer를 함께 설치
    $ npm install -D tailwindcss postcss autoprefixer

    # 초기화 설정 파일을 생성
    $ npx tailwindcss init -p

**tailwind.config.js** # 템플릿 경로 설정
module.exports = {
// 템플릿 파일의 경로 설정 👀
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

**./src/index.css** # Tailwind 지시문 CSS에 추가하기
@tailwind base;
@tailwind components;
@tailwind utilities;

**./src/App.js**
import "tailwindcss/tailwind.css";

**tailwind.config.js**
module.exports = {
// 템플릿 파일의 경로 설정 👀
purge:[ './src/**/*.{js,jsx,ts,tsx}' ],
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

**VScode extention인 Tailwind CSS IntelliSense 설치**

    # 프로젝트 시작
    $ npm run start

[Tailwind css 사용법](https://wonny.space/writing/dev/hello-tailwind-css)
[Tailwind template](https://www.tailwindawesome.com/?price=free&type=template)

## 언어별로 폰트 다르게 적용하기

**@font-face 지시어** : 웹 버라우저에게 서체 이름과 다운받을 위치를 알려준다.

**font-family** : 방문자에게 대체 폰트를 알려준다

    body {
        font-family: 'Times New Roman', Times, Arial, Helvetica, sans-serif;
    }

#### Web Font 문법

**index.css**

**tailwind.config.js**

#### 언어별 unicode

-   영문 (대문자) : U+0041-005A
-   영문 (소문자) : U+0061-007A
-   숫자 : U+0030-0039
