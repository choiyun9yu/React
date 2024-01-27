# Multi Language

## 1. 다국어 라이브러리 선택

React 애플리케이션에서 다국어를 구현하는 가장 일반적인 방법은 다국어 관리를 지원하는 라이브러리를 선택하는 것입니다. 이러한 라이브러리 중에서 react-i18next와 react-intl이 인기가 많습니다.  
각 라이브러리는 장단점이 있으므로 프로젝트 요구 사항에 맞게 선택하십시오.

-   [react-i18next](https://react.i18next.com/): 이 라이브러리는 i18next 라이브러리를 React 애플리케이션에 통합하는 데 사용됩니다.

-   [react-intl](https://formatjs.io/docs/react-intl): 이 라이브러리는 React에서 다국어를 지원하기 위한 데코레이터, 컴포넌트, 훅 등을 제공합니다.

## 2. 라이브러리 설치:

선택한 다국어 라이브러리를 설치합니다. 예를 들어, react-i18next를 설치하려면 다음 명령을 사용합니다:

    $ npm install react-i18next i18next

    $ npm install react-intl

## 3. 다국어 리소스 파일 작성:

다국어 애플리케이션에서 사용할 다국어 문자열을 관리하는 리소스 파일을 작성합니다.  
이 파일에는 지원하는 모든 언어에 대한 문자열이 포함되어야 합니다.  
리소스 파일은 JSON 형식 또는 다른 형식으로 작성할 수 있습니다.

예를 들어, en.json과 ko.json 리소스 파일을 작성할 수 있습니다:

#### en.json

    {
    "hello": "Hello",
    "welcome": "Welcome to our app"
    }

#### ko.json

    {
    "hello": "안녕하세요",
    "welcome": "우리 앱에 오신 것을 환영합니다"
    }

## 4. 다국어 라이브러리 설정:

다국어 라이브러리를 설정하고 사용할 다국어 리소스 파일을 로드합니다.  
라이브러리에 따라 설정 방법이 다를 수 있습니다.  
예를 들어, react-i18next의 경우 설정은 다음과 같이 수행됩니다

#### i18n.js

    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    import en from './locales/en.json';
    import ko from './locales/ko.json';

    i18n
    .use(initReactI18next)
    .init({
        resources: {
        en: { translation: en },
        ko: { translation: ko },
        },
        lng: 'en', // 기본 언어 설정
        fallbackLng: 'en', // 언어를 찾지 못할 경우 기본 언어로 설정
        interpolation: {
        escapeValue: false, // React 컴포넌트를 이스케이프하지 않음
        },
    });

    export default i18n;

## 5. 애플리케이션에서 다국어 문자열 사용:

애플리케이션에서 다국어 문자열을 사용하려면 useTranslation 훅 또는 고급 라이브러리 기능을 사용하여  
문자열을 가져와서 렌더링합니다. 예를 들어 react-i18next에서는 다음과 같이 사용합니다.

    import React from 'react';
    import { useTranslation } from 'react-i18next';

    function MyComponent() {
    const { t } = useTranslation();

    return (
        <div>
        <h1>{t('hello')}</h1>
        <p>{t('welcome')}</p>
        </div>
    );
    }

    export default MyComponent;

## 6. 언어 전환 기능 추가:

다국어 애플리케이션에는 언어 전환 기능을 추가해야 합니다. 이를 위해 사용자의 언어 설정을 저장하고 적절한 언어로 애플리케이션을 업데이트할 수 있는 기능이 필요합니다.

예를 들어, 언어 전환 버튼을 만들고 사용자의 언어 설정을 관리하는 컴포넌트를 만들 수 있습니다.

다국어 애플리케이션을 구축하려면 선택한 라이브러리의 문서를 자세히 읽고 해당 라이브러리의 사용법을 숙지해야 합니다. 각 라이브러리마다 조금 다른 방식으로 동작할 수 있기 때문입니다.
