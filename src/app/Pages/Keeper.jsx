import React from 'react';
import Oneimg from './../../app/Image/pexelsphoto.jpeg'; // Correctly specify the path to the image file

export default function Keeper() {
  return (
    <div
      className="h-96 bg-cover bg-center bg-no-repeat relative"
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${Oneimg.src}) center / cover no-repeat`,
      }}
    >
      <div className="max-w-5xl mx-auto">
          <h1>Balolebwami Jack</h1>
      </div>
    </div>
  );
}
