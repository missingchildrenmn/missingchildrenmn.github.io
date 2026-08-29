import React from 'react';
import {Icon} from './Icon.jsx';

const base={fontFamily:'var(--font-ui)',fontSize:'var(--text-base)',lineHeight:1.5,display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'.4rem',border:'1px solid var(--gray-100)',borderRadius:'var(--radius-sm)',padding:'.375rem .75rem',minHeight:'var(--touch-min)',minWidth:'var(--touch-min)',textDecoration:'none',cursor:'pointer'};

const variants={
  primary:{background:'var(--brand-primary)',color:'var(--white)'},
  save:{background:'var(--brand-primary)',color:'var(--white)'},
  back:{background:'var(--brand-support)',color:'var(--white)'},
  secondary:{background:'var(--brand-support)',color:'var(--white)'},
  danger:{background:'transparent',color:'var(--state-danger)',border:'1px solid transparent'},
  clear:{background:'transparent',color:'var(--brand-primary)',border:'1px solid transparent'},
  icon:{background:'transparent',color:'var(--brand-primary)',border:'1px solid transparent',padding:'.25rem'}
};

/** Button — the app's .btn-primary / .btn-save / .btn-back / .btn-icon set. */
export function Button({variant='primary',block=false,disabled=false,href,icon,iconBase='',children,style,...rest}){
  const s={...base,...variants[variant],...(block?{display:'flex',width:'100%'}:null),...(disabled?{opacity:.55,cursor:'not-allowed'}:null),...style};
  const inner=[icon?React.createElement(Icon,{key:'i',name:icon,size:20,base:iconBase}):null,children];
  if(href) return React.createElement('a',{href,style:s,...rest},inner);
  return React.createElement('button',{type:'button',disabled,style:s,...rest},inner);
}
