import React from 'react'
import styled from 'styled-components'
import ChannelSearch from '../channelsearch/ChannelSearch';
import { ChannelList, useChatContext } from "stream-chat-react"
import TeamChannelList from '../teamchannellist/TeamChannelList'
import TeamChannelPreview from '../teamchannelpreview/TeamChannelPreview';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderText>Hangout place</HeaderText>
            <ChannelSearch/>
            <ChannelList 
            filters={{}}
            channelRenderFilterFunction={() => {}}
            List={(listprops) => (
                <TeamChannelList
                    {...listprops}
                    type="team"
                />
            )}
            Preview={(previewprops) => (
                <TeamChannelPreview
                    {...previewprops}
                    type="team"
                />
            )}
            />
            <ChannelList 
            filters={{}}
            channelRenderFilterFunction={() => {}}
            List={(listprops) => (
                <TeamChannelList
                    {...listprops}
                    type="messaging"
                />
            )}
            Preview={(previewprops) => (
                <TeamChannelPreview
                    {...previewprops}
                    type="messaging"
                />
            )}
            />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 250px;
height: 100%;
display: flex;
flex-direction: column;
background-color: blue;
`;

const HeaderText = styled.div`
font-family: Helvetica Neue, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
color: #ffffff;
margin: 10px auto;
`;

export default Header
