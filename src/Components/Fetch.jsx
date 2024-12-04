import { useEffect, useState } from "react";

const Fetch = () => {
    const [odontologo,setOdontologo] = useState([]);
    const[loading,setLoading] = useState(true);

    const url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        fetch(url)
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                return respuesta.json();
            })
            .then((data) => {
                setOdontologo(data); // Guardamos los datos en el estado
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al hacer el fetch:", error);
            });
    }, []);

    return (
        <div className="card">
            {loading ? "Cargando...":odontologo.map((odontologo) => (
                        <li key={odontologo.id}>
                            Nombre: {odontologo.name} - Email: {odontologo.email}
                        </li>
                    ))}
        </div>
    );
};

export default Fetch;
