import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #3B4651;
    margin-bottom: 24px;
    position: relative;
    width: 100%;
`

export const ImageBackground = styled.img`
    height: 180px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: 100%;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4 {
        color: #FFFFFF;
        font-family: 'Open Sans';
        font-height: 16px;
        font-style: normal;
        font-size: 18px;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        color: #FFFFFF;
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
`

export const UserPicture = styled.img`
    border: 3px solid #FFFFFF;
    border-radius: 22px;
    height: 32px;
    width: 32px;
`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        color: #FFFFFF;
        font-family: 'Open Sans';
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        color: #FFFFFF80;
        font-family: 'Open Sans';
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
    }
`