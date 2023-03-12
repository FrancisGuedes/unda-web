import Image from "next/image";
import { functionalityAlias } from "../../utils/strings";
import { createClassName } from "../../utils/utility";
import AppTitle from "../app-title/appTitle";

import './appTitleImage.module.scss';

interface AppTitleImageProps {
  src: string;
  imageWidth: number;
  imageHeight: number;
  classNameImage?: string | undefined;
  titleLabel: string
  classNameTitle?: string | undefined;
  classNameWrapper?: string | undefined;
}

type LabelAppTitleImage = {
  defaultClassName: string;
}

const AppTitleImage = ({
  src,
  imageWidth,
  imageHeight,
  classNameImage,
  titleLabel,
  classNameTitle,
  classNameWrapper
}: AppTitleImageProps) => {
  const labelAppTitle: LabelAppTitleImage = {...functionalityAlias.component.appTitleImageTitle};
  const labelAppImage: LabelAppTitleImage = {...functionalityAlias.component.appTitleImageImage};
  const labelAppWrapper: LabelAppTitleImage = {...functionalityAlias.component.appTitleImageWrapper};
  let classesNameTitle: string = createClassName(labelAppTitle.defaultClassName, classNameTitle);
  let classesNameImage: string = createClassName(labelAppImage.defaultClassName, classNameImage);
  let classesNameWrapper: string = createClassName(labelAppWrapper.defaultClassName, classNameWrapper);

  return (
    <>
      <div className={classesNameWrapper}>
        <Image
          src={src}
          width={imageWidth}
          height={imageHeight}
          className={classesNameImage}
        />
        <AppTitle 
          className={classesNameTitle}
        >
          {titleLabel}
        </AppTitle>
      </div>
    </>
  );
}

export default AppTitleImage;