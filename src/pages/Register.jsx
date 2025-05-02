import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        
                
                <div className="card bg-base-100 w-full max-w-sm mx-auto mt-25 mb-30 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl text-center py-4 font-bold">Register now!</h1>
                        <form className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please <Link className='text-blue-500 underline' to={'/login'}>Login</Link></p>
            </div>
        </div>
            
    );
};

export default Register;