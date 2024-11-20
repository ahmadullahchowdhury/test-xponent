import Link from 'next/link';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const style = {
  background: "linear-gradient(180deg, #2340D5 41.03%, #792DC3 99.08%)",
  
};

const Hero = () => {
  return (
    <div
      className='relative  '
      style={style}
    >
      <div className='relative mx-auto max-w-[1980px] overflow-hidden'>
        <p className='pt-52 text-center text-[45px] font-bold text-white'>
          Hire .NET Developers: Affordable, <br /> Dedicated .NET Experts in 72 hours
        </p>
        <p className='text-semibold pt-10 text-center text-lg text-white'>
          Hire .NET developers to enhance your project's efficiency and productivity. Build dynamic web <br />{' '}
          applications using ASP.NET, C#, Entity Framework, and MVC.
        </p>
        <p className='text-semibold pt-10 text-center text-lg text-white'>
          Access 100+ expert NET developers, engineers and architects from Flexiple, handpicked through a <br /> 5-hour
          evaluation process.
        </p>

        <div className='mx-auto w-1/5 pt-10'>
          <Link
            href='/'
            className='flex items-center gap-5 rounded-lg border border-white bg-white px-3 py-1.5 hover:border-2'
          >
            Hire Dream Developers
            <FaArrowRight />
          </Link>

          <div className='flex justify-center gap-3 pt-10   '>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <FaStar key={index} size='30' color='white' />
            ))}
          </div>
        </div>
        <p className='text-semibold pb-10 pt-5 text-center text-lg text-white'>
          Clients rate Flexiple .NET developers 4.8 / 5 on average based on 10,482 reviews.
        </p>
      </div>
    </div>
  );
};

export default Hero;
