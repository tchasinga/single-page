import React from 'react';

export default function Small() {
  return (
    <div className=""> {/* Ensure this z-index is lower than Navbars */}
      <p>Your small component content here.</p>
    </div>
  );
}
