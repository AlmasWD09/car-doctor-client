import { FaBusinessTime } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BiSolidLocationPlus } from "react-icons/bi";

const Contact = () => {
    return (
        <div className="bg-black mt-10 p-10 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-center text-white">
                <div className="flex items-center gap-3">
                  <FaBusinessTime className="text-7xl" />
                    <div>
                    <p>We are open monday-friday</p>
                    <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhoneCall  className="text-6xl"/>
                  <div>
                  <p>Have a question?</p>
                    <h2 className="text-2xl font-bold">+2546 251 2658</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BiSolidLocationPlus className="text-7xl" />
                <div>
                <p>Need a repair? our address</p>
                    <h2 className="text-2xl font-bold">Liza Street, New York</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;