"use strict"
import Image from "next/image";
import Link from "next/link";
import ExampleComponent from "./Pages/ExampleComponent";

export default function Home() {
  
  return (
    <main className="max-w-4xl mx-auto p-10">
      <ExampleComponent />
    </main>
  );
}
