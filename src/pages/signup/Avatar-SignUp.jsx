import { Fragment } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./avatar.css";
import { useState } from "react";
import { useSignUp } from "../../context/SignUp-Context";
import { useEffect } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";

export const AvatarSignUp = ({ onNext, onPrev }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const { image, location, password, signUpDispatch } = useSignUp();
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false); 

  const handleImageUpload = (file) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_preset");

    fetch("https://api.cloudinary.com/v1_1/dbz4elldr/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
        setCloudinaryUrl(data.secure_url); 
        signUpDispatch({
          type: "IMAGE",
          payload: data.secure_url, 
        });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      })
      .finally(()=>{
        setIsUploading(false);

      });
  };

  useEffect(() => {
    setIsFormValid(location.trim() !== "");
  }, [location]);

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];    
    handleImageUpload(file);
       
  };
  const handleLocationInputChange = (e) => {
    const inputValue = e.target.value.trim(); // Trim whitespace
    const isLocationValid = inputValue !== "";
    setIsFormValid(isLocationValid);
    signUpDispatch({
      type: "LOCATION",
      payload: e.target.value,
    });
    console.log(location);
    console.log(isFormValid);
    console.log(image);
    console.log(cloudinaryUrl);
    console.log(password);
  };
  const handleNextClick = (e) => {
    e.preventDefault();   
    onNext();
    // console.log("in avatar-next-click")
  };

  return (
    <Fragment>
      <Navbar onBackClick={onPrev} />
      {/* <MainNavbar/> */}
      <CloudinaryContext cloudName="dbz4elldr">
        <div className="mt-8 flex items-center justify-center p-2">
          <form onSubmit={handleNextClick}>
            <div className="mb-16">
              <div className="font-extrabold text-3xl">
                <h1>Welcome! Let's Create Your Profile</h1>
              </div>
              <div className="mt-3 font-medium text-md text-gray-400">
                <p>Let others get to know you better! You can do these later</p>
              </div>
              <div className="mt-12">
                <p className="font-extrabold text-md">Add an avatar</p>
                <div className="flex mt-4">
                  {/* Display selected avatar if any */}
                  <div className="circular-preview">
                  {isUploading ? (
                  <p><div role="status" className="mt-10 ml-11">
                  <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div></p>
                ) : (
                  <img
                    src={
                      cloudinaryUrl ||
                      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    }
                    alt="Selected Avatar"
                    className="circular-image-location"
                  />
                )}
                  </div>
                  <div className="mt-4 ml-4 flex flex-col">
                    <input                     
                      class="ml-2 block text-sm text-gray-300 border border-gray-700 rounded-lg cursor-pointer dark:text-gray-800 focus:outline-none dark:bg-gray-200 dark:border-gray-300"
                      id="file_input"
                      type="file"
                      accept="image/*"                    
                      onChange={handleImageInputChange}
                    />
                    <p
                      className="cursor-pointer mt-6 text-gray-400 flex items-center"
                      
                    >
                      <span class="material-symbols-outlined ">
                        navigate_next
                      </span>
                      <span>Or choose one of our default</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="font-extrabold text-md">Add your location</p>
                <div className="mt-4">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      defaultValue={location}
                      type="location"
                      name="floating_location"
                      id="floating_location"
                      class="font-extrabold text-lg block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                      placeholder="Enter a location"
                      required
                      onChange={handleLocationInputChange}
                    />
                    <label
                      for="floating_location"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <button
                  type="submit"
                  class={`text-white hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center dark:hover:bg-pink-700 dark:focus:ring-pink-800 ${
                    isFormValid && !isUploading  ? "dark:bg-pink-600" : "bg-pink-400"
                  }`}
                  disabled = {!isFormValid || isUploading}
                >
                  Next
                </button>
                <p className="text-sm text-gray-400 ml-10 mt-2 font-bold">
                  {!isUploading && isFormValid  ? "or Press RETURN" : ""}
                </p>
              </div>
            </div>
          </form>
        </div>
      </CloudinaryContext>
    </Fragment>
  );
};
