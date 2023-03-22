import SocialMedia from '../../components/social-media/socialMedia';
import { SocialMediaModule } from '../../lib/interfaces/contentful/isocialMedia';
import { useWindowWidth } from '../../utils/utility';

import './socialMediaView.module.scss';
import bigDesktopSizeWindow from './socialMediaView.module.scss';

interface SocialMediaViewProps {
  socialMediaData: SocialMediaModule.ISocialMediaContent[];
}

const SocialMediaView = ({
  socialMediaData
}: SocialMediaViewProps) => {
  const windowWidthBigDesktop: number = +bigDesktopSizeWindow.bigDesktopSizeWindow.slice(0,4);
  const windowWidth: number = useWindowWidth();

  return (
    <>
      <div className="social-media-view_wrapper">
        <SocialMedia 
          socialMediaProps={socialMediaData}
          isTitleOfContactActive
          isSvgActive
          isDescriptionSvgActive 
          svgHeight={windowWidth >= windowWidthBigDesktop ? 33 : 22} 
          svgWidth={windowWidth >= windowWidthBigDesktop ? 33 : 22}
        />
      </div>
    </>
  );
}

export default SocialMediaView;