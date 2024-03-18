export default function AgeCalculator() {
  return (
    <div className="flex justify-center min-h-screen  bg-light-shade md:p-12 lg:24">
      <div className="flex justify-center w-full gap-5 p-5 pt-10 mb-32 text-center md:max-w-2xl md:w-full md:mb-0 md:text-left ">
        <div className="flex flex-col items-start w-full gap-5 px-3 py-3 bg-white h-fit md:justify-center md:p-10 rounded-xl rounded-br-15xl md:gap-10">
          <div className="flex gap-2 text-gray-400 md:gap-6 ">
            <div className="flex flex-col items-start justify-center">
              <label className="w-20 pb-2 font-semibold text-left md:w-32">
                Day
              </label>
              <input
                className="w-20 px-2 py-3 text-xl font-extrabold border border-gray-300 rounded md:w-32 md:px-4 md:text-2xl focus:outline-none"
                min={0}
                type="number"
                name="Day"
                placeholder="DD"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label className="w-20 pb-2 font-semibold text-left md:w-32">
                Month
              </label>
              <input
                className="w-20 px-2 py-3 text-xl font-extrabold border border-gray-300 rounded md:w-32 md:px-4 md:text-2xl focus:outline-none"
                min={0}
                type="number"
                name="Month"
                placeholder="MM"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label className="w-20 pb-2 font-semibold text-left md:w-32">
                Year
              </label>
              <input
                className="w-20 px-2 py-3 text-xl font-extrabold border border-gray-300 rounded md:w-32 md:px-4 md:text-2xl focus:outline-none"
                min={0}
                type="number"
                name="Year"
                placeholder="YYYY"
              />
            </div>
          </div>

          <ol className="items-center w-full sm:flex">
            <li className="relative w-full mb-6 sm:mb-0">
              <div className="flex items-center w-full">
                <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                <div className="z-10 flex items-center justify-center w-16 h-16 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 96 96"
                    className="w-16 h-16 rounded-full"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="96"
                      height="96"
                      fill="#864cff"
                    ></rect>
                    <g transform="translate(36, 59.99454545454546)">
                      <path
                        d="M22.7-4.13L22.7-4.13Q23.18-4.13 23.18-3.22L23.18-3.22Q23.18-3.02 23.18-2.9 23.18-2.78 23.16-2.69 23.14-2.59 23.09-2.52 23.04-2.45 23.04-2.4 23.04-2.35 22.92-2.3 22.8-2.26 22.75-2.26 22.7-2.26 22.54-2.21 22.37-2.16 22.27-2.11L22.27-2.11Q18.67-1.2 16.08 1.56 13.49 4.32 12.67 8.06L12.67 8.06Q12.67 8.16 12.62 8.33 12.58 8.5 12.55 8.64 12.53 8.78 12.53 8.83L12.53 8.83Q12.38 9.55 11.76 9.22L11.76 9.22Q11.47 9.17 11.42 8.54L11.42 8.54Q10.8 4.66 8.11 1.75 5.42-1.15 1.73-2.11L1.73-2.11Q1.63-2.16 1.46-2.21 1.3-2.26 1.25-2.26 1.2-2.26 1.08-2.3 0.96-2.35 0.96-2.4 0.96-2.45 0.91-2.52 0.86-2.59 0.84-2.69 0.82-2.78 0.82-2.9 0.82-3.02 0.82-3.22L0.82-3.22Q0.82-4.18 1.3-4.18L1.3-4.18Q1.58-4.18 2.02-4.03L2.02-4.03Q7.58-2.5 10.7 2.16L10.7 2.16 11.04 2.64 11.04-14.98Q11.04-32.59 11.14-32.78L11.14-32.78Q11.42-33.31 12.05-33.31L12.05-33.31Q12.62-33.26 12.96-32.59L12.96-32.59 12.96 2.64 13.3 2.16Q15.5-1.2 19.3-3.02L19.3-3.02Q21.6-4.13 22.7-4.13Z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="flex md:hidden w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-3 text-5xl font-black md:text-8xl sm:pe-8">
                <h3 className="text-gray-900  dark:text-white">
                  <span className=" text-custom-purple-1">--</span> years
                </h3>
                <h3 className="text-gray-900  dark:text-white">
                  <span className=" text-custom-purple-1">--</span> months
                </h3>
                <h3 className="text-gray-900  dark:text-white">
                  <span className=" text-custom-purple-1">--</span> days
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
