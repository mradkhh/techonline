/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.kom-store.exadot.io'],
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: false,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: ['./src'],
      // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // Enabled by default.
      cssProp: false,
      // Empty by default.
      namespace: 'test',
      // Not supported yet.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: true,
    },
  },
}

module.exports = nextConfig
