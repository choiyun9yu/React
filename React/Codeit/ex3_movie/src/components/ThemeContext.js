import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './Theme'; // 테마 설정 파일 불러오기

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    // 테마 전환 함수
    function toggleTheme() {
        setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
    }

    return <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
