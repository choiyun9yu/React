import { useRef, useEffect, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const handleChange2 = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const inputRef = useRef();

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = ""; // 파일 초기화
    onChange(name, null); // 상태값 null로 변경
  };

  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input
        type="file"
        accept="image/png image/jpeg"
        onChange={handleChange2}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
