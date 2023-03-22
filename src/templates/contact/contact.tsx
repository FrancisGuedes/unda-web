import { IContactSectionFields } from '../../../@types/generated/contentful';
import AppButtonImage from '../../components/app-button-image/appButtonImage';
import AppParagraph from '../../components/app-paragraph/appParagraph';

import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import './contact.module.scss';

interface ContactProps {
  contactSectionProps: IContactSectionFields[];
  contactRef: any;
}

const Contact = ({
  contactSectionProps,
  contactRef
}: ContactProps) => {
  const contactData: ContactModule.IContact = new Map(Object.entries(contactSectionProps))
  .values()
  .next()
  .value;

  const statementParagraph = contactData['statement'][0]['fields']['paragraphContent']['content'];
  const statementText: JSX.Element[] = statementParagraph.map((element: ContactModule.IContent, index: number) => {
    let statementLabel = element['content'].map(text => {
      return text.value
    }).toString();
    return (
      <> 
        <div key={index}>
          <AppParagraph
            className='contact-text-paragraph_title'
          >
            {statementLabel}
          </AppParagraph>
        </div>
      </>
    );
  })

  const buttonDataFields: ContactModule.IFields2 = contactData['button']['fields'];
  const buttonImageDataFields: ContactModule.IFile = contactData['buttonImage']['fields']['media']['fields']['file'];

  const buttonImageUrl: string = concatHttpsAndUrlFromContentful(buttonImageDataFields.url);
  const contactEmail: string = buttonDataFields.href;

  return (
    <>
      <section id="contact" className='contact-wrapper' ref={contactRef}>
        <div className='contact-title-wrapper'>
          <h1>
            {statementText}
          </h1>
          <AppButtonImage
              src={buttonImageUrl} 
              imageWidth={136} 
              imageHeight={76} 
              classNameImage='contact-button-image' 
              classNameButton="contact-button-button"
              ariaLabel={''} 
              href={`mailto:${contactEmail}`}
              buttonLabel={buttonDataFields.title}       
            />
        </div>
      </section>
    </>
  );
}

export default Contact;