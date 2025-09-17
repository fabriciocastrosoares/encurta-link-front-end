import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyLogo from "../components/Logo";
import { FaTrashAlt } from "react-icons/fa";
import { UserContext } from "../contexts/UserContext";
import apiAuth from "../services/apiAuth";
import apiUsers from "../services/apiUsers";
import apiUrls from "../services/apiUrls";

export default function MainScreen() {
    const navigate = useNavigate();
    const { name, setName } = useContext(UserContext);
    const { token, setToken } = useContext(UserContext);
    const [linksUserData, setLinksUserData] = useState([]);
    const [url, setUrl] = useState("");

    function handleLogout() {
        apiAuth.logout(token)
            .then(() => {
                setName(undefined);
                setToken(undefined);
                localStorage.clear();
                navigate("/")
            })
            .catch(err => {
                alert(err.response.data);
            })
    };

    useEffect(() => {
        loadLinks();
    }, []);

    function loadLinks() {
        apiUsers.getUser(token)
            .then(res => {
                setLinksUserData(res.data.shortenedUrls);
            })
            .catch(err => {
                alert(err.response.data);
            })
    };


    function handleSubmit(e) {
        e.preventDefault();

        const body = { url };

        apiUrls.createShortUrl(token, body)
            .then(res => {
                setUrl("");
                loadLinks();
            })
            .catch(err => {
                alert(err.response.data);
            })
    };

    function deleteUrl(id){
        const confirm = window.confirm("Tem certeza que deseja apagar essa transação?");

        if(confirm){
            apiUrls.deleteUrlById(token, id)
                .then(res => {
                    alert("Link apagado com sucesso! ✅");
                    loadLinks();
                })
                 .catch(err => {
          alert(err.response.data);
        });
        };
    };

    function loadLink(shortUrl) {
        window.open(`${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`, '_blank');
    };


    return (
        <HomeScreen>
            <TopUser>
                <p>Seja bem-vindo(a), {name}!</p>
            </TopUser>
            <Top>
                <StyledLink to="/main-screen">Home</StyledLink>
                <StyledLink to="/logged-in">Ranking</StyledLink>
                <LogoutLink onClick={handleLogout}>Sair</LogoutLink>
            </Top>
            <MyLogo />
            <InsertLink>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Links que cabem no bolso"
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                    <button type="submit">Encurtar link</button>
                </form>
                <DisplayLinks >
                    {linksUserData.map(l => (
                        <LineLink key={l.id}>
                            <Text onClick={() => { loadLink(l.shortUrl) }}>
                                <p>{l.url}</p>
                                <p>{l.shortUrl}</p>
                                <p>Quantidade de visitantes: {l.visitCount}</p>
                            </Text>
                            <DivTrash onClick={(e) => { e.stopPropagation(); deleteUrl(l.id); }}>
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
    color: #5D9040;
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

const LogoutLink = styled.span`
    color: #9C9C9C;
    cursor: pointer;
    text-decoration: underline;
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
    cursor: pointer;
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
