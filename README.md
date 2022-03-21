# 🥁 vite-vue3-ts-drumkit 🥁

<img
    src="./src/assets/project-demo.png"
    alt="background"
    style="float: left; margin-right: 10px; margin-bottom: 24px;"
/>

<br>

[From Monday, February 7, 2022](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html), the vue core team have make Vue3 the new default version for new projects. 🎉 🎉 🎉

It comes with a lot of new libraries and features, and I wanted to go deeper in this new ecosystem.

With this project I would like to experiment with these new feats. 💪

---

## 📖 Required knowledge

- [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js (v.3)](https://vuejs.org/)
- [Vite](https://vitejs.dev/) (bundler, dev server, Frontend Tooling)

  🚧 For WIP features:

- [Pinia](https://pinia.vuejs.org/) (new default global state manager)
- [Vitest](https://vitest.dev/) (new suggested test enviroment)
- [Storybook](https://storybook.js.org/) (my personal preference for UI interfaces development, testing and documentation)

---

## 👩🏻‍💻👨🏻‍💻 Installation and Usage

To install the project, run the following command:

```bash

    > git clone
    > cd <project-folder>
    > npm install

```

### Compile and Hot-Reload for Development

```sh

    npm run dev

```

### Type-Check, Compile and Minify for Production

```sh

    npm run build

```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh

    npm run test:unit

```

### Lint with [ESLint](https://eslint.org/)

```sh

    npm run lint

```

For further `scripts`, see `package.json`.

---

# Styleguide

The project code is written and organized following the [Vue Styleguide](https://vuejs.org/style-guide/).

---

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so the `tsc` CLI is replaced by `vue-tsc` for type checking.

In editors, [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) is needed to make the TypeScript language service aware of `.vue` types.

Volar has implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) for maximum performance.
It should be enabled by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

```bash

# WARNING
After installing VOLAR, VETUR should be disabled for the current workspace.

```

---

# Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

---

## Recommended IDE Setup

Because my love for it, I strongly suggest [VSCode](https://code.visualstudio.com/) as the recomended IDE for this project. 💖 💖 💖

To improve the development experience, I recommend the installation of the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) ( **IMPORTANT: disable Vetur, see above** )
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [vue-jsdoc](https://marketplace.visualstudio.com/items?itemName=bejjang2.vue-jsdoc)

---

# 🚧 THIS IS A WORK IN PROGRES 🚧

I've currenty put in this project 10 hours of work, and I would like to improve the following:

- Add [Storybook](https://storybook.js.org/) to write a simple documentation for the project.
- Add [storybook-builder-vite](https://github.com/eirslett/storybook-builder-vite) to increase the DX of the documentation process.
- Write meaningful tests for the project.
- Try to record the keyboard pattern that the user plays and display it in the UI. This could be a fun way to experiment with [Pinia](https://pinia.vuejs.org/).

---

## 🐞 Issues / 📝 Discussions / 👥 Contribution

Wanna help?

Feel free to open `issues`, make suggestions via `discussions`, or `Contribute`.

Thanks for using this component 💘.

---

## 🆓 License

[MIT License](./LICENSE) // Copyright (©) 2022-now [Gianluca Bianco](https://gianlucabianco.dev/)
