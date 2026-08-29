const {LinkList}=window.MissingChildrenMinnesotaDesignSystem_18e091;

function ResourcesPage(){
  const {H2,H3,P}=window;
  return (
    <div>
      <H2>RESOURCES</H2>
      <P>Always start looking for a missing child by making a report to your local police department.</P>
      <P><strong>There is NO waiting period to make a report of a missing person - call immediately</strong></P>
      <P>Listed below are a number of additional resources that may be helpful to parents in a missing child or other crisis situation.</P>
      <H3>Minnesota</H3>
      <LinkList spacing="inline" items={[
        {label:'Missing Children Minnesota',note:'(612) 334-9449 · Toll free 888-786-9355'},
        {label:'Minnesota BCA Missing and Unidentified Persons Clearinghouse'},
        {label:'Children’s Mental Health Crisis (COPE) Team numbers by County'},
        {label:'Text CRISIS (274747) from anywhere in Minnesota'}
      ]}/>
      <H3>National</H3>
      <LinkList spacing="inline" items={[
        {label:'National Center for Missing and Exploited Children (NCMEC)',note:'1-800-THE-LOST · 1-800-843-5678'},
        {label:'Cyber Tip Report'},
        {label:'iStand Parent Network'},
        {label:'National Runaway Safeline',note:'1-800-RUNAWAY · 1-800-786-2929'}
      ]}/>
    </div>
  );
}
window.ResourcesPage=ResourcesPage;
