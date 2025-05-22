'use client';

import dynamic from 'next/dynamic';

const CanvasCursor = dynamic(() => import('../ui/canvas-cursor'), {
  ssr: false
});

const CanvasCursorWrapper = () => {
  return <CanvasCursor />;
};

export default CanvasCursorWrapper;
