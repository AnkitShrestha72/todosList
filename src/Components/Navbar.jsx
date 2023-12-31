import React, { Fragment } from "react";
import { useState } from "react"; 
import { Link } from "react-router-dom";

const Navbar = (props) => {
  // const navbarr = ["Home", "About", "Blog", "Services", "Contact Us"];
  const navbarr = [{name: "Home", path: "/"},{name: "About", path: "/about"},{name:"Blog", path: "/blog"},{name:"Services", path: "/services"},{name:"Contact Us", path: "/contact-us"}];
  const profile = ["Your Profile", "Settings", "Sign Out"];
  const [show , setShow] = useState(false);


  return (
    <>
      <div>
        {/* <ul className='flex justify-around py-3 bg-slate-300 font-bold '>
      {navbarr.map((navData,i)=>{
        return(
          <div className="cursor-pointer" key={i}>
            {navData}
          </div>
        )
       })}
      </ul> */}
 

 <nav className="bg-gray-500">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          <div className="title font-bold text-gray-50 my-2" >
          <p>{props.title}</p>
          </div>
         
          
          {navbarr.map((navData,i)=>{
            return(
              <Fragment key={i}>
            
              <Link to={`${navData.path}`} className="bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{navData.name}</Link>
              </Fragment>
            
            )
          })}
          
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>

      
        <div className="relative ml-3" onClick={()=>{
          setShow(!show)
        }}>
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

       
          <div className={`absolute right-0 ${show===true ? '' : 'hidden'} mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={0}>
          
            {profile.map((profileData , i)=>{
              return(
                <Fragment key={i}>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="0" id="user-menu-item-0">{profileData}</Link>
                </Fragment>
              )
            })}
           
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a to="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

      

      </div>
    </>
  );
};

export default Navbar;
