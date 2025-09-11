import styled from "styled-components";
import MyLogo from "../components/Logo";
import { FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
    
    const rankingData = [
        {
            id: 1,
            name: "Fulaninha",
            links: 32,
            views: "1.703.584"
        },
        {
            id: 2,
            name: "Ciclano",
            links: 20,
            views: "1.113.347"
        },
        {
            id: 3,
            name: "Beltrana",
            links: 18,
            views: "852.961"
        }
        
    ];

    return (
        <Screen>
            <Topo>
                <StyledLink to="/login-screen">Entrar</StyledLink>
                <StyledLink to="/registration-screen" $primary={false}>Cadastre-se</StyledLink>
            </Topo>
            <MyLogo />
            <Ranking>
                <Trophy />
                <h1>Ranking</h1>
            </Ranking>
            <ContainerRanking>
                <ol>
                    {rankingData.map((user, index) => (
                        <li key={user.id}>{`${index + 1}. ${user.name} - ${user.links} links - ${user.views} visualizações`}</li>
                    ))}
                </ol>
            </ContainerRanking>
            <Link to="/registration-screen" style={{ textDecoration: 'none' }}>
                <CrieSuaConta>
                    Crie sua conta para usar nosso serviço!
                </CrieSuaConta>
            </Link>
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

const CrieSuaConta = styled.h1`
    width: 728px;
    height: 45px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: black;
    margin-top: 82px;
    text-align: center;
`;