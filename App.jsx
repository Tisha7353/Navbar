import  { useState, useEffect } from 'react';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme and save preference to local storage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <nav className={`flex flex-col md:flex-row items-center justify-between px-6 lg:px-44 h-auto md:h-20 ${darkMode ? 'bg-purple-950' : 'bg-purple-500'}`}>
        {/* Logo Section */}
        <div className="flex items-center justify-start w-full md:w-auto">
          <div className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
              width={50}
              height={70}
              alt="BookAI Logo"
            />
            <div className="ml-2 font-bold text-xl lg:text-2xl">BookAI</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto mt-4 md:mt-0">
          <a className="hover:text-purple-700" href="#">
            Features
          </a>
          <a className="hover:text-purple-700" href="#">
            How It Works
          </a>
          <a className="hover:text-purple-700" href="#">
            Roadmap
          </a>
          <a className="hover:text-purple-700" href="#">
            API
          </a>
          <a className="hover:text-purple-700" href="#">
            Price
          </a>
          <a className="hover:text-purple-700" href="#">
            Models
          </a>
        </div>

        {/* Button Container */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Toggle Button */}
          <button
            type="button"
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 hover:bg-blue-400'}`}
            onClick={toggleTheme}
          >
            {darkMode ? '🌙' : '🌞'}
          </button>

          {/* Login/Sign Up Button */}
          <button
            type="button"
            className={`bg-gradient-to-bl from-sky-400 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${darkMode ? 'focus:ring-blue-800' : 'focus:ring-blue-400'} font-medium rounded-md text-sm px-4 py-2.5 text-center w-36 md:w-36 md:h-11`}
          >
            Login / Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
