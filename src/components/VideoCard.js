import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import Thumbnail from "../image/thumbnail.jpeg"
import Channel_Logo from "../image/channel_logo.jpeg"


const Container = styled.div`
width: 360px;
margin-bottom: 40px;
cursor: pointer;
background-color: ${({theme}) => theme.bgLight};
`
const Image = styled.img`
width: 100%;
height: 202px;
background-color: #999;
`

const Details = styled.div`
display: flex;
margin-top: 15px;
gap: 10px;
`

const ChannelLogo = styled.img`
gap: 10px;
width: 35px;
height: 35px;
border-radius: 50%;
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


const VideoCard = () => {
    return ( 
        <Link to="/video/test"  style={{textDecoration: "none"}}>
        <Container>
            <Image src={Thumbnail} />
            <Details>
                <ChannelLogo src={Channel_Logo}/>
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