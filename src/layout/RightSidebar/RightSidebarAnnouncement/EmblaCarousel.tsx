import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

import { DotButton, NextButton, PrevButton } from "./EmblaCarouselButtons";
import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {
    title: "title1",
    text: "lorum ipsum lorum ipsum lorum ipsum",
  },
  {
    title: "title2",
    text: "lorum ipsum lorum ipsum lorum ipsum",
  },
  {
    title: "title3",
    text: "lorum ipsum lorum ipsum lorum ipsum",
  },
];

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      loop: true,
    },
    [Autoplay({ delay: 8000 })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <section>
      <div className="flex items-center md:space-x-4 mt-6">
        {/* Navigation buttons */}
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />

        <div className="embla__viewport" ref={viewportRef}>
          {/* embla__container */}
          <div className="-ml-3 flex select-none">
            {announcements.map((announcement, index) => (
              // embla__slide
              <div className="relative min-w-full pl-3" key={index}>
                {/* embla__slide__inner */}
                <div className="relative">
                  {/* embla_slide_img */}
                  <div className="min-h-full w-auto min-w-full">
                    <AnnouncementCard
                      title={announcement.title}
                      text={announcement.text}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      {/* embla__dots */}
      <div className="embla__dots mt-8">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
