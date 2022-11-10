import React from 'react';

const Card = (details) => {

    const { description, duration, img, isBook, price, ratings, title } = details.detail
    // console.log(description, duration, img, isBook, price, ratings, title)

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
        <div>
            <div className="card w-10/12 h-full bg-base-100 shadow-xl">
                <figure><img className='mt-0 h-72 w-full' src={img} alt="Tammat's service" /></figure>
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
                        <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold">Details</div>
                        {
                            isBook ? <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-lime-800 text-white">Booked</div>
                                : <div className="badge badge-outline cursor-pointer px-5 py-3 font-bold bg-indigo-800 text-white">Book</div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;