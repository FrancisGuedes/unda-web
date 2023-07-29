import type { NextPage, GetStaticProps } from 'next';
import { RefObject, useCallback, useRef, useState } from 'react';
import { IAboutSectionFields, ILayoutFields, IContactSectionFields, IHeroSectionFields, INavbarFields, IPortfolioSectionFields, ISolutionsFields, ISocialMediaFields, IFooterFields } from '../../@types/generated/contentful';

import ContentService from '../utils/contentful/content-service';
import { MainContentTypeId } from '../utils/contentful/content-type-id';

import Navbar from '../components/navbar/navbar';
import { SocialMediaModule } from '../lib/interfaces/contentful/isocialMedia';
import Layout from '../components/layout/layout';
import { LayoutModule } from '../lib/interfaces/contentful/ilayout';
import BackgroundImage from '../components/layout/backgroundImage';
import Home from '../templates/home/home';
import About from '../templates/about/about';
import Solutions from '../templates/solutions/solutions';
import Portfolio from '../templates/portfolio/portfolio';
import Contact from '../templates/contact/contact';
import SocialMediaView from '../templates/social-media-view/socialMediaView';
import Footer from '../templates/footer/footer';

interface IIndexProps {
  navbarSectionProps: INavbarFields[];
  layoutSectionProps: ILayoutFields[],
  heroSectionProps: IHeroSectionFields[],
  aboutSectionProps: IAboutSectionFields[],
  solutionsSectionProps: ISolutionsFields[],
  portfolioSectionProps: IPortfolioSectionFields[],
  contactSectionProps: IContactSectionFields[],
  socialMediaSectionProps: ISocialMediaFields[],
  footerSectionProps: IFooterFields[];
}

export type NavSectionRefs = {
  headerRef: RefObject<number>;
}

const Index: NextPage<IIndexProps> = ({
  navbarSectionProps,
  layoutSectionProps,
  heroSectionProps,
  aboutSectionProps,
  solutionsSectionProps,
  portfolioSectionProps,
  contactSectionProps,
  socialMediaSectionProps,
  footerSectionProps
}: IIndexProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const heroRef = useRef() as RefObject<number>;
  const aboutRef = useRef() as RefObject<number>;
  const solutionsRef = useRef() as RefObject<number>;
  const portfolioRef = useRef() as RefObject<number>;
  const contactRef = useRef() as RefObject<number>;

  const navSectionRefs = [
    { headerRef: heroRef },
    { headerRef: aboutRef },
    { headerRef: solutionsRef },
    { headerRef: portfolioRef },
    { headerRef: contactRef },
  ];

  const handleModal = useCallback(() => setModalOpen((modalOpen: boolean) => !modalOpen), []);

  const socialMediaData: SocialMediaModule.ISocialMediaContent[] = new Map(
    Object.entries(socialMediaSectionProps))
    .values()
    .next().value['socialMediaContent'];
  

  const layoutFile: LayoutModule.IFile = new Map(
    Object.entries(layoutSectionProps))
    .values()
    .next().value['image'][0]['fields']['media']['fields']['file'];
  
  return (
    <>
      <Navbar
        navbarSectionProps={navbarSectionProps}
        socialMediaData={socialMediaData}
        handleModal={handleModal}
        isModalActive={false}
        navSectionRefs={navSectionRefs} />
      <BackgroundImage
        layoutData={layoutFile}
      >
        <Home
          homeSectionProps={heroSectionProps}
          homeRef={heroRef} 
        />
      </BackgroundImage>
      <Layout
      >
        <About
          aboutSectionProps={aboutSectionProps}
          aboutRef={aboutRef} 
        />
        <Solutions 
          solutionsSectionProps={solutionsSectionProps}
          solutionsRef={solutionsRef}
        />
        <Portfolio 
          portfolioSectionProps={portfolioSectionProps}
          portfolioRef={portfolioRef}
        />
      </Layout>
      <BackgroundImage
        layoutData={layoutFile}
        classNameBg='contact-background-image'
        classNameBgContent='contact-background-content-image'>
          <Contact
            contactSectionProps={contactSectionProps}
            contactRef={contactRef}
          />
      </BackgroundImage>
      <SocialMediaView 
        socialMediaData={socialMediaData} 
      />
      <Footer 
        footerSectionProps={footerSectionProps} 
      />
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  console.info("START fetching PROPS");

  const navbarSectionProps = (
    await ContentService.instance.getEntriesByType<INavbarFields>(MainContentTypeId.NAVBAR)
  ).map((entry) => entry.fields);

  const layoutSectionProps = (
    await ContentService.instance.getEntriesByType<ILayoutFields>(MainContentTypeId.LAYOUT)
  ).map((entry) => entry.fields);

  const heroSectionProps = (
    await ContentService.instance.getEntriesByType<IHeroSectionFields>(MainContentTypeId.HERO)
  ).map((entry) => entry.fields);

  const aboutSectionProps = (
    await ContentService.instance.getEntriesByType<IAboutSectionFields>(MainContentTypeId.ABOUT)
  ).map((entry) => entry.fields);

  const solutionsSectionProps = (
    await ContentService.instance.getEntriesByType<ISolutionsFields>(MainContentTypeId.SOLUTIONS)
  ).map((entry) => entry.fields);

  const portfolioSectionProps = (
    await ContentService.instance.getEntriesByType<IPortfolioSectionFields>(MainContentTypeId.PORTFOLIO)
  ).map((entry) => entry.fields);

  const contactSectionProps = (
    await ContentService.instance.getEntriesByType<IContactSectionFields>(MainContentTypeId.CONTACT)
  ).map((entry) => entry.fields);

  const socialMediaSectionProps = (
    await ContentService.instance.getEntriesByType<ISocialMediaFields>(MainContentTypeId.SOCIAL_MEDIA)
  ).map((entry) => entry.fields);

  const footerSectionProps = (
    await ContentService.instance.getEntriesByType<IFooterFields>(MainContentTypeId.FOOTER)
  ).map((entry) => entry.fields);

  console.info("END fetching PROPS");
  return {
    props: {
      navbarSectionProps,
      layoutSectionProps,
      heroSectionProps,
      aboutSectionProps,
      solutionsSectionProps,
      portfolioSectionProps,
      contactSectionProps,
      socialMediaSectionProps,
      footerSectionProps
    },
    revalidate: 1,
  };
};