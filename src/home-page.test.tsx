import JSX from "jsx-to-call";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Options } from "k6/options";

export let options: Options = {
  vus: 1,
  duration: "1s",
};

export default () => {
  return JSX.call(
    <HomePage>
      <Header />
      <Banner />
      <Footer />
    </HomePage>
  );
};
