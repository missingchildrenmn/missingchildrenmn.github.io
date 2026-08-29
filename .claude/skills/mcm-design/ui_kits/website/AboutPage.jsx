const {PostListItem}=window.MissingChildrenMinnesotaDesignSystem_18e091;

function AboutPage(){
  const {H2,P}=window;
  const {LinkList}=window.MissingChildrenMinnesotaDesignSystem_18e091;
  return (
    <div>
      <H2>The History of MCM</H2>
      <P>In the summer of 1983, a group of parents of missing children met in Minneapolis to offer mutual support and comfort.</P>
      <P>In 1984 this group of parents incorporated as the Missing Kids Action Agency to be a local resource for parents and families dealing with the issue of a missing child. The name was changed to Missing Children Minnesota (MCM) in 1986.</P>
      <P>Some highlights of our history of leadership, service, and collaboration:</P>
      <LinkList spacing="inline" items={[
        {label:'MCM has helped thousands of families and children across Minnesota and the Midwest by providing 24 hour support and referral services.'},
        {label:'Our Executive Director is a Certified Victim Advocate and member of the National Organization for Victim Assistance (NOVA).'},
        {label:'MCM is a member of NCMEC’s Family Assistance Outreach Network (NCMEC:FAON).'},
        {label:'1991 — the legislature passed the Missing Children’s Act, following the work of the Governor’s Task Force.'},
        {label:'1983 — participated in the rewriting of Minnesota’s parental abduction statute, Minn. Stat. § 609.26.'}
      ]}/>
    </div>
  );
}

function BlogPage(){
  return (
    <ul style={{margin:0,padding:0,listStyle:'none'}}>
      <PostListItem date="Jun 12, 2024" title="Welcome to MCM!" excerpt="Welcome to the new Missing Children Minnesota web site and blog!"/>
      <p style={{marginTop:'var(--space-4)',color:'var(--text-muted)'}}>subscribe via RSS</p>
    </ul>
  );
}

function ChildSafetyPage(){
  const {P}=window;
  return (
    <div>
      <P style={{color:'var(--text-muted)',fontStyle:'italic',textAlign:'left'}}>Recreation note: the Child Safety page content was not available in the source repository at the time this kit was built, so it is intentionally left blank rather than invented. Its furniture — title, banner, long-form headings — matches the other pages.</P>
    </div>
  );
}
Object.assign(window,{AboutPage,BlogPage,ChildSafetyPage});
