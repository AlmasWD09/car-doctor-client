import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ServiceCrud = ({service}) => {
    const{_id,image,price,published_date,rating,title} = service || {}
    console.log(service);

    return (
        <div  className='border rounded-lg h-[420px] '>
           <div className='m-4'>
                <div className='h-[220px] border '>
                <img className='rounded-lg' src={image} alt="" />
                </div>
               <div className='space-y-2'>
               <h1 className='pt-4'>{title}</h1>
                <p className='text-primary'>price: ${price}</p>
                <p>{rating}</p>
                <p>{published_date}</p>
                <Link to={`/serviceViewDetails/${_id}`}>
                <button className='bg-primary px-4 py-1 text-white rounded '>View Details</button>
                </Link>
               </div>
           </div>
        </div>
    );
};
// propTypes validation
ServiceCrud.propTypes = {
    service: PropTypes.object,
  };
export default ServiceCrud;