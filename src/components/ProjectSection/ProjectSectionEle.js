import styled from "styled-components";
import {
    fadeIn
} from '../Animations/Animations';




export const ProjectContainer = styled.div `
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 95;
    animation: ${fadeIn} 1s;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;  
`

export const ProjectMask = styled.div`

        position:absolute;
        transform: ${({po}) => (po ? 'translateX(0%)' :'translateX(-100%)')};
        width:100%;
        height: 100vh;
        background: black;
        opacity: ${({po}) => (po ? '80%' :'0%')};
        z-index: 9;
        transition: 0.3s all ease-in-out;
`

export const ProjectSectionWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
   
    @media screen and (max-width: 770px){
        margin-top: 30%;
    }
    @media screen and (min-width: 770px){
        margin-top: 20%;
    }
    @media screen and (min-width: 1100px){
        margin-top: 10%;
    }
`

export const ProjectTitle = styled.div `
    color: #000;
    
    font-weight: 700;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        margin-bottom: 7%;
    }
    @media screen and (min-width: 770px){
        font-size: 3rem;
        margin-bottom: 2%;  

    }
    @media screen and (min-width: 1100px){
        font-size: 3rem;
        margin-bottom: 1%;
    }
    
    
`

export const ProjectView = styled.div `
    width: 100%;
    display: grid;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 1%;


    .openlink{
        text-decoration:none;
        height: 250px;
        &:link{
            text-decoration: none;
        }
        &:visited{
            text-decoration: none;
        }
        &:active{
            text-decoration: none;
        }
        &:hover{
            text-decoration: none;
        }
    }
    

    &::-webkit-scrollbar-track
    {   
        background-color: black;
    }

    &::-webkit-scrollbar
    {
        width: 3px;

        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb
    {   border-radius: 3px;
        background-color: #ddd;	
    }
       
    
    @media screen and (max-width: 770px){      
        grid-template-columns: repeat(auto-fill, 98%);
        margin-bottom: 80px;
    }
    @media screen and (min-width: 770px){
        grid-template-columns: repeat(auto-fill, 49%);
    }
    @media screen and (min-width: 1100px){
        height: 70vh;
        grid-template-columns: repeat(auto-fill, 32%);
    }
    
    
`

export const Card = styled.div`
        position:relative;
        height: 250px;
        margin: 5px 0px;
        background: black;
        overflow:hidden;

        .wrapper{
            width: 100%;
            height: 100%;

            .cardtext{
                position:absolute;
                top:40%;
                opacity: 0%;
                font-size: 2rem;
                width: 100%;
                color: #fff;
                margin-left: 5%;
                transition: 0.3s all ease-in-out;

                @media screen and (max-width: 770px){
                    font-size: 1.5rem;
                }
            }

            .cardsubhead{
                position:absolute;
                top:100%;
                opacity: 100%;
                font-size: 0.9rem;
                width: 100%;
                color: #6702e4;
                margin-left: 5%;
                transition: 0.3s all ease-in-out;
            }

            .cardaccent{
                width: 100%;
                height: 5%;
                position: absolute;
                top:100%;
                background-color: white;
            }
            
            .cardimg{
                width: 100%;
                @media screen and (max-width: 770px){
                    height: 100%;
                }
            }

            &:before{
                display:block;
                top:0px;
                background: black;
                position:absolute;
                content: '';
                width: 100%;
                height: 100%;
                opacity: 0%;
                transition: 0.3s all ease-in-out;
            }

            &:hover, &:focus{
                
                &:before{
                    opacity: 85%;
                    transition: 0.3s all ease-in-out;
                }

                .cardaccent{
                    top: 96%;
                    transition: 0.3s all ease-in-out;
                }
                .cardsubhead{
                    top: 78%;
                    transition: 0.3s all ease-in-out;
                }
                .cardtext{
                    opacity:100%;
                    top: 58%;
                    transition: 0.3s all ease-in-out;
                }

                
            }
        }   
`

export const ProjectMaxCarousel = styled.div`
    height: 100%;
    background:transparent;
    width:1100px;
    display:flex;
    overflow-y:hidden;
    position:absolute;
    z-index:10;
    transform: ${({po}) => (po ? 'translateX(0%)' :'translateX(-200%)')};
    opacity: ${({po}) => (po? '100%' :'0%')};
    transition: 0.3s all ease-in-out;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    overflow-x:scroll;
    scroll-behavior:  ${({smoothscroll}) => (smoothscroll? 'smooth' :'none')};

   
    @media screen and (max-width: 770px){
        width: 350px;
        ${'' /* margin-top:10%; */}
    }

    @media screen and (min-width: 770px){
        width: 700px;

    }

    @media screen and (min-width: 1100px){
        width: 800px;

    }

    @media screen and (min-width: 1300px){
        width: 1100px;
 
    }

`

export const ProjectCarItem = styled.div`
    height: 100%;
    width: 1100px;
    display: flex;
    align-items: center;
    scroll-snap-align: start;

    @media screen and (max-width: 770px){
        width: 350px;
 
    }

    @media screen and (min-width: 770px){
        width: 700px;
        
    }

    @media screen and (min-width: 1100px){
        width: 800px;
        
    }

    @media screen and (min-width: 1300px){
        width: 1100px;
        
    }

`

export const ProjectMax = styled.div`
    display: flex;
    background:  black;
    width: 1100px;
    height: 80%;
    z-index: 10;

    @media screen and (max-width: 770px){
        margin-top: 10%;
        flex-direction:column;
        overflow-y: scroll;
        padding-bottom: 30px;
        width: 350px;
        height: 80%;
    }

    @media screen and (min-width: 770px){
        width: 700px;
        height: 80%;
    }

    @media screen and (min-width: 1100px){
        width: 800px;
        height: 80%;
    }

    @media screen and (min-width: 1300px){
        width: 1100px;
        height: 80%;
    }
`

export const ProjectMaxImg = styled.img`

    object-fit:cover;
    object-position: center;
    @media screen and (max-width: 770px){
        width: 100%;
        height: 50%;
    }

    @media screen and (min-width: 770px){
        width: 50%;
        height: 100%;
    }

    @media screen and (min-width: 1100px){
        width: 60%;
    height: 100%;
    }

    @media screen and (min-width: 1300px){
        width: 60%;
    height: 100%;
    }
`

export const ProjectMaxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media screen and (max-width: 770px){
        padding-bottom: 30px;   
    }
`

export const ProjectMaxTitle = styled.div`
    color: #6702e4;
    width:100%;
    font-size: 3rem;
    padding: 7% 20px;
    font-weight: 500;
    letter-spacing: 0.5px;

    @media screen and (max-width: 770px){
        font-size: 2rem;
    }
`

export const ProjectMaxDescription = styled.div`
    padding: 0 20px;
    width: 100%;
    height: 45%;
    display: flex;
    font-weight: 100;
    font-size:1.0rem;

`

export const CloseIcon = styled.div`
 
    position:absolute;
    width: 20px;
    height: 20px;
    z-index:12;
    cursor: pointer;
   
    @media screen and (max-width: 770px){
        margin-top: 5%;
        margin-left: 92%;
    
    }
    @media screen and (min-width: 770px){
        margin-top: 3%;
        margin-left: 95%;
    }

    @media screen and (min-width: 1100px){
        margin-top: 2%;
        margin-left: 97%;
    }
    
    div {
        width: 100%;
        height: 0.2rem;
        background: #6702e4;
        transition: all .1s ease-in-out;
        transform-origin: 8px;
        @media screen and (max-width: 770px){
            transform-origin: 8px;
    }


        &:nth-child(1) {
        transform: rotate(45deg);
        }
        &:nth-child(2) {
        transform: rotate(-45deg);
        }
        
        }

        
`

export const ProjectMaxTech = styled.div`
    padding:4% 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 32%);
    gap: 2%;

    div{
        background: #6702e4;
        margin: 3px 0px;
        border-radius: 10px;
        text-align: center;
        line-height: 20px;
        font-size: 0.8rem;
        height: 23px;
    }

    @media screen and (max-width: 770px){
        grid-template-columns: repeat(auto-fill, 32%);
    }

`
export const ProjectMaxLink = styled.a`
    width: 50px;
    padding:5% 20px;
    font-size: 2rem;
    color: #fff;
    opacity:30%;
    transition: 0.3s all ease-in-out;
    -webkit-tap-highlight-color: transparent;

    
    &:link{
        text-decoration: none;
    }

    &:active{
        text-decoration: none;
    }

    &:visited{
        text-decoration: none;
    }

    &:hover{

        opacity: 100%;
        transition: 0.3s all ease-in-out;
        
    }

    @media screen and (max-width: 770px){
        font-size: 1.3rem;
        padding:0 20px;
    }
`

export const ProjectMaxNav = styled.div`
    width: 100%;
    position:relative;
    z-index:12;
    display: flex;
    justify-content: right;
    align-items: center;
    font-size:1.5rem;
    color: #red;
    height: 50px;
    width: 100%;
    .next{
        opacity: 20%;
        width: 30px;
        transition: 0.3s all ease-in-out;
        color:#fff;

        @media screen and (max-width: 770px){
        opacity: 60%;
        }

     
        &:hover{
            
            opacity: 100%;
            transition: 0.3s all ease-in-out;
        }
    }
    
    .previous{
        opacity: 20%;
        width: 30px;
        transition: 0.3s all ease-in-out;
        color:#fff;
        @media screen and (max-width: 770px){
        opacity: 60%;
    }


        &:hover{
            opacity: 100%;
            transition: 0.3s all ease-in-out;
        }
    }

    @media screen and (max-width: 770px){
        display:none;
    }

    
    
`