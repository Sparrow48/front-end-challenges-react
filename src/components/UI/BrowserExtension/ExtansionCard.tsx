const ExtensionCard = ({ logo }: { logo: string }) => {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-3xl bg-slate-700">
      <div className="flex">
        <img src={logo} alt="Logo" className="size-16" />
        <div className="flex flex-col px-4">
          <h1 className="text-2xl font-bold text-white">DevLens</h1>
          <p className="text-lg text-slate-300">
            Quickly inspect page layouts and visualize elements boundaries.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-3 py-1 text-lg text-white border rounded-full border-slate-400">
          Remove
        </button>
        <switch className="relative w-10 h-5 rounded-full bg-slate-600">
          <input type="checkbox" className="sr-only" />
          <span className="absolute w-5 h-5 transition-transform duration-200 transform translate-x-0 rounded-full bg-slate-400"></span>
        </switch>
      </div>
    </div>
  );
};
export default ExtensionCard;
