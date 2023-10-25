# React

## 환경 설정

-   node.js 설치
-   버전확인 : node -v / npm -v
-   리액트 개발자 도구(react developer tools) 설치 <- 크롬 확장 도구  
    Component Tap : 이페이지에 존재하는 리액트 컴포넌트 보여준다.

## 1. 리액트 시작하기

**프로젝트 생성(create-react-app)**

    $ npm init react-app .

**프로젝트 시작**

    $ npm run start

**프로젝트 빌드**

    $ npm run build
    $ npx serve -s build

## 2. 프로젝트 살펴보기

### 2-1. project-name/public/index.html

웹 브라우저에서 가장 먼저 실행되는 파일

    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <title>[Page Name]</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>

### 2-2. project-name/src/index.js

index.html 파일이 실행되고 나서 실행되는 리액트 코드들 중 가장 먼저 실행되는 파일

    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css';   // js 파일에 css 파일 삽입하기 -> html head 태그안에 자동 작성됨

    // JSX로 작성한 코드가 나타날 위치 설정
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);   // render() 메소드 안에 JSX문법으로 HTML 그리기

## 3. 개념

### 3-1. JSX

-   JS에서 HTML 코드 사용하는 것 (사용하지 못하는 HTML 문법도 존재)
-   class 키워드 대신에 className 사용, for 키워드 대신에 htmlFor 사용
-   카멜 표기법 사용: onblur -> onBlur, onfocuse -> onFocus, onmousedown -> onMouseDown
-   JSX 요소는 반드시 하나의 태그로 감싸야 한다. 주로 Fragment 태그(<> </> , 이름 없는 태그)사용
-   중괄호로 감싸주면 HTML 내에서 JS 문법 사용가능 (if문이나 for문 함수 선언은 불가)

### 3-2. Component

-   JSX문법으로 만든 리액트 엘리먼트를 리턴 (함수의 첫글자는 대문자 사용)
-   리엑트 엘리먼트를 ReactDOM의 render 메소드로 전달하면 HTML 렌더링 가능
-   리액트 엘리먼트를 함수 형태로 만들면 JSX 문법을 작성할 때 커스텀 태그처럼 활용 가능

### 3-3. Props

-   부모 컴포넌트에서 자식 컴포넌트로 내려주는 것
-   컴포넌트에 지정한 프롭은 객체 형태로 컴포넌트 함수의 첫번째 파리미터로 전달

#### children prop

어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우 사용

    // 부모 컴포넌트
    const Category = ({ children }) => {
        return <ul>{children}</ul>;
     };

    const App = () => (
        <Category>
            // 자식 요소들
            <li>First item.</li>
            <li>Second item.</li>
            <li>Another item.</li>
        </Category>
    );

### 3-5. 스타일

#### 인라인 스타일 (Tailwind CSS, Bootstrap는 className으로 사용)

     // js파일 내에서 style 객체 선언
    const style = {
        CSS속성명 : 'CSS속성값';
    };

    // 해당 HTML 태그에서 인라인으로 삽입
    <button style={style} onClick={onClick}>{children}</button>

    // 바로 속성 값 입력도 가능
    <button style={backroundColor:'yellow';} onClick={onClick}>{children}</button>

#### CSS 파일 불러오기

    import diceImg from './assets/dice.png';
    import './style.css';

    function Dice() {
    return <img src={diceImg} alt="주사위 이미지" />;
    }

    export default App;

## 4. Hook

-   기존 Class형 컴포넌트에서만 상태관리 할 수 있었던 것을 함수형 컴포넌트에서도 가능하도록
-   useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback 등

#### 리액트 훅 규칙

-   반드시 리액트 컴포넌트 함수나 커스텀 Hook함수 안에서 실행
-   반드시 함수의 최상위에서 실행 (반복문이나 조건문 안에서 쓰면 안된다.)

### 4-1. useState : 컴포넌트 상태 다루기

-   리액트에서 변수 같은것, 함수 컴포넌트 내에서 상태(state)를 관리하는데 사용
-   State값이 새로 바뀌면 화면 새로 랜더링

#### 리액트 렌더링 방식

