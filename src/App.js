import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LogInForm from "./components/LogInForm";

const App = () => {
    if (!localStorage.getItem('username')) return <LogInForm />
    
    const onClick = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload();
    }

    return (
        <div>
            <div>
                <button className="button" onClick={onClick}>
                    <span>Log Out</span>
                </button>
            </div>
            <ChatEngine
                height="100vh"
                projectID="8eb88e1f-6c2a-405f-acd1-761fb4d347c5"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
            )
        </div>
    )
}

export default App;