# React Hook

### 1-1. 리액트 렌더링 방식
- state 또는 props 가 변경될 때 통째로 렌더링 된다.
- 그런데 변화가 없는 것도 새로 렌더링 되면 낭비가 심하기 때문에 virttual DOM 을 사용한다.
- 엘리먼트를 새로 렌더링할 때 그 모습을 실제 DOM 트리에 바로 반영하지 않고,
  우선 virtual DOM 에 적용하고 State 변경 전/후의 virtual DOM 을 비교해서 바뀐 부분만 렌더링한다.

## 1. useState
- React 에서 변수 같은 것으로 함수 컴포넌트 내에서 상태(state)를 관리하는데 사용한다.
- state 또는 props 값이 바뀌면 화면이 새로 렌더링 된다.

### 1-2. 초기 값 지정하기
#### 직접 입력하여 초기 값 지정하기
    const [value, setValue] = useState(initialState);

#### 콜백 함수로 초기 값 지정하기
    const [value, setValue] = useState(() => {
        return initialState;
    });
- 단점: 콜백 함수 실행이 오래 걸릴 수록 렌더링이 늦어진다.

### 1-3. 변경자 사용하기
#### 비동기 함수 안에서 상태를 업데이트 하는 경우
    const handleChange = async (e) => {
        const { name, value } = e.target;

        // setter 가 비동기 상태로 상태 업데이틀를 수행하는 경우 await 로 기다려줘야 한다.
        await setFormData({
            [name]: value;
        });
    }

### 1-4. 변경자(setter)의 매개변수
- 변경자의 매개변수는 해당 변수의 이전 값을 받는다.
- 초기값이 없으면 null 이나 undefined 이다.

#### 
    const [value, setValue] = useState(initialState);

    setValue(old => {
        console.log(old);
    })
    
#### 이전 상태를 참조해서 상태를 업데이트 하는 경우
    setState((prevState) => {
        // 다음 State 값을 계산
        return nextState
    })

<br>

## 2. useEffect
- 컴포넌트는 단순히 사용자 인터페이스를 렌더링하는 함수일 뿐이다.
- 렌더링은 앱이 처음 적재될 때 일어나고, props 나 state 가 변경될 때 일어난다.
- 그러나 useEffect 를 사용하면 처음 렌더링하고 난 다음 비동기로 콜백 함수가 실행된다.
- 이후 의존성 배열의 값이 바뀔 때마다 콜백 함수가 실행된다.

> **!주의** - useEffect( )를 사용하지 ㅇ낳고 그냥 함수를 호출하면 무한 루프에 빠질 수 있다.

#### 처음 한 번만 실행
    useEffect(() => {
        // 실행할 코드 ...
    }, [])

#### 값이 바뀔 때마다 실행
    useEffect(() => {
        // 실행할 코드 ...
    }, [dep1, dep2, ...])
 
<br>

## 3. useCallback
- useCallback 은 함수와 의존성 배열을 전달 받아 의존성 배열이 변경되는 경우에만 함수를 새로 생성한다.
- 이 훅은 함수와 종속성 배열을 인자로 받아, 해당 함수를 메모이제이션된(기억된) 버전으로 반환한다.
- useCallback 을 사용하면 렌더링할 때마다 불필요한 함수가 재생성 되는 것을 방지할 수 있다.
- 함수 결과를 기억하는 것이 아니라 함수의 참조값을 기억하는 것이다.
  따라서 함수에 들어오는 매개변수가 아니라 함수에서 사용하는 다른 변수가 변경되는 경우 의존성 배열에 포함시킨다. 
- 자식 컴포넌트에 전달되는 콜백 함수를 최적화할 때 주로 사용한다.

> **!참고** - 콜백함수란?
> Callback function 은 다른 함수에 인자로 전달되어, 그 함수의 내부에서 실행되는 함수이다.
> 주로 비동기 작업이나 이벤트 처리 등에서 사용된다.
####
> **!참고** - 메모이제이션이란?
> 함수를 기억해두었다가 재사용하여 성능을 최적화하는 기술이다. 

####
    const memoizedCallback = useCallback(
      () => {
        // 함수 내용
      },
      [ /* 종속성 배열 */ ]
    )
- 여기서 memoizedCallback 은 메모이제이션된 콜백 함수를 나타낸다. 
- useCallback 의 첫 번째 인자로는 메모이제이션할 콜백 함수를 두 번째 인자로는 의존성 배열을 전달한다. 
- 의존성 배열은 콜백 함수 내에서 참조하는 상태나 프로퍼티를 나타내며,
  이 배열에 포함된 값이 변경될 때만 새로운 콜백 함수가 생성되고 그렇지 않으면 이전에 생성된 콜백 함수가 재사용된다.

