
import { compareAsc, format } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const VolunteerDetails = () => {
  //const navigate = Navigator()
  const { user } = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date())
  const { id } = useParams()
  console.log(id)
  const [volunter, setVolunter] = useState({})
  useEffect(() => {
    fetchVolunterData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const fetchVolunterData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunter/${id}`
    )

    setVolunter(data)
    //setStartDate(new Date(data.deadline))
  }

  const {
  thumbnail,
    title,
    deadline,
    category,
    location,
    description,
volunteersNeeded,
    buyer,
  } = volunter || {}


  const handleSubmit= async e =>{
    e.preventDefault()
    const form = e.target
    const price = form.price.value
    const email = user?.email
    const comment = form.comment.value
    if(user?.email === buyer?.email) return toast.error('Action not permitted.!')

    if(compareAsc(new Date(), new Date(deadline)) ===1) return toast.error('Deadline Crossed')
   if(price > volunteersNeeded) return toast.error('Volenteer Not Avilable')
    if(compareAsc(new Date(startDate), new Date(deadline)) === 1)
      return toast.error('Offer a date within deadline')

   
    const volunterData = { price, email, comment, deadline}

    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/add-volunter`,volunterData )
      form.reset()
      toast.success('Volunteer Successfully!')
      //navigate('/my-volunteer')
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }
    
  }


  
  return (
    <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Volunter Details */}
      
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
           <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img referrerPolicy='no-referrer' src={buyer?.photo} alt='' />
            </div>
        </div>

        <div>
          <div className='flex items-center gap-5'>
            <div>
            <p className='mt-2 text-sm font-bold text-gray-600 '>
            Volunteer Details
          </p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Name: {buyer?.name}
              </p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Email: {buyer?.email}
              </p>
              <p className='mt-2 text-sm  text-gray-600'>Location: {location}</p>
              <p className='mt-2 text-sm  text-gray-600'> Avilable-Volunter: {volunteersNeeded}</p>
              {deadline && (
            <span className='text-sm font-light text-gray-800 '>
              Deadline: {format(new Date(deadline), 'P')}
            </span>
          )}
            </div>
        
          </div>



          <div className="card bg-base-100 image-full h-[200px] mt-4 shadow-xl">
  <figure>
    <img
      src={thumbnail}
      alt="thumbnail" className='object-cover w-full h-[200px]' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <p>Description: {description}</p>
    <div className="card-actions justify-end">
    <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
    </div>
  </div>
</div>
        </div>
      </div>


      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
        Volunteer Need
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
              Volunteer
              </label>
              <input
                id='price'
                type='text'
                name='price'
                required
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='comment'>
                Comment
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Place Volunteer
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default VolunteerDetails
