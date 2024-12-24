/* eslint-disable react/prop-types */
import { format } from "date-fns";



const PostRequestCard = ({ volunter, handleStatusChange}) => {
         const { 
            _id,
            title,
                deadline,
                category,
                location,
                email,
                status
                } = volunter || {}
           
            return (
                
                <tr>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                 {title}
                </td>
        
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {email}
                </td>
        
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {format(new Date(deadline), 'P')}
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                  {location}
                </td>
                <td>
                <div className='flex items-center  gap-x-2'>
                  <p
                                    className={`lg:px-3  py-1  ${
                                      category === 'HealthCare' &&
                                      'text-blue-500 bg-blue-100/60'
                                    } ${
                                      category === 'Education' &&
                                      'text-green-500 bg-green-100/60'
                                    }
                                    ${
                                      category === 'Social Service' &&
                                      'text-red-500 bg-red-100/60'
                                    }
                                    
                                    ${
                                      category === 'Animal Welfare' &&
                                      'text-yellow-300 bg-yellow-100/60'
                                    }
                                    text-xs  rounded-full`}
                                    
        
                                  >
                                    {category}
                                  </p>
                  </div>
                </td>
                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-yellow-500 `}
                    ></span>
                    <h2 className='text-sm font-normal '>{status}</h2>
                  </div>
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-6'>
                    {/* Accept Button */}
                        <button onClick={()=>handleStatusChange(_id, status, "In Progress")} className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='m4.5 12.75 6 6 9-13.5'
                            />
                          </svg>
                        </button>


                         {/* Reject button */}
                        <button onClick={() => handleStatusChange(_id, status, "Rejected")} className='disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636'
                            />
                          </svg>
                        </button>
                      </div>
                </td>
              </tr>
        
    );
};

export default PostRequestCard;