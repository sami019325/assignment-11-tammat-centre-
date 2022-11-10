import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Service/Card';
import video from './../Resources/Large-Img/20220807_195817_1.mp4'

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


            {/* other detail parts */}
            <article className='grid grid-cols-2 gap-3 w-10/12 m-auto'>
                <div>
                    <h1 className='text-lg font-bold'>About me!</h1>
                    <p>I am a  professional athlete and i have experience of more than 10 years in this field. During this period I learned many new things, experienced many kinds of positivity as well as negativity. I have experience of rock climbing, adventure racing, swimming, climbing, and so on. I have many national as well as international achievements. I personally enjoy this field and encourage others to explore this field. </p>
                </div>
                <div>
                    <img src="https://i.ibb.co/TmtGwMc/cover.jpg" alt="" srcset="" />
                </div>
            </article>
            <article className='grid grid-cols-2 gap-3 w-10/12 m-auto'>
                <div>
                    <h1 className='text-lg font-bold'>About me!</h1>
                    <p> </p>
                </div>
                <div>
                    <video src={video}></video>
                </div>
            </article>
        </>
    );

};

export default Home;