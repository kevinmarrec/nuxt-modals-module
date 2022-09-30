# Nuxt Modals

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]

> Modals logic for Nuxt 3

## Setup

Add `@kevinmarrec/nuxt-modals` dependency to your project :

```sh
# Using Yarn
yarn add -D @kevinmarrec/nuxt-modals
# Using NPM
npm install -D @kevinmarrec/nuxt-modals
# Using PNPM
pnpm install -D @kevinmarrec/nuxt-modals
```

Edit your `nuxt.config.ts` file to add Modals module :

```ts
export default defineNuxtConfig({
  modules: [
    '@kevinmarrec/nuxt-modals'
  ]
})
```

## Development

Make sure to install the dependencies :

```sh
pnpm install
```

Start the development server on http://localhost:3000 :

```sh
pnpm dev
```

## License

Made with 💙

Published under the [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kevinmarrec/nuxt-modals?style=flat-square
[npm-version-href]: https://npmjs.com/package/@kevinmarrec/nuxt-modals
[npm-downloads-src]: https://img.shields.io/npm/dm/@kevinmarrec/nuxt-modals?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@kevinmarrec/nuxt-modals
[github-actions-src]: https://img.shields.io/github/workflow/status/kevinmarrec/nuxt-modals/CI?style=flat-square
[github-actions-href]: https://github.com/kevinmarrec/nuxt-modals/actions?query=workflow%3Aci
