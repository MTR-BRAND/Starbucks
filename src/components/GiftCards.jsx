import Footer from "./footer";
import GiftCard from "./GiftCard";
import { WiDirectionUpRight } from "react-icons/wi";

const GiftCards = () => {
    return (
        <div className="mt-8 md:mt-14">
            <h1 className="text-3xl text-center md:text-start md:ml-32 md:text-5xl font-bold">Gift Card</h1>
            <h1 className="text-2xl text-center md:text-start md:ml-32 font-bold my-7">Feature</h1>
            {/* first card section */}
            <div className="grid w-[85%] mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            <GiftCard img="img/13.png"></GiftCard>
            <GiftCard img="img/14.png"></GiftCard>
            </div>

            {/* effort section */}
            <div className="w-[85%] mx-auto my-10 md:my-20 gap-2 flex items-center p-4 rounded bg-gray-200">
                <img className="w-16" src="img/effort.png" alt="" />
                <h1 className="text-xl">Effortlessly send up to 10 eGifts per purchase. Select a design to start!</h1>
            </div>

            {/* second card section */}
            <div className="grid w-[85%] mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/1.png"></GiftCard>
            <GiftCard img="img/2.png"></GiftCard>
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/16.png"></GiftCard>
            <GiftCard img="img/13.png"></GiftCard>
            <GiftCard img="img/14.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            <GiftCard img="img/16.png"></GiftCard>
            <GiftCard img="img/13.png"></GiftCard>
            <GiftCard img="img/18.png"></GiftCard>
            <GiftCard img="img/19.png"></GiftCard>
            <GiftCard img="img/20.png"></GiftCard>
            <GiftCard img="img/1.png"></GiftCard>
            <GiftCard img="img/2.png"></GiftCard>
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            <GiftCard img="img/13.png"></GiftCard>
            <GiftCard img="img/14.png"></GiftCard>
            </div>

            {/* third card section */}
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/16.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/13.png"></GiftCard>
            <GiftCard img="img/14.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/18.png"></GiftCard>
            <GiftCard img="img/19.png"></GiftCard>
            <GiftCard img="img/20.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/14.png"></GiftCard>
            <GiftCard img="img/15.png"></GiftCard>
            <GiftCard img="img/16.png"></GiftCard>
            </div>
            <div className="grid w-[85%] mx-auto my-4 md:my-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
            <GiftCard img="img/10.png"></GiftCard>
            <GiftCard img="img/11.png"></GiftCard>
            <GiftCard img="img/16.png"></GiftCard>
            <GiftCard img="img/13.png"></GiftCard>
            </div>

            {/* business section */}
           <div className="bg-slate-100 w-full md:p-11 mt-5">
           <div className="grid grid-cols-1 md:flex items-center gap-5 w-[85%] mx-auto">
                {/* business img section */}
                <div >
                <img className="w-full" src="img/business.png" alt="" />
                </div>
                {/* business text section */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Business gifting — simplified</h1>
                    <p className="text-gray-600">Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.</p>
                    <button className="text-xl btn font-bold border border-black py-1 px-4 rounded-full flex items-center hover:bg-gray-300">Shop now <WiDirectionUpRight /></button>
                </div>
            </div>
           </div>

           {/* about section */}
           <div className="bg-[#edebe9] w-full p-7 md:p-11 mt-8">
            {/* container */}
           <div className="grid grid-cols-1 md:flex w-[85%] mx-auto gap-5">
            {/* first  */}
            <div className="space-y-5">
                <h3 className="text-2xl font-bold">About eGift cards</h3>
                <p>A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent digitally.</p>
                <p>For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts you’ve purchased — or, to directly contact Starbucks eGift Support for help with your order.</p>
                <h1 className="text-2xl font-bold">Questions around eGift cards?</h1>
                <p>Check our Frequently Asked Questions — your question might already be answered. There, you’ll find answers for all Starbucks Gift Cards in general (including eGifts).</p>
                <button className="btn text-xl font-bold flex rounded-full border border-black items-center hover:bg-gray-300">Card FAQs <WiDirectionUpRight /></button>
            </div>

            {/* second */}
            <div className="space-y-5">
                <h1 className="text-2xl font-bold">About Starbucks Gift Cards in general</h1>
                <p>Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or to join Starbucks® Rewards.</p>
                <p>Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per dollar every time you pay with that card. Those Stars quickly add up to free food, drinks, and more!</p>
                <button className="btn text-xl font-bold flex rounded-full border border-black items-center hover:bg-gray-300">Card Terms & Condition<WiDirectionUpRight /></button>
            </div>
           </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default GiftCards;