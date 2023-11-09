import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import CadeadoImg from "../../assets/img/cadeado.png";
import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../controllers/Auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [RM, setRM] = useState('');
    const [hideIconPass, setHideIconPass] = useState(true);
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setRM(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(hideIconPass){
            event.currentTarget.type = "password"
        }else{
            event.currentTarget.type = "text"
        }
        setPassword(event.target.value);
    }
    const clickIconEyes = () => {
        setHideIconPass(!hideIconPass)
    }

    const handleLogin = async (event: { preventDefault: () => void; } ) => {
        event?.preventDefault()
        if (RM && password) {
            const isLogged = await auth.signin(RM, password);
            if (isLogged) {
                alert("Logado com sucesso")
                navigate('/');
            } else {
                alert("Erro ao Logar")
            }
        }else{
            alert("Erro no RM ou Senha")
        }
        
    }

    return (
        <Container className="containerFormulario">
            <header className="header">
                <img src={CadeadoImg} alt="Workflow" className="CadeadoImg" />
                <span>Insira as Credenciais Para Realizar Login</span>
            </header>

            <form>
                <div className="inputContainer">
                    <label htmlFor="RM">RM</label>
                    <input
                        type="text"
                        name="RM"
                        id="RM"
                        autoCapitalize='none'
                        value={RM}
                        autoCorrect="false"
                        placeholder="Digite o RM"
                        onChange={handleEmailInput}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        autoCorrect="false"
                        value={password}
                        id="password"
                        placeholder="*************"
                        onChange={handlePasswordInput}
                    />
                    <div className="buttonIcon" onClick={() => clickIconEyes()}>
                        { hideIconPass ?
                            <FontAwesomeIcon icon={faEyeSlash}/>
                            :
                            <FontAwesomeIcon icon={faEye} />
                        } 
                    </div>
                    
                </div>
                <button className="button" onClick={handleLogin}>
                    Login <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>
        </Container>
    );
}