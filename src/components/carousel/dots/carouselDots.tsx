import KeenSlider from 'keen-slider/react';
import './carouselDots.module.scss';

interface CarouselDotsProps {
  loaded: boolean;
  instanceRef: KeenSlider;
  className?: string | undefined;
  currentSlide: number;
}

const CarouselDots = ({
  loaded,
  instanceRef,
  currentSlide,
  className
}: CarouselDotsProps) => {

  const dots = [];
  if (loaded && instanceRef?.moveToSlideRelative) {
    for (let i = 0; i < instanceRef.details().size; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => {
            instanceRef?.moveToSlideRelative(i);
          }}
          className={'dot' + (currentSlide === i ? ' active' : '')}
        ></button>
      );
    }
  }

  return (
    <>
      {dots}
    </>
  );
}

export default CarouselDots;