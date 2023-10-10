# BugReport

## 요청이 하나씩 밀리는 경우

> 원인: 비동기 함수가 useState의 setter함수를 사용하는 경우 업데이트 이전의 값을 사용해서 발생

#### 해법1. setter 앞에 await을 붙여서 업데이트 이후의 값을 사용하도록 기다려주기

    const handleSelectChange = async (e) => {
    const { name, value } = e.target;

    await setFormData({
        [name]: value,
    });

    // POST 요청
    try {
        const Body = new FormData();
        Body.append([name], value);

        const response = await fetch('http://127.0.0.1:5050/api/realtime', {
            method: 'POST',
            body: Body,
        });

## Warning: Each child in a list should have a unique "key" prop.

> 원인: React에서 리스트를 렌더링할 때 각 항목에 고유한 "key" 지정하지 않아서 발생

React에서 컴포넌트를 렌더링할 때 고유한 키를 제공하지 않으면 React는 렌더링 및 업데이트 성능을 최적화하는 데 어려움을 겪을 수 있음

#### 해법1. 고유한 키 추가

-   데이터에서 고유 식별자가 제공되지 않는 경우
-   리스트를 렌더링하는 부분에서 각 항목에 고유한 키를 제공해서 해결

          {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
          ))}

#### 해법2. 고유한 식별자 사용

-   데이터에서 고유 식별자가 제공되는 경우
-   각 항목에 고유한 식별자 부여, 이 식별자는 리스트 항목의 변경을 추적하는 것을 도움

              {items.map((item) => (
          <ListItem key={item.id}>{item.name}</ListItem>
          ))}

## Warning: Invalid DOM property \`stroke-linecap\`. Did you mean \`strokeLinecap`?

> 원인: React에서 SVG요소를 렌더링할 때 발생하는 경고, 속성 이름이 올바르게 작성되지 않아서 발생

#### 해법

-   속성 명의 (-)하이픈을 제거하고 카멜케이스로 작성

## react-dom.development.js:86 Warning: validateDOMNesting(...): <th> cannot appear as a child of <div>.

> 원인: React에서 HTML요소가 올바른 DOM 중첩 구조를 가지지 않을 때 발생,  
> 이 경고는 DOM 요소가 예상한 요소의 부모 노드로 사용되지 않을 때 발생

#### 해법
