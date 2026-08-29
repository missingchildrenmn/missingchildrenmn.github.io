const NS=window.MissingChildrenMinnesotaDesignSystem_18e091;
const {AppToolbar,ChildCard,Button,Alert,ContentCard,EditText,EditBool,LinkList,BusyOverlay}=NS;

function Screen({title,onMenu,children,footer}){
  return (
    <div style={{flex:1,display:'flex',flexDirection:'column',minHeight:0}}>
      <AppToolbar title={title} onMenu={onMenu} iconBase="../.."/>
      <div style={{flex:1,overflowY:'auto',padding:'var(--space-3)'}}>{children}</div>
      {footer?<div style={{padding:'var(--space-2) var(--space-2) var(--space-3)'}}>{footer}</div>:null}
    </div>
  );
}

function KidsScreen({onMenu,kids,openChild,removeKid}){
  const [pending,setPending]=React.useState(null);
  return (
    <Screen title="Kids" onMenu={onMenu} footer={<Button variant="secondary" icon="add-circle" iconBase="../.." block>Add a new child</Button>}>
      <p style={{color:'var(--text-muted)',marginTop:0}}>On this page, you can view/edit existing kids as well as add new kids.</p>
      <h2 style={{fontSize:'var(--text-h5)',margin:'var(--space-3) 0 var(--space-2)'}}>Edit an existing child</h2>
      {kids.map(k=><ChildCard key={k.name} {...k} iconBase="../.." onOpen={()=>openChild(k)} onRemove={()=>setPending(k)}/>)}
      <ContentCard style={{background:'var(--surface-sunken)'}}>
        <div style={{fontSize:'var(--text-sm)'}}><strong>Last edit of any child:</strong> 8/12/2026 6:40 PM</div>
      </ContentCard>
      <Alert open={!!pending} header={'Remove '+(pending?pending.name:'')+'?'} message="This removes the record from this device. It cannot be undone." confirmPrompt="Yes" cancelPrompt="No"
        onConfirm={()=>{removeKid(pending);setPending(null);}} onCancel={()=>setPending(null)}/>
    </Screen>
  );
}

function ChildScreen({onMenu,child,onBack}){
  const [notes,setNotes]=React.useState('Allergic to penicillin.');
  const [alerts,setAlerts]=React.useState(true);
  return (
    <Screen title={child.name} onMenu={onMenu} footer={<div style={{display:'flex',gap:8}}><Button variant="back" onClick={onBack} style={{flex:1}}>Back</Button><Button variant="save" style={{flex:1}}>Save</Button></div>}>
      <ContentCard title="Child" subtitle={'Age '+child.age+' · '+child.birthday} actions={<Button variant="icon" icon="camera-outline" iconBase="../.." aria-label="Add photo"/>}>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:6}}>
          <EditText label="Given name" value={child.name.split(' ')[0]}/>
          <EditText label="Family name" value={child.name.split(' ')[1]||''}/>
          <EditText label="Other names / nicknames" value={child.aliases||''}/>
        </div>
      </ContentCard>
      <ContentCard title="Physical details">
        <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:6}}>
          <EditText label="Height" value="4' 2&quot;"/>
          <EditText label="Eye color" value="Brown"/>
        </div>
      </ContentCard>
      <ContentCard title="Medical notes">
        <div style={{marginTop:6,display:'flex',flexDirection:'column',gap:10}}>
          <EditText label="Notes" multiline rows={3} value={notes} onChange={e=>setNotes(e.target.value)}/>
          <EditBool label="Include in exported PDF" checked={alerts} onChange={setAlerts}/>
        </div>
      </ContentCard>
    </Screen>
  );
}

function InfoScreen({onMenu}){
  return (
    <Screen title="Information" onMenu={onMenu}>
      <p style={{marginTop:0,color:'var(--text-muted)'}}>Safety information you can read at any time — no PIN required.</p>
      <LinkList spacing="touch" items={[
        {label:'If your child is missing'},{label:'Abductions'},{label:'Runaways'},{label:'AMBER Alert'},
        {label:'International abduction'},{label:'DNA collection'},{label:'Disaster preparation'},{label:'About Missing Children Minnesota'}
      ]}/>
    </Screen>
  );
}

function ExportScreen({onMenu}){
  const [busy,setBusy]=React.useState(false);
  return (
    <Screen title="Export Data" onMenu={onMenu} footer={<Button variant="primary" icon="download-outline" iconBase="../.." block onClick={()=>{setBusy(true);setTimeout(()=>setBusy(false),1400);}}>Create PDF</Button>}>
      <ContentCard title="Export a child ID sheet">
        <p style={{margin:'6px 0 0',fontSize:'var(--text-sm)',color:'var(--text-muted)'}}>Creates a printable sheet with photos, physical details and contacts to hand to law enforcement.</p>
        <img src="../../assets/icons/pdf.jpg" alt="" style={{height:64,marginTop:10}}/>
      </ContentCard>
      <BusyOverlay show={busy} message="Building PDF…"/>
    </Screen>
  );
}

function SettingsScreen({onMenu}){
  const [pin,setPin]=React.useState(true);
  const [bio,setBio]=React.useState(false);
  return (
    <Screen title="Settings" onMenu={onMenu}>
      <ContentCard title="Security">
        <div style={{display:'flex',flexDirection:'column',gap:6,marginTop:6}}>
          <EditBool label="Require PIN on launch" checked={pin} onChange={setPin}/>
          <EditBool label="Use biometric unlock" checked={bio} onChange={setBio}/>
          <EditBool label="Cloud backup" checked={false} disabled/>
        </div>
      </ContentCard>
      <ContentCard title="Change PIN"><div style={{marginTop:6}}><Button variant="primary">Change PIN</Button></div></ContentCard>
    </Screen>
  );
}

Object.assign(window,{Screen,KidsScreen,ChildScreen,InfoScreen,ExportScreen,SettingsScreen});
