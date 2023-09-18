import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
import './SignUp.css'
const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";
const baseUrl2 = "http://localhost:8000";
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleSignUp = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${baseUrl}/api/users/create`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body :{
            name,
            email,
            password,
            confirmPassword
          }
        })
        console.log(response)
        navigate('/');
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
    <div className='sign_up'>
      <h1 className='sign_up_heading'>SignUp</h1>
      <form action="" className='sign_up_form' onSubmit={handleSignUp}>
        <input type="text" placeholder='Name' name='name' onChange= {(e) => setName(e.target.value)} />
        <input type="text" placeholder='Email' name='email' onChange= {(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' name='password' onChange= {(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange= {(e) => setConfirmPassword(e.target.value)}/>
        <button  >Sign Up</button>
      </form>
      
      <p  className='sign_up_switch_para'> Have Account ?? <a href="/">Sign In</a> </p>
      <button onClick={handleTestUser} className='test_user' >Test User ??</button>
    </div>
  )
}

export default SignUp