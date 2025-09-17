import styled from "styled-components";
import MyLogo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { useState } from "react";




export default function RegistrationScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function createRegistration(e) {
        e.preventDefault();

        if (password !== confirmPassword) return alert("As senhas devem ser iguais!");

        const body = { name, email, password };

        apiAuth.register(body)
            .then(res => {
                alert("cadastro realizado com suscesso")
                navigate("/login-screen");
            })
            .catch(err => {
                alert(err.response.data);
            })
    };


    return (
        <Screen>
            <Topo>
                <StyledLink to="/login-screen" $primary={false}>Entrar</StyledLink>
                <StyledLink to="/registration-screen" >Cadastrar-se</StyledLink>
            </Topo>
            <MyLogo />
            <form onSubmit = {createRegistration}>
                <input
                    placeholder="Nome"
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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
                    autoComplete="new-password"
                    required
                    minLength={3}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    placeholder="Confirmar senha"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={3}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type = "submit">Criar Conta</button>
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

