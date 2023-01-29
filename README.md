# Interest-checker

This is the repository for the app interest-checker 


## Getting started

To get started, run the following commands in the following order:

| Command                                                              | Description               |
| -------------------------------------------------------------------- | ------------------------- |
| `git clone git@github.com:Fredrikbjornland/interest-checker.git`     | clone project             |
| `cd interest-checker`                                                | navigate into root folder |
| `npm install`                                                        | install dependencies      |
| `npx expo start`                                                     | runs app in expot.        |

## Coding

This repository follows the company guidelines and code conventions. Can be found at the WIKI section in this repository.

### Lint

Lint software has been added to help developers follow the code conventions: <br />
The linter will find any "errors" (code that deviate from the conventions) and fix them automatically:

| Command            | Description       |
| ------------------ | ----------------- |
| `npm run lint`     | Find any "errors" |
| `npm run lint:fix` | Fix the "errors"  |

Note that some "errors" cannot be fixed automatically by the linting software, in that case you have to fix them manually.

### Prettier

Prettier is recomended to format on save. Follow these steps to activate
| Command | Description |
| ---------------------------------------------------------------- | ------------------------- |
| `ctrl + shift + p` and click on "Preferences: open settings(Json)| Open vscode settings.json |
| `Add the following line: "editor.formatOnSave": true, | Fix the "errors" |
