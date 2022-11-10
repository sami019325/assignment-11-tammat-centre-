import React, { useEffect, useState } from 'react';

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(details => <div className='m-auto'>
                    <Card key={details._id} detail={details}></Card>
                </div>
                )
            }
        </div>
    );
};

const Card = (details) => {
    const { description, duration, img, isBook, price, ratings, title } = details.detail
    console.log(description, duration, img, isBook, price, ratings, title)
    const shortDes = description.split(" ")
    return (
        <div>
            <div className="card w-10/12 h-full bg-base-100 shadow-xl">
                <figure><img className='mt-0 h-72 w-full' src={img} alt="Tammat's service" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{ratings}</div>
                    </h2>
                    <p className='h-12 text-ellipsis overflow-hidden ...'>{description}</p>
                    <div className='text-slate-500'>
                        <p className='font-bold'>Price: <span>{price}</span></p>
                        <p className='font-bold'>Duration: <span>{duration}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold">Details</div>
                        {
                            isBook ? <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold">Booked</div>
                                : <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-lime-800 text-white">Book</div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;