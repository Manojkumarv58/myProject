export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-6">
      {/* Illustration */}
      <div className="text-8xl mb-4 animate-bounce">🚀</div>

      {/* Heading */}
      <h1 className="text-7xl font-extrabold tracking-wide">404</h1>

      {/* Subtext */}
      <p className="text-lg mt-4 text-gray-300 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>

      {/* Button */}
      <a 
        href="/" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
      >
        Go Back Home
      </a>
    </div>
  );
}
