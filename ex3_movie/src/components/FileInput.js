// import { useState } from "react";

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

  return <input type="file" onChange={handleChange2} />;
}

export default FileInput;
