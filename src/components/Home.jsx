import React from 'react'
import Footer from './footer'


function Home() {
  return (
    <>
        <div className='px-[40px] py-[40px] grid grid-cols-1 gap-10'>
            <div className='grid grid-rows-4 gap-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>       
                    <img src="img/img1.jpg" alt="" />
                </div>
                <div className='bg-[#d2d656] flex flex-col items-center justify-center'>
                    <h1 className='text-[30px] pt-5 lg:text-[50px] text-[#1e3831] leading-tight leterS font-bold'>Send a scary-<br />delicious treat</h1>
                    <p className='text-[18px] lg:text-[24px] text-[#1e3831] py-[20px] lg:py-[30px] leading-9 text-center'>Share the thrill of Halloween by treating <br /> someone special to a Starbucks eGift.</p>
                    <div className='py-[20px]'>
                    <button className='px-3 py-1 font-bold text-[#1e3831] border-[#1e3831] border-[1px] rounded-full hover:bg-[#0000002a]'>Send an eGift</button>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-[#fa745c]  flex flex-col items-center justify-center'>
                    <h1 className='text-[30px] pt-5 lg:text-[50px] text-[#1e3831] leading-tight leterS font-bold text-center'>It’s a pumpkin <br /> party</h1>
                    <p className='text-[18px] lg:text-[24px] text-[#1e3831] py-[30px] leading-9 text-center'>The season’s favorite makes fall fall. Enjoy the <br /> moment—hot, iced or blended.</p>
                    <div className='py-[20px]'>
                    <button className='px-3 py-1 font-bold text-[#1e3831] border-[#1e3831] border-[1px] rounded-full hover:bg-[#0000002a] transition-colors'>Order now</button>
                    </div>
                </div>
                <div>
                    <img src="img/img2.jpg" alt="" />
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src="img/img3.webp" alt="" />
                </div>
                <div className='bg-[#9e2342] flex flex-col items-center justify-center'>
                    <h1 className='text-[30px] pt-5 lg:text-[50px] text-[#fff] leading-tight leterS font-bold text-center'>A bunch of <br /> delicious</h1>
                    <p className='text-[18px] lg:text-[24px] text-[#fff] py-[30px] leading-9 text-center'>Ripe for the sippin’, enjoy the new Iced Apple <br /> Crisp Nondairy Cream Chai, beloved Apple <br /> Crisp Oatmilk Macchiato or Apple Crisp <br /> Oatmilk Shaken Espresso.</p>
                    <div className='py-[20px]'>
                    <button className='px-3 py-1 font-bold text-[#fff] border-[#fff] border-[1px] rounded-full hover:bg-[#0000002a] transition-colors '>Order now</button>
                    </div>
                </div>
            </div>


            <div className='grid  grid-cols-1 lg:grid-cols-2'>
                <div className='bg-[#d8e899] flex flex-col items-center justify-center'>
                    <h1 className='text-[30px] pt-5 lg:text-[50px] text-[#1e3831] leading-tight leterS font-bold'>Spicefully yours</h1>
                    <p className='text-[18px] lg:text-[24px] text-[#1e3831] py-[30px] leading-9 text-center'>A delightful fall treat, the Pumpkin Cream <br /> Cheese Muffin is back and ready to pair with <br /> your favorite beverage.</p>
                    <div className='py-[20px]'> 
                    <button className='px-3 py-1 font-bold text-[#1e3831] border-[#1e3831] border-[1px] rounded-full hover:bg-[#0000002a] transition-colors'>Order now</button>
                    </div>
                </div>
                <div>
                    <img src="img/img4.jpg" alt="" />
                </div>
            </div>
            </div>




            <div className='grid grid-row-3 gap-10'>
            <div className='grid grid-cols-2'>
                <div>
                    <img src="img/img5.webp" alt="" />
                </div>
                <div className=' bg-[#006141] flex flex-col items-center justify-center'>
                    <h1 className='lg:pt-0 pt-3 text-[20px] text-[#fff] leading-tight leterS font-bold'>Your treat awaits</h1>
                    <p className='text-[12px] lg:text-[18px] text-[#fff] py-[30px] leading-5 lg:leading-9 text-center'>Fall in love with Starbucks® Rewards member perks, like a <br /> free drink with qualifying purchase during your first week. <br />  Valid for one-time use.*</p>
                    <button className='px-3 py-1 font-bold text-[#fff] border-[#fff] border-[1px] rounded-full hover:bg-[#0000002a] transition-colors'>Join now</button>
                </div>
            </div>



            <div className='grid grid-cols-2'>
                <div className=' bg-[#f2f0eb] flex flex-col items-center justify-center'>
                    <h1 className='lg:pt-0 pt-3 text-[13px] lg:text-[20px] text-[#000] leading-tight leterS font-bold'>Fall favorites in your personal cup</h1>
                    <p className='text-[12px] lg:text-[18px] text-[#000] py-[30px] leading-5 lg:leading-9 text-center'>Wherever you order—café, drive-thru or app—bring in <br /> your own clean cup to help reduce waste and earn <br /> Rewards.**</p>
                    <div className=''>
                    <button className='px-3 py-1 font-bold bg-[#1e3831] text-[#fff] border-[#1e3831] border-[1px] rounded-full hover:bg-[#13322c] transition-colors'>Learn more</button>
                    </div>
                </div>
                <div>
                    <img src="img/img6.jpg" alt="" />
                </div>
            </div>


            <div className='grid gap-28 text-center'>
                <p className='px-[26%] text-center'>*Valid only for new Starbucks Rewards members for 7 days from sign up. Offer good at participating stores for a handcrafted menu-sized beverage with eligible purchase ($8 max value). Taxes not included. Excludes alcohol, Starbucks Card and Starbucks Card reloads. Limit one per member. Cannot be combined with other offers or discounts. Product availability varies by store. Excludes delivery services. Sign up from 9/23/2024 - 11/6/2024 to be eligible.</p>


                <p className='px-[25%]'>**Valid for Starbucks Rewards members at participating stores on handcrafted beverage purchases only (max 3x per day).</p>
            </div>



            </div>

        </div>

    </>
  )
}

export default Home