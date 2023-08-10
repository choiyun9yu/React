// import { useState } from "react";
import { useEffect, useRef } from "react";

function FileInput({ name, value, onChange }) {
  //   const [value, setValue] = useState();
  // FileInput 컴포넌트에 있는 State를 Prop으로 바꾸고 상위 컴포넌트에 있는 State를 props로 내려준다.

  const handleChange2 = (e) => {
    // console.log(e.target.files);
    // 파일은 여러개 선택할 수 있으니까 유사배열 형태이다.
    // 0번 인덱스에는 우리가 선택한 파일에 해당하는 객체가 있다.
    const nextValue = e.target.files[0];
    // setValue(nextValue); 대신에 onChange로 물려받은 상위 컴포넌트의 handleChange 동작
    onChange(name, nextValue); // 상위 컴포넌트의 handleChange
  };

  const inputRef = useRef();

  useEffect(() => {
    // ref의 current 속성은 DOM 엘리먼트 객체를 가리킨다
    if (inputRef.current) {
      console.log(inputRef);
    }
  }, []);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = ""; // 파일 초기화
    onChange(name, null); // 상태값 null로 변경
  };

  return (
    <div>
      <input type="file" onChange={handleChange2} ref={inputRef} />
      {/* value에 값이 있을 때만 렌더링 할 거니가 조건부 렌더링으로 처리 */}
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
