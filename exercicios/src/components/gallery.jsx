import { useState } from "react";

const PicturesGallery = ({ urls }) => {
  const [picsEnlarged, setPicsEnlarged] = useState(null)

  const enlargePic = (url) => {
    setEnlargePic(url)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      
      {enlargePic && (
        <div>
          <h3>Imagem Ampliada</h3>
          <img
            src={enlargePic}
            alt="Imagem ampliada"
            style={{ width: '500px', marginBottom: '20px' }}
            onClick={() => setEnlargePic(null)} 
          />
        </div>
      )}

    
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {urls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Imagem ${index + 1}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => enlargePic(url)}
          />
        ))}
      </div>
    </div>
  );
};

export default PicturesGallery;