
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
function Footer() {
  return (
    <>
    <div className='grid grid-row-2'>
      <div className='px-[40px] py-[30px] flex flex-col lg:flex-row gap-7 lg:gap-16 border-t-[2px] '>
        <div className='w-full lg:w-[200px]'>
            <div className=' flex items-center justify-between'>
                <h1 className='text-[20px] pb-0 lg:pb-6'>About Us</h1>
                <FaChevronDown className='block lg:hidden'/>
            </div>
            <ul className='lg:grid gap-4 text-[#929492] hidden'>
                <li className='hover:text-black transition-colors'>Our Company</li>
                <li className='hover:text-black transition-colors'>Our Coffee</li>
                <li className='hover:text-black transition-colors'>Stories and News</li>
                <li className='hover:text-black transition-colors'>Starbucks Archive</li>
                <li className='hover:text-black transition-colors'>Investor Relations</li>
                <li className='hover:text-black transition-colors'>Customer Service</li>
                <li className='hover:text-black transition-colors'>Contact Us</li>
            </ul>
        </div>


        <div className='w-full lg:w-[190px]'>
            <div className='flex items-center justify-between'>
            <h1 className='text-[20px] pb-0 lg:pb-6'>Careers</h1>
            <FaChevronDown className='block lg:hidden'/>
            </div>
            <ul className='hidden lg:grid gap-4 text-[#929492]'>
                <li className='hover:text-black transition-colors'>Culture and Values</li>
                <li className='hover:text-black transition-colors'>Inclusion, Diversity, and Equity</li>
                <li className='hover:text-black transition-colors'>College Achievement Plan</li>
                <li className='hover:text-black transition-colors'>Alumni Community</li>
                <li className='hover:text-black transition-colors'>U.S. Careers</li>
                <li className='hover:text-black transition-colors'>International Careers</li>
            </ul>
        </div>

        <div className='w-full lg:w-[200px]'>
            <div className='flex items-center justify-between'>
            <h1 className='text-[20px] pb-0 lg:pb-6'>Social Impact</h1>
            <FaChevronDown className='block lg:hidden'/>
            </div>
            <ul className='hidden lg:grid gap-4 text-[#929492]'>
                <li className='hover:text-black transition-colors'>People</li>
                <li className='hover:text-black transition-colors'>Planet</li>
                <li className='hover:text-black transition-colors'>Environmental and Social Impact Reporting</li>
            </ul>
        </div>

        <div className='w-full lg:w-[220px]'>
            <div className='flex items-center justify-between'>
            <h1 className='text-[20px] pb-0 lg:pb-6'>For Business Partners</h1>
            <FaChevronDown className='block lg:hidden'/>
            </div>
            <ul className='hidden lg:grid gap-4 text-[#929492]'>
                <li className='hover:text-black transition-colors'>Landlord Support Center</li>
                <li className='hover:text-black transition-colors'>Suppliers</li>
                <li className='hover:text-black transition-colors'>Corporate Gift Card Sales</li>
                <li className='hover:text-black transition-colors'>Office and Foodservice Coffee</li>
            </ul>
        </div>

        <div className='w-full lg:w-[190px]'>
            <div className='flex justify-between'>
            <h1 className='text-[20px] pb-0 lg:pb-6'>Order and Pick Up</h1>
            <FaChevronDown className='block lg:hidden'/>
            </div>
            <ul className='hidden lg:grid gap-4 text-[#929492]'>
                <li className='hover:text-black transition-colors'>Order on the App</li>
                <li className='hover:text-black transition-colors'>Order on the Web</li>
                <li className='hover:text-black transition-colors'>Delivery</li>
                <li className='hover:text-black transition-colors'>Order and Pick Up Options</li>
                <li className='hover:text-black transition-colors'>Explore and Find Coffee for Home </li>
            </ul>
        </div>
      </div> 


      <div className='px-[40px] py-[30px]'>
        <div className='w-full h-[2px] bg-[#e6e6e6]'></div>
        <div>
            <div className='flex gap-[10px] py-10'>
                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaSpotify />
                </div>

                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaFacebookF />
                </div>            

                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaPinterest />
                </div>    

                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaInstagram />
                </div>

                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaYoutube />
                </div>

                <div className='w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center text-white hover:border-[5px] transition-all '>
                <FaXTwitter />
                </div>
            </div>


            <ul className='flex flex-col gap-4'>
                <li className='hover:underline transition-transform'>Privacy Notice</li>
                <li className='hover:underline transition-transform'>Consumer Health Privacy Notice</li>
                <li className='hover:underline transition-transform'>Do Not Share My Personal Information</li>
                <li className='hover:underline transition-transform'>CA Supply Chain Act</li>
                <li className='hover:underline transition-transform'>Accessibility</li>
                <li className='hover:underline transition-transform'>Cookie Preferences</li>
                <li className=' text-[#929492] text-[14px]'>© 2024 Starbucks Coffee Company. All rights reserved.</li>
            </ul>
        </div>
      </div>


    </div>
    </>
  )
}

export default Footer