import ExtensionCard from '@/components/UI/BrowserExtension/ExtansionCard';
import { Link } from 'react-router-dom';
import themeLogo from '../../assets/UI/BrowserExtension/icon-sun.svg';
import devLensLogo from '../../assets/UI/BrowserExtension/logo-devlens.svg';
import logo from '../../assets/UI/BrowserExtension/logo.svg';

const BrowserExtension = () => {
  return (
    <div className="flex flex-col gap-6 px-5 min-h-screen py-5 bg-[#09153e] md:px-12 lg:px-24 lg:py-9">
      <div className="flex justify-between p-2 rounded-lg bg-[#2f364b]">
        <Link to="/" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="h-11" />
        </Link>
        <button className="p-2 rounded-md bg-[#545969]">
          <img src={themeLogo} alt="Logo" className="size-6" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <h1 className="mt-2 text-4xl font-bold text-center text-slate-200">
          Extensions List
        </h1>
        <div className="flex items-center justify-center gap-3">
          <button className="px-5 py-2 text-2xl font-light text-white rounded-full bg-[#212636] ">
            All
          </button>
          <button className="px-5 py-2 text-2xl font-light text-white rounded-full bg-[#212636] ">
            Active
          </button>
          <button className="px-5 py-2 text-2xl font-light text-white rounded-full bg-[#212636] ">
            Inactive
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <ExtensionCard key={item} logo={devLensLogo} />
        ))}
      </div>
    </div>
  );
};
export default BrowserExtension;
