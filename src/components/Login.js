import React, { useState } from 'react'
// import SignUp from './SignUp'


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const creds = {
            email,
            pass
        };
        console.log(creds);
    }



    return (
        <>
            <div className='my-form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@xyz.com' />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='**********' autoComplete='on' />
                    <button type='submit'>LOGIN</button>
                </form>
                <p>Don't have an Account? <button onClick={() => props.onFormSwitch("signUp")}>SIGNUP</button></p>
            </div>
        </>
    )
}

export default Login
