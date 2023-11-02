<div align="center">
	<p>
		<a href="https://discord.gg/pobbler"><img src="https://cdn.discordapp.com/attachments/1161734081093042189/1162396545249988618/Banner.png?ex=654e3e24&is=653bc924&hm=e8659efa04e021567d762ed4441e0e9a755907f370afff21b5a1c4f937b6412e&" alt="Discord"/></a>
	</p>
</div>

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