### 3-1. 성능 최적화
- 함수 렌더링 시마다 새로운 함수를 생성하는 것을 방지하고, 필요한 경우에만 함수를 새로 생성한다.
- 의존성에 포함된 값이 변경되지 않는다면 이전에 생성한 함수 참조 값을 반환 해준다.
- 새로 생성되지 않는다는 것은 메모리에 새로 할당되지 않고 동일한 참조값을 사용하게 된다는 것이고,
  이는 최적화된 하위 컴포넌트에서 불필요한 렌더링을 줄일 수 있다는 것을 의미한다.

### 3-2. 의존성 배열을 통한 조건부 함수 생성
- 함수가 의존하는 값이 변경되었을 때만 함수를 새로 생성하고,  
  그렇지 않으면 이전 메모이제이션된 함수를 사용한다.
- 매개변수가 변경되는 경우가 아니라 함수 내부에서 사용하는 다른 값이 변경되는 경우,
  그 변경될 수 있는 값을 의존성 배열에 포함시킨다.

### 3-3. useCallback 을 사용하는 이유
- **렌더링 최적화**: 컴포넌트의 불필요한 재렌더링을 방지하기 위해 사용된다.  
  특히 자식 컴포넌트에 props 로 전달되는 콜백 함수들을 메모이제이션 한다.  
  이렇게 함으로써 props가 변경되었을 때 불필요한 자식 컴포넌트의 재랜더링을 방지할 수 있다.
- 일반적으로 리액트 컴포넌트에서 함수를 props로 전달할 때, 그 함수는 매 렌더링 마다 새로운 함수로 인식한다.
- 이는 같은 기능을 수행하는 함수라 할지라도, 렌더링마다 함수가 새롭게 생성되어 재사용이 어렵고, 성능 저하를 가져올 수 있다.
- useCallback 을 사용하면 이 문제를 해결할 수 있다. 
  - useCallback 을 사용하여 함수를 감싸면, 해당 함수는 렌더링 간에 메모이제이션되어 동일함 함수 객체가 유지된다.
  - 이것은 해당 함수가 변경되는 상황에만 새로운 함수를 생성하도록 제어함으로서, 불필요한 렌더링을 방지하고 성능을 개선한다.
- **의존성에 따른 갱신**: 의존성 배열을 통해 특정 값이 변경될 때만 새로운 콜백 함수가 생성되도록 제어해 성능을 최적화 한다.

### 3-4. 사용 예시 
    import React, { useState, useCallback } from 'react';

    const MyComponent = () => {
      const [count, setCount] = useState(0);

      // 의존성 배열에 count를 포함하여 count가 변경될 때만 handleIncrement가 새로 생성되도록 작성 
      const handleIncrement = useCallback(() => {
        setCount(count + 1);
      }, [count]);

      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      );
    }

    export default MyComponent;

- 위 예시에서 handleIncrement 함수는 count 상태에 의존하고 있으며 count 가 변경될 때만 새로운 함수가 생성된다.
- 이를 통해 handleIncrement 함수는 항상 최신의 count 상태를 참조하면서 메모이제이션된다.

<br>

## 4. useMemo
- useMemo 는 함수와 종석성 배열을 전달 받아 해당 함수의 결과가 변경되지 않는 한 메모이제이션해둔 값을 다시 사용한다.
- 이 훅은 이전에 계산된 값을 기억하고, 이 값이 변경되지 않는 한 다시 계산하지 않도록 한다.
- useMemo 는 2가지 인자를 받는다.
  - 첫 번째 매개 변수는 값을 계산하는 함수이다.
  - 두 번째 매개 변수는 의존성 배열이다.  
    (이 배열에 나열된 값들이 변경되지 않는 한, useMemo 는 캐시된 값을 유지하고 반환 한다.)

### 4-1. 사용 예시

    function expensiveCalculation(a, b) {
      // 매우 비용이 많이 드는 계산 
      return a + b;
    }
- 이 함수를 react 컴포넌트에서 사용한다고 가정하고 이 함수는 a 와 b 라는 props 에 의존적이다.
- 그럼 useMemo 를 사용하여 이 함수를 최적화 할 수 있다.

####
    import React, { useMemo } from 'react';

    function MyComponent({ a, b }) {
      const result = useMemo(() => {
        return expensiveCalculation(a,b);
      }, [a, b]);

      return <div>{result}</div>;
    }

