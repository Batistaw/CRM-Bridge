import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css"

function Home() {
    const [cliente, setCliente] = useState([])
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/cliente/lista")
            .then(res => res.json())
            .then(data => setCliente(data))
            .catch(err => console.log(err));
    }, [location]);

    return(
        <main className="home-container">
            <h2>Clientes Hoje:</h2>
        </main>
    );
}

export default Home;