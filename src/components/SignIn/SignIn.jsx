// -------------------------- React ---------------------------- //
import React from 'react'

// ----------- useState --------------- //
import { useState } from 'react'

// ----------- axios --------------- //
import axios from 'axios'



// ----------- css file --------------- //
import './SignIn.css'

const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";
const baseUrl2 = "http://localhost:8000";

const SignIn = () => {

    // ----------- states -> (name, email, password) --------------- //
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // ----------- handleSignIn --------------- //
    const handleSignIn = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/api/users/createSession`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body :{
            name,
            email,
            password,
        }
        })
        if(response.data.data){
            alert('Sign In Successfully')
            localStorage.setItem('token', response.data.data)
            window.location.href = '/home'
        }else{
            alert('Invalid Credentials')
        }
    }   

    const handleTestUser = async (e) => {
        console.log('test user')
        const response = await axios.post(`${baseUrl}/api/users/createSessionTestUser`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body :{
                name,
                email,
                password,
            }
            })
            console.log(response)
            if(response.data.data){
                alert('Sign In Successfully')
                localStorage.setItem('token', response.data.data)
                window.location.href = '/home'
            }else{
                alert('Invalid Credentials')
            }
    }  

  return (
    // ----------- Sign In --------------- //
    <div className='sign_in'>
            <h2 className='sign_in_heading'>Sign In</h2>
            <form action="" className='sign_in_form' onSubmit={handleSignIn}>
            <input type="text" placeholder='Name' name='name' onChange= {(e) => setName(e.target.value)} />
        <input type="text" placeholder='Email' name='email' onChange= {(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' name='password' onChange= {(e) => setPassword(e.target.value)}/>
        <button >Sign In</button>
            </form>
        <p className='sign_in_switch_para'>Do Not Have Account ?? <a href="/sign-up">Sign Up</a> </p>
        <button onClick={handleTestUser} className='test_user'>Test User ??</button>
    </div>
  )
}

export default SignIn