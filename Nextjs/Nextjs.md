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

    # 개발서버 켜기
    $ npm run dev

    # 빌드하기
    $ npm run build // 실행 가능한 형태로 코드 변환하는 과정

    # 실행하기
    $ npm run start

#### 배포하기 : Vercel 서비스 이용하면 간편하게 배포 가능

-   [Vercel](https://vercel.com/) 회원가입,
-   Github와 연동해서 사용하려는 경우 반드시 GitHub로 가입
-   Github에서 Vercel 앱 설치 팝업이 뜨면 설치
-   그럼 내 리포지토리 목록이 Vercel에서 보인다. 배포할 리포지토리 import
-   Domains에 적혀있는 주소로 접속하면 배포된 앱 확인 가능

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

#### @/styles/Home.module.css

모듈 CSS 파일 만들기

    # 적용할 css, 프로퍼티 이름이
    .title {
        font-size: 120px;
    }

#### @/pages/index.js

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

#### @/styles/global.css

    body {
        background-color: #121212;
        color: #f9f9f9;
    }

    a {
        color: #f9f9f9;
    }

#### @/pages/\_app.js

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

#### @/pages/products/[ id ].js

    import { useRouter } from 'next/router';
    import { useEffect, useState } from 'react';
    import axios from '@/lib/axios';
    import SizeReviewList from '@/components/SizeReviewList';

    export default function Product() {
        const [product, setProduct] = useState();
        const [sizeReviews, setSizeReviews] = useState([]);
        // useRouter를 사용해서 router 객체를 만들고
        const router = useRouter();
        // .qurey을 사용해서 id 값으로 받아온다.
        const { id } = router.query;

        // api에서 Product 데이터를 받아오는 비동기 함수
        async function getProduct(targetId) {
            const res = await axios.get(`/products/${targetId}`);
            const nextProduct = res.data;
            setProduct(nextProduct);
        }

        async function getSizeReviews(targetId) {
            const res = await axios.get(`/size_reviews/?product_id/${targetId}`);
            const nextSizeReivews = res.data.results ?? []; // 값이 없을 수 있어서 빈배열처리
            setSizeReviews(nextSizeReivews);
        }

        // 렌더링이 끝난 후 그리고 id값이 바뀔 때 비동기적으로 실행
        useEffect(() => {
            if (!id) return;

            // 렌더링이 끝난 후 실행
            getProduct(id);
            getSizeReviews(id);
        }, [id]); // id 값이 바뀔때마다 실행

        // 맨처음 product 값이 없을 때, 아무것도 렌더링하지 않음
        if (!product) return null;

        return (
            <div>
                <h1>{product.name}</h1>
                <img src={product.imgUrl} alt={product.name} />
                <SizeReviewList sizeReviews={sizeReviews} />
            </div>
        );
    }

#### @/components/SizeReviewList.js

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

#### @/components/ProductList.js

    import Link from 'next/link';
    import styles from '@/styles/ProductList.module.css';

    // products 인자의 기본값은 빈배열, 빈배열인 경우 아무것도 매핑하지 않음
    export default function ProductList({ products = [] }) {
        return (
            <ul className={styles.productList}>
                {products.map((product) => (
                    <li key={product.id}>
                        {/* Link 가 있어서 클릭하면 각 상품의 주소로 이동 */}
                        <Link className={styles.product} href={`/products/${product.id}`}>
                            <img src={product.imgUrl} width="300" height="300" alt={product.name} />
                            <span className={styles.productName}>{product.name}</span>
                            <br />
                            {product.price}원
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

#### @/pages/index.js

    import SearchForm from '@/components/SearchForm';
    import { useState, useEffect } from 'react';
    import axios from '@/lib/axios';
    import ProductList from '@/components/ProductList';

    export default function Home() {
        const [products, setProducts] = useState([]);

        async function getProducts() {
            const res = await axios.get('/products');
            const nextProducts = res.data.results;
            setProducts(nextProducts);
        }

        useEffect(() => {
            getProducts();
        }, []);

        return (
            <>
                <h1>Codeitmall</h1>
                <SearchForm />
                <ProductList products={products} />
            </>
        );
    }

#### @/pages/search.js

    import ProductList from '@/components/ProductList';
    import SearchForm from '@/components/SearchForm';
    import { useRouter } from 'next/router';
    import { useEffect, useState } from 'react';
    import axios from '@/lib/axios';

    export default function Search() {
        const [products, setProducts] = useState([]);
        const router = useRouter();
        const { q } = router.query;

        async function getProducts(query) {
            const res = await axios.get(`/products/?q=${query}`);
            const nextProducts = res.data.results;
            setProducts(nextProducts);
        }

        useEffect(() => {
            getProducts(q);
        }, [q]);

        return (
            <div>
                <h1>Search Page</h1>
                <SearchForm />
                <h2>{q} 검색결과 </h2>
                <ProductList products={products} />
            </div>
        );
    }

### 2-6. 리다이렉트

-   host/products/[ id ] 이런 주소를 host/items/[ id ]이런 주소로 바꾸는 경우 next.js에서는 pages의 파일명만 바꿔주면 된다.
-   방문자 중 옛날 주소를 즐겨찾기해둔 사람이 있을 수 있다. 이런 사람들이 products로 요청하는 것을 items로 바꿔주는 것이 리다이렉트이다.
-   리다이렉트 함수는 객체를 배열로 리턴하는 함수이다.

#### @/next.config.js : 이 파일은 next.js 서버를 설정하는 파일

[redirects-Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

    /** @type {import('next').NextConfig} */
    const nextConfig = {
        reactStrictMode: true,
        // 리다이렉트 여기에 추가, 서버 껏다가 다시켜야 적용됨
        async redirects() {
            return [
                {
                    // 리다이렉트 처리할 주소
                    source: '/products/:id',
                    // 이동시킬 주소, :id는 param의 이름
                    destination: '/items/:id',
                    // permanent는 response states 코드를 정한다. 주소가 바뀌었음을 알리려면 true 아니면 false
                    permanent: true,
                },
            ];
        },
    };

    module.exports = nextConfig;

### 2-7. 커스텀 404 페이지

**@/pages/404.js** 여기에 보여주고 싶은 커스텀 페이지 만들면 된다.

### 2-8. App과 Document

#### @/pages/\_app.js

우리가 만든 모든 컴포넌트를 감싸고 있는 컴포넌트, 여기에 코드 작성하면 모든 페이지에 적용

    import Container from '@/components/Container';
    import '@/styles/global.css';

    // Component라는 prop은 Next.js 페이지라고 생각하면 된다
    export default function App({ Component, pageProps }) {
        return (
            <>
                <Header />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
        );
    }

#### @/pages/\_document.js

HTML의 뼈대를 만드는 컴포넌트, 서버에서 렌더링할 때만 이 컴포넌트 실행  
사이트 전체에 적용할 HTML 코드 작성하는 곳

### 2-8. Context 활용하기 (라이트모드 다크모드)

Context : 사용자가 한국어를 사용하는 상황, 영어를 사용하는 상황, 라이트모드, 다크모드 등  
여러 컴포넌트에 공유하고 싶을 때 사용한다.  
Props만으로 리액트 개발을 하다 보면 여러 곳에 쓰이는 데이터를 내려주고 싶을 때가 있다.  
이때 컴포넌트의 단계가 많다면 여러 번 반복해서 Prop을 내려야한다.  
이런 문제를 프롭 드릴링이라고 하는데 Context는 이를 해결해 준다.

    # Context 만들기
    import { createContext } from 'react';
    const LocaleContext = createContext();  // 이때 useState처럼 기본값 설정 가능

    # Context 사용하기
    function Board() {
    const locale = useContext(LocaleContext);
    return <div>언어: {locale}</div>;
    }

    function App() {
    return (
        <div>
        ... 바깥의 컴포넌트에서는 LocaleContext 사용불가

        <LocaleContext.Provider value="en">
            ... Provider 안의 컴포넌트에서는 LocaleContext 사용가능
        </LocaleContext.Provider>
        </div>
    );
    }

#### State, Hook과 함께 사용하기

Provider 역할을 하는 컴포넌트를 하나 만들고, 여기서 State를 만들어서 value로 넘겨줄 수 있다.  
그리고 아래 useLocale 같이 useContext를 사용해서 값을 가져오는 커스텀 Hook을 만들 수 있다.  
이렇게 하면 Context에서 사용하는 State값은 반드시 우리가 만든 함수를 통해서만 쓸 수 있기 때문에 안전하다.

#### @/pages/\_app.js

    import { createContext, useContext, useState } from 'react';
    const LocaleContext = createContext({});

    export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState();
    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
        </LocaleContext.Provider>
    );
    }

    export function useLocale() {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
    }

    const { locale } = context;
    return locale;
    }

    export function useSetLocale() {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다');
    }

    const { setLocale } = context;
    return setLocale;
    }

#### 실습코드

사이트 전체에 Context 적용할 때 app컴포넌트에 작성해 테마 적용 가능하다.

    # @/lib/ThemeContext.js

    import { createContext, useContext, useEffect, useState } from 'react';

    export const ThemeContext = createContext();

    export function ThemeProvider({ children }) {
        const [theme, setTheme] = useState('dark');

        // theme 값이 바뀔 때마다 바디태그의 classList 수정
        useEffect(() => {
            //
            document.body.classList.add(theme);

            return () => {
                document.body.classList.remove(theme);
            };
        }, [theme]);

        return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
    }

    export function useTheme() {
        const themeContext = useContext(ThemeContext);
        if (!themeContext) {
            throw new Error('ThemeContext 안에서 써야 합니다');
        }

        return themeContext;
    }

    # @/pages.js/setting.js

    import Dropdown from '@/components/Dropdown';
    import { useTheme } from '@/lib/ThemeContext';
    import styles from '@/styles/Setting.module.css';

    export default function Setting() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
        <h1 className={styles.title}>설정</h1>
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>테마 설정</h2>
            <Dropdown
            className={styles.input}
            name="theme"
            value={theme}
            onChange={(name, value) => setTheme(value)}
            options={[
                { label: '라이트', value: 'light' },
                { label: '다크', value: 'dark' },
            ]}
            />
        </section>
        </div>
    );
    }

## 3. 사이트 완성

**@/public/** 디렉토리 안에 있는 파일은 **host/파일명** 으로 접근할 수 있다.

### 3-1. Image 컴포넌트 (이미지 최적화 컴포넌트)

-   원본 이미지가 Next.js 서버를 거쳐서 최적화된다.
-   레이지 로딩 지원(이미지가 필요할 때 로딩, 초기 렌더링 속도 줄여줌) 한다.

#### @/pages/test.js

    import Image from 'next/image';

    export default function Test() {
        return (
            <>
                {/* html 태그 */}
                <img src="/images/product.png" width="400" height="400" alt="상품 이미지" />
                {/* image 컴포넌트, 주소를 바꿔주고 이미지 원본을 최적화해서 가져옴 */}
                <Image src="/images/product.png" width="400" height="400" alt="상품 이미지" />
            </>
        );
    }

