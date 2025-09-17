import styled from "styled-components";
import MyLogo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import apiAuth from "../services/apiAuth";
import { UserContext } from "../contexts/UserContext";


export default function LoginScreen(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setName, setToken} = useContext(UserContext);
    const navigate = useNavigate();


    function handleLogin(e) {
        e.preventDefault();
        
        const body = { email, password };

        apiAuth.login(body)
          .then(res =>{
            setName(res.data.name);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.name);
            navigate("/main-screen")
          })
          .catch(err => {
                alert(err);
          })
    };

    return (
          <Screen>
            <Topo>
                <StyledLink to="/login-screen" >Entrar</StyledLink>
                <StyledLink to="/registration-screen" $primary={false}>Cadastrar-se</StyledLink>
            </Topo>
            <MyLogo />
             <form onSubmit={handleLogin}>
                <input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="username"
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="current-password"
                    required
                    minLength={3}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    
                />
                <button type = "submit">Entrar</button>
            </form>
        </Screen>
    );
};


const Screen = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
      input{
        box-sizing: border-box;
        font-family: "Lexend Deca", sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #9C9C9C;
        width: 769px;
        height: 60px;
        border-radius: 12px;
        border: 1px solid #78B15940;
        padding-left: 22px;
    }
      button{
        font-family: "Lexend Deca", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        width: 182px;
        height: 60px;
        outline: none;
        border: none;
        border-radius: 12px;
        background-color: #5D9040;
        cursor: pointer;
        padding: 12px; 
    }
     form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        margin-top: 128px;
    }
`;

const StyledLink = styled(Link)`
  color: ${props => props.$primary === false ? '#9C9C9C' : '#5D9040'};
  cursor: pointer;
  text-decoration: none;
`;

const Topo = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  font-weight: 400;
  width: 200px;
  height: 43px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  right: 171px;
  top: 60px;
  padding: 0 8px;
  align-items: center;
`;