import { Link } from "react-router-dom";
import "./CheckOut.css"
import { IoIosArrowForward } from "react-icons/io";
import UpdateFrom from "../../AnotherFrom/UpdateFrom/UpdateFrom";

const CheckOut = () => {
    return (
        <div>
             <div className=" h-[160px] md:h-[250px] lg:h-[300px] flex flex-col justify-center items-center rounded bg-black mt-5">
                <h1 className="text-xl md:text-3xl lg:text-4xl  text-white text-center">CheckOut</h1>
                <div className="flex  items-center text-white gap-2 pt-3 md:gap-4">
                    <button className="flex items-center hover:text-primary hover:font-bold text-xs"><Link to="/">Home</Link></button>
                    <p><IoIosArrowForward /></p>
                    <h1 className="text-sm">CheckOut</h1>
                </div>
            </div>
            <UpdateFrom />
        </div>
    );
};

export default CheckOut;