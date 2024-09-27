<div align="center">
# Template to use JSX with k6
</div>

## Using JSX Syntax

You can use JSX syntax to implement all components you have by using the [jsx-to-call](https://github.com/behnammodi/jsx-to-call) module. This allows you to write your components in a more declarative and readable way. something like:

```jsx
export default () => {
  return JSX.call(
    <HomePage>
      <Header />
      <Banner />
      <Footer />
    </HomePage>
  );
};
```

This repository provides a scaffolding project to start using JSX in your k6 scripts.

## Installation

**Install dependencies**

Clone the generated repository on your local machine, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
npm install
```

## Running the test

To run a test written in JSX, we first have to transpile the TypeScript and JSX code into JavaScript running a bundler. This project uses `Babel` and `Webpack` to bundle the different files into ES modules (ESM), using its [`webpack.config.js`](./webpack.config.js) configuration.

The next command transforms each TSX test in `./src` to the `./dist` folder as ES modules.

```bash
npm run bundle
```

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/home-page.test.js
```

**See also**

- [jsx-to-call](https://github.com/behnammodi/jsx-to-call)

