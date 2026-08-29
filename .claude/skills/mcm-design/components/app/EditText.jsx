import React from 'react';

/**
 * EditText — labelled text field matching EditText.razor (ion-input,
 * fill="outline", mode="md"); supports multiline and password modes.
 */
export function EditText({label,value='',placeholder,multiline=false,rows=3,type='text',onChange,style}){
  const field={width:'100%',boxSizing:'border-box',font:'inherit',fontSize:'var(--text-base)',color:'var(--text-body)',background:'var(--surface-card)',border:'var(--border-hairline) solid var(--gray-400)',borderRadius:'var(--radius-sm)',padding:'.5rem .75rem',minHeight:'34px'};
  return React.createElement('label',{style:{display:'flex',flexDirection:'column',gap:'.25rem',fontFamily:'var(--font-ui)',...style}},
    label?React.createElement('span',{key:'l',style:{fontSize:'var(--text-sm)',color:'var(--text-muted)'}},label):null,
    multiline
      ?React.createElement('textarea',{key:'f',rows,value,placeholder,onChange,style:{...field,minHeight:'3em',resize:'vertical'}})
      :React.createElement('input',{key:'f',type,value,placeholder,onChange,style:field})
  );
}
