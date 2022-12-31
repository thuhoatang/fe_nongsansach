import React, { useState } from 'react'
import { signIn } from '../../service/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onFormSubmit = (e) => {
        e.preventDefault();
        const submit = async () => {
            const data = await signIn({ username: 'admin', password: '12345' })
            console.log(data);
        }

        submit();
    }
    return (
        <div className='container'>
            <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
export default Login;