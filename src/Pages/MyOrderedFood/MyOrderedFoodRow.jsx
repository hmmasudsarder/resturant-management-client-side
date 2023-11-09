import { Link } from "react-router-dom";
import {useState} from "react";
import Swal from "sweetalert2";


const MyOrderedFoodRow = ({product}) => {
    const [order, setOrder] = useState([])
    const {_id, name, img, price, quantity}  = product;

    const handleDelete = id => {
        const process = confirm('Are You Sure')
        if(process){
            fetch(`https://restaurant-management-server-liard.vercel.app/order/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Delete",
                        text: "Delete Your Products",
                        icon: "success"
                      });
                    setOrder()
                }
            })
        }
       
    }
    console.log(product)
    return (
        <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            
          </div>
        </td>
        <td >
          {name}
         
          
        </td>
        <td >
          {quantity}
          
          
        </td>
        <td>{price}</td>
        <th>
          <button onClick={() => handleDelete(_id)}  className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default MyOrderedFoodRow;