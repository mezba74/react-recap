import React from 'react';
import { Link } from 'react-router';

const PopularProduct = ({ product }) => {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={product.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body w-full">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">

                    </div>
                    <Link className='w-full btn btn-primary' to={`/product-details/${product.id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;