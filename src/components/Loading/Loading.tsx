const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background-light dark:bg-gradient-to-tr dark:from-bg-dark-futuristic-start dark:via-bg-dark-futuristic-middle dark:to-bg-dark-futuristic-end">
      <div className="flex space-x-2">
        <div
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full animate-bounce"
          style={{ backgroundColor: '#8b5cf6' }}
        ></div>
        <div
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full animate-bounce"
          style={{ backgroundColor: '#8b5cf6', animationDelay: '-0.2s' }}
        ></div>
        <div
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full animate-bounce"
          style={{ backgroundColor: '#8b5cf6', animationDelay: '-0.4s' }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
