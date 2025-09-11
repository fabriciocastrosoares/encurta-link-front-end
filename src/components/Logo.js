import styled from "styled-components";
import { GrLink } from "react-icons/gr";


export default function Logo() {
    return (
        <MyLogo>
            <h1>Encurtar</h1>
            <LogoLink />
        </MyLogo>
    );
};

const MyLogo = styled.div`
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
    font-size: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 102px;
    width: 314px; 
    margin-top: 95px;
`;

const LogoLink = styled(GrLink)`
    width: 102px;
    height: 102px;
    color: #78B159;
`;