import  React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'

import styled from 'styled-components'

import {ChannelContainer, ChannelListContainer, Auth} from './components'

const apiKey = '4hjn887t4ape'

const client = StreamChat.getInstance(apiKey)

const authToken = false

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
