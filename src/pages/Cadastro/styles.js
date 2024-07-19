import styled, { css } from "styled-components";

export const Container = styled.div`
    
    display: flex;
    height: 80vh;
    justify-content: space-around;
    position: relative;
    top: 120px;
    width: 100%;
`

export const TextContent = styled.p`
    font-family: Open Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 43px;
    

    ${({variant}) => variant !== 'primary' && css`
        font-size: 18px;
        font-weight: 400;
        line-height: 24px
     `}
`

export const Column = styled.div`
    max-width: 388px;
    width: 100%;

    form {
        font-size: 20px;
        margin-bottom: 40px;
    }

    ::-webkit-input-placeholder {
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
    }

    Button {
        margin-top: 20px;
        max-width: 275px;
    }
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 43px; 
    margin-bottom: 10px;
    margin-top: 20px;
`

export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 35px;
`

export const FazerLogin = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;

    span {
        color: #23DD7A; 
    }
`