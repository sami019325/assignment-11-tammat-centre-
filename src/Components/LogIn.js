import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from './SharedData';

const LogIn = () => {

    const { GoogleSignInConst, logInCall } = useContext(SharedContext)

    const handleGoogleSignIn = () => {
        console.log('ssssssssssss')
        GoogleSignInConst()
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        logInCall(email, password)
    }
    return (
        <div>
            <form onSubmit={handleLogIn}>
                <div className="card card-side bg-base-100 shadow-xl w-10/12 m-auto grid grid-cols-1 mt-10 lg:grid-cols-4">
                    <figure className=' col-span-2'><img className='w-6/12' src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="Movie" /></figure>
                    <div className="card-body col-span-2 select-none">
                        <h2 className="card-title">Please login</h2>
                        <p>Email:</p>
                        <input className='bg-gray-200' type="email" name='email' />
                        <p>Password:</p>
                        <input className='bg-gray-200' type="password" name='password' />
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">LOGIN</button>
                        </div>
                        <small>Don't have an account? pease <span className='text-base font-bold text-orange-400 cursor-pointer'><Link to='/register'>Register</Link></span></small>
                    </div>
                </div>
            </form>
            <button className='card card-side shadow-xl m-auto w-10/12 h-14  mt-10 rounded-full border-2 flex justify-center items-center font-bold cursor-pointer' onClick={handleGoogleSignIn} >Continue with Google</button>
        </div>
    );
};

export default LogIn;