import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CadastroProduto({onSucesso}) {
    const [produto, setProduto] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [valorProduto, setValorProduto] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const cadastrarProduto = (e) => {
        e.preventDefault();
        console.log("produto: ", produto);
        console.log("tipoProduto:", tipoProduto);
        console.log("valorProduto:", valorProduto);

        const novoProduto = {
            nomeProduto: produto, 
            tipoProduto: tipoProduto,
            valorProduto: valorProduto
        };

        fetch("http://localhost:8080/produtos/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoProduto)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Cadastrado!", data);
            onSucesso(); 
        })
        .catch(err => console.log(err));
    }

    return(
        
        <section className="table-container">
            <form onSubmit={cadastrarProduto}>
                <div className="cadastro-produto">
                    <input
                        type="text"
                        id="cadastro-produto"
                        name="cadastro-produto"
                        required
                        placeholder="Produto"
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                    />
                </div>

                <div className="tipo-produto">
                    <input
                        type="text"
                        id="tipo-produto"
                        name="tipo-produto"
                        required
                        placeholder=""
                        value={tipoProduto}
                        onChange={(e) => setTipoProduto(e.target.value)}
                    />
                </div>

                <div className="valor-produto">
                    <input
                        type="text"
                        id="valor-produto"
                        name="valor-produto"
                        required
                        placeholder="00,00"
                        value={valorProduto}
                        onChange={(e) => setValorProduto(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-submit">
                    Cadastrar
                </button>
            </form>
        </section>
    );
}

export default CadastroProduto;