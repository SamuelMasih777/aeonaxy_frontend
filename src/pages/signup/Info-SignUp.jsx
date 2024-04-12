import { Fragment } from "react";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import firstImage from "../../assests/images/1.jpg";
import secondImage from "../../assests/images/2.jpg";
import thirdImage from "../../assests/images/3.jpg";
import { useSignUp } from "../../context/SignUp-Context";
import { useEffect } from "react";
import { signupHandler } from "../../services/signUpHandler";

export const InfoSignUp = ({ onNext, onPrev }) => {
  const [localSelectedOptions, setLocalSelectedOptions] = useState([]);
  const {
    username,
    name,
    email,
    password,
    location,
    image,
    selectedOptions,
    signUpDispatch,
  } = useSignUp();

  const handleOptionChange = (value) => {
    if (localSelectedOptions.includes(value)) {
      setLocalSelectedOptions(
        localSelectedOptions.filter((option) => option !== value)
      );
    } else {
      setLocalSelectedOptions([...localSelectedOptions, value]);
    }
  };
  useEffect(() => {
    // Check if selectedOptions is empty and localSelectedOptions is not empty
    if (selectedOptions.length === 0 && localSelectedOptions.length > 0) {
      signUpDispatch({
        type: "SELECT_OPTION",
        payload: localSelectedOptions,
      });
    }
  }, []); 

  useEffect(() => {
    signUpDispatch({
      type: "SELECT_OPTION",
      payload: localSelectedOptions,
    });
  }, [localSelectedOptions]);

  useEffect(() => {
    
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  useEffect(() => {
    
    const storedOptions = localStorage.getItem("selectedOptions");
    if (storedOptions) {
      setLocalSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  useEffect(() => {
    signUpDispatch({
      type: "SELECT_OPTION",
      payload: localSelectedOptions,
    });
    console.log(selectedOptions);
  }, [localSelectedOptions, selectedOptions]);

  //   console.log(selectedOptions);
  const handleFinshButtonClick = async (e) => {
    e.preventDefault();
    const { token, responseUsername, responseImage } = await signupHandler(
      username,
      name,
      email,
      password,
      location,
      image,
      selectedOptions
    );
    signUpDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: token,
    });
    signUpDispatch({
      type: "USERNAME",
      payload: responseUsername, 
    });
    signUpDispatch({
      type: "IMAGE",
      payload: responseImage, 
    });

    onNext();
  };
  const isButtonDisabled = selectedOptions.length === 0;
  return (
    <Fragment>
      <Navbar onBackClick={onPrev} />
      <section className="mt-10 flex flex-col items-center justify-center">
        <form onSubmit={handleFinshButtonClick}>
          <div className="flex flex-col items-center justify-center py-8 m-2">
            <div className="flex flex-col">
              <div>
                <h1 className="flex items-center justify-center font-extrabold text-3xl">
                  What Brings you to Dribbble?
                </h1>
              </div>
              <div>
                <p className="mt-4 font-medium text-md text-gray-400">
                  Select the options that describe you. Don't worry, you can
                  explore other options later
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-24 items-center justify-center lg:flex-row md:flex-row">
              {/* Card 1 */}
              <label
                className={`cursor-pointer flex flex-col items-center gap-1 border rounded-lg p-6 ${
                  localSelectedOptions.includes("Designer_Share_Work")
                    ? "border-pink-700"
                    : ""
                }`}
              >
                <img
                  className={`w-40 h-24 object-cover ${
                    localSelectedOptions.includes("Designer_Share_Work")
                      ? "-mt-24"
                      : ""
                  }`}
                  src={firstImage}
                  alt="alt_preview"
                />
                <span className="text-center text-sm font-bold flex items-center justify-center">
                  I'm a designer looking<br></br> to share my work
                </span>
                {localSelectedOptions.includes("Designer_Share_Work") && (
                  <p className="text-sm w-40 text-gray-400 mb-4 mt-2 text-center">
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design
                    inspiration
                  </p>
                )}
                <input
                  id="Designer_Share_Work"
                  type="checkbox"
                  className="hidden"
                  name="Designer_Share_Work"
                  value="Designer_Share_Work"
                  checked={selectedOptions.includes("Designer_Share_Work")}
                  onChange={() => handleOptionChange("Designer_Share_Work")}
                />
                <span
                  className={`w-4 h-4  mt-2 rounded-full border border-pink-600 flex items-center justify-center ${
                    localSelectedOptions.includes("Designer_Share_Work")
                      ? "bg-pink-600"
                      : "bg-white"
                  }`}
                >
                  {localSelectedOptions.includes("Designer_Share_Work") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 10.293a1 1 0 011.414 0l3 3a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </label>
              {/* Card 2 */}
              <label
                className={`cursor-pointer flex flex-col items-center gap-1 border rounded-lg p-6 ${
                  localSelectedOptions.includes("Hire_Designer")
                    ? "border-pink-700"
                    : ""
                }`}
              >
                <img
                  className={`w-40 h-24 object-cover ${
                    localSelectedOptions.includes("Hire_Designer")
                      ? "-mt-24"
                      : ""
                  }`}
                  src={secondImage}
                  alt="alt_preview"
                />
                <span className="text-center text-sm font-bold">
                  I'm looking to to hire a <br></br>designer
                </span>
                {localSelectedOptions.includes("Hire_Designer") && (
                  <p className="text-sm w-40 text-gray-400 mb-4 mt-2 text-center">
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design
                    inspiration
                  </p>
                )}
                <input
                  type="checkbox"
                  className="hidden"
                  name="Hire_Designer"                  
                  value="Hire_Designer"
                  checked={selectedOptions.includes("Hire_Designer")}
                  onChange={() => handleOptionChange("Hire_Designer")}
                />
                <span
                  className={`w-4 h-4 mt-2 rounded-full border border-pink-600 flex items-center justify-center ${
                    localSelectedOptions.includes("Hire_Designer")
                      ? "bg-pink-600"
                      : "bg-white"
                  }`}
                >
                  {localSelectedOptions.includes("Hire_Designer") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 10.293a1 1 0 011.414 0l3 3a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </label>
              {/* Card 3 */}
              <label
                className={`cursor-pointer flex flex-col items-center gap-1 border rounded-lg p-6 ${
                  localSelectedOptions.includes("Designer_Inspiration")
                    ? "border-pink-700"
                    : ""
                }`}
              >
                <img
                  className={`w-40 h-24 object-cover ${
                    localSelectedOptions.includes("Designer_Inspiration")
                      ? "-mt-24"
                      : ""
                  }`}
                  src={thirdImage}
                  alt="alt_preview"
                />
                <span className="text-center text-sm font-bold">
                  I'm looking for design<br></br> inspiration
                </span>
                {localSelectedOptions.includes("Designer_Inspiration") && (
                  <p className="text-sm w-40 text-gray-400 mb-4 mt-2 text-center">
                    With over 7 million shots from a vast community of
                    designers, Dribbble is the leading source for design
                    inspiration
                  </p>
                )}
                <input
                  type="checkbox"
                  className="hidden"
                  name="designerType"
                  value="Designer_Inspiration"
                  checked={selectedOptions.includes("Designer_Inspiration")}
                  onChange={() => handleOptionChange("Designer_Inspiration")}
                />
                <span
                  className={`w-4 h-4 mt-2 rounded-full border border-pink-600 flex items-center justify-center ${
                    localSelectedOptions.includes("Designer_Inspiration")
                      ? "bg-pink-600"
                      : "bg-white"
                  }`}
                >
                  {localSelectedOptions.includes("Designer_Inspiration") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-1 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 10.293a1 1 0 011.414 0l3 3a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </label>
            </div>
            <div className="flex flex-col mt-10 items-center justify-center">
              {selectedOptions.length > 0 && (
                <div className="font-bold text-md mb-6">
                  <p>Anything else? You can select multiple</p>
                </div>
              )}
              <div className="">
                <button
                  className={`cursor-pointer text-white hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2 text-center  dark:hover:bg-pink-700 dark:focus:ring-pink-700 ${
                    isButtonDisabled ? "bg-pink-400" : "dark:bg-pink-600"
                  }`}
                  type="submit"
                  disabled={isButtonDisabled}
                >
                  Finish
                </button>
              </div>
              <div className="text-sm text-gray-400 mt-2 font-bold">
                <p>{selectedOptions.length === 0 ? "" : "or Press RETURN"}</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

