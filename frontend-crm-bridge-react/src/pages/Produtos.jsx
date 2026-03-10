import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Produtos() {
    const [produto, setProduto] = useState([]);
    const [tipoProduto, setTipoProduto] = useState([]);
    const [valorProduto, setValorProduto] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/produtos/findAll")
            .then(res => res.json())
            .then(data => setProduto(data))
            .catch(err => console.log(err));
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
            <button onClick={() => navigate(`/cadastrar-produto`)}>
                + Novo Produto
            </button>
            <tbody>
                {produto.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.valorProduto}</td>
                        <td>
                            <button onClick={() => navigate(`/update-produto/${produto.id}`)}>
                                update
                            </button>
                            <button onClick={() => handleDelete(p.id)}>
                                Deletar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </section>
    );
}

export default Produtos;