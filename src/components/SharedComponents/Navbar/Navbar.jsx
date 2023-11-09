import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import disPic from '../../../assets/image/user.png';
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, userLogOut} = useContext(AuthContext);
    const emailUs = (user?.email    );
    const userName = (user?.displayName);
    const displayPic = (user?.photoURL);
    const navLinks = (
      <>
        <li className="font-semibold uppercase">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="font-semibold uppercase">
          <NavLink to="/allProducts">ALL Food Items</NavLink>
        </li>
        <li className="font-semibold uppercase">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </>
    );
    const handleSignOut = () => {
      userLogOut()
      .then()
      .catch()
    }

    return (
        <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to='/' className="normal-case text-xl">
          <img className="w-[100px] h-[50px]" src="https://i.ibb.co/ZGbk15F/images.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          {user ? <button onClick={handleSignOut} className="btn">Sign Out</button> : <Link to='/login'><button>Login</button></Link>}
        </div>
        <div className="navbar-end">
              
            
          
          
          <div className="dropdown">
            {
              user?.photoURL ? <img tabIndex={0} className="btn btn-ghost btn-circle" src={displayPic} /> :
            <img src={disPic} tabIndex={0} className="btn btn-ghost btn-circle"/>
            }
          
        
        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] ml-[-120px] shadow bg-base-100 rounded-box">
        <li><a className="px-20"></a></li>
          <li className="">
          {
            user?.email ? <p>{emailUs}</p> : user?.displayName && <p>{userName}</p> 
          }
          </li>
          <li className=""><Link to={`/myFoods/${user?.email}`}>My added food</Link></li>
          <li><Link to='/addProduct'>Add a Food Item</Link></li>
          <li><Link to={`/myOrderedFood/${user?.email}`}>My ordered food </Link></li>
        </ul>
      </div>

        </div>
      </div>
    </div>
    );
};

export default Navbar;