-   직접 요소 변경이 아닌 State를 변경하고, State가 변경될 때 통째로 렌더링
-   그런데 변화가 없는 것도 새로 렌더링 -> 그래서 virtual DOM 사용
-   엘리먼트를 새로 렌더링 할 때 그 모습을 실제 DOM 트리에 바로 반영하는게 아니라
-   우선 virtual DOM에 적용 -> State 변경 전/후의 virtual DOM 비교
-   바뀐 부분만 찾아낸 다음에 실제 DOM 렌더링

######

    import { useState } from "react";

    // 초기 값 지정하기
    const [stateName, stateSetter] = useState(initialState);

    // callback으로 State 초기 값 지정하기 (단점) 콜백함수 실행이 오래 걸릴 수록 렌더링이 늦어짐
    const [state, setState] = useState(() => {
        return initialState;
    });

#### 참조형 State의 Setter

    // (1) 참조형 State 사용의 잘못된 예
    const [state, setState] = useState({ count: 0 });

    const handleAddClick = () => {
        state.count += 1; // 참조형 변수의 프로퍼티를 수정
        setState(state);  // 참조형이기 때문에 변수의 값(레퍼런스)는 변하지 않음
    }

    // (2) 참조형 State 사용의 올바른 예
    const [state, setState] = useState({ count: 0 });

    const handleAddClick = () => {
        setState({ ...state, count: state.count + 1 }); // 새로운 객체 생성
    }

#### 이전 상태를 참조해서 상태를 업데이트 하는 경우

     setState((prevState) => {
        // 다음 State 값을 계산
        return nextState;
    });

#### 비동기 함수 안에서 상태를 업데이트하는 경우

    const handleChange = async (e) => {
            const { name, value } = e.target;

            // setter가 비동기로 상태 업데이트를 수행하는 경우 await로 기다려줘야 한다.
            await setFormData({
                [name]: value,
            });
    }

#### State Lifting

자식 컴포넌트에서 State를 부모 컴포넌트로 올려주는 것 (우선 prop으로 state와 setter를 내리고 state lifting으로 올린다.)

        // Parents.js
        const ParentComponent = () => {
            const [count, setCount] = useState(0);   // 부모 컴포넌트의 상태

            // 자식 컴포넌트로 상태와 상태를 업데이트하는 함수를 전달
            return (
                <div>
                    <h1>부모 컴포넌트</h1>
                    <p>카운트: {count}</p>
                    <ChildComponent count={count} setCount={setCount} />
                </div>
            );
        };

        // Chind.js
        const ChildComponent = ({ count, setCount }) => {
            // 자식 컴포넌트에서 상태를 업데이트하는 함수를 호출
            const handleCount = () => {
                setCount(count + 1);
            };

            return (
                <div>
                    <h2>자식 컴포넌트</h2>
                    <button onClick={handleCount}>증가</button>
                </div>
            );
        };

### 4-2. useContext : 전역 데이터 다루기

-   Props와 State만으로 다루기 힘들 때 사용, 상황에 대한 정보에 많이 사용
-   프롭 드릴링: Props를 여러번 여러곳으로 내려줘야하는 문제
-   데이터 공유 범위를 정해야한다. <Context.Provider />라는 컴포넌트로 범위 설정
-   Provider의 자손 컴포넌트에서는 Props를 거치지 않고 자유롭게 데이터를 사용

#### Context 사용하기

    import React, { createContext, useContext, useState } from 'react';

    // 사용자 정보를 포함하는 컨텍스트 생성 : createContext()
    export const UserContext = createContext();

    // 컨텍스트의 Provider 컴포넌트 생성
    export const UserProvider = ({ children }) =>  {
        const [user, setUser] = useState({ name: 'John', email: 'john@example.com' });

        return (
            <UserContext.Provider value={user}>
                {children}
            </UserContext.Provider>
        );
    }

######

    import React, { useContext } from 'react';
    import { UserContext } from './UserContext';

    // 컨텍스트를 사용할 컴포넌트 생성
    export const UserInfo = () => {
        // 소비자 컴포넌트에서 컨텍스트 사용하기 : useContext()
        const user = useContext(UserContext)

        return (
            <div>
            <h2>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            </div>
        );
    }

