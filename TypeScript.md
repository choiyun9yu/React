# TypeScript
- 런타임 오류 : 프로그램 실행 도중에 발생하는 오류 (인터프린터 언어에서 더 자주 발생)  
- 동적 타이핑 언어 : 변수에 자료형이 정해져 있지 않아서 실수하기 쉬움  
- 정적 타이핑 언어 : 변수에 자료형을 미리 정하고, 실제로 배포전에 타입 체크
- TypeScript = JavaScript + 정적 타이핑, 자바스크립트의 슈퍼셋

## 1. TypeScript 프로젝트 만들기

    # 프로젝트 생성할 폴더 내부에서
    $ npm init  // enter 계속 입력해서 생성 완료
    
    # typescript install 
    $ npm install --save-dev typescript // 개발에서만 사용하기 때문에 devDependencies로 설치

    # tsconfig.json 파일 생성
    $ npx tsc --init    // npx는 노드 모듈을 실행하는 명령어, npm은 노드 모듈 설치하는 명령어, tsc는 타입스크립트 컴파일러 모듈(TS to JS)

    # projecfDifectory/package.json
    {
        ...
        "sccripts": {
            "build": "tsc" 
            ...
        },
    }

    # 실행할 타입스크립트 파일 있는 터미널에서 (projectDirectory/main.ts)
    $ npm run build   // TS to JS
    $ node main.js    // main.js 실행

    # 아래 코드 적용하면 이제 터미널에서 npm start로 실행 가능
        {
        ...
        "sccripts": {
            "start": "node main.js"
            ...
            },
        }

## 2. 기본 타입

### 2-1. 타입 정하기

    변수 이름 뒤에 콜론을 써서 타입 지정 (타입은 코드 검사에만 쓰이고 실제 동작에는 활용 X)
    let size1: number;          // 타입 초기화
    let size2: number = 100;    // 타입 초기화 및 할당

### 2-2. 기본형 타입

    let itemName: string = '코드잇 블랙 후드';
    let itemPrice: number = 129000;
    let membersOnly: boolean = true;
    let owner: undeifined = undefined;
    let seller: null = null;

    let num = 2/0;      // Inf <- 숫자형
    let num2 = 0/0;     // NaN <- 숫자형

### 2-4. 배열과 튜플

    // 문자형 배열 
    const cart: string[] = [];
    cart.push('c001');
    cart.push('c002');
    // cart.push(003); 타입 오류

    // 2차 문자 배열
    const carts: string[][] = [
        ['c001', 'c002'],
        ['c003'],
    ];

    // 배열에는 사이즈 제한이 없어서 빈 배열을 해도 타입 오류가 나지 않음
    let mySize1: number[] = [167, 28];
    mySize1 = [167, 28, 255];
    mySize1 = [255];
    mySize1 = []

    // 배열이지만 개수를 명확히 정하고 싶으면 튜플 타입을 쓴다.
    // ! 배열 안에 모든 자료형이 같을 필요는 없다.
    let mySize2: [number, number] = [167, 28];
    // mySize = [167, 28, 255];     // 타입 오류
    // mySize = [255];              // 타입 오류
    // mySize = []                  // 타입 오류

### 2-4. 객체 타입 

### 2-5. any

### 2-6. 함수

### 2-7. 기본 문법 정리

## 3. Enum, Interface, 타입 별칭

## 4. Generic

## 5. tsconfig.json~