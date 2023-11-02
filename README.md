# Log Developer

`log-developer` is a simple package that can change the text color and background in the text body, which helps improve the organization of logging content and make it clearer.

## Contents

- [How to Install](#How-to-Install)
- [How to use](#How-to-use)

## How to Install

```shell
npm install log-developer
```

## How to use

```js
const { log, tables } = require(`log-developer`);
const test = async () => {
    log((await tables.above()).toString(), `red`);
    log((await tables.middle(`Tope`, `Gamed`)).toString(), `red`, `white`);
    log((await tables.under()).toString(), `green`);
};
test();
```
