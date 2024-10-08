## Using JSX Syntax with k6

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

and `HomePage` component looks like:
```jsx
export const HomePage: FC = ({ children }) => {
  const res = http.get('https://example.com/');

  check(res, {
    'state is 200': r => r.status === 200
  });

  // Will perform <Header />, <Banner /> and <Footer /> if status is 200
  return res.status === 200 ? children : null
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

