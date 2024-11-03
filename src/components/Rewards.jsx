

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
        </div>
    );
};

export default Rewards;