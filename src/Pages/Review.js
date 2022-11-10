import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Service/Card';

const Review = () => {
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(' https://assignment11-sami019325.vercel.app/review')
            .then(res => res.json())
            .then(review => setreview(review))
    }, [])


    // update rating 
    const updateData = () => {
        fetch('')
    }
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
    return (
        <div className='grid grid-cols-4 gap-5 m-auto mt-5 bg-orange-100 p-5 rounded-xl'>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='col-span-3'>
                <h1 className='font-bold'>{title}</h1>
                <p>Ratings: {ratings}</p>
                <button className='px-5 py-2 m-1 rounded-full bg-indigo-800 font-bold text-white'><Link to='/reviewform'>Add a review</Link></button>
                {
                    isBook ? <div>
                        <h1>You have rated already</h1>
                        if you want to delete click here <button className='btn'>DELETE</button>
                    </div> : ''
                }
            </div>
        </div>
    )

}
export default Review;