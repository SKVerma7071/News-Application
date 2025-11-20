import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// Sample data - you can move this to a separate file or fetch from API
const sliderData = [
  {
    id: 1,
    title: "Hidden Gems: Underrated Travel Destinations Around the World",
    image: "/assets/images/demo-seven/posts/image copy.png",
    placeholder: "/assets/images/common/image.png",
    description: "Full description about hidden travel gems...",
    content: "Detailed content about underrated travel destinations...",
  },
  {
    id: 2,
    title: "Eco-Tourism: Traveling Responsibly and Sustainably",
    image: "/assets/images/demo-seven/posts/image.png",
    placeholder: "/assets/images/common/image copy.png",
    description: "Full description about eco-tourism...",
    content: "Detailed content about sustainable travel practices...",
  },
  {
    id: 3,
    title:
      "Solo Travel: Some Tips and Destinations for the Adventurous Explorer",
    image: "/assets/images/demo-seven/posts/download (1).jpg",
    placeholder: "/assets/images/demo-seven/posts/download (1).jpg",
    description: "Full description about solo travel...",
    content: "Detailed content about solo travel tips and destinations...",
  },
  // Add more items as needed
];

export default function HeroSlider() {
  const navigate = useNavigate();

  const handleSlideClick = (post) => {
    // Navigate to detail page with post data
    navigate(`/blog/${post.id}`, { state: { post } });

    // Alternative: If using URL parameters only
    // navigate(`/blog/${post.id}`);
  };

  return (
    <div className="section panel overflow-hidden swiper-parent border-top">
      <div className="section-outer panel py-2 lg:py-4 dark:text-white">
        <div className="container max-w-xl">
          <div className="section-inner panel vstack gap-2">
            <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
              <div className="block-content panel">
                <div
                  className="swiper"
                  data-uc-swiper="items: 1; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-className: d-none;"
                  data-uc-swiper-s="items: 3; gap: 24;"
                  data-uc-swiper-l="items: 4; gap: 24;"
                >
                  <div className="swiper-wrapper">
                    {sliderData.map((post) => (
                      <div key={post.id} className="swiper-slide">
                        <div
                          onClick={() => handleSlideClick(post)}
                          style={{ cursor: "pointer" }}
                        >
                          <article className="post type-post panel uc-transition-toggle gap-2">
                            <div className="row child-cols g-2" data-uc-grid>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img
                                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                      src={post.placeholder}
                                      data-src={post.image}
                                      alt={post.title}
                                      data-uc-img="loading: lazy"
                                    />
                                  </div>
                                  <div className="position-cover"></div>
                                </div>
                              </div>
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <span className="text-none hover:text-primary duration-150">
                                      {post.title}
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                  <i
                    className="uil-angle-left"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                  {/* <i className="icon-1 unicon-chevron-right"></i> */}
                  <i
                    className="uil-angle-right"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
