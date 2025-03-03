import React from 'react';
import NavBar from '../components/NavBar';
import womenImage from '../assets/woman-saving-money-for-house.png';
import coupleSavingMoney from '../assets/coupleSavingMoney.png'

const Home = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <div className=" w-full bg-[#ffaf5a] mt-20 md:mt-16 text-white justify-center items-center p-6 md:p-12">
        <div className="flex-row md:flex justify-center items-center md:w-[80%] mx-auto">
          <img
            src={womenImage}
            alt="Woman saving money for a house"
            className="max-w-full md:w-[50%] xl:w-[30%] h-auto mx-auto md:m-0"
          />
          <div className="text-center md:w-[50%] md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Personalized Financial Security & Mortgage Solutions
            </h1>
            <p className="text-lg mt-4">
              Committed to delivering innovative and creative solutions to help individuals 
              finance and protect their property dreams and investments.
            </p>
          </div>
        </div>
      </div>
      <div className='text-black text-wrap w-full h-40 flex justify-center items-center'>
        <div className='w-[80%] m-auto'>
          <p className=''>No matter if you're stepping into homeownership for the first time, launching a serviced accommodation business, refinancing an HMO, or fine-tuning your property portfolio, we’re here to guide you toward success.</p>
        </div>
      </div>
      <div className='w-screen bg-[#ffaf5a] text-white'>
        <div className='w-[80%] md:flex items-center mx-auto '>
          <div className='w-[100%] md:w-[50%] '>
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>Why Green Mortgages should be your top pick? </h2> 
            <p className='text-left'>Our passion for property finance and protection ensures that you receive expert guidance from a team dedicated to your success. By keeping up with the latest market trends and strategies, we stay ahead of the curve—offering valuable insights and practical advice to make your journey as smooth and stress-free as possible. </p>
            <p className='text-left'>Whether you're buying your first home, moving to a new one, or refinancing an existing property, we’re with you every step of the way. Our mission is to provide the support and direction needed to complete your transaction seamlessly and hand you the keys to your future. </p>
            <p className='text-left'>focus on possibilities, not the past. Your history doesn’t define your future, and no matter your credit background or financial challenges, we are here to help you move forward with confidence.</p>     
          </div>
          <div className='w-[100%] md:w-[50%]'>
            <img src={coupleSavingMoney} className='w-[100%]'/>
          </div>
        </div>
      </div>
      <div className=' bg-white w-screen  p-10 '>
        <h1 className='text-3xl font-semibold'>Karthik Mortgages: A Smart Choice for Homeowners</h1>
        <p>We've assisted thousands in securing their financial future. Here’s why so many people trust us!</p>
        <div className='w-[80%] mx-auto grid my-5 grid-cols-1 lg:grid-cols-4 '>
          <div className='border-[#ffaf5a] border-4 rounded-lg text-wrap text-start m-2 p-3'>
            <h1 className='text-5xl my-2'> 🏆</h1>
            <h2 className='text-xl font-semibold my-2'>Professional Advice You Can Rely On </h2>
            <p className=' my-2'>Our knowledgeable team specializes in all areas of mortgages and protection. With a track record of over 1,000 five-star reviews, you can count on us for exceptional service. ⭐⭐⭐⭐⭐</p>
          </div>
          <div className='border-[#ffaf5a] border-4 rounded-lg text-wrap text-start m-2 p-3'>
            <h1 className='text-5xl my-2'> 🚀</h1>
            <h2 className='text-xl font-semibold my-2'>Your Gateway to Exclusive Mortgage Deals </h2>
            <p className=' my-2'>With a network of over 120 lenders and top-tier protection providers, we ensure you receive the most competitive deals available, tailored to your needs every time.</p>
          </div>
          <div className='border-[#ffaf5a] border-4 rounded-lg text-wrap text-start m-2 p-3'>
            <h1 className='text-5xl my-2'> 📈</h1>
            <h2 className='text-xl font-semibold my-2'>Focused on Your Long-Term Success  </h2>
            <p className=' my-2'>Your success is our top priority. We go above and beyond to ensure your satisfaction, giving you peace of mind that your financial future is secure.</p>
          </div>
          <div className='border-[#ffaf5a] border-4 rounded-lg text-wrap text-start m-2 p-3'>
            <h1 className='text-5xl my-2'> ⚡</h1>
            <h2 className='text-xl font-semibold my-2'>A Smooth & Hassle-Free Process </h2>
            <p className=' my-2'>Our efficient process takes care of the hard work upfront, saving you time and effort. This ensures you receive the most relevant and tailored quotes for your needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
