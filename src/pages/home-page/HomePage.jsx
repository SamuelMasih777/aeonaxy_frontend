import { Fragment } from "react";
import { MainNavbar } from "../../components/Navbar/MainNavbar";
import { useSignUp } from "../../context/SignUp-Context";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer";
export const Home = () => {
  const { username, accessToken } = useSignUp();
  
  

  return (
    <Fragment>
      <MainNavbar />
      <div className="flex flex-col items-center justify-center gap-4 mt-12">
        
        {accessToken ? (
          <p className="font-semibold font-stylish text-4xl text-pink-700 hover:text-pink-600 cursor-pointer">{`Start Exploring, "${username}"`}</p>
        ) : (
          <p className="font-semibold font-stylish text-4xl text-pink-700 hover:text-pink-600 cursor-pointer">{`Sign-In to Explore`}</p>
        )}
        <div className="mt-8 mb-12 flex flex-row">
            <div className="flex flex-col lg:flex-row md:flex-row gap-4">
                <Card/>
                <Card/>
            </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};
