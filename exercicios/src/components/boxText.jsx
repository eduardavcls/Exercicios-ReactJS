import { useState } from "react";

const BoxText = () => {
  const [text, setText] = useState('');
  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Digite algo..."
        style={{ padding: '10px', width: '200px' }}
      />
      <p>{text}</p>
    </div>
  )
}

export default BoxText;