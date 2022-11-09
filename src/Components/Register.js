import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from './SharedData';

const Register = () => {


    const { GoogleSignInConst } = useContext(SharedContext)

    const handleGoogleSignIn = () => {
        console.log('ssssssssssss')
        GoogleSignInConst()
    }
    return (
        <div>
            <form >
                <div className="card card-side bg-base-100 shadow-xl w-10/12 m-auto grid grid-cols-1 mt-10 lg:grid-cols-4">
                    <figure className=' col-span-2'><img className='w-6/12' src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="Movie" /></figure>
                    <div className="card-body col-span-2 select-none">
                        <h2 className="card-title">Create an account</h2>
                        <p>User Name:</p>
                        <input className='bg-gray-200' type="text" />
                        <p>Email:</p>
                        <input className='bg-gray-200' type="email" />
                        <p>Password:</p>
                        <input className='bg-gray-200' type="password" />
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">CREATE ACCOUNT</button>
                        </div>
                        <small>Already have an account? pease <span className='text-base font-bold text-orange-400 cursor-pointer'><Link to='/login'>Login</Link></span></small>
                    </div>
                </div>
            </form>
            <button className='card card-side shadow-xl m-auto w-10/12 h-14  mt-10 rounded-full border-2 flex justify-center items-center font-bold cursor-pointer' onClick={handleGoogleSignIn} >Continue with Google</button>
        </div>
    );
};

export default Register;