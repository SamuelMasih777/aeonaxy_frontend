import axios from "axios";
export const signupHandler = async (
  username,
  name,
  email,
  password,
  location,
  image,
  selectedOptions
) => {
  try {
    const response = await axios.post(
      "https://aeonaxy-backend-7tjz.onrender.com/api/auth/register",
      {
        name: name,
        username: username,
        email: email,
        password: password,
        image: image,
        location: location,
        selectedOptions: selectedOptions,
      }
    );
    const {
      accessToken: token,
      username: responseUsername,
      image: responseImage,
    } = response.data;
    console.log({ token, responseUsername, responseImage });
    return { token, responseUsername, responseImage };
  } catch (error) {
    console.log(" adding user to Database");
  }
};
