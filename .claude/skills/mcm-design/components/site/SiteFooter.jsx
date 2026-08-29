import React from 'react';

/**
 * SiteFooter — three-column footer from minima-reboot: site title, contact
 * column, optional social column, mission statement in muted text.
 */
export function SiteFooter({title='Missing Children Minnesota',email='general.info@missingchildrenmn.com',links=[],description='',style}){
  const col={display:'flex',flexDirection:'column',gap:'.25rem',listStyle:'none',margin:0,padding:0};
  return React.createElement('footer',{style:{borderTop:'var(--border-hairline) solid var(--border-subtle)',fontFamily:'var(--font-body)',background:'var(--page-bg)',...style}},
    React.createElement('div',{style:{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-4) var(--container-pad) var(--space-5)'}},
      React.createElement('div',{key:'t',style:{fontSize:'var(--text-h5)',fontWeight:'var(--weight-medium)',color:'var(--text-heading)',marginBottom:'var(--space-3)'}},title),
      React.createElement('div',{key:'r',style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'var(--space-4)'}},
        React.createElement('ul',{key:'c',style:col},
          React.createElement('li',{key:'n',style:{color:'var(--text-muted)'}},title),
          React.createElement('li',{key:'e'},React.createElement('a',{href:'mailto:'+email,style:{color:'var(--color-link-site)'}},email))
        ),
        links.length?React.createElement('ul',{key:'l',style:col},links.map(l=>React.createElement('li',{key:l.label},React.createElement('a',{href:l.href||'#',style:{color:'var(--color-link-site)'}},l.label)))):null,
        React.createElement('p',{key:'d',style:{margin:0,color:'var(--text-muted)',textAlign:'justify',lineHeight:'var(--leading-body)'}},description)
      )
    )
  );
}