######

    // UseProvider로 변수 제공 범위 설정 (최상위 컴포넌트로 사용하면 전역변수처럼 사용 가능)

    import React from 'react';
    import UserInfo from './UserInfo';
    import { UserProvider } from './UserContext';

    export const App = () => {
        return (
            <UserProvider>
                <div>
                    <h1>My App</h1>
                    <UserInfo />
                </div>
            </UserProvider>
        );
    }

### 4-3. useEffect : 의존성 배열에 근거해 함수 실행하기

-   useEffect를 사용하면 처음 렌더링하고 난 다음에 비동기로 콜백 함수가 실행
-   그 다음 렌더링 때부터는 의존성 배열(dependency list)의 값이 바뀔 때마다 콜백 함수가 실행  
     (useEffect()를 사용하지 않고 그냥 함수를 호출하면 무한루프에 빠질 수 있다.)

######

    // 처음 한 번만 실행하기
    useEffect(() => {
        // 실행할 코드
    }, []);

    // 값이 바뀔 때마다 실행하기
    useEffect(() => {
        // 실행할 코드
    }, [dep1, dep2, dep3, ...]);

### 4-4. useRef : DOM 노드 가져오기

#### DOM 요소에 접근하기

    import React, { useRef, useEffect } from 'react';

    export const MyComponent = () => {
        // useRef로 DOM 요소에 접근
        const myBtnRef = useRef(null);

        // 버튼 클릭 시 포커스를 버튼으로 이동
        const handleBtnClick = () => {
            myBtnRef.current.focus();
        }

        // 컴포넌트 렌더링 될 때 버튼에 포커스
        useEffect(() => {
            myBtnRef.current.focus();
        }, []);

        return (
            <div>
                <button ref={myButtonRef}>Click Me</button>
                <button onClick={handleButtonClick}>Focus Button</button>
            </div>

        );
    }

-   !주의 DOM 노드는 렌더링이 끝나야 생성, ref 객체의 current 값도 화면에 컴포넌트가 렌더링 됐을 때만 존재
-   조건부 렌더링으로 컴포넌트가 사라지거나 하는 경우에는 없을 수 있음
-   항상 inputRef.curruent 값이 존재하는지 조건문으로 확인하고 사용하는 것 추천
-   ref의 current 속성은 DOM 엘리먼트 객체를 가리킴

#### 변수값 보존(?)

### 4-5. useCallback : 자주쓰는 함수 기억하기

-   함수와 의존성 배열을 전달 받아 의존성 배열이 변경되는 경우에만 함수를 새로 생성
-   useCallback은 렌더링할 때마다 불필요한 함수가 재생성 되는 것을 방지
-   자식 컴포넌트에 전달되는 콜백 함수를 최적화할 때 주로 사용

######

    import React, { useState, useCallback } from 'react';

    export const ParentComponent = () => {
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(0);

        // useCallback을 사용하여 콜백 함수를 메모이제이션
        const handleClick1 = useCallback(() => {
            setCount1(count1 + 1);
        }, [count1]);

        const handleClick2 = useCallback(() => {
            setCount2(count2 + 1);
        }, [count2]);

        return (
            <div>
                <p>Count 1: {count1}</p>
                <ChildComponent onClick={handleClick1} />

                <p>Count 2: {count2}</p>
                <ChildComponent onClick={handleClick2} />
            </div>
        );
    }

    const ChildComponent = ({ onClick }) => {
        return <button onClick={onClick}>Click me</button>;
    }

### 4-6. useMemo : 복잡한 함수 값 기억하기

-   함수와 종속성 배열을 절달 받아 해당 함수의 결과가 변경되지 않는 한 메모이제이션해둔 값을 다시 사용
-   의존성 배열에 포함된 값들 중 하나라도 변경되면 그때 함수를 다시 계산

######

    import React, { useState, useMemo } from 'react';

    const Multiply = ({ a, b }) => {
        const result = useMemo(() => {
            console.log('Calculating result...');
            return a * b;
        }, [a, b]);     // a와 b 중 하나라도 바뀌면 다시 계산

        return <div>The result is: {result}</div>;
    }

    export const App = () => {
        const [a, setA] = useState(2);
        const [b, setB] = useState(3);

        return (
            <div>
                <Multiply a={a} b={b} />
                <button onClick={() => setA(a + 1)}>Increment A</button>
                <button onClick={() => setB(b + 1)}>Increment B</button>
            </div>
        );
    }
