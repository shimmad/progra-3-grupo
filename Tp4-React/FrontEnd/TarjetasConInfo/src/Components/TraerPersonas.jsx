
export const obtenerPersona = async () => {
    try {
        const res = await fetch('http://localhost:3000/personas');
        const info = await res.json();
        console.log(info);
        return info;
    }
    catch (error) {
        console.log("No se pudo obtener los datos", error);
        return [];  
    }
    };


