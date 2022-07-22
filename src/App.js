import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="8eb88e1f-6c2a-405f-acd1-761fb4d347c5"
            userName="esarr33"
            userSecret="Test1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} />
    )
}

export default App;