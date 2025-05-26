import React from "react";

// Define proper TypeScript types for the props
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

const MockNextImage = ({ src, alt, width = 100, height = 100, ...props }: ImageProps) => {
  return <img src={src} alt={alt} width={width} height={height} {...props} />;
};

export default MockNextImage;
