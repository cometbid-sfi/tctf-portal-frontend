/* eslint-disable no-undef */

// Create a mock window object if it doesn't exist
if (typeof window === "undefined") {
  global.window = {};
}

// Mock CSS imports
if (typeof window !== "undefined") {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

// Mock Swiper imports
jest.mock("swiper/react", () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}));

jest.mock("swiper/modules", () => ({
  Navigation: jest.fn(),
}));

jest.mock("swiper/css", () => ({}));
jest.mock("swiper/css/navigation", () => ({}));

// Mock Next.js Image component
jest.mock("next/image", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: props => {
      return React.createElement("img", {
        ...props,
        width: props.width || 100,
        height: props.height || 100,
      });
    },
  };
});

// Mock next/link
jest.mock("next/link", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: props => React.createElement("a", { ...props, href: props.href }, props.children),
  };
});
