import styled from "styled-components";

export const CanvasContainer = styled.div`
    height:100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    filter: ${({isOpen}) => (isOpen ? 'blur(20px)': 'blur(0px)')};
`