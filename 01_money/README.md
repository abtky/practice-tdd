## Setup

- [x] pnpm
- [x] vite - create project
- [x] typescript
- [ ] eslint
  - [ ] husky
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

```javascript
// package.json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
},
```
