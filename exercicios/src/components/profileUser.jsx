import { useState } from "react";

const ProfileUser = ({nameuser, age , picture}) => {
    return (
       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '250px' }}>
      <img
        src={picture}
        alt={`Foto de ${nameuser}`}
        style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <h1> Nome:{nameuser}</h1>
      <p>Idade: {age}</p>
    </div>
    )
}

export default ProfileUser;