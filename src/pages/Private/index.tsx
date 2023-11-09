import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../controllers/Auth/AuthContext";

export const Private = () => {
    const auth = useContext(AuthContext);
    const handleLogout = async () => {
      await auth.signout();
      window.location.href = window.location.href;
    }
  
    return (
        
        <div>
            <h2>Página Privada</h2>
            <header>
                <h1>Header do site</h1>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/private">Página Privada</Link>
                {auth.user && <button onClick={handleLogout}>Sair</button>}
                </nav>
            </header>
            <hr />
            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}