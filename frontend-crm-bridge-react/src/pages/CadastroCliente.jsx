import { useState, useEffect } from "react";
import "./CadastroCliente.css";

function CadastroCliente({onSucesso}) {
    const [cliete, setCliente] = useState("");
    const [whatsapp, setWhatsapp] = useState("")
    const [produtos, setProdutos] = useState("")
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/produtos/")
            .then(res => res.json())
            .then(data => setListaProdutos(data))
            .catch(err => console.log(err));
    }, []);

    const cadastrarCliente = (e) => { 
        e.preventDefault();

        
        
        const novoCliete = {
            username: cliete,
            whatsapp: whatsapp, 
            produtos: [{ id: produtos }] 
        };

        fetch("http://localhost:8080/cliente/save", {
            method: "POST",
            headers: {
               "Content-Type": "application/json" 
            },
            body: JSON.stringify(novoCliete)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Cadastrado!", data);
            if(onSucesso) onSucesso(); 
        })
    }

    return(
        <main className="cadastro-wrapper">
            <div className="container-cadastro">
                <form onSubmit={cadastrarCliente}>
                    <div className="cadastro">
                        <input 
                        type="text"
                        id="cadastro-cliente"
                        name="cadastro-cliente"
                        required
                        placeholder="Cliente"
                        value={cliete}
                        onChange={(e) => setCliente(e.target.value)}
                        />
                    </div>

                    <div className="whatsapp">
                        <input
                            type="text"
                            id="cadastro-whatsapp"
                            name="cadastro-whatsapp"
                            required
                            placeholder="(92) 9 9999-9999"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="Produtos" className="produtos">Produtos</label>
                        <select 
                            value={produtos}
                            onChange={(e) => setProdutos(e.target.value)}>
                            
                            {listaProdutos.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.nomeProduto} - {p.tipoProduto} | R${p.valorProduto}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">
                        Cadastrar
                    </button>
                </form>

            </div>
        </main>
    );
}
export default CadastroCliente;