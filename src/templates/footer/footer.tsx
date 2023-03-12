import { IFooterFields } from '../../../@types/generated/contentful';
import AppButton from '../../components/app-button/appButton';
import AppLink from '../../components/app-link/appLink';
import { FooterModule } from '../../lib/interfaces/contentful/ifooter';
import './footer.module.scss';

interface FooterProps {
  footerSectionProps: IFooterFields[];
}

const Footer = ({
  footerSectionProps
}: FooterProps) => {
  const footerData: FooterModule.IFooter = new Map(Object.entries(footerSectionProps))
  .values()
  .next()
  .value;

  const authorLink: string = footerData['authorLink']['fields'].href;
  const allRights: string = footerData.allRightsText;
  const authorText = footerData['authorText']['fields']['text']['content'][0]['content'][0].value;

  return (
    <>
      <footer id="footer" className='footer-wrapper'>
        <div className="footer-container">
          <label className="label-description">
            &copy;&nbsp;{allRights}
          </label>
          <div className="crafted-description">
            <div className="crafted-by">
              <AppLink
                className='crafted-link'
                href={authorLink}
              >
                {authorText}&nbsp;&#9829;
              </AppLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;