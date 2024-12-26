/* eslint-disable react/prop-types */
import './voluntercard.css'
import { MdVolunteerActivism } from "react-icons/md";

const VolunterCard = ({volunter}) => {

    const {photo, title, quote} = volunter || {};
    return (
        <div>
             <div className="work">
                <img src={photo}/>
                <div className="layer">
                    <h3 className='text-2xl w-full text-white'> {title}</h3>
                    <p className='text-white'>{quote}</p>
                    <div className='relative'>
                     <p className='absolute ml-5 mt-4 text-2xl'>
                     <MdVolunteerActivism />
                     </p>
                     </div>
                </div>
                
      </div>
      </div>

        
    );
};

export default VolunterCard;