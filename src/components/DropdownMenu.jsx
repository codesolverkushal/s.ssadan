import React from 'react';

function DropdownMenu({ content }) {
  return (
<div className="absolute bg-white shadow-md py-2 mt-1 w-48 rounded-lg z-10 right-0 lg:right-auto">
      {content}
    </div>
  );
}

export default DropdownMenu;
