function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default FileInput;
