import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products)
  return (
    <div>
      <Navbar />
      <div className="">
      <div className="h-screen bg-opacity-70 bg-cover bg-center"  style={{backgroundImage: 'url(https://i.ibb.co/MSrCvbD/img4.jpg)', backgroundRepeat: "no-repeat"}}>
        <form className="">
          <div className="hero-content text-center text-neutral-content " >
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          </div>
          <div className="relative">
            {/* <div className="absolute inset-y-0 lg:left-72 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div> */}
            <input
              type="search"
              id="default-search"
              className=" block w-1/2 mx-auto mt-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="md:mr-56 lg:mr-64 text-white absolute right-3  bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 container mx-auto">
            {
                products.map(product => <AllProductsCard key={product._id} product={product}></AllProductsCard>)
            }
      </div>
    </div>
  );
};

export default AllProducts;
