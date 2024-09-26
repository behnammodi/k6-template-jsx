import JSX from "jsx-to-call";
import AboutUsPage from "./pages/AboutUsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News";
import { Options } from "k6/options";

export let options: Options = {
  vus: 1,
  duration: "1s",
};

export default () => {
  return JSX.call(
    <AboutUsPage>
      <Header />
      <News />
      <Footer />
    </AboutUsPage>
  );
};
