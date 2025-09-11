import styled from "styled-components";
import MyLogo from "../components/Logo";
import { Link } from "react-router-dom";



export default function RgistrationScreen(){
    return (
          <Screen>
            <Topo>
                <StyledLink to="/login-screen" $primary={false}>Entrar</StyledLink>
                <StyledLink to="/registration-screen" >Cadastrar-se</StyledLink>
            </Topo>
            <MyLogo />
             <form >
                <input
                    placeholder="Nome"
                    type="text"
                    required
                />
                <input
                    placeholder="E-mail"
                    type="email"
                    autoComplete="username"
                    required 
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={3}
                />
                <input
                    placeholder="Confirmar senha"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={3}                    
                />
                <button>Criar Conta</button>
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

