import { createContext, useContext, useState } from "react";

// 이 함수는 아규먼트로 Context가 제공할 기본 값을 받는다.
const LocaleContext = createContext();

// context 코드 분리하기
export function LocaleProvider({ defaultValue = 'ko', children}) {
    const [locale, setLocale] = useState(defaultValue);
    return <LocaleContext.Provider value={{
        locale, setLocale,
    }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
    const context = useContext(LocaleContext);
    
    if (!context) {
        throw new Error('qksemtl LovaleProvider 안에서 사용해야 합니다!')
    }

    return context.locale;
}

export function useSetLocale() {
    const context = useContext(LocaleContext);
    
    if (!context) {
        throw new Error('qksemtl LovaleProvider 안에서 사용해야 합니다!')
    }

    return context.setLocale;
}