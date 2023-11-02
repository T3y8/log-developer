# Log Developer

`log-developer` is a simple package that can change the text color and background in the text body, which helps improve the organization of logging content and make it clearer.

## Contents

- [About Us](#About-Us)
- [How to Download](#How-to-Install)
- [How to use](#How-to-use)

## About Us

Here you can put a brief description about the project and its land. You also explained why this package exists and the benefits it can provide to others.

## How to Install

You can explain here how to download this package and install it in your project. For example, its functions could look like this:

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