import React from 'react';

/**
 * PinPad — the KidsIdKit unlock card (PinEntry.razor.css): white 12px card,
 * per-digit boxes 50x60 with 2px borders, subtitle, hint, and an actions row.
 */
export function PinPad({title='Enter your PIN',subtitle,digits=4,filled=0,hint,focusIndex=0,children,style}){
  return React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center',fontFamily:'var(--font-ui)',...style}},
    React.createElement('div',{style:{background:'var(--white)',borderRadius:'var(--radius-xl)',padding:'1rem 2rem 2rem',boxShadow:'var(--shadow-panel)',textAlign:'center',maxWidth:400,width:'100%',boxSizing:'border-box'}},
      React.createElement('h2',{key:'t',style:{margin:'0 0 .5rem',color:'#333',fontSize:'var(--text-h4)'}},title),
      subtitle?React.createElement('p',{key:'s',style:{color:'#666',marginBottom:'1.5rem'}},subtitle):null,
      React.createElement('div',{key:'d',style:{display:'flex',justifyContent:'center',gap:'.5rem',marginBottom:'1rem'}},
        Array.from({length:digits}).map((_,i)=>React.createElement('div',{key:i,style:{width:50,height:60,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem',color:'var(--text-body)',border:'var(--border-emphasis) solid '+(i===focusIndex?'var(--state-focus-ring)':'var(--border-input)'),borderRadius:'var(--radius-md)'}},i<filled?'•':''))),
      hint?React.createElement('div',{key:'h',style:{color:'#888',fontSize:'var(--text-sm)',marginBottom:'1rem'}},hint):null,
      React.createElement('div',{key:'a',style:{marginTop:'1.5rem',display:'flex',flexDirection:'column',alignItems:'center',gap:'.5rem'}},children)
    )
  );
}
