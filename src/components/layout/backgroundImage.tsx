import { useEffect } from "react";
import { LayoutModule } from "../../lib/interfaces/contentful/ilayout";
import { concatHttpsAndUrlFromContentful, createClassName } from "../../utils/utility";
import { functionalityAlias } from "../../utils/strings";

interface BackgroundImageProps {
  children: React.ReactNode;
  layoutData: LayoutModule.IFile;
  classNameBg?: string | undefined;
  classNameBgContent?: string | undefined;
};

const BackgroundImage = ({
  children,
  layoutData,
  classNameBg,
  classNameBgContent
}: BackgroundImageProps) => {
  const imageUrl: string = concatHttpsAndUrlFromContentful(layoutData.url);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty('--imageUrl', `url('${imageUrl}')`)
    }
  }, []);

  const labelBgSection = {...functionalityAlias.component.background};
  let classSection: string = createClassName(labelBgSection.section, classNameBg);
  let classContentSection: string = createClassName(labelBgSection.content, classNameBgContent);

  /* useEffect(() => {
    const backgroundImage = document.getElementById("layout-img");
    const resizeBackground = () => {
      backgroundImage!.style.width = "100%";
      backgroundImage!.style.height = "100%";
    };
    resizeBackground();
    window.addEventListener("resize", resizeBackground);
    return () => window.removeEventListener("resize", resizeBackground);
  }, []); */
  
  return (
    <>
      <section className={classSection}>
        <div className={classContentSection}>
          {children}
        </div>
      </section>
    </>
  );
}

export default BackgroundImage;