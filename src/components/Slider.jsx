import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
0%{left:0;}
10%{left:0;}
12%{left:-100%;} 
22%{left:-100%;} 
24%{left:-200%;}
34%{left:-200%;}
36%{left:-300%;}
46%{left:-300%;}
48%{left:-400%;}
58%{left:-400%;}
60%{left:-300%;}
70%{left:-300%;}
72%{left:-200%;}
82%{left:-200%;}
84%{left:-100%;}
94%{left:-100%;}
100%{left:0;}`
;

const Container = styled.div`
overflow:hidden;
    width:100%;
    height:100vh;
    background-color: black;
    position: relative;
`;


const Wrapper = styled.div`
    height: 100%;
    margin:0;
    position:relative;
    width:500%;
    animation-name: ${slideAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
`;


const Slide = styled.div`
    height: 100vh;
    float:left;
    width:20%;
    display: flex;
    align-items: center;
    

`;
const ImgContainer = styled.div`
height: 100%;
position:relative;
width:500%;
margin:0;

flex: 1;
`;

const Image = styled.img`
    width:100%;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    float:left;
    z-index: -1;
`;





const Slider = () => {
    return (
        <Container>
          
            <Wrapper>
                <Slide>
                <ImgContainer>
                <Image src="https://media.ford.com/content/fordmedia/fna/us/en/asset.download.image.original.html/content/dam/fordmedia/North%20America/US/2018/03/29/Mustang-Bullitt-Boomerang_V5.gif" alt="mustang" />
                </ImgContainer>
                </Slide>
               
                <Slide>
                <ImgContainer>
                <Image src="https://thumbs.gfycat.com/EssentialIdealGoshawk-size_restricted.gif" alt="Camaross" />
                </ImgContainer>
                </Slide>
                
                <Slide>
                <ImgContainer>
                <Image src="https://data.whicdn.com/images/319736746/original.gif" alt="audi" />
                </ImgContainer>
                </Slide>

                <Slide>
                <ImgContainer>
                <Image src="https://images.foxtv.com/static.fox2detroit.com/www.fox2detroit.com/content/uploads/2023/01/932/524/Eray-2-Chevrolet-GIF.gif?ve=1&tl=1" alt="corvette" />
                </ImgContainer>
                </Slide>
            
                <Slide>
                <ImgContainer>
                <Image src="https://media2.giphy.com/media/77F1Ogb2A1fy0LESQO/giphy.gif" alt="donuts" />
                </ImgContainer>
                </Slide>
               

            </Wrapper>
                
        </Container>
    );
};

export default Slider;