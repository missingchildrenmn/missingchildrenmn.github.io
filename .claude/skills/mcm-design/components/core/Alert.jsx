import React from 'react';
import {Button} from './Button.jsx';

/**
 * Alert — modal confirm dialog matching McmAlert (ion-alert): header, message,
 * confirm + cancel prompts, non-dismissable backdrop.
 */
export function Alert({header,message,confirmPrompt='OK',cancelPrompt,open=true,onConfirm,onCancel}){
  if(!open) return null;
  return React.createElement('div',{style:{position:'absolute',inset:0,background:'var(--overlay-scrim)',display:'flex',alignItems:'center',justifyContent:'center',padding:'var(--space-3)',fontFamily:'var(--font-ui)'}},
    React.createElement('div',{style:{background:'var(--surface-card)',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-panel)',maxWidth:320,width:'100%',padding:'1.25rem',textAlign:'center'}},
      header?React.createElement('h2',{key:'h',style:{margin:'0 0 .5rem',fontSize:'var(--text-h5)',color:'var(--text-heading)'}},header):null,
      React.createElement('p',{key:'m',style:{margin:'0 0 1.25rem',color:'var(--text-muted)'}},message),
      React.createElement('div',{key:'b',style:{display:'flex',gap:'.5rem',justifyContent:'center'}},
        cancelPrompt?React.createElement(Button,{key:'c',variant:'clear',onClick:onCancel},cancelPrompt):null,
        React.createElement(Button,{key:'ok',variant:'primary',onClick:onConfirm},confirmPrompt)
      )
    )
  );
}
