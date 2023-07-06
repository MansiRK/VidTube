import React from "react"
import styled from "styled-components"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
position: sticky;
top: 0;
padding: 10px 0px;
background-color: ${({theme}) => theme.bgLight};
color: ${({theme}) => theme.text};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`

const Search = styled.div`
width: 50%;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
display: flex;
padding: 2px 15px;
cursor: pointer;
align-items: center;
justify-content: space-between;
border: 1px solid #ccc;
border-radius: 50px;

`
const Input = styled.input`
border: none;
width: 100%;
height: 35px;
background-color: transparent;
color: ${({theme}) => theme.text};
font-size: 15px;
`

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid blue;
color: blue;
border-radius: 50px;
font-size: 15px;
font-weight: 500;
cursor: pointer;
align-items: center;
display: flex;
gap: 5px;
`


const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchOutlinedIcon/>
                </Search>
                <Button>
                    <AccountCircleOutlinedIcon/>
                Sign In
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar