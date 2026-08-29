import React from 'react';

/**
 * SiteHeader — the Jekyll site header (minima-reboot): 5px brand rule on top,
 * hairline bottom border, site title on the left, page links on the right.
 */
export function SiteHeader({title='Missing Children Minnesota',links=[],current,style}){
  return React.createElement('header',{style:{borderTop:'var(--border-header-top) solid var(--brand-primary)',borderBottom:'var(--border-hairline) solid var(--border-subtle)',background:'var(--page-bg)',fontFamily:'var(--font-body)',...style}},
    React.createElement('div',{style:{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--container-pad)',height:'var(--nav-height)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-3)'}},
      React.createElement('a',{key:'t',href:'#',style:{fontSize:'var(--text-h4)',fontWeight:'var(--weight-medium)',color:'var(--text-heading)',textDecoration:'none',whiteSpace:'nowrap'}},title),
      React.createElement('nav',{key:'n',style:{display:'flex',flexWrap:'wrap',justifyContent:'flex-end'}},
        links.map(l=>React.createElement('a',{key:l.label,href:l.href||'#',onClick:l.onClick,style:{padding:'.5rem',color:current===l.label?'var(--brand-primary)':'var(--text-heading)',fontWeight:current===l.label?'var(--weight-semibold)':'var(--weight-regular)',textDecoration:'none',cursor:'pointer'}},l.label))
      )
    )
  );
}
