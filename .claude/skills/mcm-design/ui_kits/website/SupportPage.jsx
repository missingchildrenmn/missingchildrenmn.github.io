const {LinkList}=window.MissingChildrenMinnesotaDesignSystem_18e091;

function SupportPage(){
  const {H2,H3,P,A}=window;
  return (
    <div>
      <H2>HOW TO SUPPORT MISSING CHILDREN MINNESOTA</H2>
      <P>Here are just a few ways to become involved!</P>
      <H3>Volunteer</H3>
      <P>We always have projects and needs that can be filled by volunteers. Whether you have a few hours every month or every week, there are many ways you can help:</P>
      <LinkList spacing="inline" items={[
        {label:'Organizers — organize a fundraiser or educational event'},
        {label:'Social media content creators'},
        {label:'Poster partners — distribute and take down posters'},
        {label:'Educational program ambassadors and presenters'},
        {label:'Mobile app developer'}
      ]}/>
      <P style={{marginTop:'var(--space-3)'}}><A>Contact us</A> to get started as a Missing Children Minnesota volunteer today!</P>
      <H3>Give a Gift</H3>
      <P>Missing Children Minnesota is a non-profit organization. As an all-volunteer organization, we keep our overhead costs low and make the most of every dollar as we pursue our mission and work.</P>
      <LinkList spacing="inline" items={[{label:'GiveMN.org'},{label:'PayPal'},{label:'Stock Donator'}]}/>
      <H3>Interact on social media</H3>
      <P>SHARE the stories of the missing, and make them public on your page. Public awareness campaigns have helped find thousands of children across the country.</P>
    </div>
  );
}

function ContactPage(){
  const {H3,P,A}=window;
  return (
    <div>
      <P style={{textAlign:'left'}}>Missing Children Minnesota<br/>P.O. Box 1111<br/>Minnetonka, MN 55345</P>
      <P style={{textAlign:'left'}}>612.334.9449<br/>888.RUN.YELL (888.786.9355)</P>
      <P style={{textAlign:'left'}}><A>General.Info@missingchildrenmn.com</A></P>
      <H3>Social Media</H3>
      <LinkList spacing="inline" items={[{label:'Facebook'},{label:'Instagram'},{label:'Twitter/X'},{label:'Mastodon'},{label:'Snapchat: Missingchildmn'}]}/>
    </div>
  );
}
Object.assign(window,{SupportPage,ContactPage});
