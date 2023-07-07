import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import Thumbnail from "../image/thumbnail.jpeg"
import Channel_Logo from "../image/channel_logo.jpeg"


const Container = styled.div`
width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
cursor: pointer;
background-color: ${({theme}) => theme.bgLight};
display: ${(props) => props.type === "sm" && "flex"};
gap: 10px;
overflow: scroll;
`
const Image = styled.img`
width: 100%;
height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
background-color: #999;
`

const Details = styled.div`
display: flex;
flex: 1;
margin-top: ${(props) => props.type !== "sm" && "15px"};
gap: 10px;
`

const ChannelLogo = styled.img`
gap: 10px;
width: 35px;
height: 35px;
border-radius: 50%;
display: ${(props) => props.type === "sm" && "none"};
`
const Text = styled.div`

`

const ChannelName = styled.h3`
font-size: 15px;
font-weight: 500;
color: ${({theme}) => theme.textSoft};
margin: 8px 0px;
`

const VideoTitle = styled.h2`
font-size: 20px;
font-weight: 500;
color: ${({theme}) => theme.text};


`
const VideoInfo = styled.div`
font-size: 10px;
font-weight: 300;
color: ${({theme}) => theme.textSoft};
// margin: 5px 10px;

`


const VideoCard = (type={type}) => {
    return ( 
        <Link to="/video/test"  style={{textDecoration: "none"}}>
        <Container type={type}>
            <Image type={type} src={Thumbnail} />
            <Details type={type}>
                <ChannelLogo type={type} src={Channel_Logo}/>
                <Text>
                    <VideoTitle>HTML Tutorial For Beginners</VideoTitle>
                    <ChannelName>Code with Harry</ChannelName>
                    <VideoInfo> 5M subscribers</VideoInfo>
                </Text>
            </Details>
        </Container>
        </Link>
    )
}

export default VideoCard