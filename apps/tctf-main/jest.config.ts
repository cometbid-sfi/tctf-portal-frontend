export default {
  displayName: "tct-main-portal",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/tctf-main",
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7).*\\.m?js$"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
