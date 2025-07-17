const ErrorPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container min-h-screen px-6 py-12 mx-auto flex items-center justify-center">
        <div className="text-center max-w-xl">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            404 error
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
            Page Not Found
          </h1>

          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Sorry, the page you are looking for doesn’t exist or has been moved.
            Let’s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <svg
                className="w-5 h-5 mr-2 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Go Back
            </button>

            <a
              href="/"
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Take Me Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;