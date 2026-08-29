import React from 'react';

/** PostListItem — one blog entry on the home/blog list: muted date, h3 link, excerpt. */
export function PostListItem({date,title,href='#',excerpt,style}){
  return React.createElement('li',{style:{padding:'var(--space-2) 0',listStyle:'none',fontFamily:'var(--font-body)',...style}},
    React.createElement('span',{key:'d',style:{color:'var(--text-muted)',fontSize:'var(--text-base)'}},date),
    React.createElement('h3',{key:'t',style:{margin:'.25rem 0 var(--space-3)',fontSize:'var(--text-h3)',fontWeight:'var(--weight-medium)'}},
      React.createElement('a',{href,style:{color:'var(--color-link-site)',textDecoration:'none'}},title)),
    excerpt?React.createElement('div',{key:'e',style:{textAlign:'justify',lineHeight:'var(--leading-body)',color:'var(--text-body)'}},excerpt):null
  );
}
