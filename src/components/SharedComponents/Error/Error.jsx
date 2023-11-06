import { Link } from "react-router-dom";
import imgError from '../../../assets/image/Capture3-3.png';

const Error = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid h-screen bg-white place-content-center">
          <div className="text-center">
            <img src={imgError} alt="" />
            <Link
              to="/"
              className="inline-block px-10 py-6 mt-6 text-sm font-medium top-10 text-white bg-red-600 rounded hover:bg-orange-700 focus:outline"
            >
              Go Back Home
            </Link>
            <span className="py-10"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
