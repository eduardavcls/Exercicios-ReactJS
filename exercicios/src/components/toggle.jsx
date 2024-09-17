import { useState } from "react";

const Visibility = () => {
  const [visible, setVisible] = useState(true);
  const visibilityAlternative = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={visibilityAlternative}>
        {visible ? 'Esconder Texto' : 'Mostrar Texto'}
      </button>
      {visible && <p>Este texto pode ser ocultado ou visivel.</p>}
    </div>
  );
};

export default Visibility;