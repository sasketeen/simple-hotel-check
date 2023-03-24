const path = require("path");
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("./src"),
      "@c": resolvePath("./src/components"),
      "@h": resolvePath("./src/hooks"),
    },
  },
};
