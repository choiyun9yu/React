# shadcn ui
[UI 패턴](https://www.w3.org/WAI/ARIA/apg/#aria_ex)

## 0. Radix-ui
고품질의 액세스 가능한 디자인 시스템 및 웹 앱을 구축하기 위한 오프소스 UI 컴포넌트 라이브러리  
웹 플랫폼이 기존적으로 제공하는 요소는 기능이 부족하고, 직접만들기는 어려우니 도움을 주는 라이브러리  

    $ npm install @radix-ui/react-dialog
    $ npm install @radix-ui/react-dropdown-menu
    $ npm install @radix-ui/react-tooltip

    # Getting started
    $ pnpm add @radix-ui/react-dialog # Radix Primitives Dialog 사용

**shadcn ui** 
Radix UI 및 Tailwind CSS를 사용하여 구축된 재사용 가능한 컴포넌트  
라이브러리가 아니고 재사용 가능한 컴포넌트 모음, Radix-ui를 Tailwind CSS로 재가공한 컴포넌트 모음

## 1. install(with Next.js)

    # 프로젝트 생성
    $ npx create-next-app@latest my-app --typescript --tailwind --eslint
    
    # CLI 실행 
    $ npx shadcn-ui@lastest init

    # 프로젝트에 구성요소 추가
    $ shadcn-ui@lastest add button  

    # 가져오기
    import { Button } from "@/components/ui/button"

    export default function Home() {
    return (
        <div>
            <Button>Click me</Button>
        </div>
        )
    }

## 2. 프로젝트 구조
    
    .
    ├── app
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── ui  << ui 컴포넌트 저장
    │   │   ├── alert-dialog.tsx
    │   │   ├── button.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   └── ...
    │   ├── main-nav.tsx
    │   ├── page-header.tsx
    │   └── ...
    ├── lib  << 모든 유틸리티 포함
    │   └── utils.ts
    ├── styles  << 전역 CSS 포함
    │   └── globals.css 
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── tsconfig.json