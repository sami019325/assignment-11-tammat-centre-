import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Card = (details) => {

    const { description, duration, img, isBook, price, ratings, title, _id } = details.detail
    // console.log(description, duration, img, isBook, price, ratings, title)
    const [booked, setBooked] = useState([])
    const trueBtn = true

    const bookNow = (id) => {
        const bookedList = [...booked]
        setBooked(booked, id)
        localStorage.setItem(id, 'true')

    }


    let rate = ratings
    let star = '⭐⭐⭐⭐⭐';

    if (rate === '5') {
        star = '⭐⭐⭐⭐⭐';
    }
    else if (rate === '4') {
        star = '⭐⭐⭐⭐';
    }
    else if (rate === '4.5') {
        star = '⭐⭐⭐⭐';
    }
    else if (rate === '3') {
        star = '⭐⭐⭐';
    }
    else if (rate === '3.5') {
        star = '⭐⭐⭐';
    }
    else if (rate === '2.5') {
        star = '⭐⭐';
    }
    else {
        star = '⭐⭐';
    }
    return (
        <div className='m-auto'>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="m-auto mt-10 card w-full h-full bg-base-100 shadow-xl">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img className='mt-0 h-72 w-full' src={img} alt="Tammat's service" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {title}
                                <div className="badge badge-secondary bg-rose-500 p-2">{star}</div>
                            </h2>
                            <p className=''>{description}</p>
                            <div className='text-slate-500'>
                                <p className='font-bold'>Price: <span>{price}</span></p>
                                <p className='font-bold'>Duration: <span>{duration}</span></p>
                            </div>
                            <div className="card-actions justify-end">
                                {
                                    isBook ? <div onClick={() => bookNow(_id, trueBtn)} className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-lime-800 text-white">Booked</div>
                                        : <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-indigo-800 text-white">Book</div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* card details ----------------------------------- */}
            <div className="m-auto card w-10/12 h-full bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='mt-0 h-72 w-full' src={img} alt="Tammat's service" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary bg-rose-500 p-2">{star}</div>
                    </h2>
                    <p className='h-12 text-ellipsis overflow-hidden ...'>{description}</p>
                    <div className='text-slate-500'>
                        <p className='font-bold'>Price: <span>{price}</span></p>
                        <p className='font-bold'>Duration: <span>{duration}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3"><div htmlFor="my-modal-3" className="badge badge-outline cursor-pointer px-5 py-3 font-bold">Details</div></label>
                        {
                            isBook ? <div onClick={() => bookNow(_id, trueBtn)} className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-lime-800 text-white">Booked</div>
                                : <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-indigo-800 text-white">Book</div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;