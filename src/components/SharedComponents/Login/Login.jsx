import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pError, setError] = useState("");
    const { userLogin, googleLogin } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
    
        setError("");
        if (!/[A-Z]/.test(password)) {
          setError("Your Password Should have at least one Uppercase characters");
          return;
        } else if (!/[#$?@&!*^-]/.test(password)) {
          setError("Your Password Should have at least one special characters");
          return;
        }
    
        userLogin(email, password)
          .then((res) => {
            Swal("success", "Your Login SuccessFully", "success");
            navigate(location?.state ? location.state : "/");
            console.log(res?.user)
          })
          .catch((error) => setError(error.message));
      };
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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-10">
              {/* <img src={img} alt="" /> */}
            </div>
            <div className="card ml-10 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-bold text-center">Login</h1>
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
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="text-center my-5">New to car doctors <Link className="text-orange-500" to='/signup'>Sign Up</Link> </p>
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

export default Login;