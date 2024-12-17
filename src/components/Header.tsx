import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-9/12 items-center">
            <div className="flex-shrink-0">
              
                <span className="text-xl font-bold text-gray-800">Alishba</span>
            
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
           
            
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </span>
            
            
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Sun
                </span>
           
            
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Snow
                </span>
          
             
                <span className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
Sea             </span>
          
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
           
              <span className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </span>
            
           
              <span className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Sun
              </span>
        
         
              <span className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Snow
              </span>
       
           
              <span className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Sea
              </span>
          
          </div>
        </div>
      )}
    </nav>
  );
}