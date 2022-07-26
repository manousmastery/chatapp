import { useState } from "react";
import axios from "axios";

const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authInformation = { 'Project-ID': "8eb88e1f-6c2a-405f-acd1-761fb4d347c5", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authInformation });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload()
        } catch (error) {
            setError('Incorrect credentials.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ChatApp</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Log In</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LogInForm