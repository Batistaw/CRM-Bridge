import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ClienteCard from "../componentes/ClienteCard";
import "./Home.css"

function Home() {
    const [cliente, setCliente] = useState([]);
    const location = useLocation();
    const carrosselRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:8080/cliente/")
            .then(res => res.json())
            .then(data => setCliente(data))
            .catch(err => console.log(err));
    }, [location]);

    const scrollLeft = () => {
        carrosselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        carrosselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <main className="home-container">
        <h2>Clientes Hoje:</h2>
        <div className="carrossel-wrapper">
            <ClienteCard clientes={cliente} ref={carrosselRef}/> {}
        </div>
        <div className="setas-container">
            <button className="seta" onClick={scrollLeft}>&#8592;</button>
            <button className="seta" onClick={scrollRight}>&#8594;</button>
        </div>
    </main>
    );
}

export default Home;