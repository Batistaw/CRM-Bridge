import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login enviado")
    };

    return (
        <div className='login-wrapper'>
            <header className='titulo'>
                <h2 className='titulo-h2'>CRM Bridge</h2>
                <p className='titulo-p'>Bem-vindo de volta</p>
            </header>

            <main className="container">
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        
                        <input
                            type="email" 
                            placeholder="E-mail" 
                        />
                    </div>
                    
                    <div className="input-group">
                        
                        <input 
                            type="password"
                            placeholder="Senha"
                        />
                    </div>

                    <button type="button" className='button-forgot'>
                        Esqueceu a Senha
                    </button>
                    
                    <button type="submit" className="button-submit">
                        <Link to="/home">ENTRAR</Link>
                    </button>
                </form>

                <div className="signUp">
                    <p>Não tem uma conta?</p>
                    <button type="button" className='btt-sign'>Cadastre-se aqui.</button>
                </div>
            </main>
        </div>
    );
}

export default Login;