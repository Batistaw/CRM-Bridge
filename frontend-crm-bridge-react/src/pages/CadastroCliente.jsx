import { useState } from "react";
import "./CadastroCliente.css";

function CadastroCliente() {
    const [cliete, setCliente] = useState([]);
    const [whatsapp, setWhatsapp] = useState([])
    const [produtos, setProdutos] = useState([])

    const cadastrarCliente = (e) => { 
        e.preventDefault();
        
        const novoCliete = {
            username: novoCliete,
            whatsapp: whatsapp, 
            servico: produtos
        };

        fetch("http://localhost:8080/api/cliente/salvar", {
            method: "POST",
            headers: {
               "Content-Type": "application/json" 
            },
            body: JSON.stringify(novoCliete)
        })
        .then(res => res.json())
        .then(data => console.log("Cadastrado!", data))
        .catch(err => console.log(err));
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
                        <label for="Produtos" nameClass="produtos">Produtos</label>
                        <select 
                            id="produtos" 
                            nameClass="produtos-name">
                            value={produtos}
                            onChange={(e) => setProdutos(e.target.value)}

                            <option value="PORTA">Porta</option>
                            <option value="CIMENTO">Cimento</option>
                            <option value="VIDRO">Vidro</option>
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