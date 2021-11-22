import React from 'react'
import styled from "styled-components"
import { Avatar, useChatContext } from "stream-chat-react"


const TeamChannelPreview = ({ channel, type }) => {
    const { channel: activeChannel, client } = useChatContext()

    const ChannelPreview = () => {
        <ChannelPreviewItem>
            # {channel?.data?.name || channel?.data?.id}
        </ChannelPreviewItem>
    }

    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID)

        return (
            <ChannelPreviewItemSingle>
                <Avatar 
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </ChannelPreviewItemSingle>
        )
    }
    return (
        <>
        {channel?.id === activeChannel?.id ? (
            <ChannelPreviewWrapperSelected onClick={() => {
                console.log(channel)
            }}>
                {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
            </ChannelPreviewWrapperSelected>
        ) : (
            <ChannelPreviewWrapper onClick={() => {
                console.log(channel)
            }}>
                {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
            </ChannelPreviewWrapper>
        )}
        </>
    )
}

const ChannelPreviewWrapperSelected = styled.div`
height: auto;
display: flex;
align-items: center;
background: rgba(0, 0, 0, 0.2);
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
font-weight: bold;
margin-right: 16px;
cursor: pointer;
z-index: 2;
`;

const ChannelPreviewWrapper = styled.div`
height: 37px;
display: flex;
align-items: center;
`;

const ChannelPreviewItem = styled.div`
display: flex;
align-items: center;
font-family: Helvetica Neue, sans-serif;
font-size: 14px;
color: #ffffff;
padding: 0px 20px;
height: 100%;
width: 100%;
text-overflow: ellipsis;
word-break: break-all;
`;

const ChannelPreviewItemSingle = styled.div`
display: flex;
align-items: center;
font-family: Helvetica Neue, sans-serif;
font-size: 14px;
color: #ffffff;
padding: 0px 20px;
height: 100%;
width: 100%;
text-overflow: ellipsis;
word-break: break-all;
margin-right: 12px;
`;

export default TeamChannelPreview
