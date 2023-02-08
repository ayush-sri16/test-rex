import React, { useState } from 'react'

const SignUp = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        const creds = {
            email,
            pass, name
        };
        setName("")
        setEmail("")
        setPass("")
        console.log(creds);
    }
    return (
        <>
            <div className='my-form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Full Name' />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@xyz.com' />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='**********' autoComplete='on' />
                    <button>LOGIN</button>
                </form>
                <p>Already have an Account? <button onClick={() => props.onFormSwitch('Login')}>LOGIN</button></p>
            </div>
        </>
    )
}

export default SignUp