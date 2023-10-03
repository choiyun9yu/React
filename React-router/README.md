# React-Router

신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리

####

-   BrowserRouter : HTML5를 지원하는 브라우저의 주소를 감지
-   HashRouter : 해시 주소를 감지

## install

    yarn add react-router-dom

## 1. example

#### App.js

    import React, { Component } from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';

    import Header from './Header';
    import Main from './Main';
    import Product from './Product';

    const App = () => {
        return (
            <div className='App'>
                <Header />
                <Main />
                <Product />
            </div>
        );
    }

    export default App;

### 1-1. < BrowserRouter > 태그로 컴포넌트 사용하기

-   BrowserRouter 태그로 컴포넌트 감싸기
-   Header는 모든 URL에 공통 적용할 Component로 최상단에 위치할 예정

### 1-2. < Routes >, < Route > 컴포넌트 사용하기

-   < Routes > 컴포넌트는 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할
-   < Route >는 path속성에 경로, element속성에는 컴포넌트를 넣어 준다.  
    여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 \*을 사용한다.

## 2. Outer ???

-   중첩된 라우트 목적 분리 :  
    중첩된 라이팅 구조에서는 부모 컴포넌트와 자식 컴포넌트 간의 라우팅이 필요하다.  
    Outlet을 사용하면 부모 컴포넌트가 자식 컴포넌트의 라우팅을 처리할 수 있다.

-   라우팅 계층 구조 :  
    중첩된 라우트가 있는 경우, 각 라우트가 해당 영역 내에서 렌더링 되어야하는지 정의해야한다.  
    Outlet을 사용하면 이러한 라우팅 계층 구조를 표현할 수 있으며,  
    라우팅이 발생한 위치에 동적으로 자식 컴포넌트를 렌더링 할 수 있다.

-   라우팅의 유연성 :  
    Outlet을 사용하면 부모 컴포넌트가 자식 컴포넌트에 대한 라우팅 위치를 조절할 수 있다.
