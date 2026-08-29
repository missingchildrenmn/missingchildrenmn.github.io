import React from 'react';

/** PageHeader — the page title block (layout page.html: h1 with pt-4 pb-3). */
export function PageHeader({title,children,style}){
  return React.createElement('header',{style:{padding:'var(--space-4) 0 var(--space-3)',fontFamily:'var(--font-body)',...style}},
    React.createElement('h1',{key:'h',style:{margin:0,fontSize:'var(--text-h1)',lineHeight:'var(--leading-heading)',color:'var(--text-heading)',fontWeight:'var(--weight-medium)'}},title),
    children?React.createElement('div',{key:'c',style:{marginTop:'var(--space-2)',color:'var(--text-muted)'}},children):null
  );
}
