import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useChatContext } from "stream-chat-react"
import SearchIcon from '@material-ui/icons/Search';

const ChannelSearch = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    const getChannels = async () => {
        try {
            // TODO: fetch the channels
        } catch(error) {
            setQuery('')
        }
    }

    const onSearch = (event) => {
        event.preventDefault()
        setLoading(true)
        setQuery(event.target.value)
        getChannels(event.target.value)
    }

    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchInput>
                    <SearchIcon/>
                </SearchInput>
                <SearchInputText>
                    <input placeholder="Search" type="text" value={query} onChange={onSearch} />
                </SearchInputText>
            </SearchWrapper>
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 16px;
border-top: 1px solid #00000033;
`;

const SearchWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
background: rgba(255, 255, 255, 0.2);
border-radius: 8px;
margin-bottom: 8px;
border: 1px solid transparent;
width: 95%;
`;

const SearchInput = styled.div`
width: 32px;
display: flex;
justify-content: center;
`;

const SearchInputText = styled.div`
background: none;
border: none;
color: #fff;
font-family: Helvetica Neue, sans-serif;
font-size: 16px;
outline: none;
input {
    border-radius: 4px;
    border: none;
    outline: none;
}
`;

export default ChannelSearch
