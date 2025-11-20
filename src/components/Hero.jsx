import React from "react";

export default function Hero() {
  return (
    <>
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              <div className="section-content">
                <div className="row child-col-12 lg:child-cols g-4 lg:g-6 col-match">
                  <div className="lg:col-9">
                    <div className="block-layout slider-layout swiper-parent uc-dark">
                      <div className="block-content panel uc-visible-toggle">
                        <div
                          className="swiper"
                          data-uc-swiper="items: 1; active: 1; gap: 4; prev: .nav-prev; next: .nav-next; autoplay: 6000; parallax: true; fade: true; effect: fade; disable-className: d-none;"
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                                <div className="post-media panel overflow-hidden h-100">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                    <canvas className="h-100 w-100"></canvas>
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="/assets/images/common/image.png"
                                      data-src="\assets\images\common\download (2).jpg"
                                      alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="/assets/images/common/image.png"
                                      data-src="/assets/images/common/image.png"
                                      alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                </div>
                                <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                                <div
                                  className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white"
                                  data-swiper-parallax-y="-24"
                                >
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>2mo</span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                    <a
                                      className="text-none text-white"
                                      href="blog-details.html"
                                    >
                                      Solo Travel: Some Tips and Destinations
                                      for the Adventurous Explorer
                                    </a>
                                  </h3>
                                  <div>
                                    <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
                                      <div className="meta">
                                        <div className="hstack gap-2">
                                          <div>
                                            <div className="post-author hstack gap-1">
                                              <a
                                                href="page-author.html"
                                                data-uc-tooltip="Peter Sawyer"
                                              >
                                                <img
                                                  src="/images/avatars/01.png"
                                                  alt="Peter Sawyer"
                                                  className="w-24px h-24px rounded-circle"
                                                />
                                              </a>
                                              <a
                                                href="page-author.html"
                                                className="text-black dark:text-white text-none fw-bold"
                                              >
                                                Peter Sawyer
                                              </a>
                                            </div>
                                          </div>
                                          <div>
                                            <a
                                              href="#post_comment"
                                              className="post-comments text-none hstack gap-narrow"
                                            >
                                              {/* <i className="icon-narrow unicon-chat"></i> */}
                                              <i
                                                className="uil-comment"
                                                style={{ fontSize: "20px" }}
                                              ></i>
                                              <span>5</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="actions">
                                        <div className="hstack gap-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="swiper-slide">
                              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                                <div className="post-media panel overflow-hidden h-100">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                    <canvas className="h-100 w-100"></canvas>
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="\assets\images\common\download (2).jpg"
                                      data-src="\assets\images\common\download (2).jpg"
                                      alt="Gaming in the Age of AI: Strategies for Startups"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="\assets\images\common\download (2).jpg"
                                      data-src="\assets\images\common\download (2).jpg"
                                      alt="Gaming in the Age of AI: Strategies for Startups"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                </div>
                                <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                                <div
                                  className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white"
                                  data-swiper-parallax-y="-24"
                                >
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>9mo</span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                    <a
                                      className="text-none text-white"
                                      href="blog-details.html"
                                    >
                                      Gaming in the Age of AI: Strategies for
                                      Startups
                                    </a>
                                  </h3>
                                  <div>
                                    <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
                                      <div className="meta">
                                        <div className="hstack gap-2">
                                          <div>
                                            <div className="post-author hstack gap-1">
                                              <a
                                                href="page-author.html"
                                                data-uc-tooltip="Peter Sawyer"
                                              >
                                                <img
                                                  src="/assets/images/avatars/02.png"
                                                  alt="Peter Sawyer"
                                                  className="w-24px h-24px rounded-circle"
                                                />
                                              </a>
                                              <a
                                                href="page-author.html"
                                                className="text-black dark:text-white text-none fw-bold"
                                              >
                                                Peter Sawyer
                                              </a>
                                            </div>
                                          </div>
                                          <div>
                                            <a
                                              href="#post_comment"
                                              className="post-comments text-none hstack gap-narrow"
                                            >
                                              {/* <i className="icon-narrow unicon-chat"></i>
                                               */}
                                              <i
                                                className="uil-comment"
                                                style={{ fontSize: "20px" }}
                                              ></i>
                                              <span>19</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="actions">
                                        <div className="hstack gap-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="swiper-slide">
                              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                                <div className="post-media panel overflow-hidden h-100">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                    <canvas className="h-100 w-100"></canvas>
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="\assets\images\common\download (5).jpg"
                                      data-src="\assets\images\common\download (5).jpg"
                                      alt="Virtual Reality and Mental Health: Exploring the Therapeutic"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="/assets/images/common/img-fallback.png"
                                      data-src="/assets/images/demo-seven/posts/img-18.jpg"
                                      alt="Virtual Reality and Mental Health: Exploring the Therapeutic"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                </div>
                                <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                                <div
                                  className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white"
                                  data-swiper-parallax-y="-24"
                                >
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>2mo</span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                    <a
                                      className="text-none text-white"
                                      href="blog-details.html"
                                    >
                                      Virtual Reality and Mental Health:
                                      Exploring the Therapeutic
                                    </a>
                                  </h3>
                                  <div>
                                    <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
                                      <div className="meta">
                                        <div className="hstack gap-2">
                                          <div>
                                            <div className="post-author hstack gap-1">
                                              <a
                                                href="page-author.html"
                                                data-uc-tooltip="Nisi Nyung"
                                              >
                                                <img
                                                  src="/assets/images/avatars/08.png"
                                                  alt="Nisi Nyung"
                                                  className="w-24px h-24px rounded-circle"
                                                />
                                              </a>
                                              <a
                                                href="page-author.html"
                                                className="text-black dark:text-white text-none fw-bold"
                                              >
                                                Nisi Nyung
                                              </a>
                                            </div>
                                          </div>
                                          <div>
                                            <a
                                              href="#post_comment"
                                              className="post-comments text-none hstack gap-narrow"
                                            >
                                              {/* <i className="icon-narrow unicon-chat"></i> */}
                                              <i
                                                className="uil-comment"
                                                style={{ fontSize: "20px" }}
                                              ></i>
                                              <span>290</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="actions">
                                        <div className="hstack gap-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                            <div className="swiper-slide">
                              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                                <div className="post-media panel overflow-hidden h-100">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                    <canvas className="h-100 w-100"></canvas>
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="\assets\images\common\download (1) (1).jpg"
                                      data-src="\assets\images\common\download (1) (1).jpg"
                                      alt="Smart Homes, Smarter Living: Exploring IoT and AI"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src="\assets\images\common\download (1) (1).jpg"
                                      data-src="\assets\images\common\download (1) (1).jpg"
                                      alt="Smart Homes, Smarter Living: Exploring IoT and AI"
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                </div>
                                <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                                <div
                                  className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white"
                                  data-swiper-parallax-y="-24"
                                >
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>23d</span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                    <a
                                      className="text-none text-white"
                                      href="blog-details.html"
                                    >
                                      Smart Homes, Smarter Living: Exploring IoT
                                      and AI
                                    </a>
                                  </h3>
                                  <div>
                                    <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
                                      <div className="meta">
                                        <div className="hstack gap-2">
                                          <div>
                                            <div className="post-author hstack gap-1">
                                              <a
                                                href="page-author.html"
                                                data-uc-tooltip="David Peterson"
                                              >
                                                <img
                                                  src="/assets/images/avatars/01.png"
                                                  alt="David Peterson"
                                                  className="w-24px h-24px rounded-circle"
                                                />
                                              </a>
                                              <a
                                                href="page-author.html"
                                                className="text-black dark:text-white text-none fw-bold"
                                              >
                                                David Peterson
                                              </a>
                                            </div>
                                          </div>
                                          <div>
                                            <a
                                              href="#post_comment"
                                              className="post-comments text-none hstack gap-narrow"
                                            >
                                              <i
                                                className="uil-comment"
                                                style={{ fontSize: "20px" }}
                                              ></i>
                                              <span>15</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="actions">
                                        <div className="hstack gap-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle-y btn btn-alt-primary text-black rounded-circle p-0 mx-2 border-0 shadow-xs w-32px h-32px z-1 uc-hidden-hover">
                          <i
                            className="uil-angle-left"
                            style={{ fontSize: "20px" }}
                          ></i>{" "}
                        </div>
                        <div className="swiper-nav nav-next position-absolute top-50 end-0 translate-middle-y btn btn-alt-primary text-black rounded-circle p-0 mx-2 border-0 shadow-xs w-32px h-32px z-1 uc-hidden-hover">
                          <i
                            className="uil-angle-right"
                            style={{ fontSize: "20px" }}
                          ></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-3">
                    <div className="panel cstack gap-2 h-100">
                      <div>
                        <div className="widget ad-widget vstack gap-2">
                          <div className="widget-title text-center">
                            <h5 className="fs-7 ft-tertiary text-uppercase m-0">
                              Sponsore
                            </h5>
                          </div>
                          <div className="widget-content">
                            <a
                              className="cstack max-w-300px mx-auto text-none"
                              href="https://themeforest.net/user/reacthemes/portfolio"
                              target="_blank"
                              rel="nofollow"
                            >
                              <img
                                className="d-none sm:d-block"
                                src="/assets/images/common/ad-desktop.jpg"
                                alt="Ad slot"
                              />
                              <img
                                className="d-block sm:d-none"
                                src="/assets/images/common/ad-mobile.jpg"
                                alt="Ad slot"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
