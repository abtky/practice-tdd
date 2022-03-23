## Setup

- [x] pnpm
- [x] vite - create project
- [x] typescript
- [x] eslint
  - [x] husky
  - [x] air bnb
- [x] prettier
- [ ] Jest
  - [ ] husky

## Install

### ESLint

```zsh
pnpm i -D eslint
```

```zsh
npx eslint --init
```

```terminal
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

### Prettier

```zsh
pnpm i -D prettier @vue/eslint-config-prettier
```

```.prettierrc.yml
printWidth: 80
tabWidth: 2
singleQuote: true
semi: true
```

### husky + lint-staged

```zsh
pnpm install -D husky lint-staged
```
```zsh
npx husky install
```
↓The .husky directory is then created.
```
.husky
├── _
│   └── husky.sh
└── pre-commit
```

```shell:.husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd ./01_money
npx lint-staged
```

```yaml:.lintstagedrc.yml
'*.{js,jsx,ts,tsx}':
- eslint --fix
- prettier --write
```

### Jest (with TypeScript)
```zsh
pnpm i jest @types/jest ts-jest -D
```
```javascript:jest.config.js
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
```
このままではeslintのエラー('describe' is not defined.)がでるので
`eslint-plugin-jest`をインストールする
```zsh
$ pnpm i eslint-plugin-jest -D
```
```javascript:.eslintrc.js
module.exports = {
  env: {
    ...
    'jest/globals': true,
  },
  ...
  plugins: [...,'jest'],
};
```
↓huskyにjestを追記してテストに失敗したらコミットできないようにする
```shell:.husky/pre-commit
npx jest
```