- 위 코드에서 useMemo 를 사용하여 expensivCalculation 함수의 결과를 기억한다.
- a 와 b 가 변경되지 않는 한 expensivCalculation 함수는 다시 실행되지 않고 이전에 계산된 결과를 재사용 한다.
- 이는 불필요한 계산을 피하고 성능을 향상시키는데 도움이 된다.
- 그러나 useMemo 는 항상 사용해야 하는 것은 아니다. 성능 최적화를 위해 너무 과도하게 사용하는 것은 오히려 코드를 복잡하게 만들 수 있다.
- 따라서 실제 성능 문제가 발생했을 때만 사용하는 것이 좋다.

#### 정리
- useCallback 훅이 함수 그 자체를 기억하는 것이라면, useMemo 는 함수 결과 값을 기억한다.
- 그렇기 때문에 함수에 입력되는 매개 변수를 의존성 배열에 넣어 결과가 달라지는 경우 계산을 다시 한다.

<br>

## 5. useContext
- props 와 state 만으로 다루기 힘들 때 사용한다. (상황, 맥락에 대한 정보를 다룰 때 유용)
- 프롭 드릴링(props 를 여러번 여러 곳으로 내려줘야하는 문제) 방지에 좋다.
- 단 데이터 공유 범위를 지정해야한다. <Context.Provider /> 라는 컴포넌트로 범위를 지정한다.
- Provider의 자손 컴포넌트는 props 를 거치지 않고 자유롭게 데이터를 사용할 수 있다.

#### Context 사용 예제
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
####
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
#### 
    import React from 'react';
    import UserInfo from './UserInfo';
    import { UserProvider } from './UserContext';

    // UseProvider로 변수 제공 범위 설정 (최상위 컴포넌트로 사용하면 전역변수처럼 사용 가능)
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

<br>

## 6. useReducer
- useReducere 는 현재 상태를 받아서 새 상태를 반환한다.
- 아래 예제는 checked 가 상태 값이며, setChecked 는 상태를 변경하는 함수이고 초기 값은 false 이다.

### 6-1. useReducer 사용 예시
#### 예제 1
    function Checkbox() {
        const [checked, setChecked] = useState(false);

        return (
            <>
              <input type="checkbox" value={checked}
                onChange={() => setChecked(checked => !checked)}/>
              {checked ? "checked" : "not chekced"}
            </>
        );    
    }
    
#### 예제 2
- 위 코드는 잘 작동하지만 너무 복잡하다. toogle 같은 함수로 쉽게 처리할 수 있다.
####
    function Checkbox() {
        const [checked, setChecked] = useState(false);

        function toggle() {
            setChecked(checked => !checked)
        }

        return (
          <>
            <input type="checkbox" value={checked}
              onChange={toggle}/>
            {checked ? "checked" : "not chekced"}
          </>
        )
    }

#### 예제 3
- 예제 1 보다 2 가 더 낫지만 아직 부족하다. 좀 더 예측 가능한 결과를 내놓게 할 수 있다.
####
    function Checkbox() {
        const [checked, toggle] = useReducer(checked => !checked, false);

        return (
                  <>
            <input type="checkbox" value={checked}
              onChange={toggle}/>
            {checked ? "checked" : "not chekced"}
          </>
        )
    }
- 여기서 useReducer 는 리듀서 함수와 초기 상태 false 를 받는다.

### 6-2. Array.reduce
- Array.reduce 는 함수와 초기 값을 받고 한 값을 반환한다.
- 이때 함수는 반드시 모든 값을 단일 값으로 축약하는 함수여야 한다.
- 아래 코드는 numbers 배열의 각 값에 대해 최종적인 값이 남을 때까지 리듀서가 호출된다.
- reduce 의 세번째 인자는 최초 연산의 초기 값이다.
####
    const numbers = [28, 34, 67, 68];
    numbers.reduce((number, nextNumber) => number + nextNumber, 0);  // 197
    // 실제 연산이 일어나는 순서 ((((0 + 28) + 34) + 67) + 68)
- Array.reduce 에 전달된 리듀서는 인자를 2개 받는다. 원하면 리듀서 함수에 여러 인자를 전달할 수도 있다.
####
    function Numbers() {
        const [number, setNumber] = useReducere(
            (number, newNumber) => number + newNumber,
            0
        );

        return <h1 onClick={() => setNumber(30)}>{number}</h1>
    }
- 이렇게 하면 h1 을 클릭할 때마다 전체 합계에서 30이 추가된다.

### 6-3. useReducer 로 복잡한 상태 처리하기
- useReducer 를 사용하면 상태가 더 복잡해질 때 상태 갱신을 더 예측 가능하게 처리하는데 도움이 된다.
- 아래와 같은 사용자 데이터가 들어 있는 객체를 생각해보자.
####
    const firstUser = {
        id: "0391-3233-3201",
        firstName: "Bill",
        lastname: "Wilson",        
        city: "Missoula",
        state: "Montana",
        email: "bwilson@mtnwilsons.com",
        admin: false
    };
