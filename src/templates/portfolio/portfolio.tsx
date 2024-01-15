import { useLayoutEffect, useEffect, useRef, useState} from "react";
import { IPortfolioSectionFields } from "../../../@types/generated/contentful";
import { PortfolioModule } from "../../lib/interfaces/contentful/iportfolio";
import { concatHttpsAndUrlFromContentful } from "../../utils/utility";
import AppTitleImage from "../../components/app-title-image/appTitleImage";
import AppParagraph from '../../components/app-paragraph/appParagraph';


import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

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

  const [currentCard, setCurrentCard] = useState<number>(0);
  const [isScrollHorizontalActive, setIsScrollHorizontalActive] = useState<boolean>(false); 
  const [slides, setSlides] = useState<number[]>([]); 

  // Refs for horizontal carousel
  const portfolioContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardListContainerRef = useRef<HTMLDivElement | null>(null);

  const portfolioData: PortfolioModule.IPortfolio = new Map(Object.entries(portfolioSectionProps))
  .values()
  .next()
  .value;

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
  }, [])

  // Horizontal scroll functionality
  const createCardsRefs = (panel: HTMLDivElement | null, index: number) => {
    if (cardsRef.current && panel != null) {
      cardsRef.current[index] = panel;
    }
  };

  useLayoutEffect(() => {
    /* let ctx = gsap.context(() => {
      // Horizontal Scroll carousel
      gsap.to(cardsRef!.current, {
        xPercent: -100 * (cardsRef.current.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: portfolioContainerRef.current,
          pin: true,
          scrub: 1,
          start: "top 10%", // media queries -25
          end: () => "+=" + portfolioContainerRef.current?.offsetWidth,
          markers: true,
          id:"to",
        }
      });
    }, portfolioContainerRef); 
    return () => ctx.revert();*/

    let matchMedia = gsap.matchMedia(portfolioContainerRef),
    breakPointDesktop = 971, 
    breakPointMobile = 667;

    matchMedia.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPointDesktop}px)`,
        isTablet: `(max-width: ${breakPointDesktop - 1}px)`,
        isMobile: `(max-width: ${breakPointMobile}px)`,
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isTablet, isMobile } = context.conditions as gsap.Conditions;

        gsap.to(cardsRef!.current, {
          xPercent: -100 * (cardsRef.current.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: portfolioContainerRef.current,
            pin: true,
            scrub: 1,
            start: `top ${isDesktop ? '10%' : isMobile ? '-35%' : '-30%'}`,
            end: () => "+=" + portfolioContainerRef.current?.offsetWidth,
            markers: true,
            id: `${isDesktop ? 'desktop' : isMobile ? 'mobile' : 'tablet'}`,
          }
        });

        return () => {
          // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
          // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
        };
      }, 
    );
    return () => matchMedia.revert();
  });

  const portfolioTitle: string = portfolioData['title'];
  const portfolioTitleImage: PortfolioModule.IFile = portfolioData['titleImage']['fields']['media']['fields']['file'];
  // 1366 and 768 -> width and height were divided by 7.5
  const portfolioTitleImageUrl: string = concatHttpsAndUrlFromContentful(portfolioTitleImage.url);

// CAROUSEL CONTENT
  const portfolioCarouselData = portfolioData['cardMain'].map((card: PortfolioModule.ICardMain, index: number) => {
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

    return (
      <> 
        <article 
          className="portfolio-carousel-card_wrapper"
          ref={(e) => createCardsRefs(e as HTMLDivElement, index)} 
          key={index} >
          <div className="portfolio-card-image_wrapper">
            {cardImage}
          </div>
          <div className="portfolio-card-description_wrapper">
            {cardDescription}
          </div>
          <div className="portfolio-card-footer_wrapper">
            {cardFooter}
          </div>
        </article>
      </>
    );
  });
  
  return (
    <>   
      <section id="portfolio" className='portfolio_wrapper' ref={portfolioRef} >
      
        <section className="portfolio_content" ref={portfolioContainerRef} id="portfolio-container" >
          <article className="portfolio_title-wrapper">
              <AppTitleImage
                src={portfolioTitleImageUrl} 
                imageWidth={228} 
                imageHeight={190} 
                titleLabel={portfolioTitle}
                classNameWrapper="portfolio-app-title-image_wrapper"
                classNameTitle='portfolio-app-title-image_title'
              />                
          </article>

          <section 
            className="portfolio-carousel-wrapper" 
            ref={cardListContainerRef}
          >
            <div className="carousel-item" >
              {portfolioCarouselData}
            </div>

            {/* <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 0)}>card 1</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 1)}>card 2</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 2)}>card 3</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 3)}>card 4</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 4)}>card 5</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 5)}>card 6</article>
            <article className={`portfolio_card`} ref={(e) => createCardsRefs(e as HTMLDivElement, 6)}>card 7</article> */}
          </section>
        </section>
      </section>
    </>
  );
}

export default Portfolio;