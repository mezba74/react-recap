import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Products = () => {
    const data = useLoaderData()
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center mt-10'>Here Are Our Best Product🔥</h1>
            </div>
            <div className='grid grid-cols-3 mt-10'>
                {
                    data.map((product) => <div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={product.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">

                                </div>
                                <Link className='w-full btn btn-primary' to={`/product-details/${product.id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;