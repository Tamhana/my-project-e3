/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "netlify",
  server: "./server.js",
  devServerPort: 8002,
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: ".netlify/functions-internal/server.js",
  publicPath: "/build/",
};
