import styled from 'styled-components';

import { fadeIn, scroll, popStay, popUp, popUp2, fadeinout, fadeinout2 } from '../Animations/Animations';

export const SkillContainer = styled.div`
    position: fixed;
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

export const SkillWrapper = styled.div `
    display: flex;
    flex-direction: column;

    height: 100%;
   
    @media screen and (max-width: 770px){
        margin-top: 30%;
        width: 87%;
        
    }
    @media screen and (min-width: 770px){
        margin-top: 20%;
        width: 70%;
    }
    @media screen and (min-width: 1100px){
        margin-top: 10%;
        width: 70%;
    }
`

export const SkillTitle = styled.div `

    font-weight: 700;
    opacity: 0%;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    width: 150px;
    position: relative;
    ${'' /* height: 100px; */}
    animation: ${({visited, active}) => (visited[active] === 0 ? 'none': popUp)};
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    .wrapper{
        position: absolute;
        height: 100%;
        top: 0;
        width: 100%;
        animation: ${({visited, active}) => (visited[active] === 0 ?  'none': fadeinout)};
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-delay: 1s;

        .accent{
        position:absolute;
        width: 25px;
        background: #6702e4;
        height: 100%;
        top: 0;
        left: 0;
        ${'' /* opacity: 0; */}
        animation: ${({visited, active}) => (visited[active] === 0 ? 'none': fadeinout2)};
        animation-delay: 1s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        }

    }



    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        margin-bottom: 7%;
        margin-top: 30px;
        color: #6702e4;
    }
    @media screen and (min-width: 770px){
        font-size: 2rem;
        margin-bottom: 2%;  
        color: #6702E4;
    }
    @media screen and (min-width: 1100px){
        font-size: 3rem;
        margin-bottom: 1%;
        color: #6702e4;
    }
    
    
`


export const SkillGrid = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
  


    .ml{
        
        @media screen and (max-width: 770px){
            margin-left: 0;
        }
        @media screen and (min-width: 770px){
            margin-left: 0;
        }
        @media screen and (min-width: 1100px){
            margin-left: 5px;
        }
    }

    .mr{
        
        @media screen and (max-width: 770px){
            margin-right: 0;
        }
        @media screen and (min-width: 770px){
            margin-right: 0;
        }
        @media screen and (min-width: 1100px){
            margin-right: 5px;
        }
    }
    @media screen and (max-width: 770px){
        flex-direction: column;
        align-items: center;
        overflow-y : scroll;
        overflow-x : hidden;
        height: 80%;
        padding-bottom: 30px;
   
        padding-bottom: 1%;
  
    }

    @media screen and (min-width: 770px){
        flex-direction: column;
        align-items: center;
        overflow-y : scroll;
        overflow-x : hidden;
        height: 80%;
        ${'' /* padding-bottom: 10%; */}

    }

    @media screen and (min-width: 1100px){
        flex-direction: row;
        overflow-y : hidden;
        overflow-x : hidden;
        height: 60%;

        padding-top: 50px;
        margin-top: 50px;
        
    }
`

export const SkillGridItem = styled.div`
    position: relative;
    background-color: transparent;
    padding:0px 20px 50px 0px;
    opacity: 0%;

    animation: ${({visited, active}) => (visited[active] === 0 ? popStay: popUp)};
    animation-delay: ${({visited, active}) => (visited[active] === 0 ? '0s': '1s')};
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @media screen and (max-width: 770px){
        width: 100%;
    }

    @media screen and (min-width: 770px){
        width: 100%;    
    }

    @media screen and (min-width: 1100px){
        width: 50%;
        height: 100%;
    }

   
       
`

export const CertiGridItem = styled.div`
    position: relative;
    background-color: transparent;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;

    opacity: 0%;
    animation: ${({visited, active}) => (visited[active] === 0 ? popStay: popUp2)};
    animation-delay: ${({visited, active}) => (visited[active] === 0 ? '0s': '1s')};
    animation-duration: 1s;
    animation-fill-mode: forwards;

    .cimp {
        padding-left: 20px;
    }
    
    @media screen and (max-width: 770px){
        width: 100%;
        margin-top: 30px;
        padding-bottom: 50px;
        border-left: 2px solid #6702e4;
    }

    @media screen and (min-width: 770px){
        width: 100%;
        margin-top: 30px;
        padding-bottom: 50px;
        border-left: 2px solid #6702e4;
    }

    @media screen and (min-width: 1100px){
        width: 50%;
        height: 100%;
    }
    
`

