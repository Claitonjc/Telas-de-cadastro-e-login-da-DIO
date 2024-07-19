import React from "react";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
    return(
    <CardContainer>
        <ImageBackground src="https://digitalinnovationone.github.io/roadmaps/assets/bgdio.png"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <div>
                    <h4>Claiton José Clemes</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de HTML e CSS no bootcamp DIO do Global Avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
)}

export { Card };