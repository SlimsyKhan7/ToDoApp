import React from 'react';
import Image from 'next/image';
import './Header.css'
import NavbarLink from '../components/NavbarLink';

const Header = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <div className='flex pt-1 pb-2 '>
          <NavbarLink image="left.svg" text="Board" link="/dashboard" width={13} height={13}/>
          <NavbarLink image="/board.svg" text="List" link="/dashboard" width={13} height={13}/>
          <NavbarLink image="/calendars.svg" text="Calendar" link="/dashboard" width={13} height={13}/>
        </div>
        <div className='pr-5'>
          <div className=' outline-none border-solid p-2 border border-grey-200 rounded-md flex'>
            <Image src="/search.svg" width={24} height={24} alt='searchicon' />
            <input type="text" placeholder='Search' className='outline-none'/>
          </div>
        </div>
      </div>
      <div className='h-0.5 w-full bg-grey-200' />
    </div>
  );
}

export default Header;
