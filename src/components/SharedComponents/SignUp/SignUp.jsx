import {useState, useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import img from '../../../assets/banner/login.jpg'
import Swal from 'sweetalert2';

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pError, setError] = useState("");
    const { googleLogin, createUser, userProfile } = useContext(AuthContext);

   
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        setError("");
        if (!/[A-Z]/.test(password)) {
          setError("Your Password Should have at least one Uppercase characters");
          return;
        } else if (!/[#$?@&!*^-]/.test(password)) {
          setError("Your Password Should have at least one special characters");
          return;
        }
        console.log(email, password, name, photo)
        createUser(email, password)
        .then((res) => {
            Swal("success", "Your Login SuccessFully", "success");
            navigate(location?.state ? location.state : "/");
            console.log(res?.user)
            userProfile(res?.user, name, photo)
            .then( () => console.log('profile update'))
            .catch()
          })
          .catch((error) => setError(error.message));
    } 
    const handleWithGool = () => {
        googleLogin()
          .then((res) => {
            navigate(location?.state ? location.state : "/");
            console.log(res?.user)
          })
          .catch((error) => {
            setError(error.message);
            Swal("error", "your Login not ", "error");
          });
      };
    return (
        <div>
            <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/4dLtCgC/images.jpg)'}}>
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-10">
              <img className="w-full h-screen" src={img} alt="" />
            </div>
            <div className="card ml-10 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign UP</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Sweet Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Send Your Nice Picture"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign UP"
                    className="btn btn-outline btn-success"
                  />
                </div>
              </form>
              <p className="text-center my-5">Already have an Account ? <Link className="text-orange-500" to='/login'>Login</Link> </p>
              <button
                onClick={handleWithGool}
                className="btn btn-outline btn-success mb-6"
              >
                Google
              </button>
              {pError && <p className="text-red-700 font-bold mb-5">{pError}</p>}
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;