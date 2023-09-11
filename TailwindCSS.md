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

#### 가운데 정렬
