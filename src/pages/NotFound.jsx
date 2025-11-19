import React from 'react'

export default function NotFound() {
  return (
    <>
    <div id="wrapper" className="wrap overflow-x-hidden">
            <div className="section py-6 lg:py-8 xl:py-10">
                <div className="container max-w-xl">
                    <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                        <h2 className="display-5 sm:display-3 lg:display-2 xl:display-1 text-primary">404</h2>
                        <h1 className="h3 sm:h1 m-0">Page not found</h1>
                        <p className="fs-6 md:fs-5">
                            Sorry, the page you seems looking for, <br/>
                            has been moved, redirected or removed permanently.
                        </p>
                        <a href="index.html" className="animate-btn btn btn-md btn-primary text-none gap-0">
                            <span>Go back home</span>
                            <i className="icon icon-narrow unicon-arrow-left fw-bold"></i>
                        </a>
                        <p>Why Not try to search again? <a className="uc-link" href="#uc-search-modal" data-uc-toggle>Search now</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
