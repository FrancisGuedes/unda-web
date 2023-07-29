import Image from "next/image";
import { functionalityAlias } from "../../utils/strings";
import { createClassName } from "../../utils/utility";
import AppButton from "../app-button/appButton";

import './appButtonImage.module.scss';

interface AppButtonImageProps {
  src: string;
  imageWidth: number;
  imageHeight: number;
  classNameImage: string;
  classNameButton: string;
  ariaLabel: string;
  href: string;
  buttonLabel: string;
  classAppButtonImageWrapper?: string | undefined;
}

type LabelAppButtonImage = {
  defaultClassName: string;
}

const AppButtonImage = ({
  src,
  imageWidth,
  imageHeight,
  classNameImage,
  classNameButton,
  ariaLabel,
  href,
  buttonLabel,
  classAppButtonImageWrapper
}: AppButtonImageProps) => {
  const labelAppButton: LabelAppButtonImage = {...functionalityAlias.component.appButtonButton};
  const labelAppButtonImage: LabelAppButtonImage = {...functionalityAlias.component.appButtonImage};
  let classesNameButton: string = createClassName(labelAppButton.defaultClassName, classNameButton);
  let classesNameImage: string = createClassName(labelAppButtonImage.defaultClassName, classNameImage);

  const labelAppButtonImageWrapper = "home-button-wrapper";
  let classesAppButtonImageWrapper: string = createClassName(labelAppButtonImageWrapper, classAppButtonImageWrapper);

  return (
    <>
      <div className={classesAppButtonImageWrapper}>
        <Image
          src={src}
          width={imageWidth}
          height={imageHeight}
          className={classesNameImage}
        />
        <AppButton
          type="button"
          className={classesNameButton}
          ariaLabel={ariaLabel}
          href={href}
        >
          {buttonLabel}
        </AppButton>
      </div>
    </>
  );
}

export default AppButtonImage;