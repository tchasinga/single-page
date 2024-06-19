import React from 'react';
import { RxColorWheel } from "react-icons/rx";


export default function Small() {
  return (
    <div className="flex-col flex justify-center"> 
             <div className="pb-2 flex gap-2 flex-wrap ">
             <h1 className="text-slate-300 uppercase text-4xl font-bold ">cars design</h1>
             <h1 className="text-slate-300 uppercase text-4xl font-bold flex items-center justify-center">pr<RxColorWheel className="spinerCode"/>gress</h1>
             </div>
            <hr className="w-28"/>
            <div className="text-slate-300 pt-2 first-letter:uppercase text-sm w-full leading-normal max-w-xl">
              <p className="">A car management system is a software solution designed to help organizations <br/> manage their fleet of vehicles efficiently</p>
            </div>
    </div>
  );
}
