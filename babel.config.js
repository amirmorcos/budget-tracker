module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          atoms: "./src/components/atoms",
          molecules: "./src/components/molecules",
          organisms: "./src/components/organisms",
          screens: "./src/screens",
          navigation: "./src/navigation",
          models: "./src/models",
          store: "./src/store",
          api: "./src/api",
          themes: "./src/themes",
          utils: "./src/utils",
          hooks: "./src/hooks",
          services: "./src/services",
          assets: "./assets",
          contexts: "./src/contexts",
          theme: "./src/theme",
          utils: "./src/utils",
        },
      },
    ],
    [
      "dotenv-import",
      {
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
};
