import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
// import { AiOutlineArroRight } from 'react-icons/AiOutlineArroRight';

const SinglePage = () => {
  const products = useLoaderData();
  console.log(products)
   
  const { _id, name, img, price, food_category, country, email } = products;
  console.log(email)
  return (
    <div>
      <Navbar />
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Category: {food_category}</h2>
          <p className="text-xl">Made By: {email}</p>
          <p className="text-xl">Food Origin: {country}</p>
          <p className="text-xl text-orange-400">Price: ${price}</p>
          <div className="card-actions flex items-center justify-between">
            <Link to={`/purchase/${_id}`}>
              <button className="btn btn-warning">Order Now</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
