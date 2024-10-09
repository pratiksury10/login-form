import React, { useState } from 'react'

export default function AuthForm () {
        const[isLogin,setIsLogin]=useState (true);   //by default true set kiya hain
        return (
          <div className='container'>
            <div className='form-container'>
              <div className='form-toggle'>
                  <button className={isLogin ? 'active' : ""} onClick={()=>setIsLogin (true)}>            
                    Login</button>       
                  <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin (false)}>
                    Sign Up</button>
              </div>
                {isLogin ? <>
                <div className='form'>
                    <h2>Login Form</h2>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <a >Forgot Password ?</a>
                    <button>LOGIN</button>
                    <p>
                        Not a member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a>
                    </p>

                </div>
                </> : <>
                <div className='form'>
                <h2>Signup Form</h2>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <button>SignUp</button>
                </div>
                </>}
            </div>
          </div>
      
    )
}
