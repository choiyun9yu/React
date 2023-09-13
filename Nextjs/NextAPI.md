# Next.js API 만들기

## 프로젝트 시작하기

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

    # 의존성 설치
    $ yarn install

    # 개발서버 켜기
    $ npm run dev   // yarn dev

    # 빌드하기
    $ npm run build // 실행 가능한 형태로 코드 변환하는 과정

    # 실행하기
    $ npm run start

### Rest Client 사용하기

-   VS code의 extenstion 중 하나로 API 동작 여부를 테스트할 수 있다.
-   파일명 뒤에 .http 확장자를 붙이고 GET이나 POST, PATCH 등 사용 가능

#### 페이지 라우트

    # @/api/[id].js (다이나믹 라우트)
    export default function handler(req, res) {
    res.send('Hello Dynamic Route!');

}

### 1. 리퀘스트 다루기

[API Routes - Request Helpers](https://nextjs.org/docs/api-routes/request-helpers)

함수의 파라미터중 req 객체는 리퀘스트에 대한 정보를 가져올 때 사용

#### req.query : 다이나믹 라우트의 params 값, query 값 확인

    # @/pages/api/shart-link/[id].js
    export default function handler(req, res) {
        res.send(req.query);
    }

    # request.http
    GET http://localhost:3001/api/short-links/123?q=codeit

#### req.body : 리퀘스트로 들어오는 body 값 확인

    # @/pages/api/shart-link/[id].js
    export default function handler(req, res) {
        res.send(req.body);
    }

    # request.http
    POST http://localhost:3001/api/short-links/123
    Content-Type: application/json
    {
        "title": "codeit"
    }

#### req.cookies : 리퀘스트로 들어오는 cookie 값 확인

    # @/pages/api/shart-link/[id].js
    export default function handler(req, res) {
        res.send(req.cookies);
    }

    # request.http
    GET http://localhost:3001/api/short-links/123
    Cookie: session-id=codeit1234

#### req.method : 리퀘스트로 들어오는 메소드(GET,POST 등) 확인

    # @/pages/api/shart-link/[id].js
    export default function handler(req, res) {
        res.send(req.method);
    }

    # @/pages/api/shart-link/[id].js
    //메소드 값에 따라 다른 처리를 하고 싶은 경우 switch-case문 활용
    export default function handler(req, res) {
        switch(req.method) {
            case 'PATCH':
                res.send('ShortLink 수정');
                break;

            case 'GET':
                res.send('ShortLink 조회');
                break;

            default:
                res.send();
                break;
        }
    }

    # request.http
    GET http://localhost:3001/api/short-links/123
    Cookie: session-id=codeit1234

    ###

    PATCH  http://localhost:3001/api/short-links/123
    Cookie: session-id=codeit1234

### 2. 리스폰스 다루기

[API Routes - Response Helpers](https://nextjs.org/docs/api-routes/response-helpers)

함수를 메서드 체이닝으로 사용

#### 2-1. res.send() : 문자열이나 객체를 보내는 메소드

#### 2-2. res.status() : 상태코드 지정하는 메소드

    # @/pages/api/shart-link/index.js
    export default function handler(req, res) {
        switch (req.method) {

            // POST로 요청이 들어오면 새로운 짧은 주소를 생성한 것 처림 201 상태코드로 생성된 데이터 전송
            case 'POST':
                res.status(201).send({
                    title: '위키피디아 Next.js',
                    url: 'https:/en.wikipedia.org/wiki/Next.js',
                });
                break;

            // GET으로 요청이 들어오면 짧은 주소 목록을 보여주고
            case 'GET':
                res.send([
                    {
                        id: 'abc',
                        title: '위키피디아 Next.js',
                        url: 'https:/en.wikipedia.org/wiki/Next.js',
                    },
                    {
                        id: 'def',
                        title: '코드잇 자유게시판',
                        url: 'https://codeit.kr/community/general',
                    },
                    {
                        id: 'ghi',
                        title: '코드잇 질문답변',
                        url: 'https:/www.codeit.kr/community/questions',
                    },
                ]);
                break;

            // 나머지 요청에 대해서는 404 상태코드 전송
            default:
                res.status(404).send();     // 메소드 체이닝: 리턴 값에 .으로 계속 메소드 실행
        }
    }

    # requset.http
    POST  http://localhost:3001/api/short-links
    Cookie: session-id=codeit1234

    ###

    GET  http://localhost:3001/api/short-links
    Cookie: session-id=codeit1234

### 2. MongoDB

### 3. 주소 단축 서비스

### 4. 배포
