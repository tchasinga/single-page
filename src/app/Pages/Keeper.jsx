import React from 'react';
import Oneimg from './../../app/Image/pexelsphoto.jpeg'; // Correctly specify the path to the image file
import Small from './Small';
import ExampleComponent from './ExampleComponent';

export default function Keeper() {
  return (
    <div
      className="relative h-[550px] w-full object-fill max-w-full bg-fixed" // Added relative positioning here
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${Oneimg.src}) center / cover no-repeat`,
      }}
    >
      <ExampleComponent/>
      <div className="absolute top-[40%] left-[10%] max-w-4xl mx-auto w-full">
          <Small/>
      </div>
    </div>
  );
}
