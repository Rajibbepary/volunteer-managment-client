
import { motion } from 'motion/react';
import logo from '../assets/images/istockphoto-1498170916-1024x1024.jpg'

const DonotionVolunter = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <h1 className="text-black lg:text-4xl sm:text-2xl text-center mt-8 font-semibold mb-8">Convert Volunteers to Donors with VolunteerHub</h1>
           <div className='lg:flex justify-between items-center gap-10 mb-10'>

            <div className='w-5/12'>
            <motion.img
            animate={{ y: [50, 100, 50]}}
            transition={{duration: 10, repeat:Infinity}}
            className='max-w-sm w-64 rounded-t--[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600' src={logo} alt="" />
            <motion.img
            animate={{ x: [100, 150, 100]}}
            transition={{duration: 10, repeat:Infinity}}
            className='max-w-sm w-64 rounded-t--[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600' src={logo} alt="" />
            </div>
             {/* second div */}
          <div className='flex flex-col gap-5 lg:w-7/12 mt-4'>
            
          <div className='bg-[#F2F6FC] px-4 py-6 rounded-lg'>
                <h2 className='text-2xl text-black'>
                Unlimited Donation Pages
                </h2>
                <p className='text-[#355784] mt-4'>
                With VolunteerHub, you can build as many donation pages as you need to convert volunteers to donors. Donation pages can be branded to each initiative. 
                </p>
            </div>

            <div className='bg-[#F2F6FC] px-4 py-6 rounded-lg'>
                <h2 className='text-2xl text-black'>
                Fundraising Communications
                </h2>
                <p className='text-[#355784] mt-4'>
                Share the link to your donation pages with volunteers via text, email, on landing pages, or during registration or sign-up.
                </p>
            </div>

            <div className='bg-[#F2F6FC] px-4 py-6 rounded-lg'>
                <h2 className='text-2xl text-black'>
                Many Supported Processor Services
                </h2>
                <p className='text-[#355784] mt-4'>
                VolunteerHub supports many of the top donation processor services including PayPal, American Express, Cielo Payments, Global Payments, Heartland, Litle & Co, Moneris, Planet Payment, SecureNet, TSYS, World Pay, and many more.
                </p>
            </div>
          </div>
            
           </div>
        </div>
    );
};

export default DonotionVolunter;
