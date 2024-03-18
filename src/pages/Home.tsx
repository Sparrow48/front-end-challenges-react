import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 gap-5 justify-center  text-center flex lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left">
          <Link
            to="/age-calculator"
            className="group rounded-lg border-gray-400 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>Age-Calculator</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
              You will be able to calculate your age by this app
            </p>
          </Link>
          <Link
            to="/"
            className="group rounded-lg border-gray-400 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>DEMO</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              New app will be added here
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;
