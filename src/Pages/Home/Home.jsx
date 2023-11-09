import Footer from "../../components/SharedComponents/Footer/Footer";
import Navbar from "../../components/SharedComponents/Navbar/Navbar";
import Extras from "../Extras/Extras";
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
            <Extras></Extras>
            <Footer></Footer>
        </div>
    );
};

export default Home;