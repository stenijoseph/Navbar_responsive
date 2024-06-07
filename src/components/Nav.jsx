import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Nav = () => {
    const [extendNavbar,setExtendNavbar]=useState(false)
    console.log(extendNavbar);

  return (
    <div className="bg-blue-900 text-white h-20  px-6">
        <div className="max-w-7xl mx-auto flex justify-between">
            <div className="flex items-center h-20 ">
                <h1 className="text-4xl font-bold">Logo</h1>
                </div>
         <div className="flex gap-6 items-center text-black text-lg">
             <ul className={`lg:static flex  flex-col lg:flex-row  lg:text-white lg:items-center absolute gap-6  duration-500 
             ${extendNavbar? "left-5 top-24" :"left-[-150px] top-24"}`}>
            <li className='hover:text-red-600'>Home</li>
            <li className='hover:text-red-600'>Contacts</li>
            <li className='hover:text-red-600'>About</li>
            <li className='hover:text-red-600'>Signin</li>
            <li className='hover:text-red-600'>Signup</li>
              </ul>
        <div className='flex lg:hidden'onClick={()=>
        { setExtendNavbar(open=> !open ) }}>
             {
             extendNavbar ? <ClearIcon/>:<MenuIcon/>   
                  }
       
        </div>
        </div>
     </div>
     </div>
  )
}

export default Nav