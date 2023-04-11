import styled, { css } from "styled-components";

export const FormContainer = styled.div`
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 10px;
    border-radius: 10px;
    border: 2px solid rgb(247, 248, 250);
    background-color: #E3F2FD;
    margin-left: 35%;
`;

export const Container = styled.div`  
    display: flex;
    flex-direction: column;
    text-align: left;
    ${({ content }) => content === "row" && css`
        width: 100%;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
    `}
`;
export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #4E6E81;
`;

