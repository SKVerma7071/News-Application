import React from 'react'

export default function AccountModal() {
  return (
    <div id="uc-account-modal" data-uc-modal="overlay: true">
            <div className="uc-modal-dialog lg:max-w-500px bg-white text-dark dark:bg-gray-800 dark:text-white rounded">
                <button className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
                    <i className="unicon-close"></i>
                </button>
                <div className="panel vstack gap-2 md:gap-4 text-center">
                    <ul className="account-tabs-nav nav-x justify-center h6 py-2 border-bottom d-none" data-uc-switcher="animation: uc-animation-slide-bottom-small, uc-animation-slide-top-small">
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Reset password</a></li>
                        <li><a href="#">Terms of use</a></li>
                    </ul>
                    <div className="account-tabs-content uc-switcher px-3 lg:px-4 py-4 lg:py-8 m-0 lg:mx-auto vstack justify-center items-center">
                        <div className="w-100">
                            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                                <h4 className="h5 lg:h4 m-0">Log in</h4>
                                <div className="panel vstack gap-2 w-100 sm:w-350px mx-auto">
                                    <form className="vstack gap-2">
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="email" placeholder="Your email" required/>
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="password" placeholder="Password" autoComplete="new-password" required/>
                                        <div className="hstack justify-between items-start text-start">
                                            <div className="form-check text-start">
                                                <input className="form-check-input rounded-0 dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="checkbox" id="inputCheckRemember"/>
                                                <label className="hstack justify-between form-check-label fs-7 sm:fs-6" for="inputCheckRemember">Remember me?</label>
                                            </div>
                                            <a href="#" className="uc-link fs-6" data-uc-switcher-item="2">Forgot password</a>
                                        </div>
                                        <button className="btn btn-primary btn-sm lg:mt-1" type="submit">Log in</button>
                                    </form>
                                    <div className="panel h-24px">
                                        <hr className="position-absolute top-50 start-50 translate-middle hr m-0 w-100"/>
                                        <span className="position-absolute top-50 start-50 translate-middle px-1 fs-7 text-uppercase bg-white dark:bg-gray-800">Or</span>
                                    </div>
                                    <div className="hstack gap-2">
                                        <a href="#google" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-google"></i>
                                        </a>
                                        <a href="#facebook" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-facebook"></i>
                                        </a>
                                        <a href="#twitter" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-x-filled"></i>
                                        </a>
                                    </div>
                                </div>
                                <p className="fs-7 sm:fs-6">Have no account yet? <a className="uc-link" href="#" data-uc-switcher-item="1">Sign up</a></p>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                                <h4 className="h5 lg:h4 m-0">Create an account</h4>
                                <div className="panel vstack gap-2 w-100 sm:w-350px mx-auto">
                                    <form className="vstack gap-2">
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="text" placeholder="Full name" required/>
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="email" placeholder="Your email" required/>
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="password" placeholder="Password" autocomplete="new-password" required/>
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="password" placeholder="Re-enter Password" autocomplete="new-password" required/>
                                        <div className="hstack text-start">
                                            <div className="form-check text-start">
                                                <input id="input_checkbox_accept_terms" className="form-check-input rounded-0 dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="checkbox" required/>
                                                <label for="input_checkbox_accept_terms" className="hstack justify-between form-check-label fs-7 sm:fs-6">I read and accept the <a href="#" className="uc-link ms-narrow" data-uc-switcher-item="3">terms of use</a>. </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-sm lg:mt-1" type="submit">Sign up</button>
                                    </form>
                                    <div className="panel h-24px">
                                        <hr className="position-absolute top-50 start-50 translate-middle hr m-0 w-100"/>
                                        <span className="position-absolute top-50 start-50 translate-middle px-1 fs-7 text-uppercase bg-white dark:bg-gray-800">Or</span>
                                    </div>
                                    <div className="hstack gap-2">
                                        <a href="#google" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-google"></i>
                                        </a>
                                        <a href="#facebook" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-facebook"></i>
                                        </a>
                                        <a href="#twitter" className="hstack items-center justify-center flex-1 gap-1 h-40px text-none rounded border border-gray-900 dark:bg-gray-800 dark:border-white dark:border-opacity-15 border-opacity-10">
                                            <i className="icon icon-1 unicon-logo-x-filled"></i>
                                        </a>
                                    </div>
                                </div>
                                <p className="fs-7 sm:fs-6">Already have an account? <a className="uc-link" href="#" data-uc-switcher-item="0">Log in</a></p>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                                <h4 className="h5 lg:h4 m-0">Reset password</h4>
                                <div className="panel w-100 sm:w-350px">
                                    <form className="vstack gap-2">
                                        <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="email" placeholder="Your email" required/>
                                        <div className="form-check text-start">
                                            <input className="form-check-input rounded-0 dark:bg-gray-800 dark:border-white dark:border-opacity-15" type="checkbox" id="inputCheckVerify" required/>
                                            <label className="form-check-label fs-7 sm:fs-6" for="inputCheckVerify"> <span>I'm not a robot</span>. </label>
                                        </div>
                                        <button className="btn btn-primary btn-sm lg:mt-1" type="submit">Reset a password</button>
                                    </form>
                                </div>
                                <p className="fs-7 sm:fs-6 mt-2 sm:m-0">Remember your password? <a className="uc-link" href="#" data-uc-switcher-item="0">Log in</a></p>
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="panel vstack justify-center items-center gap-2 sm:gap-4">
                                <h4 className="h5 lg:h4 m-0">Terms of use</h4>
                                <div className="page-content panel fs-6 text-start max-h-400px overflow-scroll">
                                    <p>Terms of use dolor sit amet consectetur, adipisicing elit. Recusandae provident ullam aperiam quo ad non corrupti sit vel quam repellat ipsa quod sed, repellendus adipisci, ducimus ea modi odio assumenda.</p>
                                    <h5 className="h6 md:h5 mt-3 mb-1">Disclaimers</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                    <h5 className="h6 md:h5 mt-3 mb-1">Limitation on Liability</h5>
                                    <p>Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                    <h5 className="h6 md:h5 mt-3 mb-1">Copyright Policy</h5>
                                    <p>Dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                    <h5 className="h6 md:h5 mt-3 mb-1">General</h5>
                                    <p>Sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum.</p>
                                </div>
                                <p className="fs-7 sm:fs-6">Do you agree to our terms? <a className="uc-link" href="#" data-uc-switcher-item="1">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
