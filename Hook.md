# React Hook


## 1. useState

## 2. useEffect

## 3. useCallback
- useCallback은 메모이제이션된 콜백 함수를 생성하는 데 사용한다.
- 이 훅은 함수와 종속성 배열을 인자로 ㅂ다아, 해당 함수를 메모이제이션된(기억된) 버전으로 반환한다.
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

### 3-2. 의존성 배열을 통한 조건부 함수 생성
- 함수가 의존하는 값이 변경되었을 때만 함수를 새로 생성하고,  
  그렇지 않으면 이전 메모이제이션된 함수를 사용한다.

## 4. useContext

## 5. useRef
- useRef 는 주로 DOM 요소에 접근하거나 컴포넌트의 상태를 유지하는 데 사용된다.
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

### 5-2. 컴포넌트의 상태 유지
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

### 5-3. 이전 값 저장 
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
