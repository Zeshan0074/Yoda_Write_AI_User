import React, { useState } from 'react';
import { FiUser, FiLock } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/textory-logo.png';
import { Button } from 'reactstrap';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='py-1 border-b px-[10px] md:px-[50px] lg:px-[75px] border-gray-600 z-10 fixed bg-[#070d2b] text-white w-full'>
      <div className='flex items-center justify-between'>
        {/* right side of the navbar */}
        <div className='flex items-center gap-3 hover:cursor-pointer'>
          <div className='text-white'>
            <img src={logo} alt='logo' />
          </div>
        </div>

        {/* middle of the navbar */}
        <div className='hidden lg:block font-semibold'>
          <ul className='flex gap-6 hover:cursor-pointer'>
            <li className='headerNavlink'> Home</li>
            <li className='headerNavlink'> Funkcion</li>
            <li className='headerNavlink'> Prices</li>
            <li className='headerNavlink'> Blogs</li>
            <li className='headerNavlink'> FAQs</li>
            <li className='headerNavlink'> Contact Us</li>
          </ul>
        </div>

        {/* right side of the navbar */}
        <div className='hidden lg:block  font-semibold'>
          <div className='flex items-center gap-3'>
            <div className='hidden lg:block d-xl-flex'>
              
                <div className='flex items-center justify-center gap-x-1  px-2 py-1 rounded-lg mx-2 bg-[#ff084a]  hover:bg-[#4754c4]'>
                  <FiUser />
                  <Link to="/signin"> <button className='hover:text-white'>LOGIN</button></Link>
                </div>
              
              
                <div className='flex items-center justify-center gap-x-1 px-2 py-1 rounded-lg mx-2 bg-[#2E2252] hover:bg-[#27445C] '>
                  <FiLock />
                  <Link to="/signup">  <button className='hover:text-white'>Sign Up</button>  </Link>
                </div>
             
            </div>
            <div className='hidden lg:block font-bold'>
            <TfiWorld size={25}/>
            </div>
          </div>
        </div>

        {/* menu button */}
        <div className='block cursor-pointer lg:hidden z-10'>
          {toggle ? (
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              className='mr-2 shadow-sm border rounded-full hover:text-white'
              size={30}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className='mr-2 shadow-sm border rounded hover:text-white'
              size={30}
            />
          )}

          <ul className={`fixed h-full w-full md:h-[390px] bg-[#070d2b] top-[75px] lg:hidden ${toggle ? 'left-[0]' : 'left-[-100%]'} px-8 py-8 font-bold `}>
            <li className='headerNavlink'> Home</li>
            <li className='headerNavlink'> Funkcion</li>
            <li className='headerNavlink'> Prices</li>
            <li className='headerNavlink'> Blogs</li>
            <li className='headerNavlink'> FAQs</li>
            <li className='headerNavlink'> Contact Us</li>
            <div className='flex lg:hidden  d-xl-flex'>
              <Link to="/signin">
                <button className='mx-1 my-4 rounded-lg  text-black flex text-sm items-center justify-center bg-[#ff084a] border-0 hover:bg-[#4754c4]'>
                  <FiUser />
                  <p className='mx-1 hover:text-'> LOGIN</p>
                </button>
              </Link>
              <Link to="/signup">
                <Button className='mx-1 my-4 rounded-lg flex items-center justify-center bg-[#2E2252] border-0 hover:bg-[#27445C]'>
                  <FiLock />
                  <button>Sign Up</button>
                </Button>
              </Link>
            </div>
            <div className=' lg:hidden font-bold mx-auto '>
              <TfiWorld size={25}/>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;