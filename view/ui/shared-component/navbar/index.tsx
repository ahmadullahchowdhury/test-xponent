'use client';
import Link from 'next/link';
import { useState } from 'react';
import MobileNavbar from './mobile-navbar';
import { navbarData } from '@json-db';
import { usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
<div className=''>
    <div className={`mobile-custom-nav hover:bg-black fixed top-0 z-[101] w-full px-0 md:px-4 py-0 md:py-4 duration-700 ease-in-out`}>
      <div>
        <div className='custom-nav px-0 md:px-0 py-2 md:py-0 mx-auto flex  flex-row justify-between gap-20 md:justify-between '>
          <div className='flex items-center gap-5'>

          <Link
            href={navbarData?.companyName?.link}
            aria-label='Company'
            className='inline-flex items-center'
          >
            <Image src={'/logo/logo.svg'} className='w-20 text-white' alt='bus' width={1000} height={1000} priority /> <span className='text-white pt-1 font-bold text-[25px] '></span>
          </Link>
          <ul className='hidden items-center space-x-8 lg:flex'>
            {navbarData.navbarList.map((item: any, index: number) => (
              <li key={index} className={'group relative block'}>
                {item.subMenu ? (
                  <span className='font-work flex items-center gap-1 px-0 py-3 text-base text-white transition hover:text-primary hover:duration-300'>
                    {item.name}
                    {item.subMenu && (
                      <svg
                        className='fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                      >
                        <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                      </svg>
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.link}
                    className='font-work flex items-center gap-1 bg-transparent px-0 py-3 text-base text-white transition hover:text-primary hover:duration-300'
                    style={{
                      fontWeight: pathname === item?.link ? 700 : 400
                    }}
                  >
                    {item.name}
                  </Link>
                )}
                {item.subMenu && item.subMenu.length > 0 && <SubMenu subMenu={item.subMenu} />}
              </li>
            ))}
          </ul>
          </div>
          <div className='z-20 hidden items-center gap-5 text-lg text-white md:flex'>
            <Link href='/' className='border border-white rounded-lg px-3 py-1.5 flex items-center gap-5 hover:border-2'>
              Find Jobs
              <FaArrowRight />
            </Link>

            <Link href='/' className='border border-white bg-violet-500 hover:bg-violet-/70 rounded-lg px-3 py-1.5 flex items-center gap-5 hover:border-2'>
              Find Jobs
              <FaArrowRight />
            </Link>
            <Link href='/login' className=''>
              login
            </Link>
          </div>

          <div className='flex items-center gap-4 lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-3 text-indigo-600 transition duration-200 focus:outline-none'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className='w-5'
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='12'
                viewBox='0 0 15 12'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.933594 1C0.933594 0.734784 1.03895 0.48043 1.22649 0.292893C1.41402 0.105357 1.66838 0 1.93359 0H13.9336C14.1988 0 14.4532 0.105357 14.6407 0.292893C14.8282 0.48043 14.9336 0.734784 14.9336 1C14.9336 1.26522 14.8282 1.51957 14.6407 1.70711C14.4532 1.89464 14.1988 2 13.9336 2H1.93359C1.66838 2 1.41402 1.89464 1.22649 1.70711C1.03895 1.51957 0.933594 1.26522 0.933594 1ZM0.933594 6C0.933594 5.73478 1.03895 5.48043 1.22649 5.29289C1.41402 5.10536 1.66838 5 1.93359 5H13.9336C14.1988 5 14.4532 5.10536 14.6407 5.29289C14.8282 5.48043 14.9336 5.73478 14.9336 6C14.9336 6.26522 14.8282 6.51957 14.6407 6.70711C14.4532 6.89464 14.1988 7 13.9336 7H1.93359C1.66838 7 1.41402 6.89464 1.22649 6.70711C1.03895 6.51957 0.933594 6.26522 0.933594 6ZM0.933594 11C0.933594 10.7348 1.03895 10.4804 1.22649 10.2929C1.41402 10.1054 1.66838 10 1.93359 10H7.93359C8.19881 10 8.45316 10.1054 8.6407 10.2929C8.82824 10.4804 8.93359 10.7348 8.93359 11C8.93359 11.2652 8.82824 11.5196 8.6407 11.7071C8.45316 11.8946 8.19881 12 7.93359 12H1.93359C1.66838 12 1.41402 11.8946 1.22649 11.7071C1.03895 11.5196 0.933594 11.2652 0.933594 11Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DROP DOWN BUTTON ON THE MOBILE SIZE */}

      <MobileNavbar navbarData={navbarData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>

</div>
  );
};

export default Navbar;

const SubMenu = ({ subMenu }: any) => {
  return (
    <ul className='glassmorphism font-work font-work invisible absolute top-[48px] z-[101]	w-full  min-w-[180px]  max-w-[230px] rounded-b-lg  p-0 opacity-0 shadow-md group-hover:visible group-hover:opacity-100'>
      {subMenu.map((subItem: any, index: number) => (
        <li key={index} className={'main-subSubMenu relative block'}>
          {subItem.subMenu ? (
            <span className=' block flex items-center justify-between gap-1 whitespace-normal px-4 text-sm  text-white transition hover:text-primary hover:duration-300'>
              {subItem.name}
              <svg
                className='-rotate-90 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </span>
          ) : (
            <Link
              href={subItem.link}
              className='block whitespace-normal px-4 py-3 text-sm text-white transition hover:text-primary hover:duration-300'
            >
              {subItem.name}
            </Link>
          )}
          {subItem.subMenu && <SubSubMenu subSubMenu={subItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};

const SubSubMenu = ({ subSubMenu }: any) => {
  return (
    <ul className='navbar-bg-color bg-base-100 font-work subSubMenu-hover invisible absolute left-full top-0 z-[101] w-full min-w-[230px] rounded-lg p-0 opacity-0 shadow-md'>
      {subSubMenu.map((subSubItem: any, index: number) => (
        <li key={index} className={'relative block'}>
          {subSubItem.subMenu ? (
            <span className='text-base-content/80 block flex items-center justify-between gap-1 whitespace-normal px-4 py-3 text-sm transition hover:text-primary hover:duration-300'>
              {subSubItem.name}
              <svg
                className='-rotate-90 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </span>
          ) : (
            <Link
              href={subSubItem.link}
              className='text-base-content/80 block whitespace-normal px-4 py-3 text-sm transition hover:text-primary hover:duration-300'
            >
              {subSubItem.name}
            </Link>
          )}
          {subSubItem.subMenu && <SubSubMenu subSubMenu={subSubItem.subMenu} />}
        </li>
      ))}
    </ul>
  );
};