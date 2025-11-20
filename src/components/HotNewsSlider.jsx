import React from 'react'

export default function HotNewsSlider() {
  return (
    <>|
     <div className="section panel overflow-hidden swiper-parent">
                <div className="section-outer panel py-4 lg:py-6 dark:text-white">
                    <div className="container max-w-xl">
                        <div className="section-inner panel vstack gap-2">
                            <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
                                <div className="block-header panel pt-1 border-top">
                                    <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">Hot now</h2>
                                </div>
                                <div className="block-content panel">
                                    <div className="swiper" data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-className: d-none;" data-uc-swiper-s="items: 3; gap: 24;" data-uc-swiper-l="items: 5; gap: 24;">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                                                src="\assets\images\common\image copy.png"
                                                                 data-src="\assets\images\common\image copy.png" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" href="blog-details.html">Hidden Gems: Underrated Travel Destinations Around the World</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>23d</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>15</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                                                src="\assets\images\demo-seven\posts\image.png"
                                                                 data-src="\assets\images\demo-seven\posts\image.png" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" href="blog-details.html">Eco-Tourism: Traveling Responsibly and Sustainably</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>29d</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>20</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                                                 src="\assets\images\common\download (1).jpg" 
                                                                 data-src="\images\common\download (1).jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" href="blog-details.html">Solo Travel: Some Tips and Destinations for the Adventurous Explorer</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>2mo</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>5</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                                                 src="\assets\images\demo-two\download (3).jpg"
                                                                  data-src="\assets\images\demo-two\download (3).jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" href="blog-details.html">AI-Powered Financial Planning: How Algorithms Revolutionizing</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>2mo</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>2</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                                                 src="\assets\images\demo-seven\posts\download (3).jpg" 
                                                                 data-src="\assets\images\demo-seven\posts\download (3).jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" href="blog-details.html">Tech Tools for your Time Management: Enhancing Productivity</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>3mo</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>19</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                                                 src="\assets\images\common\download (4).jpg" 
                                                                 data-src="\assets\images\common\download (4).jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" 
                                                                href="blog-details.html">A Guide to The Rise of Gourmet Street Food: Trends and Top Picks</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>6mo</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>2</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                                                 src="\assets\images\demo-two\download (3).jpg"
                                                                  data-src="\assets\images\demo-two\download (3).jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150"
                                                                 href="blog-details.html">Gaming in the Age of AI: Strategies for Startups</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>9mo</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>19</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle vstack gap-2">
                                                        <div className="post-media panel overflow-hidden">
                                                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                                                src="\assets\images\common\download (6).jpg"
                                                                 data-src="\assets\images\common\download (6).jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy"/>
                                                            </div>
                                                            <a href="blog-details.html" className="position-cover"></a>
                                                        </div>
                                                        <div className="post-header panel vstack gap-1">
                                                            <h3 className="post-title h6 m-0 text-truncate-2">
                                                                <a className="text-none hover:text-primary duration-150" 
                                                                href="blog-details.html">Top Independent Contractors to Invest in Best of Startups</a>
                                                            </h3>
                                                            <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                                                <div>
                                                                    <div className="post-date hstack gap-narrow">
                                                                        <span>1yr</span>
                                                                    </div>
                                                                </div>
                                                                <div>·</div>
                                                                <div>
                                                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                                                        <i className="icon-narrow unicon-chat"></i>
                                                                        <span>12</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1">
                                        <i className="icon-1 unicon-chevron-left"></i>
                                    </div>
                                    <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1">
                                        <i className="icon-1 unicon-chevron-right"></i>
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
