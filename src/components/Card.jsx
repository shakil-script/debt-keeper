import Link from 'next/link';
import React from 'react';
import {MdDriveFileRenameOutline, MdTypeSpecimen,MdPayment,MdDelete } from "react-icons/md";
import { FcDebt } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa";
const Card = () => {
    return (
        <div  className='bg text-white p-5 flex flex-col gap-y-5 shadow-lg  rounded-3xl '>
           <h1 className='flex items-center gap-x-2'><MdDriveFileRenameOutline className='text-yellow-500 text-2xl'/> Title:<span>Small loan</span> </h1>
           <h1 className='flex items-center gap-x-2'><MdTypeSpecimen className='text-yellow-500 text-2xl'/>  Type:<span>Cash</span></h1>
           <h1 className='flex items-center gap-x-2'><FaHandHoldingDollar className='text-yellow-500 text-2xl'/> Amount: <span>2000 taka</span></h1>
           <h1 className='flex items-center gap-x-2'> <FcDebt className=' text-3xl'/> Creditor Name: <span>Md. Elius Hosen</span> </h1>
          <h1 className='flex items-center gap-x-2'> <BsCalendarDate className='text-yellow-500 text-2xl'/>Date of Loan: <span>12 December 2023</span></h1>
          <h1 className='flex items-center gap-x-2'><MdPayment className='text-yellow-500 text-2xl'/> Date of Commitment:<span>12 January 2023</span></h1>

          <div className='flex items-center justify-between'>
            <Link href={'/'}>  <  MdDelete className='text-red-600 text-3xl'/></Link>
            <Link href={'/'}> <FaEdit className='text-yellow-400 text-3xl'/></Link>
            
          </div>

        </div>
    );
};

export default Card;