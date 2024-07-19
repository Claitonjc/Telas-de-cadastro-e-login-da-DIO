import { Header } from "../../components/Header"
import { Container, TextContent, Column, Title, SubTitle, Wrapper, FazerLogin } from './styles';
import { Input } from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from "../../services/api";

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();


    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async (formData) => {
        console.log('Dados enviados: ',formData);
    
        try {
          const response = await api.post('/users', formData);
          console.log(response);
          if (response.status === 201) {
            console.log('Dados salvos com sucesso', response.data);
            navigate('/Login');
          } else {
            console.error('Erro ao salvar os dados');
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };

    return (
        <>
        <Header />
        <Container>
            <Column>
                <TextContent variant="primary">
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias e entrar mais rápido 
                    nas empresas mais desejadas.
                </TextContent>
            </Column>
            <Column>
                <Wrapper>
                    <Title>Comece agora grátis</Title>
                    <SubTitle>Crie sua conta e make the change._</SubTitle>
                </Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" placeholder="Nome completo" errorMessage={errors?.name?.message} type="text" control={control} leftIcon={<MdPerson />} />
                    <Input name="email" placeholder="E-mail" errorMessage={errors?.email?.message} type="email" control={control} leftIcon={<MdEmail />} />
                    <Input name="password" placeholder="Password" errorMessage={errors?.password?.message} type="password" control={control} leftIcon={<MdLock />}/>
                    <Button title="Criar minha conta" type="Submit" variant="secondary"></Button>
                </form>
                <TextContent variant="secondary">
                    Ao clicar em "criar minha conta grátis", 
                    declaro que aceito as Políticas de Privacidade e os 
                    Termos de Uso da DIO.
                </TextContent>
                <FazerLogin>
                    Já tenho conta. <span>Fazer login</span>
                </FazerLogin>
            </Column>
        </Container>
        </>
    )
}

export { Cadastro };