import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Purchase = () => {
    const {user} = useContext(AuthContext);
    const product = useLoaderData();
    delete product['_id']
    const { name, img, price, description}  = product;
    let dataInput = document.getElementsByTagName('input')
    let dataO = dataInput.value;
    console.log(dataO)
    const information = {user}
    const handleAddToCard = () => {
        fetch('http://localhost:5000/purchaseProduct',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({...product, information, data})
        })
        .then(res => res.json)
        .then(data => {
            console.log(data)
        })
    }
  return (
    <div className="">
        <Navbar/>
      <div className="container mx-auto my-10 relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={img}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            startups
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            ${price}
          </h4>
          <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            USER NAME: {user?.displayName}
          </h4>
          <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            USER EMAIL: {user?.email}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
           {description.slice(0, 260)}.......
          </p>
          <input type="date" name="date" id="" />
          <a className="inline-block">
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => handleAddToCard()}
            >
              purchase the food
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
