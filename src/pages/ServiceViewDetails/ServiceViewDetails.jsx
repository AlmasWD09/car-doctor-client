import { useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";


const ServiceViewDetails = () => {
const service = useLoaderData()
const{image,price,published_date,rating,title} = service || {}
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 lg:gap-10">
                <div className="w-full md:w-3/4  rounded-lg">
                <img className="h-[450px] w-full object-cover rounded-lg" src={image} alt="" />
                </div>
                <div className="w-full md:w-1/4 rounded-lg p-4 bg-gray-300">
                    <h1 className="text-xl font-bold">Services</h1>
                   <div className="space-y-2">
                   <p className="flex justify-between items-center bg-primary text-white p-2 rounded">Full Car Repair<span className="mr-6 text-white"><FaArrowRightLong /></span></p>
                    <p className="flex justify-between items-center bg-gray-100 p-2 rounded">Engine Repair<span className="mr-6 text-primary"><FaArrowRightLong /></span></p>
                    <p className="flex justify-between items-center bg-gray-100 p-2 rounded">Automatic Services<span className="mr-6 text-primary"><FaArrowRightLong /></span></p>
                    <p className="flex justify-between items-center bg-gray-100 p-2 rounded">Engine Oil Change<span className="mr-6 text-primary"><FaArrowRightLong /></span></p>
                    <p className="flex justify-between items-center bg-gray-100 p-2 rounded">Battery Charge<span className="mr-6 text-primary"><FaArrowRightLong /></span></p>
                   </div>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold">{title}</h2>
            </div>
        </div>
    );
};

export default ServiceViewDetails;