const InputBar = ({ value, onChange, onSubmit }) => {
  return (
    <form className="kit-inputbar" onSubmit={onSubmit}>
      <button type="button" className="kit-icon-button" aria-label="添加图片">＋</button>
      <input
        className="svy-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="追问这一步，或输入新的题目"
        aria-label="追问或输入题目"
      />
      <button type="submit" className="svy-button svy-button-primary">发送</button>
    </form>
  );
};

Object.assign(window, { InputBar });
