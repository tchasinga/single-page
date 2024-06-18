import React from 'react';
import Oneimg from './../../app/Image/pexelsphoto.jpeg'; // Correctly specify the path to the image file
import Navbars from './Navbars';

export default function Keeper() {
  return (
    <div
      className="h-[550px] bg-cover bg-center bg-no-repeat relative w-full"
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${Oneimg.src}) center / cover no-repeat`,
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
          <Navbars/>
      </div>
    </div>
  );
}
