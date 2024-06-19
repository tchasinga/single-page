"use strict"
import Image from "next/image";
import Link from "next/link";
import Keeper from "./Pages/Keeper";
import Today from "./Pages/Today";


export default function Home() {
  
  return (
    <main className="">
      <Keeper/>
      <Today/>
    </main>
  );
}
