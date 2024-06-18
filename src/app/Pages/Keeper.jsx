import React from 'react';
import Oneimg from "../Image/pexelsphoto.jpeg"; // Fixed import statement

export default function Keeper() {
  return (
    <div className="" style={{background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${Oneimg}) center / cover no-repeat`}}>
        <h1>Balelobwami</h1>
    </div>
  );
}