import { Fragment } from "react";
import gif from "../../assests/video/dribbble.gif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateEmail,  validatePassword } from "../../utils";
import { useSignUp } from "../../context/SignUp-Context";
import { loginHandler } from "../../services/loginHandler";

let isEmailValid, isPasswordValid;

export const Login = () => {
  const {email, password, signUpDispatch} = useSignUp();

    const navigate = useNavigate();
    const handleSubmitButton = async (e) =>{
        e.preventDefault();
        const {accessToken, username, image} = await loginHandler(email,password);
        signUpDispatch({
            type:"SET_ACCESS_TOKEN",
            payload: accessToken,
        })
        signUpDispatch({
            type: "USERNAME",
            payload: username,
        })
        signUpDispatch({
            type: "IMAGE",
            payload: image,
        })
        
        navigate('/');
    }
    const handleSignUpClick=()=>{
      navigate('/signup')
    }
    
    const handleEmailChange=(e)=>{
      isEmailValid = validateEmail(e.target.value);
      if(isEmailValid){
      signUpDispatch({
        type:"EMAIL",
        payload:e.target.value,
      })
    }else{
      console.log("Invalid Email");
    }
    }
    const handlePasswordChange=(e)=>{
      isPasswordValid = validatePassword(e.target.value);
      if(isPasswordValid){
      signUpDispatch({
        type:"PASSWORD",
        payload:e.target.value,
      })
    }else{
      console.log("Invalid Password");
    }
    }
    const handleDribbbleClick =()=>{
      navigate('/');
    }
    const handleTestCredentialsLogin = async () =>{
        const { accessToken, username, image } = await loginHandler("samuelmasih.sls777@gmail.com", "Samuel@321");
        signUpDispatch({
            type:"SET_ACCESS_TOKEN",
            payload: accessToken,
        })
        signUpDispatch({
            type: "USERNAME",
            payload: username,
        })
        signUpDispatch({
            type: "IMAGE",
            payload: image,
        })
        navigate('/');
    }
  return (
    <Fragment>
      <section className="">
        <div className="container h-full px- py-">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="relative h-screen mb-12 md:mb-0 md:w-8/12 lg:w-4/12">
              <img
                src={gif}
                alt="Dribbble GIF"
                className="w-full h-full"
              />
              <div>
              <button className="absolute top-16 left-24 italic font-mono text-4xl font-light text-sky-900 font-stylish" onClick={handleDribbbleClick}>Dribbble</button>
              <p className="absolute top-28 left-24 items-center justify-center font-extrabold text-2xl">Discover the world's<br></br> Top Designers and Creatives</p>
              </div>              
              <p className="absolute bottom-10 left-24 font-serif text-lg font-light text-green-800">Art by<span className="underline ml-2"><Link to="https://samuelmasihsls777.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer" >Samuel Masih</Link></span></p>
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 xl:mr-20 lg:mr-10 lg:w-6/12">
                <div className="flex font-semibold justify-end mb-10">Don't have Account? <span className="font-medium text-violet-700 ml-1"><button onClick={handleSignUpClick}>Sign Up</button></span></div>
              <h1 className="xl:ml-48 lg:ml-32 md:ml-16 mt-2 mb-12 text-3xl font-bold">
                Sign In to Dribbble
              </h1>
             
              <form class="max-w-sm mx-auto" onSubmit={handleSubmitButton}>
                
                <div class="mb-6">
                  <label
                    for="email"
                    class="block text-md font-bold text-gray-900 dark:text-gray"
                  >
                    Email
                  </label>
                  <input
                    defaultValue={email}
                    type="email"
                    id="email"
                    class="focus:outline-none focus:border-transparent bg-gray-100 text-gray-900 font-bold text-md rounded-lg block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="account@dribble.design"
                    required
                    onChange={handleEmailChange}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="password"
                    class="block text-md font-bold text-gray-900 dark:text-gray"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="mb-8 focus:outline-none focus:border-transparent  bg-gray-100 font-bold text-gray-900 text-md rounded-lg  block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="6+ characters"
                    required
                    maxlength="12"
                    minlength="7"
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  class=" text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                  Login
                </button>
                <button                  
                  class=" text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  onClick={handleTestCredentialsLogin}
                >
                  Login with Test-Credentials
                </button>
                </div>
                
                <div className="grid grid-cols-1 text-xs font-sm mt-4 dark:text-gray-400">
                  <p>
                    This site is protected by reCAPTCHA and the Google<br></br>{" "}
                    <button><span className="text-violet-700">Privacy Policy</span></button> and <button><span className="text-violet-700">Terms of Service</span></button> apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
