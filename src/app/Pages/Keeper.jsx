import React from 'react';
import Oneimg from './../../app/Image/pexelsphoto.jpeg'; // Correctly specify the path to the image file
import Navbars from './Navbars';
import Small from './Small';

export default function Keeper() {
  return (
    <div
      className="relative h-[550px]" // Added relative positioning here
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${Oneimg.src}) center / cover no-repeat`,
      }}
    >
      <Small/>
      <Navbars/>
    </div>
  );
}
