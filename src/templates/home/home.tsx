import { NextPage } from 'next';

import AppTitle from '../../components/app-title/appTitle';
import AppButtonImage from '../../components/app-button-image/appButtonImage';
import { IHeroSectionFields } from '../../../@types/generated/contentful';
import { HeroModule } from '../../lib/interfaces/contentful/ihero';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import './home.module.scss';
interface IHomeProps {
  homeSectionProps: IHeroSectionFields[]
  homeRef: any;
}

const Home: NextPage<IHomeProps> = ({
  homeSectionProps,
  homeRef,
}: IHomeProps) => {
  //console.log("homeSectionProps", homeSectionProps);

  const homeSectionData: HeroModule.IHero = new Map(
    Object.entries(homeSectionProps))
    .values()
    .next().value;
  
  const homeTitle: JSX.Element[] = homeSectionData['title'].map((text: HeroModule.ITitle, index: number) => {
    const titleLabel = text['fields']['text']['content'][0]['content'][0].value;
    return (
      <> 
        <div key={index}>
          <AppTitle>
            {titleLabel}
          </AppTitle>
        </div>
      </>
    );
  })

  const buttonDataFields: HeroModule.IFields4 = homeSectionData['button']['fields'];
  const buttonImageDataFields: HeroModule.IFile2 = homeSectionData['buttonImage']['fields']['media']['fields']['file'];

  const buttonImageUrl: string = concatHttpsAndUrlFromContentful(buttonImageDataFields.url);

  const homeImage: HeroModule.IFile = homeSectionData['heroImage'][0]['fields']['media']['fields']['file'];
  const homeImageAlt: string = homeSectionData['heroImage'][0]['fields'].alt;

  const homeImageUrl: string = concatHttpsAndUrlFromContentful(homeImage.url);

  return (
    <>
      <section id="#" className="home-wrapper" ref={homeRef}>
        <div className="home-content">
          <div className="home-text-wrapper">
            <div className="home-text-content">
              {homeTitle}
            </div>
            <AppButtonImage
              src={buttonImageUrl} 
              imageWidth={136} 
              imageHeight={76} 
              classNameImage='home-button-image' 
              classNameButton="home-button-button"
              ariaLabel={buttonDataFields.ariaLabel} 
              href={buttonDataFields.href} 
              buttonLabel={buttonDataFields.title}       
            />
          </div>
          <picture className="home-image-wrapper">
            <img 
              src={homeImageUrl} 
              alt={homeImageAlt}
              className="home-image"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Home;
