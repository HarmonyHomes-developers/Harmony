"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-1">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 || 
            pageNumber === totalPages || 
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-10 h-10 flex items-center justify-center rounded ${
                  currentPage === pageNumber
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {pageNumber}
              </button>
            );
          }
          if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
            return (
              <span key={`ellipsis-${pageNumber}`} className="px-2 py-1 text-gray-500">
                ...
              </span>
            );
          }
          return null;
        })}
        
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};