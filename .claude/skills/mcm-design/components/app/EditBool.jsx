import React from 'react';

/** EditBool — label + toggle, justified end, green (secondary) when on (EditBool.razor). */
export function EditBool({label,checked=false,disabled=false,onChange,style}){
  return React.createElement('label',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-3)',minHeight:'var(--touch-min)',fontFamily:'var(--font-ui)',color:'var(--text-body)',opacity:disabled?.55:1,...style}},
    React.createElement('span',{key:'l'},label),
    React.createElement('span',{key:'t',role:'switch','aria-checked':checked,onClick:()=>!disabled&&onChange&&onChange(!checked),style:{width:51,height:32,borderRadius:'var(--radius-pill)',background:checked?'var(--brand-support)':'var(--gray-400)',position:'relative',flex:'0 0 auto',cursor:disabled?'not-allowed':'pointer',transition:'background var(--transition-fast) var(--easing)'}},
      React.createElement('span',{style:{position:'absolute',top:2,left:checked?21:2,width:28,height:28,borderRadius:'var(--radius-pill)',background:'var(--white)',boxShadow:'var(--shadow-panel)',transition:'left var(--transition-fast) var(--easing)'}}))
  );
}
