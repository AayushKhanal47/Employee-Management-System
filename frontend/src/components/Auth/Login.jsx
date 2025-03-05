import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('email:', email);
        console.log('password:', password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20'>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='text-white outline-none bg-gray-900 border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder-gray-400'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='text-white outline-none bg-gray-900 border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder-gray-400 mt-3'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button className='text-white border-2 border-emerald-600 px-5 py-3 text-xl rounded-full mt-5'>Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
