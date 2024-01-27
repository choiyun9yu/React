# Theme

## 1. 테마 설정 파일 만들기

객체 형태로 테마 설정 값 관리, 이 객체를 export/import 해서 접근  
예제는 다크모드와 라이트모드이지만 Theme.js 파일을 사용할 컴포넌트에서 import 하고,  
obj.fieldName 식으로 설정값 가져올 수 있음

#### Theme.js

    export const lightTheme = {
        primaryColor: 'blue',
        backgroundColor: 'white',
        fontSize: '16px',
    };

    export const darkTheme = {
        primaryColor: 'white',
        backgroundColor: 'black',
        fontSize: '16px',
    }

## 2. 테마 컨텍스트 생성하기

컨텍스트를 사용하여 전역으로 테마를 관리

#### ThemeContext.js

    import React, { createContext, useContext, useState } from 'react';
    import { lightTheme, darkTheme } from './theme'; // 테마 설정 파일 불러오기

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

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
    }

## 3. 테마를 사용할 컴포넌트에 테마 적용

테마를 사용할 컴포넌트에서 useTheme 훅을 사용하여 현재 테마 및 테마 전환 함수를 삽입

#### appliedComponent.js

    import React from 'react';
    import { useTheme } from './ThemeContext';

    function ThemedButton() {
    const { currentTheme, toggleTheme } = useTheme();

    return (
        <button
        style={{
            color: currentTheme.primaryColor,
            backgroundColor: currentTheme.backgroundColor,
            fontSize: currentTheme.fontSize,
        }}
        onClick={toggleTheme}
        >
        Toggle Theme
        </button>
    );
    }

    export default ThemedButton;

## 4. ThemeProvider로 애플리케이션 감싸기

애플리케이션 최상위 컴포넌트 또는 필요 범위에서 ThemeProvider 컴포넌트로 애플리케이션을 감싸기  
이렇게 하면 하위 컴포넌트에서 useTheme 훅을 사용하여 테마 정보에 접근할 수 있음

#### App.js

    import React from 'react';
    import ThemedButton from './ThemedButton';
    import { ThemeProvider } from './ThemeContext';

    function App() {
    return (
        <ThemeProvider>
        <div className="App">
            <h1>Themed App</h1>
            <ThemedButton />
        </div>
        </ThemeProvider>
    );
    }

    export default App;
