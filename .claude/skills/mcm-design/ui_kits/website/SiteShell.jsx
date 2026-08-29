const NS=window.MissingChildrenMinnesotaDesignSystem_18e091;
const {SiteHeader,SiteFooter,PageBanner,PageHeader}=NS;
const MISSION="The mission of Missing Children Minnesota is to help in locating missing children; to provide advocacy and support services to families of missing children and to provide information and prevention education to the public regarding missing children and runaways.";
const NAV=['About MCM','Blog','Child Safety','Contact','Missing Child','Resources','Support'];

function SiteShell({page,setPage,banner,title,children}){
  return (
    <div style={{background:'var(--page-bg)',minHeight:'100%',fontFamily:'var(--font-body)',color:'var(--text-body)'}}>
      <SiteHeader current={page} links={NAV.map(l=>({label:l,onClick:()=>setPage(l)}))}/>
      <main>
        <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--container-pad)'}}>
          {title?<PageHeader title={title}/>:<div style={{height:'var(--space-3)'}}/>}
          {banner?<PageBanner src={banner} height={230}/>:null}
          <div id="content" style={{paddingBottom:'var(--space-5)'}}>{children}</div>
        </div>
      </main>
      <SiteFooter description={MISSION} links={[{label:'Facebook'},{label:'Instagram'},{label:'Twitter/X'},{label:'Mastodon'}]}/>
    </div>
  );
}

// Long-form page furniture, matching minima-reboot's #content rules.
function H2({children}){return <h2 style={{marginTop:'var(--space-section)',marginBottom:'var(--space-3)',fontSize:'var(--text-h2)',fontWeight:'var(--weight-bold)',letterSpacing:'var(--tracking-caps)'}}>{children}</h2>}
function H3({children}){return <h3 style={{marginTop:'var(--space-section)',marginBottom:'var(--space-3)',fontSize:'var(--text-h3)',fontWeight:'var(--weight-bold)'}}>{children}</h3>}
function H4({children}){return <h4 style={{marginTop:'var(--space-section)',marginBottom:'var(--space-3)',fontSize:'var(--text-h4)',fontWeight:'var(--weight-bold)',letterSpacing:'var(--tracking-caps)'}}>{children}</h4>}
function P({children}){return <p style={{margin:'0 0 var(--space-3)',lineHeight:'var(--leading-body)',textAlign:'justify'}}>{children}</p>}
function A({children,href='#'}){return <a href={href} style={{color:'var(--color-link-site)'}}>{children}</a>}
function Quote({children}){return <blockquote style={{borderLeft:'4px solid var(--border-subtle)',paddingLeft:'var(--space-3)',fontStyle:'italic',margin:'0 0 var(--space-3)'}}>{children}</blockquote>}

Object.assign(window,{SiteShell,H2,H3,H4,P,A,Quote,MISSION,NAV});
