import React from "react";
import logo from '../../assets/Dio.png.webp';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Image,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/Login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    const handleClickCadastro = () => {
        navigate('/Cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Image src={logo} alt='Logo da DIO' />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/122750409?v=4" />
                    ) : (
                        <>
                            <MenuRight onClick={handleClickHome}>Home</MenuRight>
                            <Button title='Entrar' onClick={handleClickSignIn}/>
                            <Button title='Cadastrar' onClick={handleClickCadastro}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };