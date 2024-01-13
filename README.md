# Giffy - A Giphy (kinda) clone

## Project Description

<b>Giffy</b> - A search engine for GIFs that allows users to search and discover trending GIF files.

<b>Powered By GIPHY</b>

## Table of Contents

- [Features](#features)
- [Libraries & Frameworks](#libraries-and-frameworks)
- [Project Setup](#project-setup)

## Features

- See current trending GIFs 📈
- Search for GIFs from a keyword 🔍
  - Cannot filter results by maturity ranking
    - (yet)
- Infinite scrolling ✨
- Masonry layout for GIFs result! You are searching for GIFs, not looking at an Excel spreadsheet!
- Auto suggestions for your search query! You can say hello to someone beautiful, or looking at Adele, without typing much.
- View info of a GIF by clicking on it ℹ️

## Libraries and Frameworks

- [Vue.js 3](https://vuejs.org/) (Composition API)
- [Vue Router](https://router.vuejs.org/)
- [VeeValidate](https://vee-validate.logaretm.com/v4/) - For search query validation (it is just an `<input />` at the moment...)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) - type out CSS attributes faster, and I don't have to scroll to the bottom of the page to fix anything.
- [Zod](https://zod.dev/) - To validate form<s>s</s> (?)
- [Vue Masonry Wall](https://www.npmjs.com/package/@yeger/vue-masonry-wall) by [DerYeger](https://github.com/DerYeger) ([Repo](https://github.com/DerYeger/yeger))
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to design a wrapper that allows infinite scrolling for GIF result list

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) .

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
