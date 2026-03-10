import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
    
    return (
        <header className="menu-container">
            <nav className="nav">
                <ul className="menu">
                    <li className="linkHome">
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li className="linkCadastroCliente">
                        <Link to="/cadastro-cliente">
                            Cadastrar Cliente
                        </Link>
                    </li>

                    <li className="linkCadastroProduto">
                        <Link to="/home/cadadastro-produto">
                            Cadastrar Produto
                        </Link>
                    </li>   
                </ul>
            </nav>
        </header>
    )
}
export default Menu;