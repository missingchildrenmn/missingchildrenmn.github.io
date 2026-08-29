const NS=window.MissingChildrenMinnesotaDesignSystem_18e091;
const {AppToolbar,AppMenu,Button,PinPad}=NS;

const MENU=[
  [{label:'Kids',icon:'people-outline'},{label:'Information',icon:'information-circle-outline'},{label:'Export Data',icon:'download-outline'},{label:'About',icon:'help-circle-outline'}],
  [{label:'Settings',icon:'settings-outline'},{label:'Sign out',icon:'log-out-outline'}]
];

// Phone-sized viewport with the app's split-pane menu sliding over content.
function AppShell({route,setRoute,menuOpen,setMenuOpen,children}){
  return (
    <div style={{width:390,height:760,background:'var(--white)',position:'relative',overflow:'hidden',boxShadow:'var(--shadow-panel)',display:'flex',flexDirection:'column',fontFamily:'var(--font-ui)'}}>
      {children}
      {menuOpen?<div onClick={()=>setMenuOpen(false)} style={{position:'absolute',inset:0,background:'var(--overlay-scrim)'}}/>:null}
      <AppMenu active={route} groups={MENU} iconBase="../.." onSelect={i=>{setRoute(i.label);setMenuOpen(false);}}
        style={{position:'absolute',top:0,left:0,bottom:0,transform:menuOpen?'translateX(0)':'translateX(-100%)',transition:'transform .25s var(--easing)'}}/>
    </div>
  );
}

function SignInScreen({onUnlock,onInfo}){
  const [filled,setFilled]=React.useState(0);
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',background:'var(--surface-sunken)'}}>
      <AppToolbar title="Kids Id Kit" iconBase="../.."/>
      <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'var(--space-3)'}}>
        <img src="../../assets/logo/mcm-logo-teal.png" alt="Missing Children Minnesota" style={{height:56,marginBottom:'var(--space-4)'}}/>
        <PinPad title="Enter your PIN" subtitle="Your family's information stays on this device." filled={filled} focusIndex={filled} hint="4 to 8 digits">
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,56px)',gap:8,marginBottom:'.75rem'}}>
            {[1,2,3,4,5,6,7,8,9].map(n=>
              <button key={n} onClick={()=>setFilled(f=>Math.min(4,f+1))} style={{minHeight:48,border:'1px solid var(--gray-300)',borderRadius:'var(--radius-md)',background:'var(--white)',font:'inherit',fontSize:18,cursor:'pointer'}}>{n}</button>)}
          </div>
          <Button variant="primary" block onClick={onUnlock} disabled={filled<4}>Unlock</Button>
          <div style={{color:'#999',fontSize:'.875rem',marginTop:'.25rem'}}>or</div>
          <a href="#" onClick={e=>{e.preventDefault();onInfo();}} style={{color:'var(--gray-600)',fontSize:'.9rem',textDecoration:'underline'}}>Safety information</a>
        </PinPad>
      </div>
    </div>
  );
}

Object.assign(window,{AppShell,SignInScreen,MENU});
