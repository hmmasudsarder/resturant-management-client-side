import { useLoaderData } from "react-router-dom";
import Footer from "../../components/SharedComponents/Footer/Footer";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import MyOrderedFoodRow from "./MyOrderedFoodRow";

const MyOrderedFood = () => {
    const products = useLoaderData();
    

    return (
        <div>
        <Navbar></Navbar>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  
                  <th>Images</th>
                  <th>Names</th>
                  <th>Price</th>
                  <th>quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                    products.map(product => <MyOrderedFoodRow key={product._id} product={product}></MyOrderedFoodRow>)
                }
                
                
                
              </tbody>
              
              
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default MyOrderedFood;