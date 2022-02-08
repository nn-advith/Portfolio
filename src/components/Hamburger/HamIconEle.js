import styled, {keyframes} from "styled-components";

const fadeIn =  keyframes`
    0% {
        opacity: 0;
        margin-top: -80px;
    }
    100% {
        opacity: 1;
        margin-top:0;

    }

`

export const HamIcon = styled.div`

    display:none;

    @media screen and ( max-width: 768px){
    position: absolute;
    animation: ${fadeIn} 0.5s;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 40px;
    height: 20px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    transform: translate(-30%, 100%);
    z-index: 1001;

    div {
        width: 60%;
        height: 0.2rem;
        background: #000;
        transition: all .1s ease-in-out;
        transform-origin: 0px;
          
    &:nth-child(1) {
    
       transform: ${({isOpen}) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
        }
    &:nth-child(2) {

    opacity: ${({isOpen}) => (isOpen ? '0%' : '100%')};
       transform: ${({isOpen}) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
        }
    &:nth-child(3) {

       transform: ${({isOpen}) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
        }
    }
    }
`

