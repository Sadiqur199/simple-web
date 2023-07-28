import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { BiLogoDeviantart, BiLogoTiktok } from 'react-icons/bi';
import { GiHumanTarget} from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Onboarding = () => {
  return (
    <div className="bg-[#EFF4FA]">
          <div className=' h-28 bg-[#0C579B] text-white text-center'>
            <h1 className='pt-10 text-xl'>How did You here about Us!</h1>
          </div>
          <div className='py-28 px-20 md:px-44  grid grid-cols-2 md:grid-cols-3 gap-5'>
             <div className="card w-44 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                 <FcGoogle className='text-6xl'></FcGoogle>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">Google</h2>
                </div>
                </div>
             <div className="card w-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                 <CiFacebook className='text-6xl text-[#0C579B]'></CiFacebook>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">Facebook</h2>
                </div>
                </div>
             <div className="card w-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 <FaTwitter className='text-6xl text-[#99C3F9] '></FaTwitter>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">Twitter</h2>
                </div>
                </div>
             <div className="card w-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 <TiSocialLinkedinCircular className='text-6xl text-[#0C579B] '></TiSocialLinkedinCircular>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">Linkdin</h2>
                </div>
                </div>
             <div className="card w-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 <BiLogoTiktok className='text-6xl text-[#170501] '></BiLogoTiktok>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">TikTok</h2>
                </div>
                </div>
             <div className="card w-44  shadow-xl bg-[#0C579B] ">
                <figure className="px-10 pt-10">
                 <GiHumanTarget className='text-6xl text-white '></GiHumanTarget>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title text-white">World of mouth</h2>
                </div>
                </div>
             <div className="card w-44 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                 <BiLogoDeviantart className='text-6xl text-[#99C3F9] '></BiLogoDeviantart>
               </figure>
                 <div className="card-body items-center text-center">
                  <h2 className="card-title">Other</h2>
                </div>
                </div>
           </div>
           <div className='ml-52 mb-5 py-10'>
           <button className="btn btn-outline  btn-sm mr-5 text-gray-500">Back </button>
           <button className="btn btn-outline btn-sm md:ml-96 text-[#23B574]">Skip </button>
           <button className="btn bg-[#23B574] btn-sm ml-10 text-white">Get Started <AiOutlineArrowRight></AiOutlineArrowRight>  </button>

           </div>
    </div>

  );
};

export default Onboarding;