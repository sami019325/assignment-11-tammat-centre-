import React, { useEffect, useState } from 'react';

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(details => <Card key={details._id} detail={details}></Card>)
            }
        </div>
    );
};

const Card = (details) => {
    const { description, duration, img, isBook, price, ratings, title } = details.detail
    console.log(description, duration, img, isBook, price, ratings, title)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Tammat's service" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{ratings}</div>
                </h2>
                <p>{description}</p>
                <div>
                    <p>Price: <span>{price}</span></p>
                    <p>Duration: <span>{duration}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Details</div>
                    <div className="badge badge-outline">{isBook}</div>
                </div>
            </div>
        </div>
    )
}
export default Service;