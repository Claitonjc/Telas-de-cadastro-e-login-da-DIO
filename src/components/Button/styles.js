import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    color: #ffffff;
    cursor: pointer;
    min-width: 120px;
    padding: 2px 12px;
    position: relative;
    width: 100%;

    ${({variant}) => variant !== 'primary' && css`
        background: #E4105D;
        height: 33px;
        min-width: 167px;

        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }

        &::after {
            content:'';
            border: 1px solid #E4105D;
            border-radius: 22px;
            height: calc(100% + 10px);
            left: -6px;
            position: absolute;
            top: -5px;
            width: calc(100% + 10px);
        }
    `}
`