-   반드시 width와 heigth로 이미지 사이즈 지정해야 한다.
-   fill이라는 속성은 조상 요소에 꽉차게 이미지 사이즈를 조정해 준다.
-   이때 조상요소는 포지셔닝된 요소여야한다. (Image 컴포넌트를 div로 감싸고 div 포지션을 잡아주면 된다.)
-   이미지 비율이 망가지는 것을 방지하기 위해 objectFit 을 사용할 수 있다.

#### @/pages/test.js

    import Image from 'next/image';

    export default function Test() {
        return (
            <>
                <div
                    style={{
                        position: 'relative',
                        width: '50%',
                        height: '200px',
                    }}
                >
                    <Image
                        fill
                        src="/images/product.png"
                        alt="상품 이미지"
                        style={{
                            objectFit: 'cover', //
                        }}
                    />
                </div>
            </>
        );
    }

-   public 폴더 안에 있는 이미지는 그냥 사용할 수 있다.
-   하지만 외부 이미지는 next.config.js에서 따로 설정을 해야한다.  
    (외부 이미지 주소를 미리 Next.js에게 알려주는 것)

#### @/next.config.js

    module.exports = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'example.com',
                    port: '',
                    pathname: '/account123/**', // 별 2개 쓰면 뒤쪽에 있는 모든 경로를 포함한다.
                },
            ],
        },
    }

