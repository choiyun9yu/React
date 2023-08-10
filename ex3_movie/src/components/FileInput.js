import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  // 파일 미리보기 주소를 문자열로 저장할 상태값
  const [preview, setPreview] = useState();

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

  // useEffect를 사용하면 처음 렌더링하고 난 다음에 비동기로 콜백 함수가 실행되고
  // 그 다음 렌더링 때부터는 디펜던시 리스트의 값이 바뀔 때만 콜백 함수가 실행된다.
  useEffect(() => {
    if (!value) return;
    // objectURL 생성
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // side effect 정리
    return () => {
      // useEffect의 리턴은 다시 콜백할 때 그전 콜백의 리턴 값을 실행한다.
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = ""; // 파일 초기화
    onChange(name, null); // 상태값 null로 변경
  };

  return (
    <div>
      {/* 미리보기를 보여줄 img태그 */}
      <img src={preview} alt="이미지 미리보기" />
      {/* ref prop으로 속성을 넣어두면 나중에 이 태그 선택할 수 있다. */}
      <input
        type="file"
        accept="image/png, image/jpeg" // 받을 파일 형식 제한
        onChange={handleChange2}
        ref={inputRef}
      />
      {/* value에 값이 있을 때만 렌더링 할 거니가 조건부 렌더링으로 처리 */}
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
