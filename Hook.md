# React Hook


## 1. useState

    const [value, setValue] = useState();

    setValue(old =? {
        console.log(old);    // 변경자의 매개변수 old는 해당 변수의 이전 값을 받는다.
    })
    

## 2. useEffect

## 3. useCallback
- useCallback은 메모이제이션된 콜백 함수를 생성하는 데 사용한다.
- 이 훅은 함수와 종속성 배열을 인자로 받아, 해당 함수를 메모이제이션된(기억된) 버전으로 반환한다.
- 메모이제이션은 함수를 이전에 계산된 결과를 재사용하여 성능을 최적화하는 기술이다. 
######
    const memoizedCallback = useCallback(
      () => {
        // 함수 내용
      },
      [ /* 종속성 배열 */ ]
    )

### 3-1. 성능 최적화
- 함수를 메모이제이션하여 렌더링 시마다 새로운 함수를 생성하는 것을 방지하고,  
  필요한 경우에만 함수를 새로 생성한다.
- 의존성에 포함된 값이 변경되지 않는다면 이전에 생성한 함수 참조 값을 반환 해준다.
- 새로 생성되지 않는다는 것은 메모리에 새로 할당되지 않고 동일한 참조값을 사용하게 된다는 것이고,
  이는 최적화된 하위 컴포넌트에서 불필요한 렌더링을 줄일 수 있다는 것을 의미한다.

### 3-2. 의존성 배열을 통한 조건부 함수 생성
- 함수가 의존하는 값이 변경되었을 때만 함수를 새로 생성하고,  
  그렇지 않으면 이전 메모이제이션된 함수를 사용한다.

## 4. useContext

## 5. useRef
- useRef 는  DOM 요소에 접근하거나 컴포넌트의 상태를 유지하는 데 사용된다.
- Form 태그의 인풋 데이터를 읽는 용도로도 사용된다.
- 함수형 컴포넌트에서 가변적인 값을 만들고 유지할 때 유용하다. useRef 를 사용하면   
  컴포넌트가 리렌더링될 때마다 값이 초기화되지 않고 이전 값이 유지되기 때문이다. 

### 5-1. DOM 요소에 접근
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

### 5-2. form 태그 입력 값 읽기 

### 5-3. 컴포넌트의 상태 유지
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

### 5-4. 이전 값 저장 
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


## 6. useMemo
- useMemo 훅은 성능 최적화를 위해 사용되는 훅 중 하나이다. 
- 이 훅은 이전에 계산된 값을 기억하고, 이 값이 변경되지 않는 한 다시 계산하지 않도록 한다.
- useMemo 는 2가지 인자를 받는다.
  - 첫 번째 매개 변수는 값을 계산하는 함수이다.
  - 두 번째 매개 변수는 의존성 배열이다.  
    (이 배열에 나열된 값들이 변경되지 않는 한, useMemo 는 캐시된 값을 유지하고 반환 한다.)

### 6-1. 사용 예시

    function expensiveCalculation(a, b) {
      // 매우 비용이 많이 드는 계산 
      return a + b;
    }

- 이 함수를 react 컴포넌트에서 사용한다고 가정하고 이 함수는 a 와 b 라는 props 에 의존적이다.
- 그럼 useMemo 를 사용하여 이 함수를 최적화 할 수 있다.
######
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

## 7. useCallback
- useCallback 훅 역시 성능 최적화를 위해 사용되는 훅 중 하나이다. 
- 주로 함수를 메모이제이션 하고, 불필요한 렌더링을 방지하고자 할 때 활용된다.
- useCallback 은 다음과 같은 구조를 가진다.
    
      const memoizedCallback = useCallback(
        () => {
          // 콜백 함수 로직 
        }, [의존성 배열 ]
        )
- 여기서 memoizedCallback 은 메모이제이션된 콜백 함수를 나타낸다. 
- useCallback 의 첫 번째 인자로는 메모이제이션할 콜백 함수를 전달한다.
- 두 번째 인자로는 의존성 배열을 전달한다. 
- 의존성 배열은 콜백 함수 내에서 참조하는 상태나 프로퍼티를 나타내며, 이 배열에 포함된 값이 변경될 때만 새로운 콜백 함수가 생성되고 그렇지 않으면 이전에 생성된 콜백 함수가 재사용된다.

### 7-1. useCallback 을 사용하는 이유
- **렌더링 최적화**: 컴포넌트의 불필요한 재렌더링을 방지하기 위해 사용된다.  
  특히 자식 컴포넌트에 props 로 전달되는 콜백 함수들을 메모이제이션 한다.  
  이렇게 함으로써 props가 변경되었을 때 불필요한 자식 컴포넌트의 재랜더링을 방지할 수 있다.
- **의존성에 따른 갱신**: 의존성 배열을 통해 특정 값이 변경될 때만 새로운 콜백 함수가 생성되도록 제어해 성능을 최적화 한다.

### 7-2. 사용 예시 
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

#### 정리
- useCallback 한수는 함수를 메모이제이션 하는 것이다.
- 함수를 한 번 정의하고 그 다음에 이전에 정의된 함수를 재 사용한다.
- 이 과정에서 메모이제이션된 함수는 해당 함수가 생성될 때의 컨텍스트와 변수들을 기억한다
######
- 일반적으로 리액트 컴포넌트에서 함수를 props로 전달할 때, 그 함수는 매 렌더링 마다 새로운 함수로 인식한다.
- 이는 같은 기능을 수행하는 함수라 할지라도, 렌더링마다 함수가 새롭게 생성되어 재사용이 어렵고, 성능 저하를 가져올 수 있다.
- useCallback 을 사용하면 이 문제를 해결할 수 있다. 
  - useCallback 을 사용하여 함수를 감싸면, 해당 함수는 렌더링 간에 메모이제이션되어 동일함 함수 객체가 유지된다.
  - 이것은 해당 함수가 변경되는 상황에만 새로운 함수를 생성하도록 제어함으로서, 불필요한 렌더링을 방지하고 성능을 개선한다.
  
      
