import { useEffect, useState } from 'react';
import { LabelSocialMedia } from "../components/social-media/socialMedia";
import { HTTPS } from "../lib/endpoints";

export type LabelCarouselClassName = {
  [key: string]: string | number,
  embla: string,
  embla_viewport: string,
  embla_container: string,
  embla_slide: string,
  embla_slide_inner: string,
  embla_slide_img: string,
}

export function createClassName(defaultClass: string, classes?: string): string {
  return classes ? `${classes} ${defaultClass}` : defaultClass;
}

export const checkUrlContentfulData = (
  urlContentful: string | undefined | null,
  urlLocal: string
): string => {
  /* validates a url from contentful, if it's not valid it will match the provided one */
  if (urlContentful === undefined || urlContentful === null || !!urlContentful) {
    urlContentful = urlLocal;
  }
  return urlContentful;
}

export function concatHttpsAndUrlFromContentful(httpsContentful: string): string {
  return HTTPS.concat(httpsContentful);
}

export interface IWindowSize {
  innerWidth: number,
  innerHeight: number
}

export function getWindowSize(): IWindowSize | undefined {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}

export function combineObjects<T extends LabelCarouselClassName | LabelSocialMedia>(
  defaultClass: T,
  classes: T | undefined
): T {
  if (classes) {
    let merged = Object.entries(defaultClass).reduce((acc, [key, value]) =>
      // if key is already in defaultClass, add the values, otherwise, create new pair
      ({ ...acc, [key]: (acc[key] || 0) + ' ' + value }), { ...classes });
    return merged;
  } else {
    return defaultClass;
  }
}

export const useScrollYPosition = () => {
  // this will track a value and updated it
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset)
      }
      //accounts for the scroll position when the component first mounts
      window.addEventListener('scroll', updatePosition)

      updatePosition()
      // cleanup function that removes the event listener when the component unmounts
      return () => window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return scrollPosition;
}


export const useWindowWidth = () => {
  //listens for changes of the width of the browser window
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}