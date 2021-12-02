import  React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from "universal-cookie"

import styled from 'styled-components'

import {ChannelContainer, ChannelListContainer, Auth} from './components'

const cookies = new Cookies()
const apiKey = '4hjn887t4ape'
const authToken = cookies.get("token")

const client = StreamChat.getInstance(apiKey)

if (authToken) {
  client.connectUser({
    id: cookies.get("userId"),
    name: cookies.get("username"),
    fullName: cookies.get("fullName"),
    image: cookies.get("avatarURL"),
    hashedPassword: cookies.get("hashedPassword"),
    phoneNumber: cookies.get("phoneNumber"),
  }, authToken)
}

function App() {

  if (!authToken) return <Auth/>

  return (
    <Container>
      <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex: 1;
height: 100vh;
box-shadow: rgba(0, 0, 0, 0.33) 0px 1px 4px 0px;
`;

export default App;
