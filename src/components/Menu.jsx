import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

function Menu() {

    const [down1 , setDown1] = useState("block")
    const [down2 , setDown2] = useState("hidden")
    const [down3 , setDown3] = useState("hidden")
    const [down4 , setDown4] = useState("hidden")



    const hendlDown1 = function(){
        setDown1("block")
        setDown2("hidden")
        setDown3("hidden")
        setDown4("hidden")
    }

    const hendlDown2 = function(){
        setDown1("hidden")
        setDown2("block")
        setDown3("hidden")
        setDown4("hidden")
    }


    const hendlDown3 = function(){
        setDown1("hidden")
        setDown2("hidden")
        setDown3("block")
        setDown4("hidden")
    }


    const hendlDown4 = function(){
        setDown1("hidden")
        setDown2("hidden")
        setDown3("hidden")
        setDown4("block")
    }





    const Card = (props)=>{
        return(
            <>
                <div className='flex items-center gap-5'>
                    <img src={props.img} alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                    <h1 className=' text-[20px]'>{props.text}</h1>
                </div>
            </>
        )
    }

  return (
    <>
    <header className='sticky top-0 '>
        <nav className='w-full h-[55px] pl-[22px] md:pl-[50px] lg:pl-[126px] flex items-center bg-[#fafafa] '>
            <ul className='flex gap-5 text-[14px] text-[#212121]'>
                <div>
                    <li className='cursor-pointer' onClick={hendlDown1}>Menu</li>           
                    <div className={`${down1} w-full h-[3px] bg-[#212121]`}></div>           
                </div>
                <div>
                    <li className='cursor-pointer' onClick={hendlDown2}>Featured</li>
                    <div className={`${down2} w-full h-[3px] bg-[#212121]`}></div>         
                </div>   
                <div>
                    <li className='cursor-pointer' onClick={hendlDown3}>Previous</li>
                    <div className={`${down3} w-full h-[3px] bg-[#212121]`}></div>       
                </div>
                <div>
                    <li className='cursor-pointer' onClick={hendlDown4}>Favorites</li>
                    <div className={`${down4} w-full h-[3px] bg-[#212121]`}></div>     
                </div>
            </ul>
        </nav>
        <div className='w-full h-[1px] bg-[#dbd9d7] '></div>
    </header>


{/* body section */}


        <section className='px-[24px] lg:px-[126px] flex gap-[90px] pb-[100px]'>
            <div className='hidden lg:block w-[300px] text-[16px] text-[#6b6b6b]'>
                <h1 className='text-[19px] text-[#000] font-bold pt-[45px] pb-5'>Drinks</h1>
                <div className='flex flex-col gap-4'>                    
                    <p className='cursor-pointer'>Hot Coffees</p>
                    <p className='cursor-pointer'>Cold Coffees</p>
                    <p className='w-[100px] cursor-pointer'>Starbucks Refreshers® Beverages</p>
                    <p className='w-[100px] cursor-pointer'>Frappuccino® Blended Beverages</p>
                    <p className='w-[100px] cursor-pointer'>Iced Tea & Lemonade</p>
                    <p className='cursor-pointer'>Hot Teas</p>
                    <p className='cursor-pointer'>Iced Energy</p>
                    <p className='cursor-pointer'>Milk, Juice & More</p>
                    <p className='cursor-pointer'>Bottled Beverages</p>
                </div>

                <h1 className='text-[19px] text-[#000] font-bold pt-[45px] pb-5'>Food</h1>
                <div className='flex flex-col gap-4'>                    
                    <p className='cursor-pointer'>Hot Breakfast</p>
                    <p className='cursor-pointer'>Oatmeal & Yogurt</p>
                    <p className='cursor-pointer'>Bakery</p>
                    <p className='cursor-pointer'>Lunch</p>
                    <p className='cursor-pointer'>Snacks & Sweets</p>
                </div>


                <h1 className='text-[19px] text-[#000] font-bold pt-[45px] pb-5'>At Home Coffee</h1>
                <div className='flex flex-col gap-4'>
                    <p className='cursor-pointer'>Whole Bean</p>
                    <p className='cursor-pointer'>VIA® Instant</p>   
                </div>


                <h1 className='text-[19px] text-[#000] font-bold pt-[45px] pb-5'>Merchandise</h1>
                <div className='flex flex-col gap-4'>                    
                    <p className='cursor-pointer'>Cold Cups</p>
                    <p className='cursor-pointer'>Tumblers</p>
                    <p className='cursor-pointer'>Mugs</p>
                    <p className='cursor-pointer'>Other</p>
                </div>
            </div>

            {/* left section */}



            <div className='w-full pt-[45px]'>

                <div className='flex flex-col gap-8 pb-4'>
                    <h1 className='font-bold text-[30px]'>Menu</h1>
                    <h2 className='font-bold text-[24px]'>Drinks</h2>
                    <div className='w-full h-[1px] bg-[#bababa]'></div>
                </div>


                <div className='grid md:grid-cols-2 lg:grid-cols-2 pt-6'>

                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-5'>
                            <img src="img/d1.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Hot Coffees</h1>
                        </div>

                        <div className='flex items-center gap-5'>
                            <img src="img/d2.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Starbucks Refreshers® Beverages</h1>
                        </div>


                        <div className='flex items-center gap-5'>
                            <img src="img/d3.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Iced Tea & Lemonade</h1>
                        </div>


                        <div className='flex items-center gap-5'>
                            <img src="img/d4.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Iced Energy</h1>
                        </div>

                        <div className='flex items-center gap-5'>
                            <img src="img/d9.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Bottled Beverages</h1>
                        </div>
                    </div>


                    <div className='flex flex-col gap-10 pt-8 md:pt-0 lg:pt-0'>
                        <div className='flex items-center gap-5'>
                            <img src="img/d5.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Elphaba’s Cold Brew</h1>
                        </div>

                        <div className='flex items-center gap-5'>
                            <img src="img/d6.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Frappuccino® Blended Beverages</h1>
                        </div>


                        <div className='flex items-center gap-5'>
                            <img src="img/d7.avif" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Hot Teas</h1>
                        </div>


                        <div className='flex items-center gap-5'>
                            <img src="img/d8.webp" alt="" className='w-[90px]  lg:w-[130px] rounded-full'/>
                            <h1 className=' text-[20px]'>Hot Chocolate</h1>
                        </div>

                        
                    </div>

                </div>




            {/* 1down setion */}
            <div>
                <div className='flex flex-col gap-8 pb-4 pt-16'>
                    <h1 className='font-bold text-[30px]'>Food</h1>
                    <div className='w-full h-[1px] bg-[#bababa]'></div>
                </div>
                
            <div className='grid lg:grid-cols-2 md:grid-cols-2 pt-6 '>

                <div className='flex flex-col gap-10'>
                    <Card img="img/d10.jpg" text="Hot Breakfast"/>    
                    <Card img="img/d11.avif" text="Bakery"/>     
                    <Card img="img/d12.webp" text="Snacks & Sweets"/>    
                </div>

                <div className='flex flex-col gap-10'>
                    <p className='pt-8 md:pt-0 lg:pt-0'><Card img="img/d14.avif" text="Lunch"/></p>    
                    <Card img="img/d13.avif" text="Oatmeal & Yogurt"/>   
                </div>

            </div>
        </div>
        {/* 1down setion */}


         {/* 2down setion */}
          <div>
                <div className='flex flex-col gap-8 pb-4 pt-16'>
                    <h1 className='font-bold text-[30px]'>At Home Coffee</h1>
                    <div className='w-full h-[1px] bg-[#bababa]'></div>
                </div>
                
            <div className='grid md:grid-cols-2 gap-8 md:gap-0 lg:gap-0 lg:grid-cols-2 pt-6 '>

                <div className='flex flex-col gap-10'>
                    <Card img="img/d15.avif" text="Whole Bean"/>      
                </div>

                <div className='flex flex-col gap-10'>
                    <Card img="img/d16.jpg" text="VIA® Instant"/>       
                </div>

            </div>
        </div>
        {/* 2down setion */}



        {/* 2down setion */}
            <div>
                <div className='flex flex-col gap-8 pb-4 pt-16'>
                    <h1 className='font-bold text-[30px]'>Merchandise</h1>
                    <div className='w-full h-[1px] bg-[#bababa]'></div>
                </div>
                
            <div className='grid md:grid-cols-2 lg:grid-cols-2 pt-6 '>

                <div className='flex flex-col gap-10'>
                    <Card img="img/d17.avif" text="Cold Cups"/>      
                    <Card img="img/d24.avif" text="Mugs"/>      
                </div>

                <div className='flex flex-col gap-10'>
                    <p className='pt-8 md:pt-0 lg:pt-0'><Card img="img/d25.avif" text="Tumblers"/></p>       
                    <Card img="img/d26.avif" text="Other"/>       
                </div>

            </div>
        </div>
        {/* 2down setion */}


    </div>

        </section>


            <footer className='bg-[#1e3831] w-full h-[90px]  md:h-[100px] lg:h-[100px]  px-[40px] text-white flex justify-around items-center fixed bottom-0'>
                <div className='flex gap-[90px] justify-center items-center border-b-[2px] border-[#b8bfbe] '>
                    <div>
                        <p className='text-[#b8bfbe] font-semibold'>For item availability</p>
                        <p className='font-bold pb-3'>Choose a store</p>
                    </div>

                    <div>
                    </div>
                </div>

                <div>
                    <BsBag className='text-[40px] text-[#b8bfbe] cursor-pointer'/>
                </div>
            </footer>

    </>
  )
}

export default Menu