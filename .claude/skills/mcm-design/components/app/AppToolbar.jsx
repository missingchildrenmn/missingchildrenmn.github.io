import React from 'react';
import {Icon} from '../core/Icon.jsx';

/**
 * AppToolbar — the KidsIdKit page header (ion-header + ion-toolbar color="primary"):
 * solid teal bar, optional menu button on the left, page title.
 */
export function AppToolbar({title,onMenu,trailing,iconBase='',style}){
  return React.createElement('div',{style:{background:'var(--surface-brand)',color:'var(--text-on-brand)',minHeight:'56px',display:'flex',alignItems:'center',gap:'.25rem',padding:'0 .5rem',fontFamily:'var(--font-ui)',...style}},
    onMenu?React.createElement('button',{key:'m',onClick:onMenu,'aria-label':'Menu',style:{background:'transparent',border:0,color:'inherit',minWidth:'var(--touch-min)',minHeight:'var(--touch-min)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}},
      React.createElement(Icon,{name:'menu',size:24,base:iconBase})):null,
    React.createElement('div',{key:'t',style:{fontSize:'1.0625rem',fontWeight:'var(--weight-semibold)',flex:1,padding:'0 .25rem'}},title),
    trailing||null
  );
}
