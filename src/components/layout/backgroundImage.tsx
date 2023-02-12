import Image from "next/image";
import { useEffect } from "react";
import { LayoutModule } from "../../lib/interfaces/contentful/ilayout";
import { concatHttpsAndUrlFromContentful } from "../../utils/utility";

interface BackgroundImageProps {
  children: React.ReactNode;
  layoutData: LayoutModule.IFile;
};

const BackgroundImage = ({
  children,
  layoutData
}: BackgroundImageProps) => {
  const imageUrl: string = concatHttpsAndUrlFromContentful(layoutData.url);

  useEffect(() => {
    document.documentElement.style.setProperty('--imageUrl', `url('${imageUrl}')`)
  }, []);

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
      <section className="content-section-bg">
        <div className="content-section">
          {children}
        </div>
      </section>
    </>
  );
}

export default BackgroundImage;