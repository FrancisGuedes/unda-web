import AppTitleImage from '../../components/app-title-image/appTitleImage';
import AppParagraph from '../../components/app-paragraph/appParagraph';
import { AboutModule } from '../../lib/interfaces/contentful/iabout';
import { IAboutSectionFields } from '../../../@types/generated/contentful';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import './about.module.scss';

interface AboutProps {
  aboutSectionProps: IAboutSectionFields[];
  aboutRef: any;
}

const About = ({
  aboutSectionProps,
  aboutRef
}: AboutProps) => {
  const aboutData: AboutModule.IAbout = new Map(Object.entries(aboutSectionProps))
  .values()
  .next()
  .value;

  const aboutTitle: string = aboutData['title'];
  const aboutTitleImage: AboutModule.IFile = aboutData['titleImage']['fields']['media']['fields']['file'];
  // 1366 and 768 -> width and height were divided by 5.5
  const aboutTitleImageUrl: string = concatHttpsAndUrlFromContentful(aboutTitleImage.url);

  const aboutImage:  AboutModule.IFile = aboutData['aboutImage'][0]['fields']['media']['fields']['file'];
  const aboutImageUrl: string = concatHttpsAndUrlFromContentful(aboutImage.url);
  const aboutImageAlt: string = aboutData['aboutImage'][0]['fields'].alt;

  const aboutText: AboutModule.IContent[] = aboutData['text'][0]['fields']['paragraphContent']['content'];

  const aboutTextParagraph: JSX.Element[] = aboutText.map((phrase: AboutModule.IContent, index: number) => {
    let linePhrase: string = phrase['content'].map(line => line.value).toString();
    return (
      <> 
        <div key={index}>
          <AppParagraph
            className='about-text-paragraph'
          >
            {linePhrase}
          </AppParagraph>
        </div>
      </>
    );
  })

  return (
    <>
      <section id="about" className='about-wrapper' ref={aboutRef}>
      <div className="about-content">
          <div className="about-text-wrapper">
            <div className="about-text-title">
              <AppTitleImage 
                src={aboutTitleImageUrl} 
                imageWidth={248} 
                imageHeight={140} 
                titleLabel={aboutTitle} 
                />                
            </div>
            <div className="about-text-content">
              {aboutTextParagraph}
            </div>
          </div>
          <picture className="about-image-wrapper">
            <img 
              src={aboutImageUrl} 
              alt={aboutImageAlt}
              className="about-image"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default About;