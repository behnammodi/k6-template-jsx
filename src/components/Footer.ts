import { check } from "k6";
import http from "k6/http";
import { BASE_URL } from "../constants";

const Footer = () => {
  const res = http.get(`${BASE_URL}/footer`);
  check(res, {
    "status is 200": () => res.status === 200,
  });
};

export default Footer;
