import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>Hangout place</HeaderText>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
padding-left: 16px;
height: 62px;
`;

const HeaderText = styled.div`
font-family: Helvetica Neue, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
color: #ffffff;
`;

export default Header
