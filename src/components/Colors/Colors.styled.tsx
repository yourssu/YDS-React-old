import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";


export const Color = styled.div<{ color: string }>`
display: flex;
gap: 10px;
flex-direction: column;
justify-content: center;
align-items: center;


.bg {
    background-color: ${({ color }) => color };
}
.text {
    color: ${({  color }) => color };
    position: relative;
}
`;
