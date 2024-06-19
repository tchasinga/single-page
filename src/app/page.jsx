"use strict"

import Image from "next/image";
import Link from "next/link";

import Keeper from "./Pages/Keeper";
import Today from "./Pages/Today";
import MyFooter from "./Pages/MyFooter";


export default function Home() {
  
  return (
    <main className="">
      <Keeper/>

      <div className="max-w-5xl mx-auto w-full max-h-screen pt-5">
         <Today/>
         <MyFooter/>
      </div>

       

    </main>
  );
}
