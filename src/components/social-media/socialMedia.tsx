import { SocialMediaModule } from '../../lib/interfaces/contentful/isocialMedia';
import { functionalityAlias } from '../../utils/strings';
import { combineObjects } from '../../utils/utility';
import MediaLink from './media-link/mediaLink';

import './socialMedia.module.scss';

interface SocialMediaProps {
  socialMediaProps: SocialMediaModule.ISocialMediaContent[];
  isTitleOfContactActive: boolean;
  isSvgActive: boolean;
  isDescriptionSvgActive: boolean;
  className?: LabelSocialMedia | undefined;
  svgHeight: number;
  svgWidth: number;
}

export type LabelSocialMedia = {
  [key: string]: string | number,
  contactLink: string,
  link: string,
  svgIcon: string
}

const SocialMedia = ({
  socialMediaProps,
  isSvgActive,
  isDescriptionSvgActive,
  isTitleOfContactActive,
  className,
  svgHeight,
  svgWidth
}: SocialMediaProps) => {
  const labelSocialMedia: LabelSocialMedia = {...functionalityAlias.component.socialMedia};
  const classes: LabelSocialMedia = combineObjects(labelSocialMedia, className);

  console.log("socialMediaProps", socialMediaProps)

  const renderContactLinksData = socialMediaProps.map((contactLinks: SocialMediaModule.ISocialMediaContent, index: number) => {
    const contactLinkID: string = contactLinks['fields'].id;
    const contactTittleLink: string = contactLinks['fields'].title;
    
    // MAPPER FOR RENDERING MEDIA LINKS
    const renderContactLinks = contactLinks['fields']['links'].map((link: SocialMediaModule.ILink, index: number) => {
      const linkMediaFile: SocialMediaModule.IFile = link.fields.media.fields.file;
      const svgClassName: string = link.fields.media.fields.title;
      const linkFields: SocialMediaModule.IFields2 = link.fields;
      
      return (
        <> 
          <div key={index}>
            <MediaLink 
              linkMediaFile={linkMediaFile}
              linkFields={linkFields}
              svgClassName={svgClassName}
              isSvgActive={isSvgActive}
              isDescriptionSvgActive={isDescriptionSvgActive}
              className={classes}
              svgWidth={svgWidth}
              svgHeight={svgHeight}
            />
          </div>
        </>
      );
    });

    return (
      <> 
        <span className="top-line"/>
        <div 
          className={`${contactLinkID} ${classes.contactLink}`} 
          key={index}
        >
          { isTitleOfContactActive 
            ? 
              <h3>
                {contactTittleLink}
              </h3> 
            : 
              null
          }
          {renderContactLinks}
        </div>
      </>
    )
  })

  return (
    <>
      {renderContactLinksData}
    </>
  );
}

export default SocialMedia;