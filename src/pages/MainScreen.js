import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyLogo from "../components/Logo";
import { FaTrashAlt } from "react-icons/fa";

export default function MainScreen(){
    
    const initialLinks = [
        {
            id: 1,
            url: "https://www.driven.com.br",
            shortUrl: "e4231A",
            visitCount: 271
        },
        {
            id: 2,
            url: "https://www.google.com",
            shortUrl: "f5678B",
            visitCount: 1024
        },
        {
            id: 3,
            url: "https://www.github.com",
            shortUrl: "g9012C",
            visitCount: 512
        }
    ];

    const [userLinks, setUserLinks] = useState(initialLinks);
    const [urlToShorten, setUrlToShorten] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // Impede o recarregamento da página
        alert(`URL para encurtar: ${urlToShorten}`);
        // Aqui virá a lógica para chamar a API e adicionar o novo link na lista
    }

    return (
        <HomeScreen>
            <TopUser>
               <StyledLink to="/login" $primary={false}>Seja bem-vindo(a), Pessoa!</StyledLink> 
            </TopUser>
             <Top>
                <StyledLink to="/login">Home</StyledLink>
                <StyledLink to="/cadastro" >Ranking</StyledLink>
                <StyledLink to="/login">Sair</StyledLink>
            </Top>
            <MyLogo />
             <InsertLink>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder = "Links que cabem no bolso" 
                        type = "url"
                        value={urlToShorten}
                        onChange={(e) => setUrlToShorten(e.target.value)}
                        required
                    />
                    <button>Encurtar link</button>
                </form>
                <DisplayLinks>
                    {userLinks.map(link => (
                        <LineLink key={link.id}>
                            <Text>
                                <p>{link.url}</p>
                                <p>{link.shortUrl}</p>
                                <p>Quantidade de visitantes: {link.visitCount}</p>
                            </Text>
                            <DivTrash>
                                <Trash />
                            </DivTrash>
                        </LineLink>
                    ))}
                </DisplayLinks>
            </InsertLink>

        </HomeScreen>
    );
};


const HomeScreen = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const TopUser = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-size: 14px;
    font-weight: 400;
    width: auto;
    position: fixed;
    left: 171px;
    top: 69px;
    white-space: nowrap;
`;

const StyledLink = styled(Link)`
    color: ${props => props.$primary === false ? '#5D9040' : '#9C9C9C'};
    cursor: pointer;
    text-decoration: none;
`;

const Top = styled.div`
    font-family: "Lexend Deca", sans-serif;
    color: #9C9C9C;
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

const InsertLink = styled.div`
    width: 1020px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 333px;
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
        align-items: center;
        gap: 69px;
    }
`;

const DisplayLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 58px;
    gap: 40px;

`;

const Text = styled.div`
    background-color: #80CC74;
    flex-grow: 1; 
    height: 60px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px 0 0 12px;
    padding: 21px 94px 21px 21px;
    box-shadow: 0px 4px 24px 0px #78B1591F;
`;

const LineLink = styled.div`
    width: 1020px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DivTrash = styled.div`
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #78B1591F;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
`;

const Trash = styled(FaTrashAlt)`
    width: 22px;
    height: 26px;
    color: #EA4F4F;
   
`;
