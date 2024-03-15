import React, {useState} from 'react'
import { useAuth } from './AuthContext';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    }

    return (
        <section className="landing-section">
            <div className="row container">
                <div className="landing-form-div">
                    <input type="text" className='form-control mb-2' placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                    <input type="password" className='form-control mb-2' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <button onClick={handleLogin} className='btn btn-primary button'>
                        Login
                    </button>
                </div>
            </div>
        </section>
    )
}

const Challenge18 = () => {
    const { user, login, logout } =useAuth;

    const handleLogin = (username, password) => {
        login(username, password)
    }
    return (
        <section className="landing-section">
            <div className="row container">
                {
                    user ? (
                        <div className='logout-div'>
                            <h1 className="landing-heading">
                                Welcome, {user.username}!
                            </h1>
                            <button onClick={logout} className='btn btn-danger logout'>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <LoginForm onLogin={handleLogin} />
                    )
                }
            </div>
        </section>
    )
}

export default Challenge18