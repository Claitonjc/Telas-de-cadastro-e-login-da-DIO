
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighLight } from './styles';


const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column FLEX={1}>
                <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <UserInfo percentual={27} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <UserInfo percentual={15} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <UserInfo percentual={95} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <UserInfo percentual={75} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
                <UserInfo percentual={39} nome="Claiton José Clemes" image="https://avatars.githubusercontent.com/u/122750409?v=4"/>
            </Column>
        </Container>
        </>
    )
}

export { Feed }