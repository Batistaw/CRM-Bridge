import { forwardRef } from 'react'; 
import './ClienteCard.css';

const ClienteCard = forwardRef(({clientes}, ref) => { 
    
    return (
        <main ref={ref} className="container-cards"> {}
            {clientes.map((cliente) => (
                <div key={cliente.id} className="card-item">
                    <section className="cards-top">
                        <h2 className='username'>{cliente.username}</h2>
                        {cliente.produtos && cliente.produtos.map(p => (
                            <p key={p.id} className='servico'>{p.nomeProduto}</p>
                        ))}
                    </section>
                    <section className='cards-bottom'>
                        <p className='valor'>$R{cliente.valorCompra ?? "-"}</p>
                        <a 
                            href={`https://wa.me/${cliente.whatsapp}?text=olá, ${cliente.username}! como posso ajudar?`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-whatsapp"> 
                            Abrir Whatsapp
                        </a>
                    </section>
                </div>
            ))}
        </main>
    );
});

export default ClienteCard;