- firstUser 를 초기 상태로 설정한 User 라는 컴포넌트가 있다. 이 컴포넌트는 적절한 데이터를 표시해준다.
####
    function User() {
        const [user, setUser] = useState(firstUser);

        return (
            <>
                <div>
                    <h1>
                        {user.firstName} {user.lastName} - {user.admin? "Admin" : "User"}
                    </h1>
                    <p>Email: {user.email}</p>
                    <p>
                        Localtion: {user.city}, {user.state}
                    </p>
                    <button>Makee Admin</button>
                </div>
            </>
        )
    }
- 상태를 관리할 때 자주 저지르는 실수는 상태를 덮어쓰는 것이다.
- 아래 코드 처럼 하면 firstUser 의 상태를 덮어써서 방금 setUser 함수에 전달한 {admin:true} 로 변경한다.
####
    <button
        onClick={() => {
            setUser({ admin: ture});
        }} 
    >
     Make Admin
    </button>
- 현재 값을 사용자와 분리하고, admin 값을 덮어쓰면 이런 일을 방지할 수 있다.
#####
    <button
        onClick={() => {
            setUser({...user, admin: true});
        }}
    >
      Make Admin
    </button>
- 위 코드처럼 하면 초기 상태를 받아서 새로운 키/값 쌍을 넣는다. 모든 onClick 에 대해 코드를 이런 식으로 바꿔야한다.
- 그러나 리듀서를 쓰면 조금 더 쉽게 관리할 수 있다.
- 아래 처럼 작성하면 새 상태 값 newDetails 를 리듀서에게 보내면 프로퍼티가 객체에 추가되거나 기존 프로퍼티가 갱신된다.
####
    function User() {
        const [user, setUser] = userReducer(
            (user, newDetails) => ({ ...user, ...newDetails }),
            firstUser
        );

        return (
            ...
            <button
                onClick={() => {
                    setUser( {admin: true });
                }}
            >
              Make Admin
            </button>
        );
    }
- 상태가 여러 하위 값으로 구성되거나 다음 상태가 이전 상태에 의존적일 때 이런 패턴이 유용하다.

<br>

## 7. useRef
- useRef 는  DOM 요소에 접근하거나 컴포넌트의 상태를 유지하는 데 사용된다.
- Form 태그의 인풋 데이터를 읽는 용도로도 사용된다.
- 함수형 컴포넌트에서 가변적인 값을 만들고 유지할 때 유용하다. useRef 를 사용하면   
  컴포넌트가 리렌더링될 때마다 값이 초기화되지 않고 이전 값이 유지되기 때문이다. 

### 7-1. DOM 요소에 접근
    import React, { useRef, useEffect } from 'react';

    const MyComponent = () => {
        // useRef를 사용하여 변수 생성
        const myRef = useRef(null);
    
        useEffect(() => {
            // 컴포넌트가 마운트되면 myRef.current는 해당 DOM 요소를 참조합니다.
            console.log(myRef.current);
        
            // 컴포넌트가 언마운트될 때 정리 작업 수행
            return () => {
                // 정리 작업
            };
        }, []);
    
        return (
            <div ref={myRef}>
                {/* 컴포넌트의 내용 */}
            </div>
        );
    };
    
    export default MyComponent;

### 7-2. form 태그 입력 값 읽기 

### 7-3. 컴포넌트의 상태 유지
- 상태를 직접 변경하는 것이 아니라 current 속성을 통해 값을 유지
######
    import React, { useRef, useEffect } from 'react';

    const MyComponent = () => {
      const counterRef = useRef(0);

      useEffect(() => {
        // 현재 카운터 값 출력
        console.log(counterRef.current);
      }, []);

      const incrementCounter = () => {
        // useRef를 사용하여 카운터 값 증가
        counterRef.current += 1;
      };

      return (
        <div>
          <button onClick={incrementCounter}>Increment Counter</button>
        </div>
      );
    };

    export default MyComponent;

### 7-4. 이전 값 저장 
- useRef를 사용하여 이전 값(previous value)을 저장할 수 있다.
- 이전 값은 리렌더링 사이에서 유지되기 때문에 이전 값과 현재 값의 비교에 유용하다.
######
    import React, { useEffect, useRef } from 'react';
    
    function MyComponent({ value }) {
      const prevValueRef = useRef();
      
      useEffect(() => {
        // 현재 값(value)과 이전 값(prevValueRef.current) 비교
        if (value !== prevValueRef.current) {
          console.log('Value changed!');
        }
        
        // 현재 값을 이전 값으로 업데이트
        prevValueRef.current = value;
      }, [value]);
      
      return <div>{value}</div>;
    }


<br>

## 8. useLayoutEffect


## 9. Custom Hook
      
