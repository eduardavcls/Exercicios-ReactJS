import { useState } from "react";

const CounterWords = () => {
const [text, setText] = useState('');
const countWords = (texto) => {

    return texto.trim().split(/\s+/).filter((word) => word).length;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <textarea
        rows="5"
        cols="50"
        placeholder="Digite Aqui:"
        value={text}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <p>Contagem de palavras: {countWords(text)}</p>
    </div>
  );
};

export default CounterWords;