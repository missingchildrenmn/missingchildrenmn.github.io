import React from 'react';

/**
 * LinkList — resource list. `spacing="touch"` reproduces the app's
 * #vertically-spaced-links-in-a-list rule (18px, block, 16px gap, 8px radius);
 * `spacing="inline"` is the compact site list.
 */
export function LinkList({items=[],spacing='touch',style}){
  const touch=spacing==='touch';
  return React.createElement('ul',{style:{listStyle:touch?'none':'disc',margin:0,padding:touch?0:'0 0 0 1.25rem',fontFamily:touch?'var(--font-ui)':'var(--font-body)',display:'flex',flexDirection:'column',gap:touch?'var(--space-list-gap)':'.25rem',...style}},
    items.map(it=>React.createElement('li',{key:it.label},
      React.createElement('a',{href:it.href||'#',style:{display:touch?'block':'inline',fontSize:touch?'var(--text-touch-link)':'var(--text-base)',borderRadius:touch?'var(--radius-md)':0,padding:touch?'.25rem .5rem':0,color:'var(--color-link)',textDecoration:touch?'none':'underline'}},it.label),
      it.note?React.createElement('span',{style:{color:'var(--text-muted)',fontSize:'var(--text-sm)',marginLeft:'.5rem'}},it.note):null
    ))
  );
}
