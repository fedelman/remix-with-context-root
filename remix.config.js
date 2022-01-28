/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */

const CONTEXT_ROOT = process.env.CONTEXT_ROOT || "/"

module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: `${CONTEXT_ROOT}build/`,
  serverBuildDirectory: "server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"]
};
