import Footer from "../../components/SharedComponents/Footer/Footer";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import oneWhy from '../../assets/banner/databing.png';
import npm from '../../assets/banner/npm.png';
import MySQL from '../../assets/banner/key-differences.png';

const Blog = () => {
  return (
   <div>
    <Navbar/>
     <div className="container mx-auto grid grid-cols-3 gap-5 mt-20">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={oneWhy} alt="img-blur-shadow" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            What is One way data binding?
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.
          </p>
        </div>
        
      </div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={npm} alt="img-blur-shadow" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          NPM( Node Package Manager) is Node. js's built-in package manager by default, and Express js is the framework of Node js, which is fully built-in Javascript.
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.
          </p>
        </div>
        
      </div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={MySQL} alt="img-blur-shadow" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          MySQL is a relational database system that stores data in a structured tabular format. In contrast, MongoDB stores data as JSON documents in a more flexible format. Both offer performance and scalability, but they give better performance for different use cases.
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          One-way means that the binding happens in one direction. In this case, changes in the data automatically update the UI, but changes in the UI do not automatically update the data. That's why it is referred to as one-way data binding. React achieves one-way data binding by using state and props.
          </p>
        </div>
        
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default Blog;
