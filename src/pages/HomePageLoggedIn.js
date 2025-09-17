import styled from "styled-components";
import MyLogo from "../components/Logo";
import { FaTrophy } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import apiRankings from "../services/apiRankings";
import apiAuth from "../services/apiAuth";

export default function HomePageLoggedIn() {
    const { name, setName, token, setToken } = useContext(UserContext);

    const [rankingData, setRankingData] = useState([]);
    const navigate = useNavigate();

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
        loadRankings();
    }, []);

    function loadRankings() {
        apiRankings.getRanking()
            .then(res => {
                setRankingData(res.data);
            })
            .catch(err => {
                alert(err.response.data);
            })
    };


    return (
        <Screen>
            <TopUser>
                <p>Seja bem-vindo(a), {name}!</p>
            </TopUser>
            <Topo>
                <StyledLink to="/main-screen">Home</StyledLink>
                <StyledLink to="/logged-in">Ranking</StyledLink>
                <StyledLink onClick = {handleLogout}>Sair</StyledLink>
            </Topo>
            <MyLogo />
            <Ranking>
                <Trophy />
                <h1>Ranking</h1>
            </Ranking>
            <ContainerRanking>
                <ol>
                    {rankingData.map((r) => (
                        <li key={r.id}>{`${r.id}. ${r.name} - ${r.linksCount} links - ${r.visitCount} visualizações`}</li>
                    ))}
                </ol>
            </ContainerRanking>
        </Screen>
    );
};



const Screen = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: ${props => props.$primary ? '#5D9040' : '#9C9C9C'};
  cursor: pointer;
  text-decoration: none;
  font-weight: ${props => props.$primary ? '700' : '400'};
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

const Ranking = styled.div`
    width: 219px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 71px;
    h1{
       font-family: "Lexend Deca", sans-serif; 
       font-size: 36px;
       font-weight: 700;
    }
`;

const Trophy = styled(FaTrophy)`
    width: 56px;
    height: 50px;
    color: #FFD233;
`;

const ContainerRanking = styled.div`
    width: 1017px;
    max-height: 241px; 
    margin-top: 57px;
    border-radius: 24px 24px 0 0;
    border: 1px solid #78B15940;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    padding: 19px 40px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 22px;
    font-weight: 500;
    overflow-y: auto;

    ol {
        list-style: none; 
        padding-left: 0;
        margin: 0;
    }

    li {
        margin-bottom: 13px;
    }
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
