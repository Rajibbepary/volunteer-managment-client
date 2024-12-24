/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { format } from 'date-fns'
const JobCard = ({ volunter }) => {
  const { title, deadline, category,  thumbnail,  _id } =
    volunter || {}
    console.log(volunter)
  return (
    <div
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>

        <div>
          <img src={thumbnail} className='w-full h-[200px] object-cover' alt="" />
          <div className='flex justify-between mt-4'>
          <span className='text-xs font-light text-gray-800 '>
          Deadline: {format(new Date(deadline), 'P')}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span>
          </div>
        </div>
        
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>Title: {title}</h1>

        {/* <p className='mt-2 text-sm text-gray-600 '>
          {description.substring(0, 70)}...
        </p> */}
        
        <Link to={`/volunter/${_id}`}><button className='py-1 px-2  bg-green-500 rounded-2xl mt-2 mb-3 flex float-end'>View Details </button></Link>
      </div>
    </div>
  )
}

export default JobCard
