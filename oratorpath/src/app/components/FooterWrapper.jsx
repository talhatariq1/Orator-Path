"use client";

import React from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('./Footer'));
const SimpleFooter = dynamic(() => import('./SimpleFooter'));

export default function FooterWrapper() {
  const pathname = usePathname();
  const isRootPage = pathname === "/";
  
  return (
    <>
      {isRootPage ? <Footer /> : <SimpleFooter />}
    </>
  );
}
