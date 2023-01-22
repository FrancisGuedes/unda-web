// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutSectionFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** title-image */
  titleImage?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** text */
  text?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** about-image */
  aboutImage?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** View for about page */

export interface IAboutSection extends Entry<IAboutSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'aboutSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IButtonFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** href */
  href?: string | undefined;

  /** aria-label */
  ariaLabel?: string | undefined;

  /** target */
  target?: string | undefined;

  /** type */
  type?: string | undefined;
}

export interface IButton extends Entry<IButtonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'button';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICardFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** card-image */
  cardImage?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** card-description */
  cardDescription?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** card-footer */
  cardFooter?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Component for a carousel or not, with image and description */

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'card';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IContactSectionFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** statement */
  statement?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** button */
  button?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** button-image */
  buttonImage?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** View for contact page */

export interface IContactSection extends Entry<IContactSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'contactSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFooterFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** all-rights-text */
  allRightsText?: string | undefined;

  /** author-text */
  authorText?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** author-link */
  authorLink?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** View for footer section */

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'footer';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeroSectionFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** hero-image */
  heroImage?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** button */
  button?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** button-image */
  buttonImage?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** View for home page */

export interface IHeroSection extends Entry<IHeroSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'heroSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILayoutFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** image */
  image?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** View background */

export interface ILayout extends Entry<ILayoutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'layout';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILinkFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** rel */
  rel?: string | undefined;

  /** href */
  href?: string | undefined;

  /** title */
  title?: string | undefined;
}

export interface ILink extends Entry<ILinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'link';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IMultiImageFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** href */
  href?: string | undefined;

  /** alt */
  alt?: string | undefined;

  /** title */
  title?: string | undefined;

  /** media */
  media?: Asset[] | undefined;
}

export interface IMultiImage extends Entry<IMultiImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'multiImage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IMultiLinkFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** rel */
  rel?: string | undefined;

  /** links */
  links?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

export interface IMultiLink extends Entry<IMultiLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'multiLink';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INavbarFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** navlinks */
  navlinks?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** logo */
  logo?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** Component */

export interface INavbar extends Entry<INavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'navbar';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IOneLineTextFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** text */
  text?: string | undefined;
}

export interface IOneLineText extends Entry<IOneLineTextFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'oneLineText';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IParagraphFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** paragraph-content */
  paragraphContent?: Document | undefined;
}

export interface IParagraph extends Entry<IParagraphFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'paragraph';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPortfolioSectionFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** title-image */
  titleImage?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** card-main */
  cardMain?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** card-hover */
  cardHover?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** View for Portfolio page */

export interface IPortfolioSection extends Entry<IPortfolioSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'portfolioSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISingleImageFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** href */
  href?: string | undefined;

  /** media */
  media?: Asset | undefined;

  /** alt */
  alt?: string | undefined;
}

export interface ISingleImage extends Entry<ISingleImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'singleImage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISocialMediaFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** social-media-content */
  socialMediaContent?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Component */

export interface ISocialMedia extends Entry<ISocialMediaFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'socialMedia';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISolutionsFields {
  /** name */
  name?: string | undefined;

  /** id */
  id?: string | undefined;

  /** title */
  title?: string | undefined;

  /** title-image */
  titleImage?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** solutions-image */
  solutionsImage?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** text */
  text?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** bullet-points */
  bulletPoints?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** View for Solutions page */

export interface ISolutions extends Entry<ISolutionsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'solutions';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'aboutSection'
  | 'button'
  | 'card'
  | 'contactSection'
  | 'footer'
  | 'heroSection'
  | 'layout'
  | 'link'
  | 'multiImage'
  | 'multiLink'
  | 'navbar'
  | 'oneLineText'
  | 'paragraph'
  | 'portfolioSection'
  | 'singleImage'
  | 'socialMedia'
  | 'solutions';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
