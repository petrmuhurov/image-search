import styled from "styled-components";

export const StyledScrollable = styled.div`
    overflow: auto;
    padding: 0 16px;
    height: calc(100vh - 120px);
`;

export const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
`;
