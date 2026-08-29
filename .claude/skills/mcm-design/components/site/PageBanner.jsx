import React from 'react';

/**
 * PageBanner — the wide letterbox photograph that opens every site page
 * (assets/imagery/*-banner.*). Full container width, no crop overlay.
 */
export function PageBanner({src,alt='',height=200,style}){
  return React.createElement('img',{src,alt,style:{display:'block',width:'100%',height,objectFit:'cover',...style}});
}
