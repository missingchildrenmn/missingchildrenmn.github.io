const {PostListItem}=window.MissingChildrenMinnesotaDesignSystem_18e091;

function HomePage({setPage}){
  const {P,A,MISSION}=window;
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',padding:'var(--space-4) 0 var(--space-3)'}}>
        <img src="../../assets/logo/mcm-logo-teal.png" alt="Missing Children Minnesota" style={{height:120}}/>
      </div>
      <P>{MISSION}</P>
      <P>Since 1983 Missing Children Minnesota has helped more than 3500 families and children throughout the Midwest by providing 24-hour advocacy and support services, as well as helping families at risk for abduction create individualized prevention plans.</P>
      <P>In addition to search assistance, we also provide four critically acclaimed educational programs to children and adults throughout Minnesota and all across the country. Every year, MCM presents abduction prevention and personal safety programs to schools, daycare centers, early childhood and family education groups, churches and children’s vacation camps.</P>
      <P>We hope that by providing children with the information they need to be safer this year, we will have fewer missing children next year.</P>
      <P>Please browse through our site to learn more about personal safety for children and teens. We always love to speak with kids and parents, so <A href="#" >call or email us</A> with your comments and questions!</P>
      <ul style={{margin:0,padding:0,listStyle:'none'}}>
        <PostListItem date="Jun 12, 2024" title="Welcome to MCM!" excerpt="Welcome to the new Missing Children Minnesota web site and blog!"/>
      </ul>
      <a href="#" onClick={e=>{e.preventDefault();setPage('Blog');}} style={{display:'inline-block',marginTop:'var(--space-2)',color:'var(--color-link-site)'}}>subscribe via RSS</a>
    </div>
  );
}
window.HomePage=HomePage;
