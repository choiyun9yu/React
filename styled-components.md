# styled-components

대표적인 CSS-in-JS 라이브러리

[ref](https://www.daleseo.com/react-styled-components/)

#### What is CSS in JS?

스타일 정의를 CSS파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법  
React와 같은 모던 자바스크립트 라이브러리 인기로 재활용이 가능한 빌딩 블록으로 분리하여 개발하는 컴포넌트 개발 방법이 주류  
따라서 웹페이지를 HTML, CSS, JS로 분리하는 것이 아니라, 컴포넌트로 분리하고 컴포넌트에 HTML, CSS, JS를 모두 넣는 패턴 사용

## 1. Install

    $ npm i styled-components

## 2. Basic Grammar

### 2-1. styled 함수

-   HTML 엘리먼트나 React 컴포넌트에 원하는 스타일을 적용하기 위해 사용
-   HTML 엘리먼트와 React 컴포넌트에 적용하는 방법은 조금 상이
-   styled 함수는 해당 스타일이 적용된 HTML 엘리먼트나 React컴포넌트를 리턴

#### HTML 엘리먼트에 적용

    import styled from "styled-components";

    styled.button`
        // <button> HTML 엘리먼트에 대한 스타일 정의
    `

#### React 컴포넌트에 적용

    import styled from "styled-components";
    import Button from "./Button";

    styled(Button)`
    // <Button> React 컴포넌트에 스타일 정의
    `;

### 2-2. 고정 스타일링

< button > HTML 엘리먼트에 원하는 스타일링을 적용한 후, styledButton 변수에 저장

    import React from "react";
    import styled from "styled-components";

    const StyledButton = styled.button`
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid lightgray;
        color: gray;
        background: white;
    `;

    function Button({ children }) {
    return <StyledButton>{children}</StyledButton>;
    }

위에서 만든 버튼 컴포넌트는 다른 React 컴포넌트에서 사용 가능

    import Button from "./Button";
    <Button>Default Button</Button>;

### 2-3. 가변 스타일링 1

Styled Components는 React 컴포넌트에 넘어온 props에 따라 다른 스타일을 적용하는 기능 제공  
Tagged Template Literals을 사용하기 때문에 함수도 문자열 안에 포함시킬 수 있는 것을 이용?  
예를 들어, 버튼의 글자색과 배격색을 props에 따라 바뀌도록 아래 코드 작성

    import React from "react";
    import styled from "styled-components";

    const StyledButton = styled.button`
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 1rem;
        line-height: 1.5;
        border: 1px solid lightgray;

        color: ${(props) => props.color || "gray"};
        background: ${(props) => props.background || "white"};
    `;

    function Button({ children, color, background }) {
    return (
        <StyledButton color={color} background={background} Î>
        {children}
        </StyledButton>
    );
    }

주의사항! < Button / >에 넘어온, color와 background prop을 < StyleddButton / > 컴포넌트로 넘겨줘야 한다.  
(그렇지 않을 경우, < StyledButon /> 컴포넌트가 해당 prop을 인식할리 없다.)

    // 실제 사용 시
    import Button from "./Button";

    <Button color="green" background="pink">
    Green Button
    </Button>;

### 2-4. 가변 스타일링 2

prop에 따라 바꾸고 싶은 CSS 속성이 하나가 아니라 여러개인 경우,  
css 함수를 사용해서 여러 개의 CSS속성을 묶음 정의 할 수 있다.  
예를 들어 primary prop이 넘어온 경우, 글자색은 흰색, 배경과 경계는 남색으로 변경하는 코드 아래 작성

    import React from "react";
    import styled, { css } from "styled-components";

    const StyledButton = styled.button`
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;

    ${(props) =>
        props.primary &&
        // 이 부분에서 css함수로 묶어서 CSS 속성 정의
        css`
        color: white;
        background: navy;
        border-color: navy;
        `}
    `;

    // 넘겨야할 prop 값이 많아질 경우, 위와 같이 ...props 구문을 사용해서 children 외에 모든 prop을 간편하게 전달 가능
    function Button({ children, ...props }) {
    return <StyledButton {...props}>{children}</StyledButton>;
    }
