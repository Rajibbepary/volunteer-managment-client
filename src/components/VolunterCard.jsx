/* eslint-disable react/prop-types */
import './voluntercard.css'
//import logo from '../assets/images/logo.png'

const VolunterCard = ({volunter}) => {

    const {photo, title, quote} = volunter || {};
    return (
        <div>
<div className="work">
                <img src={photo}/>
                <div className="layer">
                    <h3 className='text-2xl w-full text-white'> {title}</h3>
                    <p className='text-white'>{quote}</p>
                    {/* <a href="#" className='w-20 h-20'>
                      <img className='w-6 h-6 ' src={logo} alt=""  />
                     </a> */}
                </div>
      </div>
      
           


      </div>

        
    );
};

export default VolunterCard;