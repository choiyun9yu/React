# Framer

[Document](https://www.framer.com/motion/introduction/)

## What is Framer

애니메이션, 터치 기반 제스처 및 스크롤, 페이징 및 인터페이스 흐름을 위한 여러 재사용 컴포넌트를 제공하는 라이브러리  
코드 없이 실제 서비스에 가까운 프로토타입을 만들 수 있는 툴, 웹으로 배포하기도 용이

**Stack**

-   React
-   JSK
-   Typescript

## 프로젝트 생성

#### start with ai

-   [Framer](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwix99fTz4OBAxXiwUwCHQ3wC5QYABAAGgJ0bQ&gclid=CjwKCAjwrranBhAEEiwAzbhNtfizFI5ByLO-au1rAA3gzBQf5fehP7J5gqN6xK251s2T3al9JeKMaRoCmvkQAvD_BwE&ohost=www.google.com&cid=CAESa-D2ECmXejV0tNAsIf6JTPhpIj6HH59rRKCJObSq-o4WxV8Dhf6QEQpyAMIyEnYDmj_RwxsmWMG8pLLDuU8vtt843WESYMI1jfZ8hIltQ456BoSNBoEgr92RbeY5gKbIllI28-q-2lj-KdFf&sig=AOD64_0YNx2JRd4KinOAG3NAn6wawxG1FA&q&adurl&ved=2ahUKEwisqdDTz4OBAxXNqVYBHcWhCg0Q0Qx6BAgQEAE)에 접속하면 나오는 Start with AI 클

#### 디바이스 레이아웃 삽입

-   좌측 상단 Layout 버튼을 통해 Layout 설정 가능
-   (+) 버튼으로 Custom layout 생성 가능
-   좌측 상단 Insert 버튼을 통해 기본 제공 컴포넌트 삽입 가능

#### 컴포넌트 생성

-   레이어를 클릭하고 설정창에서 Code Overrides 탭에서 NewFile

######

    import * as React from "react"  // react를 React라는 이름으로 가져오기
    import { Frame } from "framer"  // framer가 제공하는 것 중 Frame 컴포넌트 가져오기

    // 컴포넌트 구현체와 그를 export로 내보내는 코드 (함수형 컴포넌트)
    export function FirstComponent({width,height,background}) {
        return (
            <Frame  // 이 프롭들은 Frame 컴포넌트에서 미리 지정해 뒀으니 적용가능, FisrtComponent에서 pops로 받는 이유는 FirstComponent를 사용하는 곳에서 값을 내려주기 위함
                width={100}
                height={100}
                background={"242424"}>
                기본 컴포넌트 구조
            </Frame>
        )
    }
