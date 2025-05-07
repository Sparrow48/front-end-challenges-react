import { Link } from 'react-router-dom';

const Apps = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-24">
      <Link
        to="/"
        className="py-4 transition-colors border border-transparent border-gray-400 rounded-lg  group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Back to Home</h2>
      </Link>

      <div className="flex justify-center gap-5 mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <Link
          to="/age-calculator"
          className="px-5 py-4 transition-colors border border-transparent border-gray-400 rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Age-Calculator</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
            You will be able to calculate your age by this app
          </p>
        </Link>
        <Link
          to="/"
          className="px-5 py-4 transition-colors border border-transparent border-gray-400 rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>DEMO</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            New app will be added here
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Apps;
