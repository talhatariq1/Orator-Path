'use client';

// import dynamic from 'next/dynamic';

// const CanvasCursor = dynamic(() => import('../ui/canvas-cursor'), {
//   ssr: false
// });

const CanvasCursorWrapper = () => {
  // Temporarily disabled canvas cursor to fix deployment issues
  return null;
  
  /* Original implementation
  return <CanvasCursor />;
  */
};

export default CanvasCursorWrapper;