### 3-2. Head 컴포넌트

Next.js에서 웹페이지는 리액트의 컴포넌트이다. 그럼 페이지 제목은 어떻게 설정?

    import Head from 'next/head';

    export default function App() {
        ...
    return (
            <>
                <Head>
                    <title> 페이지 제목 </title>
                    <link rel="icon" href="아이콘 경로" />
                </Head>
            </>
        )

}

### 3-3. 구글 폰트 적용하기

#### @/pages/\_app.js

    import { Noto_Sans_KR } from '@next/font/google';

    // 폰트 로드
    const notoSansKR = Noto_Sans_KR({
    weight: ['400', '700'],     // 문자열임에 주의
    subsets: [],                // 영문만 사용하는 폰트는 ['latin'] // 한글만 사용하는 폰트는?
    });

    // 폰트 적용 방법 1
    <main className={notoSansKR.className}>
    ...
    </main>

    // 폰트 적용 방법 2
    <Head>
    <style>{`
        html {
        font-family: ${notoSansKR.style.fontFamily}, sans-serif;
        }
    `}</style>
    </Head>

## 4. 프리렌더링(Pre-rendering)

웹 브라우저가 페이지를 로딩하기 이전에 렌더링하는 것  
크게 정적 생성과 서버사이드 렌더링으로 나뉜다.  
Next.js에서는 기본적으로 모든 페이지를 정적 생성한다.

