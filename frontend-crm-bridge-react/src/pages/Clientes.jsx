import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CadastroCliente from "./CadastroCliente";
import "./Clientes.css";

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const buscarClientes = () => {
        fetch("http://localhost:8080/cliente/")
            .then(res => res.json())
            .then(data => setClientes(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        buscarClientes();
    }, [location]);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/cliente/deletar/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setClientes(clientes.filter(c => c.id !== id));
        })
        .catch(err => console.error(err));
    };

    return (
        <section className="table-container">
            <h2 className="tabela-titulo">Gerenciamento de Clientes</h2>

            <div className="tabela-header">
                <button
                    onClick={() => setModalAberto(true)}
                    className="btn-cadastro">
                    + Novo Cliente
                </button>
            </div>

            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button 
                            className="btn-fechar"
                            onClick={() => setModalAberto(false)}>
                            ✕ Fechar
                        </button>
                        <CadastroCliente onSucesso={() => {
                            setModalAberto(false);
                            buscarClientes();
                        }}/>
                    </div>
                </div>
            )}

            <table className="tabela">
                <thead className="cabecalho">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Whatsapp</th>
                        <th>Valor Compra</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody className="tb-clientes">
                    {clientes.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.username}</td>
                            <td>{c.whatsapp}</td>
                            <td>R${c.valorCompra ?? "—"}</td>
                            <td>{c.status ? "Finalizado" : "Em aberto"}</td>
                            <td>
                                <button 
                                    className="btn-edit"
                                    onClick={() => navigate(`/update-cliente/${c.id}`)}>
                                    Editar
                                </button>
                                <button 
                                    className="btn-delete"
                                    onClick={() => handleDelete(c.id)}>
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Clientes;