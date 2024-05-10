"use client"
import { Inter } from "next/font/google";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

import { IoCopy } from "react-icons/io5";
import { FaCut } from "react-icons/fa";
import { RiDragMove2Fill } from "react-icons/ri";
import { FaCrop } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { FaFileExport } from "react-icons/fa6";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const [leftExpanded, setLeftExpanded] = useState(false)
  const [rightExpanded, setRightExpanded] = useState(false)
  const [leftMobileExpanded, setLeftMobileExpanded] = useState(false)
  const [rightMobileExpanded, setRightMobileExpanded] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-40 fixed left-0 top-0 h-12 w-screen shadow bg-white">
          <div className="absolute cursor-pointer md:hidden top-1/2 -translate-y-1/2 left-3 w-10 h-full flex items-center justify-center">
            <IoIosMenu 
              onClick={() => {setRightMobileExpanded(false); setLeftMobileExpanded(!leftMobileExpanded)}}
            />
          </div>
          <div className="absolute cursor-pointer md:hidden top-1/2 -translate-y-1/2 right-3 w-10 h-full flex items-center justify-center">
            <SlOptionsVertical 
              onClick={() => {setLeftMobileExpanded(false); setRightMobileExpanded(!rightMobileExpanded)}}
            />
          </div>
        </div>
        <div className=" z-30 flex fixed left-0 top-0 w-screen h-screen bg-neutral-100">
          <div className={`pt-16 flex flex-col gap-6 items-center shrink-0 relative h-full transition-all duration-300 ${leftExpanded? 'md:w-48' : 'md:w-12'} ${leftMobileExpanded? 'w-48' : 'w-0'} shadow bg-white`}>
            <div className=" cursor-pointer flex pl-3 py-2 items-center justify-start overflow-hidden flex-nowrap w-full">
              <IoHomeOutline className="text-xl shrink-0" />
              <span className={`pl-4 text-sm ${leftExpanded? 'md:inline-block' : 'md:hidden'} ${leftMobileExpanded? ' inline-block' : 'hidden'}`}>Home</span>
            </div>
            <div className=" cursor-pointer flex pl-3 py-2 items-center justify-start overflow-hidden flex-nowrap w-full">
              <MdOutlineDashboard className="text-xl shrink-0" />
              <span className={`pl-4 text-sm ${leftExpanded? 'md:inline-block' : 'md:hidden'} ${leftMobileExpanded? ' inline-block' : 'hidden'}`}>Dashboard</span>
            </div>
            <div className=" cursor-pointer flex pl-3 py-2 items-center justify-start overflow-hidden flex-nowrap w-full">
              <FaUsers className="text-xl shrink-0" />
              <span className={`pl-4 text-sm ${leftExpanded? 'md:inline-block' : 'md:hidden'} ${leftMobileExpanded? ' inline-block' : 'hidden'}`}>Users</span>
            </div>
            <div className=" cursor-pointer flex pl-3 py-2 items-center justify-start overflow-hidden flex-nowrap w-full">
              <MdOutlinePayments className="text-xl shrink-0" />
              <span className={`pl-4 text-sm ${leftExpanded? 'md:inline-block' : 'md:hidden'} ${leftMobileExpanded? ' inline-block' : 'hidden'}`}>Payments</span>
            </div>
            <div 
              onClick={() => {setLeftExpanded(!leftExpanded)}}
              className="absolute h-8 w-8 hidden md:flex items-center justify-center rounded-full bg-white top-1/2 -translate-y-1/2 right-0 translate-x-1/2 shadow cursor-pointer">
              <TbLayoutSidebarLeftExpand  className={`${leftExpanded? 'rotate-180' : ''} transition-all duration-500 delay-300`}/>
            </div>
          </div>
          <div className="grow"></div>
          <div className={`flex flex-col items-center pt-14 shrink-0 relative h-full transition-all duration-300 ${rightExpanded? 'md:w-48' : 'md:w-12'} ${rightMobileExpanded? 'w-48' : 'w-0'} shadow bg-white`}>
            <div 
              onClick={() => {setRightExpanded(!rightExpanded)}}
              className="absolute h-8 w-8 hidden md:flex items-center justify-center rounded-full bg-white top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 shadow cursor-pointer">
              <MdMenuOpen  className={`${rightExpanded? 'rotate-180' : ''} transition-all duration-500 delay-300`}/>
            </div>
            <div className={`w-full grid ${rightExpanded? 'md:grid-cols-4' : 'md:grid-cols-1'} ${rightMobileExpanded? 'grid-cols-4' : 'hidden'} gap-2`}>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <IoCopy />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <FaCut />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <RiDragMove2Fill />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <FaCrop />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <AiFillCode />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-neutral-200 rounded-md">
                <FaFileExport />
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
