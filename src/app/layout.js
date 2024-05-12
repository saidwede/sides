"use client"
import { Inter } from "next/font/google";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

import { IoCopy } from "react-icons/io5";
import { FaCut } from "react-icons/fa";
import { RiDragMove2Fill } from "react-icons/ri";
import { FaCrop } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { FaFileExport } from "react-icons/fa6";
import { MdSquareFoot } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaImage } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FaLock } from "react-icons/fa";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cursorPostionArray = [
  "top-[0.5rem]",
  "top-[calc(1.5rem+3rem)]",
  "top-[calc(2.5rem+6rem)]",
  "top-[calc(3.5rem+9rem)]",
  "top-[calc(4.5rem+12rem)]"
]


export default function RootLayout({ children }) {

  const [leftExpanded, setLeftExpanded] = useState(false)
  const [rightExpanded, setRightExpanded] = useState(false)
  const [leftMobileExpanded, setLeftMobileExpanded] = useState(false)
  const [rightMobileExpanded, setRightMobileExpanded] = useState(false)
  const [cursorPostion, setCursorPostion] = useState(cursorPostionArray[0])
  const [currentPos, setCurrentPos] = useState(0)
  
  function changePosTo(pos){
    setCursorPostion(cursorPostionArray[pos])
    setCurrentPos(pos)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className=" z-30 flex fixed items-stretch left-0 top-0 w-screen h-screen bg-primary">
          <div className={`pt-16 flex flex-col gap-6 items-center shrink-0 relative h-full transition-all duration-300 ${leftExpanded? 'w-48' : 'w-12'} shadow bg-primary`}>
            <div 
              onClick={() => {setLeftExpanded(!leftExpanded);}}
              className="absolute h-8 w-8 flex items-center justify-center rounded-full bg-white bottom-10 right-1/2 translate-x-1/2 shadow cursor-pointer">
              <TbLayoutSidebarLeftExpand  className={`${leftExpanded? 'rotate-180' : ''} transition-all duration-500 delay-300`}/>
            </div>
            <div className="flex justify-center w-full items-center absolute top-20 md:top-10 right-1/2 translate-x-1/2">
              <FaWandMagicSparkles className="text-2xl text-white" />
              <span className={`text-white text-sm ml-3 ${!leftExpanded? 'hidden' : ''}`}>Magic Side Bar</span>
            </div>
            <div className="w-full z-20 absolute top-1/2 -translate-y-1/2 grid gap-12">
              <div className={`absolute right-0 translate-x-1/2 ${cursorPostion} ${leftExpanded? 'hidden' : ''} transition-all duration-300 -translate-y-1/2`}>
                <img src="/elipse.svg" className=" scale-125" />
                <div className="h-9 w-9 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className={`absolute bg-white h-12 w-[calc(100%-10px)] left-1/2 rounded-2xl -translate-x-1/2 ${cursorPostion} ${!leftExpanded? 'hidden' : ''} transition-all duration-300 -translate-y-1/2`}>
                
              </div>
              <div onClick={() => {changePosTo(0)}} className={ `text-white cursor-pointer flex  py-2 items-center justify-center overflow-hidden flex-nowrap w-full` }>
                <FaHome className={`${leftExpanded ? 'left-1' : ''} text-xl shrink-0 transition-all duration-300 absolute ${currentPos == 0 && !leftExpanded ? 'text-yellow-300 right-0 translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${currentPos == 0 && leftExpanded ? 'text-primary' : ''}`} />
                <span className={`pl-4 text-sm absolute left-8 ${leftExpanded? 'inline-block' : 'hidden'} ${currentPos == 0 && leftExpanded ? 'text-primary' : ''}`}>Home</span>
              </div>
              <div onClick={() => {changePosTo(1)}} className="text-white cursor-pointer flex  py-2 items-center justify-center overflow-hidden flex-nowrap w-full">
                <MdDashboard className={`${leftExpanded ? 'left-1' : ''} text-xl shrink-0 transition-all duration-300 absolute ${currentPos == 1 && !leftExpanded ? 'text-yellow-300 right-0 translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${currentPos == 1 && leftExpanded ? 'text-primary' : ''}`} />
                <span className={`pl-4 text-sm absolute left-8 ${leftExpanded? 'inline-block' : 'hidden'} ${currentPos == 1 && leftExpanded ? 'text-primary' : ''}`}>Dashboard</span>
              </div>
              <div onClick={() => {changePosTo(2)}} className="text-white cursor-pointer flex  py-2 items-center justify-center overflow-hidden flex-nowrap w-full">
                <FaUsers className={`${leftExpanded ? 'left-1' : ''} text-xl shrink-0 transition-all duration-300 absolute ${currentPos == 2 && !leftExpanded ? 'text-yellow-300 right-0 translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${currentPos == 2 && leftExpanded ? 'text-primary' : ''}`} />
                <span className={`pl-4 text-sm absolute left-8 ${leftExpanded? 'inline-block' : 'hidden'} ${currentPos == 2 && leftExpanded ? 'text-primary' : ''}`}>Users</span>
              </div>
              <div onClick={() => {changePosTo(3)}} className="text-white cursor-pointer flex  py-2 items-center justify-center overflow-hidden flex-nowrap w-full">
                <MdPayments className={`${leftExpanded ? 'left-1' : ''} text-xl shrink-0 transition-all duration-300 absolute ${currentPos == 3 && !leftExpanded ? 'text-yellow-300 right-0 translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${currentPos == 3 && leftExpanded ? 'text-primary' : ''}`} />
                <span className={`pl-4 text-sm absolute left-8 ${leftExpanded? 'inline-block' : 'hidden'} ${currentPos == 3 && leftExpanded ? 'text-primary' : ''}`}>Payments</span>
              </div>
              <div onClick={() => {changePosTo(4)}} className="text-white cursor-pointer flex  py-2 items-center justify-center overflow-hidden flex-nowrap w-full">
                <FaTools className={`${leftExpanded ? 'left-1' : ''} text-xl shrink-0 transition-all duration-300 absolute ${currentPos == 4 && !leftExpanded ? 'text-yellow-300 right-0 translate-x-1/2' : 'right-1/2 translate-x-1/2'} ${currentPos == 4 && leftExpanded ? 'text-primary' : ''}`} />
                <span className={`pl-4 text-sm absolute left-8 ${leftExpanded? 'inline-block' : 'hidden'} ${currentPos == 4 && leftExpanded ? 'text-primary' : ''}`}>Tools</span>
              </div>
              
              
            </div>
            
          </div>
          <div className="grow relative rounded-tl-2xl rounded-bl-2xl bg-white overflow-hidden text-black pt-10">

          <div className="z-40 fixed md:absolute flex justify-center items-center left-0 top-0 h-12 w-full shadow bg-white">
            {/* <div className="absolute cursor-pointer md:hidden top-1/2 -translate-y-1/2 left-3 w-10 h-full flex items-center justify-center">
              <IoIosMenu 
                onClick={() => {setRightMobileExpanded(false); setLeftMobileExpanded(!leftMobileExpanded)}}
              />
            </div> */}
            <div className="absolute cursor-pointer md:hidden top-1/2 -translate-y-1/2 right-3 w-10 h-full flex items-center justify-center">
              <SlOptionsVertical 
                onClick={() => {setLeftMobileExpanded(false); setRightMobileExpanded(!rightMobileExpanded)}}
              />
            </div>
            <span className="text-lg font-bold">Slide App</span>
          </div>
          <div className="p-10">
            Content Here
          </div>
          </div>
          <div className={`flex flex-col items-center pt-14 shrink-0 relative h-full transition-all duration-300 ${rightExpanded? 'md:w-48' : 'md:w-12'} ${rightMobileExpanded? 'w-48' : 'w-0'} shadow bg-white`}>
            <div 
              onClick={() => {setRightExpanded(!rightExpanded)}}
              className="absolute h-8 w-8 hidden md:flex items-center justify-center rounded-full bg-white top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 shadow cursor-pointer">
              <MdMenuOpen  className={`${rightExpanded? 'rotate-180' : ''} transition-all duration-500 delay-300`}/>
            </div>
            <div className={`grid ${rightExpanded? 'md:grid-cols-4' : 'md:grid-cols-1'} ${rightMobileExpanded? 'grid-cols-4' : 'grid-cols-1'} gap-2`}>
              <div className="flex justify-center items-center h-10 w-10 bg-green-200 text-green-800 rounded-md">
                <IoCopy />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-blue-200 text-blue-800 rounded-md">
                <FaCut />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-orange-200 text-orange-800 rounded-md">
                <RiDragMove2Fill />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-fuchsia-200 text-fuchsia-800 rounded-md">
                <FaCrop />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-amber-200 text-amber-800 rounded-md">
                <AiFillCode />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-sky-200 text-sky-800 rounded-md">
                <FaFileExport />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-lime-200 text-lime-800 rounded-md">
                <MdSquareFoot />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-pink-200 text-pink-800 rounded-md">
                <MdEditSquare />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-cyan-200 text-cyan-800 rounded-md">
                <HiMiniSquare3Stack3D />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-purple-200 text-purple-800 rounded-md">
                <FaImage />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-green-200 text-green-800 rounded-md">
                <IoIosChatboxes />
              </div>
              <div className="flex justify-center items-center h-10 w-10 bg-red-200 text-red-800 rounded-md">
                <FaLock />
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
