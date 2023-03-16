import { IPortfolioSectionFields } from '../../../@types/generated/contentful';
import AppTitleImage from '../../components/app-title-image/appTitleImage';
import { PortfolioModule } from '../../lib/interfaces/contentful/iportfolio';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import KeenSlider, { useKeenSlider } from 'keen-slider/react';

import "keen-slider/keen-slider.min.css";
import './portfolio.module.scss';
import { useEffect, useState } from 'react';
import AppParagraph from '../../components/app-paragraph/appParagraph';

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

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      spacing: 20,
      slidesPerView: 2,
      created(slider) {
        setLocalSlide({...slider})
      },
      slideChanged(slider) {
        setLocalSlide({...slider})
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

  // CAROUSEL
  const portfoliorCarouselData = portfolioData['cardMain'].map((card: PortfolioModule.ICardMain, index: number) => {
    const cardData = card['fields'];

    // CARD IMAGE
    const cardImageAlt: string = cardData['cardImage'].map((image: PortfolioModule.ICardImage, index: number) => {
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

    return (
      <> 
        <div className="portfolio-carousel-card_wrapper" key={index}>
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
            <div className="keen-slider__slide carousel-item">
              {portfoliorCarouselData}
            </div>
          </div>
        </div>
          
          {/* <span className="carousel-idx">{`${localSlide?.track?.details.rel + 1} / ${
              localSlide?.track?.details.length + 1
            }`}
          </span> */}
      </section>
    </>
  );
}

export default Portfolio;