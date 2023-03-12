import SocialMedia from '../../components/social-media/socialMedia';
import { SocialMediaModule } from '../../lib/interfaces/contentful/isocialMedia';
import './socialMediaView.module.scss';

interface SocialMediaViewProps {
  socialMediaData: SocialMediaModule.ISocialMediaContent[];
}

const SocialMediaView = ({
  socialMediaData
}: SocialMediaViewProps) => {

  console.log('socialMediaData: ', socialMediaData)


  return (
    <>
      <div className="social-media-view_wrapper">
        <SocialMedia 
          socialMediaProps={socialMediaData}
          isTitleOfContactActive
          isSvgActive
          isDescriptionSvgActive 
          svgHeight={0} 
          svgWidth={0}
        /> 
      </div>
    </>
  );
}

export default SocialMediaView;