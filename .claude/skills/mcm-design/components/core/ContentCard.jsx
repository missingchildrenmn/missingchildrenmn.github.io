import React from 'react';

/**
 * ContentCard — the signature MCM card: hairline black border, 10px radius,
 * and a hard 5px teal offset shadow (scss/custom.scss .content-card).
 */
export function ContentCard({title,subtitle,actions,children,style}){
  return React.createElement('div',{style:{position:'relative',background:'var(--surface-card)',border:'1px solid var(--border-strong)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-card)',padding:'var(--space-card-pad)',marginBottom:'var(--space-card-gap)',fontFamily:'var(--font-ui)',color:'var(--text-body)',...style}},
    actions?React.createElement('div',{key:'a',style:{position:'absolute',right:'5px',top:'5px',display:'flex',gap:'.25rem'}},actions):null,
    title?React.createElement('h3',{key:'t',style:{margin:0,fontSize:'var(--text-h5)',fontWeight:'var(--weight-semibold)',color:'var(--text-heading)'}},title):null,
    subtitle?React.createElement('div',{key:'s',style:{fontSize:'var(--text-sm)',color:'var(--text-muted)',marginTop:'.15rem'}},subtitle):null,
    React.createElement('div',{key:'c',style:{marginTop:title||subtitle?'.5rem':0}},children)
  );
}
