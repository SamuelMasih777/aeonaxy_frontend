import axios from "axios";

export const loginHandler = async (email, password) => {
  try {
    const {
      data: { accessToken, username, image },
    } = await axios.post("https://aeonaxy-backend-7tjz.onrender.com/api/auth/login", {
      email: email,
      password: password,
    });
    console.log({ accessToken, username, image });
    return { accessToken, username, image };
  } catch (err) {
    console.log("unable to login");
  }
};
