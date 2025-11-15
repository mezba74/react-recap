import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { CartUpdateContext } from '../Context/CreateContext';

const ProductDetails = () => {
    const product = useLoaderData()
    const { HandleCartUpdate } = useContext(CartUpdateContext)
    return (
        <div>
            <div className='flex mt-10 gap-10 text-center'>
                <div className='w-[700px]'>
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.brand}</p>

                    <div className='flex  gap-5 justify-center mt-10'>
                        <Link to={'/carts'} onClick={() => HandleCartUpdate(product)} className='btn btn-primary'> Add Cart</Link>
                        <Link to={'/buy'} className='btn btn-secondary'>Buy Now</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;