### 4-1. 정적생성(Static Generation)

프로젝트를 빌드하는 시점에 미리 HTML을 렌더링하는 것

#### getStaticProps()

정적 생성할 때 필요한 데이터를 받아와서 렌더링하고 싶을 때 사용  
객체의 props 프로퍼티로 넘겨줄 Props 객체를 지정하고, 이것을 페이지 컴포넌트에서 사용

    export async function getStaticProps() {
    const res = await axios('/products/');
    const products = res.data;

    return {
        props: {
        products,
        },
    };
    }

    export default function Home({ products }) {
    return (
        <ProductList products={products} />
    );
    }

#### getStaticPatchs()

@/pages/products/[ id ].js와 같이 다이나믹 라우팅을 하는 페이지를 정적 생성할 때  
어떤 페이지를 정적 생성할지 지정해야할 때 사용

리턴 값으로 객체를 리턴하는데, paths 라는 배열에서 각 페이지에 해당하는 정보를 넘겨줄 수 있다.  
예를 들어 id값이 1인 페이지를 정적 생성하려면 { params: {id : '1'}}

그리고 fallback이라는 속성을 사용해서 정적 생성되지 않은 페이지를 처리해줄 것인지 지정 가능

    export async function getStaticPaths() {
    return {
        paths: [
        { params: { id: '1' }},
        { params: { id: '2' }},
        ],
        fallback: true,
    };
    }

######

getStaticProps()함수에서는 context 파라미터를 사용해서 필요한 Params(context.params) 값이나 쿼리스트링(context.query) 값을 참조 가능

그리고 fallback: true로 지정하면, 필요한 데이터가 존재하지 않을 수 있기 때문에 적절한 예외 처리를 해야한다.  
{ notFound: true }를 리턴하면 데이터를 찾을 수 없을 때 404페이지로 이동

    export async function getStaticProps(context) {
    const productId = context.params['id'];

    let product;

    try {
        const res = await axios(`/products/${productId}`);
        product = res.data;
    } catch {
        return {
        notFound: true,
        };
    }

    return {
        props: {
        product,
        },
    };
    }

######

만약 fallback:true를 설정했다면 getStaticProps()를 실행하는 동안 보여줄 로딩 페이지를 구현해야 하는데,  
페이지 컴포넌트에서 필요한 데이터가 존재하지 않을 때를 처리해 주면 된다.

    export default function Product({ product }) {
    if (!product) {
        return <>로딩 중 ...</>
    }
    return <>상품 이름: {product.name}</>;
    }

### 4-2. 서버사이드 렌더링

Next.js 서버에 리퀘스트가 도착할 때마다 페이지를 렌더링해서 보여주는 방식  
getServerSideProps()함수를 구현하고 export하면 된다.

이때 리턴 값으로는 객체를 리턴하는데 정적 생성 때와 마찬가지로 props 프로퍼티로 Props 객체를 넘겨주면 페이지 컴포넌트에서 받아서 사용 가능

    export async function getServerSideProps() {
    const res = await axios('/products/');
    const products = res.data;

    return {
        props: {
        products,
        },
    };
    }

    export default function Home({ products }) {
    return (
        <ProductList products={products} />
    );
    }

# Next.js API server 만들기

### 1. API 라우팅

### 2. MongoDB

### 3. 주소 단축 서비스

### 4. 배포포
