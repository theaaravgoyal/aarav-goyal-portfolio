import ContactHeader from "./ContactHeader";
import ContactLinksContainer from "./ContactLinksContainer";
function ContactContent(){
  return(
    <div className="flex flex-col min-w-[40%] items-center lg:items-start justify-center gap-10 lg:gap-6">
      <ContactHeader></ContactHeader>
      <ContactLinksContainer></ContactLinksContainer>
    </div>
  )
}

export default ContactContent;