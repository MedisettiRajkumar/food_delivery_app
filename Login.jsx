import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, isChecked);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>
                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1" 
                        checked={isChecked} 
                        onChange={(event) => setIsChecked(event.target.checked)} 
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
