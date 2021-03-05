import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Navigator = () => {
    return (
        <div>
            <StyledNav>
            <h2>Gringotts Wizarding Bank</h2>
                <StyledList>
                <Link to = '/'> <li>Home</li></Link>
                <Link to = '/batchProcessing'><li>Batch Processing</li></Link>
                    
                </StyledList>
            </StyledNav>
        </div>
    )
};

const StyledNav = styled.nav`
display: flex;
justify-content:space-around;
align-items:center;
min-height:50px;
background:black;
color:white;
`

const StyledList = styled.ul`
display:flex;
width:50%;
justify-content:space-around;
align-items:center;
color:white;

li{
    display:flex;
    list-style: none;
    font-weight:bold;
    color:white;
    cursor: pointer;
}

`
export default Navigator;
