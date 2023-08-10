import { useRef, useEffect } from "react";

function FileInput({ name, value, onChange }) {
  const handleChange2 = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const inputRef = useRef();

  useEffect(() => {
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
      <input type="file" onChange={handleChange2} />
      {value && (
        <button type="button" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;
