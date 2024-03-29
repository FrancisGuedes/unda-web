import { IPortfolioSectionFields } from '../../../@types/generated/contentful';
import AppTitleImage from '../../components/app-title-image/appTitleImage';
import { PortfolioModule } from '../../lib/interfaces/contentful/iportfolio';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import { useKeenSlider } from 'keen-slider/react';

import "keen-slider/keen-slider.min.css";
import './portfolio.module.scss';
import { useEffect, useState } from 'react';
import AppParagraph from '../../components/app-paragraph/appParagraph';
import CarouselDots from '../../components/carousel/dots/carouselDots';

interface portfolioSectionProps {
  portfolioSectionProps: IPortfolioSectionFields[];
  portfolioRef: any;
}

const Portfolio = ({
  portfolioSectionProps,
  portfolioRef
}: portfolioSectionProps) => {
  const [localSlide, setLocalSlide] = useState<any>();
  const [imageContentful, setImageContentful] = useState<string[][]>([]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleSlideChange = (slide: number) => {
    setCurrentSlide(slide);
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      spacing: 20,
      slidesPerView: 1,
      breakpoints: {
        '(min-width: 667px)': {
          slidesPerView: 1.5,
          spacing: 30
        },
        '(min-width: 970px)': {
          slidesPerView: 2,
          spacing: 40
        },
        '(min-width: 1800px)': {
          slidesPerView: 2,
          spacing: 50
        },
      },
      slideChanged: (s) => handleSlideChange(s.details().relativeSlide),
      created(slider) {
        setLocalSlide({...slider})
        setLoaded(true)
      },
    } 
  );

  const portfolioData: PortfolioModule.IPortfolio = new Map(Object.entries(portfolioSectionProps))
  .values()
  .next()
  .value;

  //console.log('portfolioData: ', portfolioData);

  function getCardImageFromContentful(): void {
    const normalImageUrl = portfolioData['cardMain'].map((singleCard: PortfolioModule.ICardMain) => {
      const singleCardNormalImageUrl: string = singleCard['fields']['cardImage'].map((imageCard: PortfolioModule.ICardImage) => 
      imageCard['fields']['media']['fields']['file'].url
      ).toString();
      // filter out undefined elements
      const normalImageSplitted: string[] = singleCardNormalImageUrl.split(',').filter(Boolean); 
      const normalImageUrlList: string[] = normalImageSplitted.map((element: string) => concatHttpsAndUrlFromContentful(element));
      return normalImageUrlList;
    });
    setImageContentful(normalImageUrl);
  };
  
  useEffect(() => {
    getCardImageFromContentful();
  }, []);

  const portfolioTitle: string = portfolioData['title'];
  const portfolioTitleImage: PortfolioModule.IFile = portfolioData['titleImage']['fields']['media']['fields']['file'];
  // 1366 and 768 -> width and height were divided by 7.5
  const portfolioTitleImageUrl: string = concatHttpsAndUrlFromContentful(portfolioTitleImage.url);

  //TODO Make carousel into small components
  // CAROUSEL
  const portfoliorCarouselData = portfolioData['cardMain'].map((card: PortfolioModule.ICardMain, index: number) => {
    const cardData = card['fields'];

    // CARD IMAGE
    const cardImageAlt: string = cardData['cardImage'].map((image: PortfolioModule.ICardImage) => {
      return image['fields'].alt;
    }).toString();
    const cardImageUrls: string[] = imageContentful[index];

    const cardImage = (
      <div className="card" key={index}>
        <div className="image-wrapper">
          <img src={cardImageUrls?.[0]} alt={cardImageAlt} />
          <img src={cardImageUrls?.[1]} alt={cardImageAlt} className="hover-image"/>
        </div>
      </div>
    )

    // CARD DESCRIPTION
    const cardDescription: JSX.Element[] = cardData['cardDescription'].map((descriptionData: PortfolioModule.ICardDescription, index: number) => {
      const descriptionText = descriptionData['fields']['paragraphContent']['content'].map((lineText: PortfolioModule.IContent, index: number) => {
        const line = lineText['content'][0].value;
        return (
          <> 
            <AppParagraph
              className="portfolio-card-description_content-text" 
              key={index}
            >
              {line}
            </AppParagraph>
          </>
        );
      });
      return (
        <> 
          <div className="portfolio-card-description_content" key={index}>
            {descriptionText}
          </div>
        </>
      );
    });

    // CARD FOOTER
    const cardFooter: JSX.Element[] = cardData['cardFooter'].map((footer: PortfolioModule.ICardFooter, index: number) => {
      const footerText: JSX.Element[] = footer['fields']['text']['content'][0]['content'].map((element: PortfolioModule.IContent4, index: number) => {
        return (
          <> 
            <AppParagraph
              className="portfolio-card-footer_content" 
              key={index}
            >
              {element.value}
            </AppParagraph>
          </>
        );
      });

      return (
        <> 
          <div className="portfolio-card-footer_content" key={index}>
            {footerText}
          </div>
        </>
      );
    });

    // Set loaded to true after slider has initialized
    if (sliderRef && !loaded) {
      setLoaded(true);
    }

    return (
      <> 
        <div className="keen-slider__slide portfolio-carousel-card_wrapper" key={index} >
          <div className="portfolio-card-image_wrapper">
            {cardImage}
          </div>
          <div className="portfolio-card-description_wrapper">
            {cardDescription}
          </div>
          <div className="portfolio-card-footer_wrapper">
            {cardFooter}
          </div>
          
        </div>
      </>
    );
  });

  return (
    <>
      <section id="portfolio" className='portfolio-wrapper' ref={portfolioRef}>
        <div className="portfolio-content">
          <div className="portfolio-title-wrapper">
              <AppTitleImage
                src={portfolioTitleImageUrl} 
                imageWidth={228} 
                imageHeight={190} 
                titleLabel={portfolioTitle}
                classNameWrapper="portfolio-app-title-image_wrapper"
                classNameTitle='portfolio-app-title-image_title'
              />                
          </div>
          <div className="keen-slider portfolio-carousel-wrapper" ref={sliderRef}>
            <div className="carousel-item" >
              {portfoliorCarouselData}
            </div>
            <div className="dots-wrapper">
              <CarouselDots 
                loaded={loaded} 
                instanceRef={instanceRef} 
                currentSlide={currentSlide}        
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;