import React from 'react';

export default function Small() {
  return (
    <div className="text-white"> {/* Ensure this z-index is lower than Navbars */}
            <h1 className="uppercase text-4xl font-bold">cars design progress</h1>
    </div>
  );
}
