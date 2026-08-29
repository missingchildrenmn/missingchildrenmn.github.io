import React from 'react';
import {Icon} from '../core/Icon.jsx';

/**
 * AppMenu — the KidsIdKit side menu (ion-menu): teal toolbar titled "Kids Id Kit",
 * ionicon + label rows, active row lifted with a translucent white wash,
 * groups separated by a hairline divider.
 */
export function AppMenu({title='Kids Id Kit',groups=[],active,onSelect,iconBase='',style}){
  return React.createElement('aside',{style:{width:'var(--sidebar-width)',minWidth:'var(--sidebar-width)',background:'var(--surface-brand-deep)',color:'var(--text-nav-inactive)',fontFamily:'var(--font-ui)',display:'flex',flexDirection:'column',...style}},
    React.createElement('div',{key:'h',style:{background:'var(--surface-brand)',color:'var(--text-on-brand)',minHeight:'56px',display:'flex',alignItems:'center',padding:'0 var(--space-3)',fontSize:'var(--text-brand)',fontWeight:'var(--weight-semibold)'}},title),
    React.createElement('div',{key:'b',style:{padding:'var(--space-3) .5rem',display:'flex',flexDirection:'column',gap:'.25rem'}},
      groups.map((g,gi)=>React.createElement(React.Fragment,{key:gi},
        gi>0?React.createElement('div',{style:{height:2,minHeight:2,background:'var(--brand-support)',margin:'.5rem 0'}}):null,
        g.map(item=>React.createElement('a',{key:item.label,href:'#',onClick:e=>{e.preventDefault();onSelect&&onSelect(item);},style:{display:'flex',alignItems:'center',gap:'.5rem',height:'3rem',padding:'0 .75rem',borderRadius:'var(--radius-sm)',fontSize:'var(--text-nav-item)',textDecoration:'none',color:active===item.label?'var(--white)':'var(--text-nav-inactive)',background:active===item.label?'var(--overlay-nav-active)':'transparent'}},
          React.createElement(Icon,{name:item.icon,size:24,base:iconBase}),
          React.createElement('span',{style:{whiteSpace:'nowrap'}},item.label)))
      ))
    )
  );
}
