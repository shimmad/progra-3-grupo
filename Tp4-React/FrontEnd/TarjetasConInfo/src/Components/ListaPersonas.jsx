import React, { useEffect, useState } from "react";
import DetallePersona from "./DetallePersona";
import { obtenerPersona } from "./TraerPersonas";

function ListaPersonas() {
  const [personas, setPersonas] = useState([]);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  useEffect(() => {
     fetch("http://localhost:3000/personas/")
      
    .then(response => {
        if (!response.ok) throw new Error("Error al obtener los datos");
        return response.json();
      })
      .then(data => setPersonas(data))
      .catch(error => console.error("Error en el fetch:", error));
  }, []);

  const handleClick = (id) => {
    fetch(`http://localhost:3000/personas/${id}`)
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener la persona");
        return response.json();
      })
      .then(data => setPersonaSeleccionada(data))
      .catch(error => console.error(error));
  };

  if (personaSeleccionada) {
    return (
      <DetallePersona
        persona={personaSeleccionada}
        onVolver={() => setPersonaSeleccionada(null)}
      />
    );
  }

  return (
    <div>
      <h2>Personas</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {personas.map(persona => (
          <li key={persona.id}>
            <button onClick={() => handleClick(persona.id)}>
              {persona.nombre} {persona.apellido}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPersonas;