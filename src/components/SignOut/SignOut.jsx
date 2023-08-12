import React from 'react'
import './SignOut.css'
const baseUrl = "https://backend-nft-vibe-plaza.onrender.com";

const SignOut =  () => {
    async function handleSignOut() {
            try {
                localStorage.removeItem("token");
                window.location.href = "/";
                const response = await fetch(`${baseUrl}/api/users/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token'),
                },
              });
        
              if (response.ok) {
                alert('Logged out successfully');
                console.log('Logged out successfully');
              } else {
                alert('Logout Failed');
                console.error('Logout failed');
              }
            } catch (error) {
              console.error('An error occurred', error);
            }
        }

    return (
    <div className='signout'>
    <h1 className='signout_heading'>Do You Want To Sign Out ??</h1>
    <button className='signout_button' onClick={handleSignOut}>Sign Out</button>
    </div>
    )
}

export default SignOut
