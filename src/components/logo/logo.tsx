import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { urlHome } from '../../lib/endpoints';
import { NavbarModule } from '../../lib/interfaces/contentful/inavbar';
import { functionalityAlias } from '../../utils/strings';
import {
  checkUrlContentfulData,
  concatHttpsAndUrlFromContentful,
  createClassName,
} from '../../utils/utility';

import './logo.module.scss';

interface LogoProps {
  logoImageProps: NavbarModule.ILogo;
  width: number;
  height: number;
  className?: string | undefined;
  children?: React.ReactNode;
}

type LabelLogo = {
  defaultClassName: string;
};

const Logo: NextPage<LogoProps> = ({
  children,
  logoImageProps,
  width,
  height,
  className,
}: LogoProps) => {
  const [logoImageData, setLogoImageData] = useState<NavbarModule.ILogo>();

  const labelLogo: LabelLogo = { ...functionalityAlias.component.logo };
  const classes: string = createClassName(
    labelLogo.defaultClassName,
    className,
  );

  useEffect(() => {
    setLogoImageData(logoImageProps);
  }, []);

  const checkMediaFields = (
    mediaField: NavbarModule.IFields3 | undefined | null,
  ): NavbarModule.IFields3 => {
    if (mediaField === null || mediaField === undefined || !!mediaField) {
      mediaField = logoImageProps.fields.media.fields;
    } else {
      console.error('[NOT FOUND] mediaField', mediaField);
    }
    return mediaField;
  };

  const urlContentfulData: string = checkUrlContentfulData(
    logoImageData?.fields.href,
    urlHome,
  );
  const mediaFields: NavbarModule.IFields3 = checkMediaFields(
    logoImageData?.fields.media.fields,
  );
  const imageUrl: string = concatHttpsAndUrlFromContentful(
    mediaFields.file.url,
  );

  return (
    <>
      <Link
        aria-label={mediaFields.description}
        href={urlContentfulData}
        rel="canonical"
        className="logo-wrapper"
      >
        <Image
          src={imageUrl}
          alt={mediaFields.description}
          className={classes}
          width={width}
          height={height}
        />
      </Link>
    </>
  );
};

export default Logo;
