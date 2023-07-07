import React from "react"
import styled from "styled-components"


const Container = styled.div`
display: flex;
gap: 25px;

`
const Content = styled.div`
flex: 5;

`

const VideoWrapper = styled.div`


`

const Title = styled.h1`

font-size: 20px;
font-weight: 500;
margin-bottom: 10px;
margin-top: 20px;
color: ${({theme}) => theme.text};

`

const Details = styled.div`
display: flex;
align-itms: center;
justify-content: space-between;
`

const Info = styled.span`
color: ${({theme}) => theme.textSoft};

`
const Button = styled.div`
display: flex;
align-item: center;
gap: 5px;
cursor: pointer;
padding: 5px 15px;
background-color: transparent;
border: 1px solid #ccc;
color: ${({theme}) => theme.text};
border-radius: 50px;
`
const Buttons = styled.div`
display: flex;
gap: 25px;
color: ${({theme}) => theme.text};

`

const Recommendations = styled.div`
flex: 2;

`

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft}; 
`



const Video = () =>{
    return(
<Container>
   <Content>
    <VideoWrapper>
         <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/BsDoLVMnmZs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
    </VideoWrapper>
    <Title>HTML Tutorial For Beginners</Title>
    <Details>
        <Info>
            5M subscribers
        </Info>
        <Buttons>
            <Button>
                Subscribe
            </Button>
            <Button>
                Subscribe
            </Button>
            <Button>
                Subscribe
            </Button>
            <Button>
                Subscribe
            </Button>
        </Buttons>
    </Details>
    <Hr/>
   </Content>
   <Recommendations>Recommendations</Recommendations>
</Container>
    )
}

export default Video