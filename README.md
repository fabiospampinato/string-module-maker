# String Module Maker

Generate a module exporting an arbitrary string.

Sometimes you may want to bundle a string encoding some binary data with your library, e.g. for initializing a WASM instance easily, making a module that exports that string is trivial if you are using base64, but you should probably use [base128](https://github.com/fabiospampinato/base128-encoding) instead for greater memory efficiency, but that requires escaping some characters, this library basically just does that, it escapes some characters, wraps the string in quotes, and generates a module that exports that string for you, which you can then write to disk. It's highly recommended to [base128](https://github.com/fabiospampinato/base128-encoding)-encode the string first.

## Install

```sh
npm install --save string-module-maker
```

## Usage

```ts
import ModuleMaker from 'string-module-maker';

// Generate raw string

ModuleMaker.toRaw ( 'foo' ); // => "`foo`"
ModuleMaker.toCJS ( 'foo' ); // => "module exports = `foo`;"
ModuleMaker.toESM ( 'foo' ); // => "export default `foo`;"
```

## License

MIT © Fabio Spampinato
