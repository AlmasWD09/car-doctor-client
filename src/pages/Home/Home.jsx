import About from "../About/About";
import Contact from "../Contact/Contact";
import CustomarReview from "./CustomarReview/CustomarReview";
import Features from "./Features/Features";
import MeetSection from "./MeetSection/MeetSection";
import Products from "./Products/Products";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
           <About />
           <Services />
           <Contact />
           <Products />
           <MeetSection />
           <Features />
           <CustomarReview />
        </div>
    );
};

export default Home;