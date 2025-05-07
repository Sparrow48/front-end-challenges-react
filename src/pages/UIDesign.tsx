import { Link } from 'react-router-dom';

const UIDesign = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-24">
      <Link
        to="/browser-extension"
        className="py-4 transition-colors border border-transparent border-gray-400 rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>Browser Extension</h2>
      </Link>
    </div>
  );
};
export default UIDesign;
