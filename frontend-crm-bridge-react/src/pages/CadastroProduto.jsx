import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CadastroProduto() {
    const [produto, setProduto] = useState([]);
    const [tipoProduto, setTipoProduto] = useState([]);
    const [valorProduto, setValorProduto] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

  
    return(
        
        <section className="table-container">
            
        </section>
    );
}

export default CadastroProduto;