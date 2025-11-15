import React, { useContext } from 'react';
import { CartUpdateContext } from '../Context/CreateContext';

const Carts = () => {
    const { Carts } = useContext(CartUpdateContext)
    return (
        <div>
            <div>
                {
                    Carts.map((product) => <div>
                        <div className='flex mt-10 gap-10 text-center'>
                            <div className='w-[700px]'>
                                <img src={product.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>{product.title}</h1>
                                <p>{product.description}</p>
                                <p>{product.category}</p>
                                <p>{product.brand}</p>
                                <p>{product.cartQuantity}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Carts;