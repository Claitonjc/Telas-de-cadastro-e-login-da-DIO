import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const UserPicture = styled.img`
    border: 3px solid #FFFFFF;
    border-radius: 22px;
    height: 32px;
    margin-right: 12px;
    width: 32px;
`

export const NameText = styled.div`
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`

export const Progress = styled.div`
    background-color: #FFFFFF;
    border-radius: 3px;
    height: 6px;
    position: relative;
    width: 180px;

    &::after {
        content: '';
        background-color: #23DD7A;
        border-radius: 3px;
        height: 6px;
        left: 0;
        position: absolute;
        top: 0;
        width: ${({percentual}) => percentual}%;
    }
`