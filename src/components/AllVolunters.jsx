import axios from "axios";
import { useEffect, useState } from "react";
import VolunterCard from "./VolunterCard";

const AllVolunters = () => {
const [volunteer, setVolunter] = useState([]);

useEffect(()=> {
fetchAllvolunter()
}, [])

const fetchAllvolunter = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/volunterall`)
    setVolunter(data)

  }
  
    return (
        <div>

<h1 className="text-black text-center italic text-4xl font-semibold">Our Volunteer Gallery</h1>
            <div className="w-11/12 mx-auto grid mb-10 mt-10 gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
                {
                    volunteer.map(volunter => <VolunterCard key={volunter} volunter={volunter}/>)
                }
            </div>
           
        </div>
    );
};

export default AllVolunters;

