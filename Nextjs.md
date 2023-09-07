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

### 2-1. 페이지 나누기

프로젝트를 처음 만들면 pages라는 디렉토리가 있다. 여기에 JS파일을 만들면 그게 곧 페이지이다.  
JS파일에서 JSX를 반환하는 함수를 만들고 default export로 내보내면 된다.  
index.js는 Homepage(최상위 경로)에 해당하고 domain/[ js파일명 ]이 해당 페이지의 경로가 된다.

### 2-2. 다이나믹 라우팅

여러 주소를 하나의 페이지에서 처리하는 것  
pages/products/[ id ].js 처럼 대괄호로 폴더나 파일명을 묶어주면 파일명을 변수처럼 쓸 수 있게 된다. (param이라고 부름)

### 2-3. Link 컴포넌트

풀 리로드 하는 a태그 대신 필요한 데이터만 불러오는 Link 컴포넌트 사용

    // 사이트 내부 링크
    import Link from 'next/link';
    <Link href="경로">링크 이름</Link>

    // 사이트 외부 링크
    (a태그와 Link 컴포넌트 작동방식 차이 없음, 그냥 Link 쓰면 됨)

### 2-4. useRouter

사이트 주소에서 원하는 값 가져오고 싶을 때 사용

#### param값 가져오기

    # ~/pages/product/[id].js
    import { useRouter } from 'next/router';

    export default function Product() {
        // useRouter를 사용해서 router 객체를 만들고
        const router = useRouter();
        // .qurey을 사용해서 파일명에 있는 변수 값으로 받아온다.
        const { id } = router.query;

        return <div>Product {id} page</div>;
    }

#### query string 가져오기

localhost:3000/search?q=후디  
localhost:3000/search?q=티셔츠

    # ~/pages/search.js
    import { useRouter } from 'next/router';

    export default function Search() {
        const router = useRouter();
        const { q } = router.query;

        return (
            <div>
                <h1>Search Page</h1>
                <h2>{q} 검색결과 </h2>
            </div>
        );
    }

#### 페이지 이동하기

검색어를 입력하면 페이지 이동하는 기능

    # ~/components/SearchForm.js (검색 컴포넌트)
    import { useState } from 'react';
    import { useRouter } from 'next/router';

    export default function SearchForm() {
        const router = useRouter();
        const [value, setValue] = useState('');

        function handleChange(e) {
            setValue(e.target.value);
        }

        function handleSubmit(e) {
            // handleSubmit 함수에서는 preventDefault로 기본동작을 막고
            e.preventDefault();
            // router객체의 .push함수 사용
            if (!value) {
                // 검색어가 없을 때 Home으로 이동
                router.push('/');
                return;
            }
            router.push(`/search?q=${value}`);
        }

        return (
            // form 태그에서 검색 버튼을 누르면 onSumit 이벤트 발생 -> handleSumit 함수 실행
            <form onSubmit={handleSubmit}>
                <input name="q" value={value} onChange={handleChange} />
                <button>검색</button>
            </form>
        );
    }

    # ~/pages/search.js
    import SearchForm from '@/components/SearchForm';
    import { useRouter } from 'next/router';

    export default function Search() {
        const router = useRouter();
        const { q } = router.query;

        return (
            <div>
                <h1>Search Page</h1>
                <SearchForm />
                <h2>{q} 검색결과 </h2>
            </div>
        );
    }

### 2-5. API 연동하기

[Codeitmall API DOC](https://www.codeit.kr/tutorials/53/codeitmall-api-documentation)
[Watchit API DOC](https://www.codeit.kr/tutorials/55/watchit-api-documentation)

인스턴스를 만들어서 실행할 때 베이스 URL을 일일이 설정할 필요없이 경로만 설정하면 된다.

    // axios install
    $ npm install axios

    # @/lib/axios.js
    import axios from 'axios';

    const instance = axios.create({
        baseURL: 'https://learn.codeit.kr/api/codeitmall',
    })

    export default instance;

상품 상세페이지에서 router로 받은 id를 이용해서 request 보내기

    # @/pages/products/[ id ].js
    import { useRouter } from 'next/router';
    import { useState } from 'react';
    import '@/lib/axios';

    export default function Product() {
        const [product, setProduct] = useState();
        // useRouter를 사용해서 router 객체를 만들고
        const router = useRouter();
        // .qurey을 사용해서 id 값으로 받아온다.
        const { id } = router.query;

        async function getProduct(targetId) {
            const res = await axios.get(`/products/${targetId}`);
            const nextProduct = res.data;
            setProduct(nextProduct);
        }

        useEffect(() => {
            if (!id) return;

            getProduct(id);
        }, [id]);

        // 맨처음 product 값이 없을 때
        if (!product) return null;

        return (
            <div>
                <h1>{product.name}</h1>
                <img src={product.imgUrl} alt={product.name} />
            </div>
        );
    }

    # @/components/SizeReviewList.js
    // 사이즈 리뷰를 받아서 map 함수로 보여주는 컴포넌트
    function formatDate(date) {
        const MM = String(date.getUTCMonth() + 1).padStart(2, '0');
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const YYYY = String(date.getUTCFullYear());

        return `${YYYY}. ${MM}. ${dd}.`;
    }

    const labels = {
        sex: {
            male: '남자',
            female: '여자',
        },
        fit: {
            small: '작음',
            good: '적당함',
            big: '큼',
        },
    };

    export default function SizeReviewList({ sizeReviews }) {
        return (
            <ul>
                {sizeReviews.map((sizeReview) => (
                    <li key={sizeReview.id}>
                        <div>
                            <div>{formatDate(new Date(sizeReview.createdAt))}</div>
                            <div>
                                ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준) {sizeReview.size}
                            </div>
                        </div>
                        <div>{labels.fit[sizeReview.fit]}</div>
                    </li>
                ))}
            </ul>
        );
    }

### 2-6. 리다이렉트

### 2-7. 커스텀 404 페이지

### 2-8. Context 활용하기

### 2-9. API 라우팅

## 3. 사이트 완성

## 4. 프리렌더링
