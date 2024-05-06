import PropTypes from 'prop-types';
import { FcRating } from 'react-icons/fc';

const ProductsCrud = ({product}) => {
    const{image,name,price} = product || {};
    return (
        <div  className='border rounded-lg h-[360px]'>
            <div className='m-4 h-[200px] rounded-lg bg-gray-300
             flex justify-center items-center'>
                <img className='w-[150px] h-[150px] ' src={image} alt="" />
            </div>
            <div className='mx-8 space-y-2 text-center'>
                <div className='flex justify-center gap-1'>
                <span className='text-3xl'><FcRating /></span>
                <span className='text-3xl'><FcRating /></span>
                <span className='text-3xl'><FcRating /></span>
                </div>
                <h3>{name}</h3>
                <p className='text-primary'>price: ${price}</p>
            </div>
        </div>
    );
};
// propTypes validation
ProductsCrud.propTypes = {
    product: PropTypes.object,
  };
export default ProductsCrud;