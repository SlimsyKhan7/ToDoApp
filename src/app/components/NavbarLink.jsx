import React from 'react';
import './NavbarLink'
import Link from 'next/link';
import Image from 'next/image';

const NavbarLink = ({image: img, text: text, link: link, width: width, height: height}) => {
  return (
    <div>
        <Link href={link} className='flex items-center gap-2 pl-10 p-4'>
            <Image src={img} width={width} height={height} alt='' />
            <p className='navBarLink-text'>{text}</p>
        </Link>
    </div>
  );
}

export default NavbarLink;