export const CertiTitle = styled.div`
    width: 100%;
    color: #fff;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 20px 20px;

    @media screen and (max-width: 1100px){
        padding-left: 0px;
    }
   
`

export const CertiScroll = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    ${'' /* margin-bottom: 5%; */}
   

`

export const CertiItemCont = styled.div`
   
    width: 90%;
    height: 400px;
    scroll-snap-align: start;
    background: #111;
    margin: 0 20px;
   
`

export const CertiItem = styled.div`
    height: 400px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

export const NextLink = styled.div`
    position: absolute;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
    right: 2%;
    top: 55%;
    transform: rotate(90deg);

    @media screen and (max-width: 770px){
        right: 6%;
        top: 86%;
    }

    .next{
        color: #fff;
        opacity: 50%;
        transition: 0.3s ease-in-out;
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
            transition: 0.3s ease-in-out;
        }
    }
`

export const PrevLink = styled.div`
    position: absolute;
    background: transparent;
    right:2%;
    top: 40%;
    transform: rotate(90deg);
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 770px){
        right: 6%;
        top: 78%;
    }

    .previous{
        color: #fff;
        opacity: 50%;
        transition: 0.3s ease-in-out;
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
            transition: 0.3s ease-in-out;
        }
    }
`



export const Certilogo = styled.img`
    height: 30%;
    width: 70%;
    object-fit: contain;
    margin-top: -40px;
`

export const CTitle = styled.div`
    color: #6702e4;
    width: 80%;
    text-align: center;
    letter-spacing: 0.7px;
    font-size: 1.3rem;
    padding: 3% 0px;
    
`

export const CertiLink = styled.a`
    color: #fff;
    padding: 2% 0px;
    font-size: 1.2rem;
    opacity: 60%;
    transition: 0.3s ease-in-out;
    -webkit-tap-highlight-color: transparent;
    &:hover{
        opacity: 100%;
        transition: 0.3s ease-in-out;
    }
`

export const Languages = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 23%);
    gap: 2%;
    padding: 2% 3%;

    @media screen and (max-width: 770px){
        grid-template-columns: repeat(auto-fill, 32%);
        padding: 2% 0;
        margin-bottom: 20px;
    }

    
`

export const LangItem = styled.div`
        background: #6702e4;
        margin: 7px 0px;
        color: #fff;
        position: relative;
        text-align: center;
        line-height: 25px;
        font-size: 0.8rem;
        font-weight: 500;
        height: 27px;
        transition: 0.3s ease-in-out;

        .dot{
            position: absolute;
            width: 3px;
            height: 100%;
            right: 0;
            bottom: 0;
            background: #aaa;
        }

`

export const TechImageContainer = styled.div`
    width: 100%;
    display: grid;

    @media screen and (max-width: 770px){
        grid-template-columns: repeat(auto-fill, 32%);
        padding: 2% 5%;
        
    }

    @media screen and (min-width: 770px){
        grid-template-columns: repeat(auto-fill, 23%);
        padding: 2% 5%;
    }

    @media screen and (min-width: 1100px){
        grid-template-columns: repeat(auto-fill, 16%);
        padding: 0% 3%;
        gap: 3%;
    }
`

export const TechImage = styled.img`
    margin: 15px 0px;
    height: 60px;   
`

export const Slider = styled.div`
    background: transparent;
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 93%;
    
    .accent{
        position: absolute;
		height: 2px;
        width: 50px;
		z-index: 2;
    }

    .p{
        background: #6702e4;
        left: 0;
		top: 0;
    }

    .w{
        background: #fff;
        right: 0;
		bottom: 0;
    }
  
    &:before,
	&:after {
		
		content: "";
		height: 100px;
		position: absolute;
		width: 2px;
		z-index: 2;
	}
	
	&:after {
		right: 0;
		top: 0;
        background: #fff;
	}

	&:before {
		left: 0;
		top: 0;
        background: #6702e4;
	}

    @media screen and (max-width: 1100px){

        width: 100%;
    }

`



export const SliderTrack = styled.div`
    animation: ${scroll} 20s linear infinite;
    display: flex;
    width: calc(150px * 10);
    
`

export const Slide = styled.div`
        height: 100px;
		width: 150px;
        display: flex;
        align-items: center;
`
