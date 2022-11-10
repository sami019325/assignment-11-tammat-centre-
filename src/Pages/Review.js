import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from '../Components/SharedData';
import Card from './Service/Card';

const Review = () => {
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(' https://assignment11-sami019325.vercel.app/review')
            .then(res => res.json())
            .then(review => setreview(review))
    }, [])



    // update rating 


    return (
        <div>
            {
                review.map(data => <ReviwCard key={data._id} data={data}></ReviwCard>)
            }
        </div>
    );
};

const ReviwCard = (data) => {

    const { title, img, isBook, ratings, _id } = data.data
    console.log(title)
    const { user } = useContext(SharedContext)
    console.log(user)



    const reviewCall = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const comment = e.target.comment.value
        const service = { _email: email, _comment: comment }
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => alert('Successful'))
    }


    return (
        <>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <form className="modal" onSubmit={() => { reviewCall() }}>
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p>User:</p>
                    <input className='bg-slate-400 w-10/12 px-3 select-none' type="email" name='email' defaultValue={user.email} />

                    <p>Comment:</p>
                    <input className='bg-slate-400 w-10/12 px-3' type="text" name='comment' />
                    <button onClick={''} className='btn mt-5'>SUBMIT</button>
                </div>
            </form>







            <div className='grid grid-cols-4 gap-5 m-auto mt-5 bg-orange-100 p-5 rounded-xl'>
                <div>
                    <img src={img} alt="" srcset="" />
                </div>
                <div className='col-span-3'>
                    <h1 className='font-bold'>{title}</h1>
                    <p>Ratings: {ratings}</p>
                    <button className='px-5 py-2 m-1 rounded-full bg-indigo-800 font-bold text-white'><label htmlFor="my-modal-3">Add review</label></button>
                    {
                        isBook ? <div>
                            <h1>You have rated already</h1>
                            if you want to delete click here <button className='btn'>DELETE</button>
                        </div> : ''
                    }
                </div>
            </div>

        </>

    )

}
export default Review;