import axios from "axios";

import { userData } from "../../interfaces/userInterfaces";

const localUrl = "http://localhost:6400";

export const createUser = async ({
  name,
  email,
  password,
  userName,
  phoneNumber,
}: any) => {
  return await axios
    .post(`${localUrl}/api/user/signup`, {
      name,
      email,
      password,
      userName,
      phoneNumber,
    })
    .then((res) => {
      return res.data;
    });
};
