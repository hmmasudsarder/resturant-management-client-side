import Footer from "../../components/SharedComponents/Footer/Footer";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products/>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;