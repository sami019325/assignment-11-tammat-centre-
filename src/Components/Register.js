import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from './SharedData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {


    const { GoogleSignInConst, userCreateCall, updateUsercall } = useContext(SharedContext)

    const handleGoogleSignIn = () => {
        console.log('ssssssssssss')
        GoogleSignInConst()
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        console.log('prev ', name, email, password);
        if (confirmPass === password) {
            console.log(name, email, password);
            userCreateCall(name, email, password)
            notify()
            form.reset()
        }
        else {
            console.log('incorrect')
            errNotify()
            //errorNotify()
        }

        userCreateCall(email, password)
    }
    const notify = () => toast("Account is created successfully");
    const errNotify = () => toast("Something went wrong");
    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleRegister}>
                <div className="card card-side bg-base-100 shadow-xl w-10/12 m-auto grid grid-cols-1 mt-10 lg:grid-cols-4">
                    <figure className=' col-span-2'><img className='w-6/12' src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="Movie" /></figure>
                    <div className="card-body col-span-2 select-none">
                        <h2 className="card-title">Create an account</h2>
                        <p>User Name:</p>
                        <input className='bg-gray-200' type="text" name='userName' />
                        <p>Email:</p>
                        <input className='bg-gray-200' type="email" name='email' />
                        <p>Password:</p>
                        <input className='bg-gray-200' type="password" name='password' />
                        <p>Confirm password:</p>
                        <input className='bg-gray-200' type="password" name='confirmPass' />
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