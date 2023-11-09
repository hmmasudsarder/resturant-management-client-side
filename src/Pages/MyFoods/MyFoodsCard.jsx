import { Link } from "react-router-dom";


const MyFoodsCard = ({product}) => {
    const {_id, name, img, price, food_category}  = product;
    // console.log(product)
    return (
        
              
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
                  {food_category}
                  
                  
                </td>
                <td>{price}</td>
                <th>
                  <Link to={`/update/${_id}`}  className="btn btn-ghost btn-xs">Update</Link>
                </th>
              </tr>
              
              
            
    );
};

export default MyFoodsCard;