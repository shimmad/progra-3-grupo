//componente visual que reccibe una persona xomo prop y muesttra sus datos en un diseño lindo
//recibe una persona como prop con nombre, apellido, edad, mail
import "./TarjetaPersona.css";
const TarjetaPersona = ({persona}) => {
    const { nombre, apellido, edad, email } = persona;
    return (
        <div className="tarjeta">
            <h2>{nombre} {apellido}</h2>
            <p>{edad}</p>
            <p>{email}</p>
        </div>
    );
};

export default TarjetaPersona;