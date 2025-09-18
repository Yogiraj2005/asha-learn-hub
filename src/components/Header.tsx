import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-healthcare-blue to-healthcare-blue-dark shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white sm:text-xl">
                ASHA Worker Digital Hub
              </h1>
              <p className="text-xs text-white/80 sm:text-sm">
                आशा कार्यकर्ता डिजिटल हब
              </p>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 rounded-lg bg-white/10 px-3 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-expanded={isLanguageOpen}
              aria-haspopup="true"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">English</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                    हिंदी
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;