"use client";

import React from "react";
import { FaPhoneAlt, FaInstagram, FaGithub , FaTwitter, FaFacebook , FaLinkedin } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

// etttt

export default function MyFooter() {
  return (
    <div className="pt-10 pb-10 max-w-6xl mx-auto text-slate-950">
      <div className="max-w-6xl mx-auto p-5 text-slate-950 items-center justify-evenly flex gap-10 flex-wrap w-full myfirstgridin">
        <div className="text-slate-950">
          <h1 className="text-lg font-medium pb-2">Company</h1>
          <div className="flex flex-col gap-2 text-slate-950">
            <p className="text-sm text-slate-950">About us</p>
            <p className="text-sm text-slate-950">Why us</p>
            <p className="text-sm text-slate-950">Security</p>
            <p className="text-sm text-slate-950">Partnership</p>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg font-medium pb-2">Categories</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-950">Basic Yoga</p>
            <p className="text-sm text-slate-950">Strength Training</p>
            <p className="text-sm text-slate-950">Body Building</p>
            <p className="text-sm text-slate-950">Weigth Lost</p>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg font-medium pb-2">Help</h1>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-950">Account</p>
            <p className="text-sm text-slate-950">Support Center</p>
            <p className="text-sm text-slate-950">Privacy Policy</p>
            <p className="text-sm text-slate-950">Terms & Conditions</p>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg font-medium pb-2">Contact US</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <FaPhoneAlt className="text-red-800 text-lg" />
              <a href="tel:+250787289028" className="">
                <p className="text-sm text-slate-950 cursor-pointer">
                  (+250) 787289028
                </p>
              </a>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <MdEmail className="text-red-800  text-lg" />
              <a href="tchasingajacques@gmail.com" className="">
                <p className="text-sm text-slate-950 cursor-pointer">
                  tchasingajacques@gmail.com
                </p>
              </a>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <MdLocationPin className="text-red-800  text-lg" />
              <a href="tchasingajacques@gmail.com" className="">
                <p className="text-sm text-slate-950 cursor-pointer">
                  2464 Royal Ln.Mesa <br />
                  New Jersey 45463
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div className="relative mx-auto">
      <hr className="w-[82%] max-w-6xl mx-auto text-slate-200" />
        <div className="flex items-center justify-evenly pt-5 bottom-0 left-0 right-0 flex-wrap ">
          <div className="flex items-center gap-3">
            <IoFitness className="text-4xl text-slate-900 mytext animate__bounceIn animate__animated" />
            <h1 className="text-lg font-bold text-slate-950">Fitness room</h1>
          </div>

          <div className="">
            <p className="text-sm text-slate-950">
              Tchasinga balolebwami jack  year {new Date().getFullYear()} @<span className="myWrap">All Copyrights reservesed</span> 
            </p>
          </div>

          <div class="flex items-center gap-3 text-slate-900">

           <div className="">
           <FaInstagram className="" />
           </div>

           <div className="">
           <FaGithub className="" />
           </div>

           <div className="">
           <FaTwitter className="" />
           </div>

           <div className="">
           <FaFacebook className="" />
           </div>

           <div className="">
           <FaLinkedin className="" />
           </div>

          </div>

        </div>
      </div>
    </div>
  );
}