import { Link } from "react-router-dom";
export const Card = () => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray- dark:border-gray-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
      <Link to="#">
        <img
          class="rounded-t-lg"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Iqc-fY2T5BsOiWT7.jpeg"
          alt="design Image"
        />
      </Link>
      <div class="p-5">
        <Link to="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-950">
            Why Pixel Perfect Design?
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Proper spacing between elements like text, buttons, and icons enhances
          readability. Proper spacing between elements like text, buttons, and
          
        </p>
        <Link
          to="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
