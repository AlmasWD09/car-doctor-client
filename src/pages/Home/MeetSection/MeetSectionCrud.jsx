import PropTypes from 'prop-types';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const MeetSectionCrud = ({temMember}) => {
    const{image,name,title} = temMember || {};
    return (
        <div  className='border rounded-lg h-[360px] '>
            <div className='m-4'>
                <div>
                    <img className='rounded-lg' src={image} alt="" />
                </div>
                <div className='space-y-2 text-center'>
                    <h2 className='pt-2 text-xl font-bold'>{name}</h2>
                    <h4>{title}</h4>
                </div>
                <div className='flex justify-center gap-2 pt-2'>
                    <span><FaFacebook/></span>
                    <span><FaTwitter/></span>
                    <span><RiInstagramFill/></span>
                </div>
            </div>
        </div>
    );
};
// propTypes validation
MeetSectionCrud.propTypes = {
    temMember: PropTypes.object,
  };
export default MeetSectionCrud;