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

            {/* carrousel --------------------------------------------------------------------  */}
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='feature image' src="https://i.ibb.co/mbJ1VM9/95KM.jpg" className="w-full h-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='feature image' src="https://i.ibb.co/HnqyKT7/cover.jpg" className="w-full h-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='feature image' src="https://i.ibb.co/NFjcYXg/champion3.jpg" className="w-full h-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='feature image' src="https://i.ibb.co/wwgXp8q/loading6.jpg" className="w-full h-full object-fill" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* card -------------------------------------------------------------------------- */}
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