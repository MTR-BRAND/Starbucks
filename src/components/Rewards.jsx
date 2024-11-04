import { MdOutlineStarPurple500 } from "react-icons/md";
import Footer from "./footer";

 
const Rewards = () => {
    return (
        <div>

            <h1 className="text-xl font-bold bg-[#163020] text-white pl-14 md:pl-32  py-3">Starbucks® Rewards</h1>

            {/* Rewards hero section start */}
            <div  className="pl-0 md:pl-10 bg-[#d4e9e2] grid grid-cols-1 md:flex items-center">

                {/* reward first div */}
                <div className="w-full mt-7 md:mt-0 md:w-1/2 text-center md:text-start space-y-2 md:space-y-6 mb-20 md:mb-2">

                    <h1 className="text-4xl font-bold">FREE COFFEE <br />
                    IS A TAP AWAY</h1>

                    <p className="text-xl">Join now to start earning Rewards.</p>
                    <button className="text-xl bg-green-800 text-white px-5 py-1 rounded-full">Join now</button>

                    <p className="text-xl hidden md:block">Or j<span className="underline"><a href="#">oin in the app </a></span> for the best experience</p>

                    <p className="underline block md:hidden">Or join online</p>
                </div>

                {/* reward second div */}
                <div className="w-full md:w-1/2">
                    <img src="rewards-hero.png" alt="" />
                </div>

            </div>
            {/* Rewards hero section end */}

            {/* getting section start */}
            <h1 className="text-3xl font-bold text-center mt-16 md:mt-32 mb-4">Getting started is easy</h1>
            <p className="text-center">Earn Stars and get rewarded in a few easy steps.</p>

            <div className=" grid grid-cols-1 md:flex items-center mt-7 md:mt-16 justify-around md:w-[90%] mx-auto text-center gap-10 p-2 md:gap-20">

                {/* first div */}
                <div className="space-y-6">

                    <p className="border border-green-600 text-xl font-bold text-green-600 rounded-[80%] px-3 py-2 w-10 mx-auto">1</p>
                    <h3 className="text-2xl font-bold">Create an account</h3>
                    <p>To get started, <span className="text-green-800 underline hover:no-underline"><a href="#">join now</a></span>. You can also <span className="text-green-800 underline hover:no-underline"><a href="#">Join in the app</a></span> to get access to the full range of Starbucks® Rewards benefits.</p>
                </div>

                {/* second div */}
                <div>
                <div className="space-y-6">
                    <p className="border border-green-600 text-xl font-bold text-green-600 rounded-[80%] px-3 py-2 w-10 mx-auto">2</p>
                    <h3 className="text-2xl font-bold">Order and pay how you’d like</h3>
                    <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways <span className="text-green-800 underline hover:no-underline"><a href="#">Learn more</a></span></p>
                </div>
                </div>

                {/* third div */}
                <div className="space-y-6">
                    <p className="border border-green-600 text-xl font-bold text-green-600 rounded-[80%] px-3 py-2 w-10 mx-auto">3</p>
                    <h3 className="text-2xl font-bold">Earn Stars, get Rewards</h3>
                    <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                </div>

            </div>
            {/* getting section end */}

            {/* favourite drinks start */}
            <div>
                {/* header section */}
                <div className="bg-[#f1f8f5] p-2">
                <h1 className="text-3xl font-bold mt-10 md:mt-24  py-16 text-center">Get your favorites for free</h1>
                <p className="text-3xl space-x-3 md:space-x-14 text-center flex justify-center items-center">
                    <span className="flex items-center">25<MdOutlineStarPurple500  className="text-xs md:text-xl text-orange-400" /></span>
                    <span className="flex items-center">100<MdOutlineStarPurple500 className="text-xs md:text-xl text-orange-400" /></span>
                    <span className="flex items-center">200<MdOutlineStarPurple500 className="text-xs md:text-xl text-orange-400" /></span>
                    <span className="flex items-center">300<MdOutlineStarPurple500 className="text-xs md:text-xl text-orange-400" /></span>
                    <span className="flex items-center">400<MdOutlineStarPurple500 className="text-xs md:text-xl text-orange-400" /></span>
                </p>
                </div>

                {/* drinks details section */}
                <div className="bg-[#d4e9e2] ">
                   <div className="grid grid-cols-1 text-center md:text-start md:flex items-center w-full md:w-1/2 mx-auto py-10">
                     {/* img div */}
                     <div>
                        <img src="img/drinks.png" alt="" />
                    </div>

                    {/* text div */}
                    <div className="space-y-8">
                        <h1 className="text-2xl font-bold mt-14 md:mt0">Customize your drink</h1>
                        <p className="font-bold">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
                    </div>
                   </div>
                </div>

            </div>
            {/* favourite drinks end */}

            {/* endle section start */}
            <div className="p-5">
                <h1 className="text-3xl font-bold text-center mt-16 mb-7 md:mt-28">Endless Extras</h1>
                <p className="font-bold w-full mx-auto md:w-1/2 text-center">Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.</p>

                <div className="grid grid-cols-1 md:flex justify-around text-center gap-14 mt-16 md:mt-24">

                    {/* first sction */}
                    <div className="space-y-4">
                        <img className="h-28 mx-auto" src="img/fun.png" alt="" />
                        <h1 className="text-2xl font-bold">Fun freebies</h1>
                        <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                        <p><a className="underline hover:no-underline text-green-700" href="">Learn more</a></p>
                    </div>

                    {/* second sction */}
                    <div className="space-y-4">
                    <img className="h-28 mx-auto" src="img/order.png" alt="" />
                        <h1 className="text-2xl font-bold">Order & pay ahead</h1>
                        <p>Master the art of ordering ahead with saved favorites and payment methods.</p>
                        <p><a className="underline hover:no-underline text-green-700" href="">Learn more</a></p>
                    </div>

                    {/* third section */}
                    <div className="space-y-4">
                    <img className="h-28 mx-auto" src="img/faster.png" alt="" />
                        <h1 className="text-2xl font-bold">Get to free faster</h1>
                        <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                        <p><a className="underline hover:no-underline text-green-700" href="">Learn more</a></p>
                    </div>

                </div>
            </div>
            {/* endle section end  */}

            {/* earen section start */}
            <div className="bg-[#f2f0eb] mt-16 md:mt-32">
                <h1 className="text-3xl font-bold text-center pt-20 md:pt-28">Cash or card, you earn Stars.</h1>
                <p className="font-bold text-center mb-16 md:mb-28 w-full md:w-2/3 mx-auto mt-6">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>

                {/* 1 per dollar */}
                <div className="grid grid-cols-1 space-y-14 md:space-y-0 p-4 md:flex">

                    {/* first */}
                    <div className="w-full md:w-[20%]">
                        <h1 className="text-2xl font-bold">1★Star per dollar</h1>
                        <p className="font-bold">Pay as you go</p>
                    </div>

                    {/* second */}
                    <div className="flex w-full md:w-[30%]">
                        <img className="h-40" src="img/scan.png" alt="" />
                        <div className="space-y-8 ml-5">
                            <h1 className="text-xl font-bold">Scan and pay separately</h1>
                            <p className="font-bold">Use cash or credit/debit card at the register.</p>
                        </div>
                    </div>

                    {/* third */}
                    <div className="flex w-full md:w-[40%]">
                        <img className="h-40" src="img/payment.png" alt="" />
                        <div className="space-y-8 ml-5">
                            <h1 className="text-2xl font-bold"> Save payment in the app</h1>
                            <p className="font-bold">Check-out faster by saving a credit/debit card or PayPal to your <br /> account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                        </div>
                    </div>
                </div>
                <hr className="my-8 bg-gray-300" />

                 {/* 2 per dollar */}
                 <div className="grid grid-cols-1 space-y-14 md:space-y-0 p-4 md:flex">

                {/* first */}
                <div className="w-full md:w-[20%]">
                    <h1 className="text-2xl font-bold">2★Star per dollar</h1>
                    <p className="font-bold">Add funds in the app</p>
                </div>

                    {/* second */}
                    <div className="flex w-full md:w-[30%]">
                        <img className="h-40" src="img/dollar.png" alt="" />
                        <div className="space-y-8 ml-5">
                            <h1 className="text-xl font-bold">
                            Preload</h1>
                            <p className="font-bold">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                        </div>
                    </div>

                {/* third */}
                <div className="flex w-full md:w-[40%]">
                    <img className="h-40" src="img/register.png" alt="" />
                    <div className="space-y-8 ml-5">
                        <h1 className="text-2xl font-bold">Register your gift card</h1>
                        <p className="font-bold">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                    </div>
                </div>
              </div>

              {/* img */}
              <div className="my-4">
                <img src="img/moneyHero.png" alt="" />
              </div>

              {/* question section */}
              <div className="space-y-3 pl-2 md:pl-24 py-16 md:py-24">
                <h1 className="text-3xl font-bold">Questions?</h1>
                <p className="font-semibold">We want to help in any way we can. You can ask your barista anytime or we’ve <br /> answered the most commonly asked terms <span className="text-green-700 underline hover:no-underline"><a href="3">right over here</a></span>.</p>
              </div>

            </div> 

            {/* all informatin section */}
            <div className="bg-[#f9f9f9] py-24">
                {/* first p tag part */}
                <p className="px-4">At participating stores. Restrictions apply.

                    1Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, <span  className="text-green-700 underline hover:no-underline"> visit 
                    deltastarbucks.com/terms</span> <br />
                    .↩

                    2At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit 
                    Terms and Conditions
                    . Bank of America, N.A. Member FDIC.↩

                    3Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on <span className="text-green-700 underline hover:no-underline">Qualifying Starbucks</span> <br /> Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S. participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy® Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions, visit 
                    <span  className="text-green-700 underline hover:no-underline">Starbucks.com/MarriottBonvoy</span><br />
                    
                    . Marriott Bonvoy® and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc. and its affiliates. Used under license from Marriott International, Inc.↩</p>
                    {/* seond part */}
                    <div className="mt-6 px-4 grid grid-cols-1 md:flex space-x-3 md:space-x-7">
                        {/* first div of second part */}
                        <div className="w-full md:w-1/2">
                            <h1 className="text-xl font-bold my-4 text-gray-500">Earning Stars</h1>
                            <p className="mb-8">Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.

                            Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.

                            Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>


                            <h1 className="text-xl my-5 font-bold text-gray-500">Benefits</h1>
                            <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                        </div>

                        {/* second div of second part */}
                        <div className="w-full md:w-1/2">
                        <h1 className="text-xl font-bold my-4 text-gray-500">Terms of Use</h1>
                            <p className="mb-8">For full program details visit 
                                <span className="text-green-700 underline hover:no-underline">starbucks.com/rewards/terms</span>
                                .

                                Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
                                <span className="text-green-700 underline hover:no-underline">Starbucks Store Locator</span>
                                and search for locations honoring “Redeem Rewards”.</p>


                            <h1 className="text-xl my-5 font-bold text-gray-500">Redeeming Rewards</h1>
                            <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
                        </div>
                    </div>
            </div>
            <Footer></Footer>
            </div>
    );
};

export default Rewards;