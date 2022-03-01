import styled from "styled-components";

export const CanvasContainer = styled.div`
    height:100vh;
    width: 100%;
    transition: all 0.3s ease-in-out;
    position: fixed;
    filter: ${({isOpen}) => (isOpen ? 'grayscale(100%)': 'graysacle(0%)')};
`