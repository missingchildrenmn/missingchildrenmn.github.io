import React from 'react';

const cache={};

/**
 * Icon — Ionicons glyph, self-hosted from assets/icons/ionicons/. The SVG is
 * inlined and its #000 strokes/fills rewritten to currentColor, so a glyph
 * inherits the color of the button, menu row or link that contains it.
 */
export function Icon({name,size=24,base='',style,...rest}){
  const url=(base?base.replace(/\/$/,'')+'/':'')+'assets/icons/ionicons/'+name+'.svg';
  const [svg,setSvg]=React.useState(cache[url]||null);
  React.useEffect(()=>{
    if(cache[url]){setSvg(cache[url]);return;}
    let live=true;
    fetch(url).then(r=>r.text()).then(t=>{
      const s=t.replace(/#000/g,'currentColor').replace(/width="512"\s+height="512"/,'width="100%" height="100%"');
      cache[url]=s;
      if(live) setSvg(s);
    }).catch(()=>{});
    return()=>{live=false;};
  },[url]);
  return React.createElement('span',{role:'img','aria-hidden':'true',style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:size,height:size,flex:'0 0 auto',lineHeight:0,...style},dangerouslySetInnerHTML:{__html:svg||''},...rest});
}
