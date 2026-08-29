import React from 'react';

const files={teal:'assets/logo/mcm-logo-teal.png',teal2x:'assets/logo/mcm-logo-teal-2x.png',mono:'assets/logo/mcm-logo-black.png',white:'assets/logo/mcm-logo-white.png',app:'assets/logo/kidsidkit-appicon.svg'};

/**
 * Logo — the MCM wordmark + Minnesota/child mark. Always an image asset;
 * never redrawn. `base` prefixes the asset path for nested pages.
 */
export function Logo({variant='teal',height=48,base='',alt='Missing Children Minnesota',style}){
  return React.createElement('img',{src:(base?base.replace(/\/$/,'')+'/':'')+files[variant],alt,style:{height,width:'auto',display:'block',...style}});
}
