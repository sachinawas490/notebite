import React from 'react';
import Ai from './Ai';
function GeminiHelper() {
  return (
    <div className="absolute right-10 bottom-[80px]  ">
     <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="menu p-4 w-80 mt-[40vh] h-[50vh] bg-base-200 text-base-content">
      <Ai />
    </div>
  </div>
</div>
    </div>
  );
}

export default GeminiHelper;
