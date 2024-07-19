import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 120px;
    max-width: 80%;
    width: 100%;
`

export const Title = styled.h3`
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 24px;
`

export const TitleHighLight = styled.h3`
    color: #FFFFFF70;
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 24px;
`

export const Column = styled.div`
     flex: ${({flex}) => flex};
     padding-right: 24px;
`