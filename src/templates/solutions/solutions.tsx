import AppTitleImage from '../../components/app-title-image/appTitleImage';
import AppParagraph from '../../components/app-paragraph/appParagraph';
import { SolutionsModule } from '../../lib/interfaces/contentful/isolutions';
import { ISolutionsFields } from '../../../@types/generated/contentful';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

import './solutions.module.scss';

interface SolutionsProps {
  solutionsSectionProps: ISolutionsFields[];
  solutionsRef: any;
}

const Solutions = ({
  solutionsSectionProps,
  solutionsRef
}: SolutionsProps) => {

  const solutionsData: SolutionsModule.ISolutions = new Map(Object.entries(solutionsSectionProps))
  .values()
  .next()
  .value;

  const solutionsTitle: string = solutionsData['title'];
  const solutionsTitleImage: SolutionsModule.IFile = solutionsData['titleImage']['fields']['media']['fields']['file'];
  // 1366 and 768 -> width and height were divided by 7.5
  const solutionsTitleImageUrl: string = concatHttpsAndUrlFromContentful(solutionsTitleImage.url);

  const solutionsImage:  SolutionsModule.IFile = solutionsData['solutionsImage'][0]['fields']['media']['fields']['file'];
  const solutionsImageUrl: string = concatHttpsAndUrlFromContentful(solutionsImage.url);//1200:1365
  const solutionsImageAlt: string = solutionsData['solutionsImage'][0]['fields'].alt;

  const solutionsText: SolutionsModule.IContent[] = solutionsData['text']['fields']['paragraphContent']['content'];

  const solutionsBulletPoints: JSX.Element[] = solutionsData['bulletPoints'].map((text: SolutionsModule.IBulletPoint, index: number) => {
    let bulletPoint: string = text['fields']['text']['content'][0]['content'].map((element: SolutionsModule.IContent4) => element['content'][0]['content'][0].value).toString();
    return (
      <> 
        <li key={index}>
          <AppParagraph
            className='solutions-text-paragraph_bullet-point'
          >
            {bulletPoint}
          </AppParagraph>
        </li>
      </>
    );
  })

  const solutionsTextParagraphTitle: JSX.Element[] = solutionsText.map((phrase: SolutionsModule.IContent, index: number) => {
    let linePhrase: string = phrase['content'].map(line => line.value).toString();
    return (
      <> 
        <div key={index}>
          <AppParagraph
            className='solutions-text-paragraph_title'
          >
            {linePhrase}
          </AppParagraph>
        </div>
      </>
    );
  })

  return (
    <>
      <section id="solutions" className='solutions-wrapper' ref={solutionsRef}>
        <div className="solutions-content">
          <div className="solutions-text-wrapper">
            <div className="solutions-text-title">
              <AppTitleImage
                src={solutionsTitleImageUrl} 
                imageWidth={228} 
                imageHeight={140} 
                titleLabel={solutionsTitle}
                classNameTitle='solutions-app-title-image_title'
                classNameWrapper="solutions-app-title-image_wrapper"
                />                
            </div>
            <div className="solutions-text-content">
              {solutionsTextParagraphTitle}
              <ul className="solutions-text_bullet-points_wrapper">
                {solutionsBulletPoints}
              </ul>
            </div>
          </div>
          <picture className="solutions-image-wrapper">
            <img 
              src={solutionsImageUrl} 
              alt={solutionsImageAlt}
              className="solutions-image"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default Solutions;