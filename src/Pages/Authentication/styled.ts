import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .ant-form {
        min-width: 400px;
    }
`;
