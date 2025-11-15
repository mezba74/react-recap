import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PopularProduct from '../Components/PopularProduct'

const Home = () => {
    const data = useLoaderData()
    const products = data.filter((products) => products.isPopular)
    const [producutUpdate, setProduct] = useState(products)
    const handleProduct = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value
        const filterDoctor = products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        setProduct(filterDoctor)

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl font-bold text-center my-10'>Here Our Top Product🔥</h1>
            </div>

            <div className=' '>
                <form onSubmit={handleProduct} className='flex flex-col w-[500px] '>
                    <input className='border-2 rounded-xl w-[500px]  ' type="search" name="search" id="" />
                    <button className='btn btn-primary w-[140px]'>Submit</button>
                </form>
            </div>
            <div className='grid grid-cols-3 mt-10'>
                {
                    producutUpdate.map((product) => < PopularProduct product={product} key={product.id} ></PopularProduct>)
                }
            </div>
        </div >
    );
};

export default Home;