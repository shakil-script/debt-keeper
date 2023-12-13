import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-around bg-slate-900 shadow-md  p-4'>
                <div className='flex items-center gap-x-5'>
                    <img width={50} src="https://cdn-icons-png.flaticon.com/128/5994/5994612.png?ga=GA1.1.1242648836.1702358523&semt=ais" alt="" />
                    <Link className='text-2xl font-semibold text-white' href={'/'}>Debt Keeper</Link>
                </div>
                <div className='flex items-center gap-x-5  bg-green-700 px-4 py-1 rounded-2xl'>
                    <img width={50} className='' src="https://cdn-icons-png.flaticon.com/128/2467/2467784.png?ga=GA1.1.1242648836.1702358523&semt=ais" alt="" />
                    <Link className='text-2xl font-semibold text-white  hover:text-yellow-300' href={'/add-liability'}>Create Liability</Link>
                </div>
               

                
            </nav>
        </div>
    );
};

export default Navbar;