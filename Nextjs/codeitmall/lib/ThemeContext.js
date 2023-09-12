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
