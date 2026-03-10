import './ClienteCard.css';

function ClienteCard({clientes}) {
    
    return (
        <main className="container-cards">
            {clientes.map((cliente) => (
                <div key={cliente.id} className="card-item">
                    <section className="cards-top">
                        <h2 className='username'>{cliente.username}</h2>
                        <p className='servico'>{cliente.servico}</p>
                    </section>
                    <section className='cards-bottom'>

                        <p className='valor'>$R{cliente.valor}</p>
                        <a 
                            href={`https://wa.me/${cliente.whatsapp}?text=olá, ${cliente.username}! como posso ajudar?`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-whatsapp"
                            > 
                            Abrir Whatsapp
                        </a>
                    </section>
                </div>
            ))}
            <section>
                <h2></h2>
            </section>
        </main>
    );
}

export default ClienteCard;