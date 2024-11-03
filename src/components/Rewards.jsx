

const Rewards = () => {
    return (
        <div>
            <h1 className="text-xl font-bold bg-[#163020] text-white pl-14 md:pl-32  py-3">Starbucks® Rewards</h1>

            {/* Rewards hero section */}
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
        </div>
    );
};

export default Rewards;