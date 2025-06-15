//componente visual que reccibe una persona xomo prop y muesttra sus datos en un diseño lindo
//recibe una persona como prop con nombre, apellido, edad, mail
import React from "react";

function TarjetaPersona({ persona }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, margin: 8 }}>
      <h3>{persona.nombre}</h3>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
}

export default TarjetaPersona;