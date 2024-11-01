export const LoaderButton = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <button
      type="button"
      className="w-[200px] h-[60px] text-lg font-medium cursor-not-allowed disabled:opacity-50"
      data-cy="Loader"
      disabled
    >
      <div className="w-8 h-8 mx-auto border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </button>
  </div>
  );
};