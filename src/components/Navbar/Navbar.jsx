import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = ({onBackClick}) => {
    const handleBackButton =()=>{
        onBackClick();
    }
  return (
    <nav class="bg-white border-gray-200 hover:shadow">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-8 items-center justify-center">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-4xl font-bold italic whitespace-nowrap dark:text-pink-600 font-stylish">
              dribbble
            </span>
          </Link>
          <div>
            <button className="w-2 h-2" onClick={handleBackButton}>
            <span class="p-1  items-center justify-center material-symbols-outlined hover:bg-gray-400 hover:text-gray-500 bg-gray-200 rounded-md text-gray-400">arrow_back_ios_new</span>
            </button>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
