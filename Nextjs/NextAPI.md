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

## 2. MongoDB with Next.js

### 2-1. MongoDB Atlas

MongoDB 만드는 회사에서 운영하는 클라우드 서비스  
[MongoDB Atlas 사용법](https://www.codeit.kr/tutorials/70/mongodb-atlas)

### 2-2.Mongoose

MongoDB에서 공식적으로 제공하는 라이브러리는 npm의 mongodb 패키지이다.  
그러나 굉장히 로우 레벨로 구현되어 있어 번거롭다. 그래서 추상화된 라이브러리를 주로 사용한다.  
Mongoose 라이브러리는 쉽고 편리하기 때문에 JS 개발자들이 가장 많이 사용하는 라이브러리다.

    # install
    $ npm install mongoose

### 2-3. Next.js에서 환경변수 사용하기

#### 환경변수

우리가 평소 사용하는 서비스는 보통 서버 하나, 데이터베이스 하나로 실행되지 않는다.  
수천 명, 수백만 명이 사용하기 때문에 서버와 데이터베이스도 그에 맞게 개수가 많다.  
그런데 하나의 코드로 실행하는데 수많은 서버와 데이터베이스를 어떻게 연결할까?

이럴 때 사용하는게 환경변수다. 코드 상에는 **MONGODB_URI**와 같은 값으로  
데이터베이스 주소를 지정해 두고, 각 서버를 실행할 때마다 다른 데이터베이스 주소를 넣어 준다.  
환경 변수는 프로그램에서 실행 환경에 따라 다른 값을 지정할 수 있는 변수다.

서버와 데이터베이스를 여러 개 쓰는 경우가 아니더라도 데이터베이스 주소와 같은 값을 소스코드에 그대로 쓰는 것은 위험하다.  
반드시 환경 변수로 사용하는 것이 좋다. Node.js환경에서는 이런 환경 변수들을 process.env라는 객체를 통해서 참조할 수 있다.

#### Next.js에서 환경 변수 추가하기

Next.js에서는 기본적으로 dotenv라는 라이브러리를 지원한다.  
이 라이브러리는 .env 같은 이름의 파일에서 환경 변수들을 저장해 두면, Node.js프로젝트를 실행할 때 환경 변수로 지정해주는 라이브러리이다.  
이때 주의할 점은 .env 파일 같은 건 소스코드에 포함시키면 안 된다.  
Next.js 프로젝트에서는 기본적으로 dotenv 설정이 되어 있어서, .env.local 같은 파일을 추가하면 손쉽게 환경 변수를 추가할 수 있다.

    # @/.env.local(파일 만들어서)
    MONGODB_URI=mongodb+srv://admin:blahblah@.clusterName.blahblah.mongodb.net/databaseName?retryWrites=true&w=majority
    // 추가한 값을 process.env.MONGODB_URI로 참조할 수 있게된다.

    # pages/api/short-links/index.js
    export default function handler(req, res) {
    const DB_URI = process.env.MONGODB_URI;
    // 데이터베이스 접속 ...

}

#### Next.js에서 사용하는 특별한 환경 변수

위에서 추가한 데이터베이스 주소는 유저의 아이디와 비밀번호를 포함한 아주 민감한 정보이다.  
그런데 실수로 이 환경 변수가 웹 사이트에 노출되면 안된다.  
이를 방지하고자 Next.js에서는 클라이언트 사이드에서 사용하는 환경 변수에 특별한 접두사(prefix)를 사용한다.  
**NEXT*PUBLIC*** 이라고 이름을 붙이면 이 환경 변수는 클라이언트 사이드에서도 사용할 수 있다.

    # @/.env.local
    MONGODB_URI=mongodb+srv://admin:blahblah@cluster0.blahblah.mongodb.net/databaseName?retryWrites=true&w=majority

NEXT_PUBLIC_HOST=http://localhost:3000

    # @/pages/Home.js
    export default Home() {
      // 페이지 컴포넌트에서는 아래와 같이 사용
      return (
        <>호스트 주소: {process.env.NEXT_PUBLIC_HOST}</>
      );

## 3. Mongoose 문법 정리

[Mongoose의 Model 문서](https://mongoosejs.com/docs/api/model.html)

### 3-1 데이터베이스 연동하기

[공식 리포지터리 코드](https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose)

        import mongoose from 'mongoose';
        // ...
        await dbConnect();
        console.log(mongoose.connection.readyState);    // mongoose.connection.readySatate라는 값으로 연동되었는지 확인, 1이어야 연동

### 3-2. 모델 만들기

        import mongoose from 'mongoose';

        const shortLinkSchema = new mongoose.Schema(
          {
            title: { type: String, default: '' },
            url: { type: String, default: '' },
            shortUrl: { type: String, default: '' },
          },
          {
            timestamps: true,
          }
        );

        const ShortLink =
          mongoose.models['ShortLink'] || mongoose.model('ShortLink', shortLinkSchema);
          // 모듈 파일을 import할 때마다 모델을 생성하지 않도록 작성 ||를 사용

        export default ShortLink;

-   스키마 생성 : **mongoose.Schema()**
-   모델 생성 : **mongoose.model()**
    이때 모델의 이름을 첫 번째 아규먼트로 넘겨주는데, 이 이름은 mongoose.models[...]로 참조할 수 있기 때문에 잘 지정했는지 반드시 확인
-

### 3-3. 모델 다루기

#### 생성 : Model.create()

아규먼트로 전달한 값으로 도큐먼트 생성

        const newShortLink = await ShortLink.create({
          title: '코드잇 커뮤니티',
          url: 'https://www.codeit.kr/community/general',
        });

#### 여러 개 조회 : Model.find()

조건에 맞는 모든 도큐먼트 조회, 이때 조건으로 쓰이는 객체는 MongoDB의 문법을 따른다.

        const shortLinks = await ShortLink.find(); // 모든 도큐먼트 조회

        const filteredShortLinks = await ShortLink.find({ shortUrl: 'c0d317' }) // shortUrl 값이 'c0d317'인 모든 도큐먼트 조회

#### 아이디로 하나만 조회 : Model.findById()

아규먼트로 넘겨준 아이디에 해당하는 도큐먼트를 조회

        const shortLink = await ShortLink.findById('n3x7j5');

#### 아이디로 업데이트하기 : Model.findByIdAndUpdate()

첫 번째 아규먼트로 넘겨준 아이디에 해당하는 도큐먼트 업데이트  
두 번째 아규먼트로는 업데이트할 값을 입력

        const updatedShortLink = await ShortLink.findByIdAndUpdate('n3x7j5', { ... });

#### 아이디로 삭제하기 : Model.findByIdAndDelete()

아규먼트로 넘겨준 아이디에 해당하는 도큐먼트를 삭제

        await ShortLink.findByIdAndDelete('n3x7j5');

### 3-4. 기타

#### 조건으로 조회하기

아규먼트로 조건을 넘겨주고 해당하는 도큐먼트를 하나만 조회

        const shortLink = await ShortLink.findOne({ shortUrl: 'c0d317' });

#### 조건으로 업데이트하기

첫 번째 아규먼트로 넘겨준 조건에 해당하는 도큐먼트 업데이트  
두번째 아규먼트로는 업데이트할 값을 입력

        await ShortLink.updateOne({ _id: 'n3x7j5' }, { ... }); // 업데이트만 하고 업데이트 된 값을 리턴하지는 않음

        const updatedShortLink = await ShortLink.findOneAndUpdate({ _id: 'n3x7j5' }, { ... });

#### 조건으로 삭제하기

아규먼트로 넘겨준 조건에 해당하는 도큐먼트를 삭제

        await ShortLink.deleteOne({ _id: 'n3x7j5' }, { ... }); // 삭제만 하고  기존 값을 리턴하지는 않음

        const deletedShortLink = await ShortLink.findOneAndDelete({ _id: 'n3x7j5' }, { ... });

### 3. 주소 단축 서비스

### 4. 배포
