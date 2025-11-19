import React from 'react';

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="uc-search-modal" className="uc-modal-full uc-modal" style={{ display: 'block' }}>
      <div className="uc-modal-dialog d-flex justify-center bg-white text-dark dark:bg-gray-900 dark:text-white" data-uc-height-viewport="">
        <button 
          className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" 
          type="button"
          onClick={onClose}
        >
          <i className="unicon-close"></i>
        </button>
        <div className="panel w-100 sm:w-500px px-2 py-10">
          <h3 className="h1 text-center">Search</h3>
          <form className="hstack gap-1 mt-4 border-bottom p-narrow dark:border-gray-700" action="?">
            <span className="d-inline-flex justify-center items-center w-24px sm:w-40 h-24px sm:h-40px opacity-50">
              <i className="unicon-search icon-3"></i>
            </span>
            <input 
              type="search" 
              name="q" 
              className="form-control-plaintext ms-1 fs-6 sm:fs-5 w-full dark:text-white" 
              placeholder="Type your keyword.." 
              aria-label="Search" 
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;