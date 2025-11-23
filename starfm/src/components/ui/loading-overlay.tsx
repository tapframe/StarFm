import React from 'react';

interface LoadingOverlayProps {
  isLoading?: boolean;
  message?: string;
  subMessage?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading = true,
  message,
  subMessage
}) => {
  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 opacity-100 transition-opacity duration-500"
    >
      <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 transition-all duration-500 scale-100">
        {/* Animated Logo Container */}
        <div className="relative w-[13rem] h-[13rem] sm:w-[18rem] sm:h-[18rem] flex items-center justify-center">
          {/* Outer rotating ring - furthest */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[11.5rem] h-[11.5rem] sm:w-[15.5rem] sm:h-[15.5rem] rounded-full border-[3px] border-transparent border-t-cyan-400 border-r-blue-500 animate-spin"
              style={{ 
                animationDuration: '3s'
              }}
            ></div>
          </div>
          
          {/* Middle rotating ring - opposite direction */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[10rem] h-[10rem] sm:w-[13.5rem] sm:h-[13.5rem] rounded-full border-[3px] border-transparent border-b-purple-500 border-l-indigo-400 animate-spin-reverse"
              style={{ 
                animationDuration: '4s'
              }}
            ></div>
          </div>
          
          {/* Inner accent ring - slow spin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[8.75rem] h-[8.75rem] sm:w-[11.5rem] sm:h-[11.5rem] rounded-full border-[2.5px] border-transparent border-t-blue-400 border-b-cyan-300 animate-spin"
              style={{ animationDuration: '6s' }}
            ></div>
          </div>
          
          {/* Logo with pulse and float */}
          <div className="relative z-10 animate-pulse-slow">
            <div className="animate-float">
              <img 
                src="/favico.png" 
                alt="Loading" 
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.25))' }}
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        {message && (
          <div className="text-center px-6">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight animate-pulse">
              {message}
            </p>
            {subMessage && (
              <p className="mt-2 text-base sm:text-lg font-medium uppercase tracking-[0.3em] text-blue-500">
                {subMessage}
              </p>
            )}
          </div>
        )}
        
        {/* Animated dots */}
        <div className="flex space-x-2.5 sm:space-x-3">
          <div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-bounce" 
            style={{ 
              animationDelay: '0ms'
            }}
          ></div>
          <div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-bounce" 
            style={{ 
              animationDelay: '150ms'
            }}
          ></div>
          <div 
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-bounce" 
            style={{ 
              animationDelay: '300ms'
            }}
          ></div>
        </div>

        {/* Partnership Section */}
        <div className="mt-6 flex flex-col items-center space-y-2 opacity-90">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
            In Partnership With
          </p>
          <a
            href="https://www.profm.com.sa/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://www.profm.com.sa/logo.svg"
              alt="PROFM Logo"
              className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;

