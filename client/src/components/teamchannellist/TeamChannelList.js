import React from 'react'
import styled from 'styled-components'

const TeamChannelList = ({ children, error = false, loading, type }) => {
    if (error) {
        return type === 'team' ? (
            <ChannelList>
                <ListMessage>
                    Connection error, please wait a moment and try again later.
                </ListMessage>
            </ChannelList>
        ) : (
            null
        )
    }

    if (loading) {
        return (
            <ChannelList>
                <ListMessageLoading>
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </ListMessageLoading>
            </ChannelList>
        )
    }

    return (
        <ChannelList>
            <ChannelListHeader>
                <HeaderTitle>
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </HeaderTitle>
                {/* button to add a new channel */}
            </ChannelListHeader>
            {children}
        </ChannelList>
    )
}

const ChannelList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const ListMessage = styled.div`
color: #ffffff;
padding: 0 16px;
`;

const ListMessageLoading = styled.div`
color: #ffffff;
padding: 0 16px;
height: 115px;
`;

const ChannelListHeader = styled.div`
padding: 0 16px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const HeaderTitle = styled.div`
font-size: 13px;
line-height: 16px;
height: 16px;
color: rgba(255, 255, 255, 0.66);
margin-bottom: 10px;
`;

export default TeamChannelList
