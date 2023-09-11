# Tailwind CSS

[document](https://tailwindcss.com/docs/utility-first) / [icon](https://heroicons.com/) /
[Tailwind css 사용법](https://wonny.space/writing/dev/hello-tailwind-css) / [Tailwind template](https://www.tailwindawesome.com/?price=free&type=template)
CSS Framework, HTML 태그의 class, react의 className으로 디자인하는 방법

## 1. 프로젝트 시작하기

### 1-1. install

    $ sudo apt-get install -y nodejs npm
    $ sudo npm install npm
    $ sudo npm install -g n
    $ sudo n stable
    $ hash -r

### 1-2. 프로젝트 생성

    $ npx create-react-app [projectname]
    $ cd [projectName]

    # tailwindcss와 크로스브라우징을 대응 해주는 postcss autoprefixer를 함께 설치
    $ npm install -D tailwindcss postcss autoprefixer

    # 초기화 설정 파일을 생성
    $ npx tailwindcss init -p

#### tailwind.config.js

    # 템플릿 경로 설정
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

#### ./src/index.css

    # Tailwind 지시문 CSS에 추가하기
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

#### ./src/App.js

    import "tailwindcss/tailwind.css";

#### tailwind.config.js

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

#### VScode extention인 Tailwind CSS IntelliSense 설치

    # 프로젝트 시작
    $ npm run start

## 2. Tailwind CSS 사용하기

### 텍스트

    text-색깔-100~950   // 글씨 색깔
    text-lg             // 글씨 크기

### 도형

    w-숫자  // 상대(rem) 단위로 너비 지정
    h-숫자  // 상대(rem) 단위로 높이 지정
    w-[숫자px]  // 절대 단위로 너비 지정
    h-[숫자px]  // 절대 단위로 높이 지정
    * rem : 부모요소의 몇배인지 지정

    w-full
    h-full

    border-숫자  // 경계선 두게 지정
    border-색깔  // 경계선 색깔 지정

    rounded-md   // 둥근 모서리
    rounded-full // 원 모양

    bg-색깔      // 배경색
    opacity-숫자 // 불투명도
    shadow       // 그림자 효과 추가

### 마진, 패딩

    m-숫자    // 마진
    ml-숫자   // 왼쪽 마진
    mr-숫자   // 오른쪽 마진
    mt-숫자   // 위쪽 마진
    mb-숫자   // 아래쪽 마진
    mx-숫자   // x축 마진(auto 옵션 있음)
    my-숫자   // y축 마진(auto 옵션 있음)
    * m 대신 p를 쓰면 패딩 크기가 된다.

### 배치

    z-숫자  // z인덱스 설정 (요소 겹칠때 뭐가 위로 올지)

#### absolute : 절대 위치로 배치

### 정렬

#### flex

#### grid

#### 가운데 정렬

    # Flexbox 이용
    <div class="flex justify-center items-center">
        <!-- 내용 -->
    </div>

    # Grid 이용
    <div class="grid place-items-center">
        <!-- 내용 -->
    </div>

### 이벤트

    hover:bg-red-700    // 호버 배경 빨간색
