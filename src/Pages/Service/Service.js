import React, { useEffect, useState } from 'react';
import Card from './Card';

const Service = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(' https://assignment11-sami019325.vercel.app/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='mt-6 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(details => <div className='m-auto'>
                    <Card key={details._id} detail={details}></Card>
                </div>
                )
            }
        </div>
    );
};

export default Service;