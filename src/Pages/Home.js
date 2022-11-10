import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Service/Card';

const Home = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const limitData = data.slice(0, 3)
    console.log('================================ ', limitData)
    return (
        <>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    limitData.map(details => <div className='m-auto'>
                        <Card key={details._id} detail={details}></Card>
                    </div>
                    )
                }

            </div>

            <button className='m-auto my-10 text-red-500 w-full'><Link to='/service'>See all</Link></button>

        </>
    );

};

export default Home;