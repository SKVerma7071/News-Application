import React from "react";
import { useModal } from "./context/ModalContext";

export default function Header() {
  const { openModal } = useModal();

  // Navigation items data
  const navItems = [
    { href: "/", label: "Home" },
    { href: "about-us", label: "About" },
    { href: "edu-news", label: "Education News & Update" },
    { href: "study-resources", label: "Study Resources" },
    { href: "video-lectures", label: "Video Lecture" },
    { href: "scholarship", label: "Scholarship & Career" },
    { href: "institution-directory", label: "Institution Directory" },
    { href: "knowledge-hub", label: "Knowledge Hub" },
    { href: "contactus", label: "Contact Us" },
    { href: "admin", label: "Admin" },
  ];

  // Ticker items data
  const tickerItems = [
    "The Rise of AI-Powered Personal Assistants: How They Manage",
    "Tech Innovations Reshaping the Retail Landscape: AI Payments",
    "Balancing Work and Wellness: Tech Solutions for Healthy",
    "The Importance of Sleep: Tips for Better Rest and Recovery",
    "The Future of Sustainable Living: Driving Eco-Friendly Lifestyles",
    "Business Agility the Digital Age: Leveraging AI and Automation",
  ];

  // Category dropdown data
  const categorySections = [
    {
      items: ["Trending", "Politics", "Opinions", "World", "Media"],
    },
    {
      items: ["Tech", "Business", "Fashion", "Arts", "Food"],
    },
    {
      items: ["Economy", "Finance", "Education", "Health", "National"],
    },
    {
      items: ["E-Books", "Press", "Podcasts", "Entertainments", "Weather"],
    },
  ];

  return (
    <header
      className="uc-header header-seven uc-navbar-sticky-wrap z-999"
      data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav className="uc-navbar-container text-gray-900 dark:text-white fs-6 z-1">
        {/* Top Ticker Bar */}
        <div
          className="uc-top-navbar panel z-3 overflow-hidden bg-primary-600 swiper-parent"
          data-uc-navbar="animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="container container-full">
            <div className="uc-navbar-item">
              <div
                className="swiper swiper-ticker swiper-ticker-sep px-2"
                data-uc-swiper="items: auto; gap: 32; center: true; center-bounds: true; autoplay: 10000; speed: 10000; autoplay-delay: 0.1; loop: true; allowTouchMove: false; freeMode: true; autoplay-disableOnInteraction: true;"
              >
                <div className="swiper-wrapper">
                  {tickerItems.map((title, index) => (
                    <div key={index} className="swiper-slide text-white">
                      <div className="type-post post panel">
                        <a
                          href="blog-details.html"
                          className="fs-7 fw-normal text-none text-inherit"
                        >
                          {title}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <div
          className="uc-center-navbar panel hstack z-2 min-h-48px d-none lg:d-flex"
          data-uc-navbar="animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="container max-w-xl">
            <div className="navbar-container hstack border-bottom">
              <div className="uc-navbar-center gap-2 lg:gap-3 flex-1">
                <ul className="uc-navbar-nav gap-2 justify-between flex-1 fs-6 fw-bold">
                  {/* Categories Dropdown */}
                  <li>
                    {/* <a href="#">
                      <span className="icon-1 unicon-finance"></span>
                    </a> */}
                    <div
                      className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar"
                      data-uc-drop="offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                    >
                      <div className="row child-cols col-match g-2">
                        {categorySections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="col-2">
                            <ul className="uc-nav uc-navbar-dropdown-nav">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a href="blog-category">{item}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div>
                          <div className="uc-navbar-newsletter panel vstack">
                            <h6 className="fs-6 ft-tertiary fw-medium">
                              Newsletter
                            </h6>
                            <form className="hstack gap-1 bg-gray-300 bg-opacity-10">
                              <input
                                type="email"
                                className="form-control-plaintext form-control-xs fs-6 dark:text-white"
                                placeholder="Your email address.."
                              />
                              <button
                                type="submit"
                                className="btn btn-sm btn-primary fs-6 rounded-0"
                              >
                                Subscribe
                              </button>
                            </form>
                            <p className="fs-7 mt-1">
                              Do not worry, we don't spam!
                            </p>
                            <ul className="nav-x gap-2 mt-3">
                              {[
                                "facebook",
                                "x-filled",
                                "instagram",
                                "youtube",
                              ].map((platform) => (
                                <li key={platform}>
                                  <a href={`#${platform}`}>
                                    <i
                                      className={`icon icon-2 unicon-logo-${platform}`}
                                    ></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Main Navigation Items */}
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="uc-bottom-navbar panel z-1">
          <div className="container max-w-xl">
            <div
              className="uc-navbar min-h-72px lg:min-h-100px"
              data-uc-navbar="animation: uc-animation-slide-top-small; duration: 150;"
            >
              {/* Left Section */}
              <div className="uc-navbar-left">
                <div>
                  <a
                    className="uc-menu-trigger icon-2"
                    onClick={() => openModal("menu")}
                    data-uc-toggle
                  ></a>
                </div>
                <div className="uc-navbar-item d-none lg:d-inline-flex">
                  <a
                    className="btn btn-xs gap-narrow ps-1 border rounded-pill fw-bold dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900"
                    href="#live_now"
                    data-uc-scroll="offset: 128"
                  >
                    {/* <i
                      className="icon icon-narrow unicon-dot-mark text-red"
                      data-uc-animate="flash"
                    ></i> */}
                    <i className="uil-circle live-dot"></i>
                    <span>Live</span>
                  </a>
                </div>
                <div className="uc-logo d-block md:d-none">
                  <a href="index.html">
                    <img
                      className="w-100px text-dark dark:text-white"
                      src="/images/demo-seven/common/logo.png"
                      alt="News5"
                      data-uc-svg
                    />
                  </a>
                </div>
              </div>

              {/* Center Logo */}
              <div className="uc-navbar-center">
                <div className="uc-logo d-none md:d-block">
                  <a href="index.html">
                    <img
                      className="w-150px text-dark dark:text-white"
                      src="/images/demo-seven/common/logo.png"
                      alt="News5"
                      data-uc-svg
                    />
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="uc-navbar-right gap-2 lg:gap-3">
                <div className="uc-navbar-item d-inline-flex lg:d-none">
                  <a
                    className="btn btn-xs gap-narrow ps-1 border rounded-pill fw-bold dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900"
                    href="#live_now"
                    data-uc-scroll="offset: 128"
                  >
                    {/* <i
                      className="icon icon-narrow unicon-dot-mark text-red"
                      data-uc-animate="flash"
                    ></i> */}
                    <i className="uil-circle live-dot"></i>
                    <span>Live</span>
                  </a>
                </div>

                {/* Action Icons */}
                {[
                  // {
                  //   className: "uc-cart-trigger",
                  //   icon: "unicon-shopping-basket",
                  //   href: "#uc-cart-panel",
                  // },
                  {
                    className: "uc-account-trigger d-none lg:d-inline-flex",
                    icon: "uil-user-circle",
                    href: "/admin",
                    name: "Admin",
                  },
                  // {
                  //   className:
                  //     "uc-search-trigger cstack text-none text-dark dark:text-white d-none lg:d-inline-flex",
                  //   icon: "unicon-search",
                  //   href: "#uc-search-modal",
                  // },
                ].map((action, index) => (
                  <div
                    key={index}
                    className={`uc-navbar-item ${
                      action.className.includes("d-none")
                        ? action.className.split(" ")[2]
                        : ""
                    }`}
                  >
                    <a
                      className={`${
                        action.className.split(" ")[0]
                      } position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white`}
                      href={action.href}
                      data-uc-toggle
                    >
                      <i
                        className={`${action.icon}`}
                        style={{ fontSize: "35px" }}
                      ></i>
                      <spa>{action.name}</spa>
                    </a>
                  </div>
                ))}

                {/* Dark Mode Toggle */}
                {/* <div className="uc-navbar-item d-none lg:d-inline-flex">
                  <div
                    className="uc-modes-trigger btn btn-xs w-32px h-32px p-0 border fw-normal rounded-circle dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900"
                    data-darkmode-toggle=""
                  >
                    <label className="switch">
                      <span className="sr-only">Dark toggle</span>
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
