import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CadastroProduto from "./CadastroProduto";
import "./Produtos.css";

function Produtos() {
    const [produto, setProduto] = useState([]);
    const [tipoProduto, setTipoProduto] = useState([]);
    const [valorProduto, setValorProduto] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const buscarProdutos = () => {
            fetch("http://localhost:8080/produtos/")
            .then(res => res.json())
            .then(data => setProduto(data))
            .catch(err => console.log(err));
    }

    useEffect (() => {
        buscarProdutos();
    }, [location]);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/produtos/delete/${id}`, {
        method: "DELETE",
        })
        .then(() => {
            setProduto(produto.filter(p => p.id !== id));
        })
        .catch(err => console.error(err));
  };


    return(
        
        <section className="table-container">
            <div className="modal-cadastro">
                <button  
                onClick={() => setModalAberto(true)}
                className="btn-cadastro">
                    + Novo Produto
                </button>

                {modalAberto && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button onClick={() => setModalAberto(false)}>Fechar</button>
                            <CadastroProduto onSucesso={() => {
                                setModalAberto(false);
                                buscarProdutos();
                            }}/>
                        </div>
                    </div>
                )}
            </div>

            <table className="tabela">
                <thead className="cabecalho">
                    <tr>
                        <th>ID</th><th>Nome</th><th>Valor</th><th>Ações</th>
                    </tr>
                </thead>
                <tbody className="tb-produtos">
                    {produto.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nomeProduto}</td>
                            <td>{p.valorProduto}</td>
                            <td>
                                <button onClick={() => navigate(`/update-produto/${p.id}`)}>update</button>
                                <button onClick={() => handleDelete(p.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Produtos;