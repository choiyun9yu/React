import { useState, useCallback } from "react";

// 커스텀 훅 함수 use로 시작하는 이름을 붙여주는 것이 좋다.
function useAsync(asyncFunction) {  // 비동기 함수를 파라미터로 받고(api함수)
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    // 네트워크 리퀘스트를 보낼 때 사용할 함수
    const wrappedFunction = useCallback(async (...args) => {
        try {
            setError(null);
            setPending(true);
            return await asyncFunction(...args);
        } catch (error) {
            setError(error);
        } finally {
            setPending(false);
        }
    }, [asyncFunction]);

    return [pending, error, wrappedFunction];  // 로딩상태, 에러, 그리고 콜백을 실행할 수 있는 함수를 배열 형태로 리턴
}

export default useAsync;