import React, { useState } from 'react'
import './Login.css'


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='form-container'>
        
        <form>
            <input className='login-input' type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input className='login-input' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='login-button' type='submit'>Submit</button>
        </form>

    </div>
  )
}
