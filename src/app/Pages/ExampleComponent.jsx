import React from 'react';

const ExampleComponent = () => {
  return (
    <div className="p-4">
      <div className="bg-primary text-white p-2 rounded">
        Primary Color
      </div>
      <div className="bg-secondary-dark text-white p-2 rounded mt-2">
        Secondary Dark Color
      </div>
      <div className="bg-accent-light text-black p-2 rounded mt-2">
        Accent Light Color
      </div>
      <div className="bg-danger text-white p-2 rounded mt-2">
        Danger Color
      </div>
      <div className="bg-warning text-black p-2 rounded mt-2 ">
        Warning Color
      </div>
      <div className="bg-info text-white p-2 rounded mt-2">
        Info Color
      </div>
      <div className="bg-success text-white p-2 rounded mt-2">
        Success Color
      </div>

      <div className="bg-coloring-light p-2 text-black mt-2">
        New color is added now soon as good 
      </div>
    </div>
  );
};

export default ExampleComponent;
