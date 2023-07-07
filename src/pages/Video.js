import React from "react"
import styled from "styled-components"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VideoCard from "../components/VideoCard";
import Channel_Logo from "../image/channel_logo.jpeg"

const Container = styled.div`
display: flex;
gap: 25px;


`
const Content = styled.div`
flex: 5;
height: 100vh;

`

const VideoWrapper = styled.div`
height: ${(props) => (props.type === "sm" ? "400px" : "720")};
width: ${(props) => (props.type === "sm" ? "500px" : "100%")};




`

const Title = styled.h1`

font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
margin-top: 20px;
margin-left: 5px;
color: ${({theme}) => theme.text};

`

const Details = styled.div`
display: flex;
margin-left: 5px;
align-itms: center;
justify-content: space-between;
`

const Info = styled.span`
color: ${({theme}) => theme.textSoft};

`
const Button = styled.button`
background-color: transparent;
padding: 5px 15px;
border: 1px solid #ccc;
font-size: 15px;
font-weight: 500;
display: flex;
align-item: center;
gap: 5px;
cursor: pointer;
color: ${({theme}) => theme.text};
border-radius: 50px;
`

const Buttons = styled.div`
display: flex;
gap: 25px;
color: ${({theme}) => theme.text};

`
const Subscribe = styled.button`
margin-top: 10px;
  background-color: #cc1a00;
font-size: 16px;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 50px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Recommendations = styled.div`
flex: 2;
overflow: scroll;
height: 100vh;

`

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft}; 
`

const Channel = styled.div`
display: flex;
justify-content: space-between;
 `
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`



const ChannelLogo = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`;

const ChannelName = styled.span`
margin-top: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;



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
            <ThumbUpOutlinedIcon /> 
                1.2K
            </Button>
            <Button>
            <ThumbDownOffAltOutlinedIcon />
            Dislikes
            </Button>
            <Button>
            <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
                <FileDownloadOutlinedIcon/>
                Download
            </Button>
        </Buttons>
    </Details>
    <Hr/>
    <Channel>
        <ChannelInfo>
        <ChannelLogo src={Channel_Logo} />
        <ChannelName>Code with Harry</ChannelName>
        </ChannelInfo>
        <Subscribe>Subscribe</Subscribe>
    </Channel>
   </Content>
   <Recommendations>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
        <VideoCard type="sm"/>
      </Recommendations>
</Container>
    )
}

export default Video