import axios from "axios";

import { userData } from "../../interfaces/userInterfaces";

const endPoint = "http://localhost:6400";

export const createUser = async ({
  name,
  email,
  password,
  userName,
  phoneNumber,
}: userData) => {
  return await axios
    .post(`${endPoint}/api/user/signup`, {
      name,
      email,
      password,
      userName,
      phoneNumber,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
