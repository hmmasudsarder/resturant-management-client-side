import { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://restaurant-management-server-liard.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-7 container mx-auto">
            <div className="text-center">
                <p className="text-2xl text-orange-400 font-bold">OUR MENU</p>
                <p className="text-4xl font-bold">TOP SIX ORDERED FOOD</p>
                <p className="text-muted">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            
            </div>
            <div className="text-center mt-5">
                <Link className="btn btn-warning" to='/allProducts'>SELL PRODUCTS</Link>
            </div>
        </div>
    );
};

export default Products;