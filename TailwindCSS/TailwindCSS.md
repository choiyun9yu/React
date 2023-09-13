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

    font-bold

### 버튼

    styles.btn.left     // 이미 정의된 버튼

### 도형

    w-숫자  // 상대(rem) 단위로 너비 지정
    h-숫자  // 상대(rem) 단위로 높이 지정
    w-[숫자px]  // 절대 단위로 너비 지정
    h-[숫자px]  // 절대 단위로 높이 지정
    * rem : 부모요소의 몇배인지 지정

    w-2/3   // 너비를 부모요소의 2/3로 설정
    w-1/3   // 너비를 부모요소의 1/3으로 설정

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

### 오버플로우

    overflow-auto    // 오버플로우하는 경우 스크롤바를 표시
    overflow-hidden  // 오버플로우를 숨김
    overflow-x-auto  // x축 오버플로우가 발생하는 경우에만 스크롤바를 표시
    overflow-y-auto  // y축 오버플로우가 발생하는 경우에만 스크롤바를 표시
    overflow-scroll  // 오버플로우되는 경우 양쪽 스크롤바를 항상 표시

### 배치

    z-숫자  // z인덱스 설정 (요소 겹칠때 뭐가 위로 올지)

#### 위치

    transform-x-숫자    // 숫자만큼 x축 이동
    transform-y-숫자    // 숫자만큼 y축 이동

    -transform-x-숫자   // 숫자만큼 x축 역방향 이동
    -transform-y-숫자   // 숫자만큼 y축 역방향 이동
    * 숫자 자리에 1/2입력하면 부모요소의 절반

#### absolute : 절대 위치로 배치

    absolute    // 절대위치로 배치
    left-[숫자px]   // 요소를 왼쪽에서 숫자만큼 이동
    right-[숫자px]  // 요소를 오른쪽에서 숫자만큼 이동
    top-[숫자px]    // 요소를 위에서 숫자만큼 이동
    bottom-[숫자px] // 요소를 아래에서 숫자만큼 이동

#### relative : 부모요소 기준 절대 위치 배치

    부모 요소 클래스에 relative, 자식 요소 클래스에 absolute

### 정렬

#### flex

    flex
    flex-row    // 요소를 수평으로 배치
    flex-col    // 요소를 수직으로 배치

    justify-start   // 요소 배치 기준 맨 앞
    justify-end     // 요소 배치 기준 맨 뒤
    justify-between     // Flexbox 컨테이너 내의 자식 요소들을 좌우로 최대한 분산시킴

    flex-1  // Flexbox 컨테이너 내에서 가용 공간 동등하게 차지
    flex-2  // 해당 요소를 2배 확장하는데 사용 (가용 공간 주 2배 차지)
    flex-3  // 가용 공간중 3배 차지

#### grid

    grid
    col-span-1  // 그리드 컨테이너에서 요소가 1개의 열을 차지
    col-span-3  // 그리드 컨테이너에서 요소가 3개의 열을 차지

        # 예제
        <div class="grid grid-cols-3 gap-4">
        <div class="col-span-1 bg-blue-500">1</div>
        <div class="col-span-3 bg-red-500">2</div>
        <div class="col-span-1 bg-green-500">3</div>
        </div>

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
