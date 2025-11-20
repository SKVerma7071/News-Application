import React from 'react'

export default function Login() {
  return (
    <>
     <div id="sign-in" className="sign-in section panel overflow-hidden">
                <div className="section-outer panel">
                    <div className="section-inner panel">
                        <div className="row child-cols-12 lg:child-cols-6 g-0" data-uc-grid>
                            <div className="d-none lg:d-block">
                                <figure className="panel h-100 m-0 bg-gray-25 dark:bg-gray-900 bg-gray-25 dark:bg-gray-800">
                                    <canvas className="h-100 w-100"></canvas>
                                    <img className="media-cover image" src="https://tse4.mm.bing.net/th/id/OIP.0gdLhUQbKMzjHLNWeCREoAHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"
                                     data-src="https://tse4.mm.bing.net/th/id/OIP.0gdLhUQbKMzjHLNWeCREoAHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3" alt="My account"
                                      data-uc-img="loading: lazy"/>
                                </figure>
                            </div>
                            <div>
                                <div className="panel vstack md:items-center justify-center h-screen overflow-hidden">
                                    <div data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutCubic; duration: 750; delay: anime.stagger(100);">
                                        <div className="uc-logo cstack mx-auto mb-6 lg:mb-8">
                                            <a href="index.html">
                                                {/* <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-none dark:d-block" src="../assets/images/demo-seven/common/logo-dark.svg" alt="Sign in"/>
                                                <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-block dark:d-none" src="../assets/images/demo-seven/common/logo-light.svg" alt="Sign in"/> */}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="panel py-4 px-2">
                                        <div className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center" data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);">
                                            <h1 className="h4 sm:h3">Sign in</h1>
                                            <div className="hstack gap-2">
                                                <a href="#google" className="btn btn-sm btn-alt-danger w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                                                    <i className="icon icon-1 unicon-logo-google"></i>
                                                </a>
                                                <a href="#facebook" className="btn btn-sm btn-alt-blue-700 w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                                                    <i className="icon icon-1 unicon-logo-facebook"></i>
                                                </a>
                                                <a href="#github" className="btn btn-sm btn-alt-dark w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                                                    <i className="icon icon-1 unicon-logo-github"></i>
                                                </a>
                                            </div>
                                            <div className="panel h-24px">
                                                <hr className="position-absolute top-50 start-50 translate-middle hr m-0 w-100 dark:opacity-30"/>
                                                <span className="position-absolute top-50 start-50 translate-middle px-1 fs-7 fw-medium text-uppercase bg-white dark:bg-black">Or</span>
                                            </div>
                                            <form className="vstack gap-2">
                                                <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="email" placeholder="Your email" required/>
                                                <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="password" placeholder="Password" autocomplete="new-password" required/>
                                                <div className="hstack justify-between text-start">
                                                    <div className="form-check text-start">
                                                        {/* <input id="form_remember_me" className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="checkbox"/> */}
                                                        {/* <label for="form_remember_me" className="hstack justify-between form-check-label fs-6">Remember me?</label> */}
                                                    </div>
                                                    {/* <a href="reset-password.html" className="uc-link fs-6">Forgot password</a> */}
                                                </div>
                                                <button className="btn btn-primary btn-sm mt-1" type="submit">Log in</button>
                                            </form>
                                            {/* <p>Have no account yet? <a className="uc-link" href="sign-up.html">Sign up</a></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
