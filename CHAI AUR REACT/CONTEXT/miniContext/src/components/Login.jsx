// collecting data from context

import React,{useContext, useState} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    
    // DATA COMING FROM UserContext, Data Written in UserContextProvider
    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input onChange={e => setUserName(e.target.value)} type="text" placeholder='username'/>
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
            <button onClick={e => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default Login
