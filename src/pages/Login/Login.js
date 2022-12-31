import React, { useState } from 'react'
import { connect } from 'react-redux';
import { signInAction } from '../../actions/authAction';

const Login = ({ signInAction, auth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onFormSubmit = (e) => {
        e.preventDefault();
        const submit = async () => {
            signInAction({ username: username, password: password });
        }

        submit();
    }
    return (
        <div className='container'>
            <form onSubmit={onFormSubmit}>
                <div id="emailHelp" className="form-text">{auth?.error}</div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
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

const mapstateToProps = (state) => {
    return {
        auth: state.auth
    };
};
export default connect(mapstateToProps, { signInAction })(Login);
// export default Login;