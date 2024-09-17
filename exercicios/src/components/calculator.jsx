import { useState } from "react";

const Calculator = () => {
  const [number01, setNumber01] = useState('')
  const [number02, setNumber02] = useState('')
  const [result, setResult] = useState(null)

  const calculatorSum = () => {
    const sum = parseFloat(number01) + parseFloat(number02);
    setResult(sum)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="number"
        placeholder="Digite o primeiro numero"
        value={number01}
        onChange={(e) => setNumber01(e.target.value)}
        style={{ padding: '10px', margin: '5px', fontSize: '16px' }}
      />
      <input
        type="number"
        placeholder="Digite o segundo numero"
        value={number02}
        onChange={(e) => setNumber02(e.target.value)}
        style={{ padding: '10px', margin: '5px', fontSize: '16px' }}
      />
      <br />
      <button onClick={calculatorSum} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Calcular 
      </button>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  )
}

export default Calculator;