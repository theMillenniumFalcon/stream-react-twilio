import React from 'react'
import styled from "styled-components"
import { ChannelList, useChatContext } from "stream-chat-react"
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import TeamChannelList from '../teamchannellist/TeamChannelList'

const ChannelListContainer = () => {
    return (
        <>
        <Sidebar/>
        <Header/>
        </>
    )
}

export default ChannelListContainer
