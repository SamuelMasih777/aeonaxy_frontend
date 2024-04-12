import { Fragment } from "react";
import { MainNavbar } from "../../components/Navbar/MainNavbar";
import { Footer } from "../../components/Footer";
import { useSignUp } from "../../context/SignUp-Context";
export const EmailVerify = ({ onChangeStep }) => {
  const { email, name, username, accessToken, password, image, location, selectedOptions } =
    useSignUp();
  console.log({
    email,
    name,
    username,
    password,
    image,
    location,
    selectedOptions,
    accessToken
  });
  const handleEmailChangeClick = () => {
    onChangeStep(1);
  };
  return (
    <Fragment>
      <MainNavbar />
      <div className="flex flex-col mt-10 mb-28 items-center justify-center">
        <div>
          <h1 className="font-bold text-3xl">Please verify your email...</h1>
        </div>
        <div className="mt-5">
          <span class="material-symbols-outlined text-8xl text-pink-500">
            mail
          </span>
        </div>
        <div className="text-center">
          <p className="mt-5 text-lg text-center text-gray-500 font-semibold">
            Please verify your email address. We've sent a confirmation email
            to:
          </p>
        </div>
        <div>
          <p className="mt-5 text-lg text-center font-bold text-gray-900">{email}</p>
        </div>
        <div>
          <p className="mt-5 text-lg text-center text-gray-500 font-semibold">
            Click the confirmation link in that email to begin using Dribbble.
          </p>
        </div>
        <div className="mt-5 text-center text-lg text-gray-500 font-semibold">
          Did'nt recieve the email? Check your Spam folder, it may have been
          caught by a filter. If<br></br> you still don't see it. you can{" "}
          <span className="text-pink-600">
            <button>resend the confirmation email.</button>
          </span>
        </div>
        <div className="mt-5 text-lg text-gray-500 font-semibold">
          <p>
            Wrong email address?{" "}
            <span className="text-pink-600">
              <button onClick={handleEmailChangeClick}>Change it.</button>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
