import React from 'react';
import {Icon} from '../core/Icon.jsx';

/**
 * ChildCard — a child entry on the Kids page (ion-card with header, subtitle,
 * optional alias line, optional photo, and a destructive trash action).
 */
export function ChildCard({name,age,birthday,aliases,photo,onOpen,onRemove,iconBase='',style}){
  return React.createElement('div',{onClick:onOpen,style:{background:'var(--surface-card)',border:'var(--border-hairline) solid var(--border-subtle)',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-panel)',marginBottom:'var(--space-3)',padding:'var(--space-3)',cursor:'pointer',fontFamily:'var(--font-ui)',color:'var(--text-body)',...style}},
    React.createElement('div',{key:'n',style:{fontSize:'var(--text-h5)',fontWeight:'var(--weight-semibold)',color:'var(--text-heading)'}},name),
    React.createElement('div',{key:'s',style:{fontSize:'var(--text-sm)',color:'var(--text-muted)',marginTop:'.15rem'}},'Age '+age+(birthday?' ('+birthday+')':'')),
    aliases?React.createElement('p',{key:'a',style:{margin:'.5rem 0 0',color:'var(--text-muted)',fontStyle:'italic'}},aliases):null,
    photo?React.createElement('div',{key:'p',style:{textAlign:'center',marginTop:'var(--space-3)'}},React.createElement('img',{src:photo,alt:'Photo of '+name,style:{maxWidth:200,height:'auto',borderRadius:'var(--radius-sm)'}})):null,
    React.createElement('div',{key:'x',style:{marginTop:'var(--space-3)',textAlign:'right'}},
      React.createElement('button',{onClick:e=>{e.stopPropagation();onRemove&&onRemove();},title:'Remove '+name,style:{background:'transparent',border:0,color:'var(--state-danger)',minWidth:'var(--touch-min)',minHeight:'var(--touch-min)',cursor:'pointer'}},
        React.createElement(Icon,{name:'trash',size:22,base:iconBase})))
  );
}
