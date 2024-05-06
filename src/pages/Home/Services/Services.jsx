import { useEffect, useState } from "react";
import ServiceCrud from "./ServiceCrud";


const Services = () => {
    const[services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])


    return (
        <div className="mt-10">
           <div className="text-center space-y-3">
           <h4>services</h4>
            <h2 className="text-2xl font-bold">Our Service Area</h2>
            <p className="max-w-2xl mx-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {
                services.map((service,idx)=><ServiceCrud
                key={idx}
                service={service}
                ></ServiceCrud>)
            }
           </div>
        </div>
    );
};

export default Services;