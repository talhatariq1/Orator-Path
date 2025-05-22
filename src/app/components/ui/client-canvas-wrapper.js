'use client';

import dynamic from 'next/dynamic';

const CanvasCursor = dynamic(() => import('./canvas-cursor'), {
  ssr: false
});

const ClientCanvasWrapper = () => {
  return <CanvasCursor />;
};

export default ClientCanvasWrapper;
