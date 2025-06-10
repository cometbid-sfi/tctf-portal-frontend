// swiper.d.ts
declare module "swiper/react" {
  import React from "react";
  import { SwiperOptions } from "swiper";

  export interface SwiperProps extends SwiperOptions {
    children?: React.ReactNode;
    onSwiper?: (swiper: any) => void;
    onSlideChange?: (swiper: any) => void;
    [key: string]: any;
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

declare module "swiper/modules" {
  export const Navigation: any;
  export const Pagination: any;
  export const Scrollbar: any;
  export const Autoplay: any;
  export const EffectFade: any;
  export const EffectCube: any;
  export const EffectFlip: any;
  export const EffectCoverflow: any;
  export const Thumbs: any;
}

declare module "swiper" {
  export interface Swiper {
    realIndex: number;
    [key: string]: any;
  }
}
