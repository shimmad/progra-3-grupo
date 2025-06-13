import { useEffect, useState } from 'react';
import { obtenerPersona } from './TraerPersonas';

const ListaPersonas = () => {
    const [personas, setPersonas] = useState([]);
    
    useEffect(() => {
        const traer = async () => {
            const datos = await obtenerPersona();
            setPersonas(datos);
        };
        traer();
    }, []);

    return (
    <div
        style={{
            maxWidth: '400px',
            margin: '2rem auto',
            padding: '2rem',
            backgroundColor: '#fff',
            color: '#222',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}
    >
        <h2>Personas Registradas</h2>
        {personas.length === 0 ? (
            <p>Cargando personas...</p>
        ) : (
            <ul>
                {personas.map((persona) => (
                    <li key={persona.id}>
                        {persona.nombre} {persona.apellido}
                    </li>
                ))}
            </ul>
        )}
    </div>
)};

export default ListaPersonas;