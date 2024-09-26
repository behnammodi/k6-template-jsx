import { FC } from "jsx-to-call";
import { check } from "k6";
import http from "k6/http";
import { BASE_URL } from "../constants";

type HomePageProps = {
  theme?: string;
};

const HomePage: FC<HomePageProps> = ({ children }) => {
  const res = http.get(`${BASE_URL}/`);

  check(res, {
    "status is 200": () => res.status === 200,
  });

  return res.status === 200 ? children : null;
};

export default HomePage;
