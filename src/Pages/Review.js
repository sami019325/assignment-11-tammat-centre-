import React, { useEffect, useState } from 'react';
import Card from './Service/Card';

const Review = () => {
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(review => setreview(review))
    }, [])
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
                <p>Rate the service:</p>
                <div >
                    <button className='p-1 m-1 rounded-full bg-indigo-800'>⭐⭐⭐⭐⭐</button>
                    <button className='p-1 m-1 rounded-full bg-indigo-800'>⭐⭐⭐⭐</button>
                    <button className='p-1 m-1 rounded-full bg-indigo-800'>⭐⭐⭐</button>
                    <button className='p-1 m-1 rounded-full bg-indigo-800'>⭐⭐</button>
                    <button className='p-1 m-1 rounded-full bg-indigo-800'>⭐</button>
                </div>
                {
                    isBook ? <div>You have rated already</div> : ''
                }
            </div>
        </div>
    )

}
export default Review;