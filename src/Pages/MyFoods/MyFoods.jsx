import { useLoaderData } from "react-router-dom";
import Footer from "../../components/SharedComponents/Footer/Footer";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import MyFoodsCard from "./MyFoodsCard";

const MyFoods = () => {
  const products = useLoaderData();
  
  // console.log(products);
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>images</th>
                <th>Name</th>
                <th>category</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            
            {
                products.map(product => <MyFoodsCard key={product._id} product={product}></MyFoodsCard>)
              }
            
          </table>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyFoods;
