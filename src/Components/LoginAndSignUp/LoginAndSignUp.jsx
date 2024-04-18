import React, { useState } from 'react'
import './LoginAndSignUp.css'

import userIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import passworIcon from '../../assets/password.png'

const LoginAndSignUp = () => {

    const [action, setAction] = useState("Sign Up")



  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
                action === "LogIn" ? <div></div>:<div className="input">
                    <img src={userIcon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
            }
            
            <div className="input">
                <img src={emailIcon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={passworIcon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
            {
                action === "LogIn" ? <></>:<div className="forget-password">
                    Lost Your Password? <span>Click Here</span>
                </div>
            }
            <div className="button-box">
                <button className={action === "LogIn"? "btn gray":"btn"} onClick={()=>setAction("Sign Up")}>Sign Up</button>
                <button className={action === "Sign Up" ? "btn gray": "btn"} onClick={()=>setAction("LogIn")}>LogIn</button>
            </div>
        </div>
    </div>
  )
}

export default LoginAndSignUp
