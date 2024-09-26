import { check } from "k6";
import http from "k6/http";
import { BASE_URL } from "../constants";

const News = () => {
  const res = http.get(`${BASE_URL}/news`);
  check(res, {
    "status is 200": () => res.status === 200,
  });
};

export default News;
