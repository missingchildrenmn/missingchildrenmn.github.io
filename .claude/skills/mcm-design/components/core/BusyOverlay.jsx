import React from 'react';

/** BusyOverlay — translucent scrim + spinner, matching BusyIndicator (ion-loading). */
export function BusyOverlay({show=true,message='Working…'}){
  if(!show) return null;
  return React.createElement('div',{style:{position:'absolute',inset:0,background:'var(--overlay-scrim)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'.75rem',fontFamily:'var(--font-ui)'}},
    React.createElement('div',{key:'s',style:{width:44,height:44,borderRadius:'var(--radius-pill)',border:'4px solid var(--white)',borderTopColor:'transparent',animation:'mcm-spin 900ms linear infinite'}}),
    React.createElement('style',{key:'k'},'@keyframes mcm-spin{to{transform:rotate(360deg)}}'),
    message?React.createElement('div',{key:'m',style:{background:'var(--surface-card)',padding:'.4rem .75rem',borderRadius:'var(--radius-md)',color:'var(--text-body)',fontSize:'var(--text-sm)'}},message):null
  );
}
