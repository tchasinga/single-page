"use strict"
import Image from "next/image";
import Link from "next/link";
import Keeper from "./Pages/Keeper";

export default function Home() {
  
  return (
    <main className="max-w-4xl mx-auto w-full">
      <Keeper/>
    </main>
  );
}
