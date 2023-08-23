import React from 'react';
import Image from 'next/image';
import NavbarLink from '../components/NavbarLink';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
      <div className='flex'>
        <div className=''>
          <div className='flex items-center gap-2 pl-10 p-5 NavgationBar'>
            <Image src="/breeze.svg" width={24} height={24} alt='' />
            <h1 className='text-lg font-semibold'>Brees</h1>
          </div>
          <div className=' w-full h-0.5 bg-grey-200'/>
          <div className='mt-10 NavgationBar'>
            <NavbarLink image="/category.svg" text="Dashboard" link="/dashboard" width={24} height={24}/>
            <NavbarLink image="/stack.svg" text="Projects"  link="/dashboard" width={24} height={24}/>
            <NavbarLink image="/task.svg" text="Tasks" link="/dashboard" width={24} height={24}/>
            <NavbarLink image="/message.svg" text="Messages" link="/dashboard" width={24} height={24}/>
            <NavbarLink image="/profile.svg" text="Users" link="/dashboard" width={24} height={24}/>
          </div>
        </div>
        <div className=' h-screen w-0.5 bg-grey-200 inline-block' />
      </div>
  );
}

export default NavigationBar;
