import { useEffect, useState } from "react";

export default function LatestNewsSection() {
  const [newsList, setNewsList] = useState([]);

  // ---- SHARE FUNCTION ----
  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  useEffect(() => {
    const hindiNews = [
      {
        title: "एआई की नई क्रांति: कैसे बदल रही है हमारी ज़िंदगी",
        desc: "एआई तकनीक अब रोजमर्रा की जिंदगी में बड़ा बदलाव ला रही है। जानिए इसके फायदे और चुनौतियां...",
        img: "https://vktechnicalbhaiya.com/wp-content/uploads/2025/10/ai-in-india-2025-1024x576.webp",
      },
      {
        title: "भारत में डिजिटल पेमेंट्स की तेजी से बढ़ती लोकप्रियता",
        desc: "डिजिटल पेमेंट के बढ़ते उपयोग ने देश की अर्थव्यवस्था को नई दिशा दी है...",
        img: "https://images.tv9hindi.com/wp-content/uploads/2025/07/how-upi-made-india-a-global-leader-in-digital-payments-in-2025.jpg?w=1280",
      },
      {
        title: "काम और सेहत में संतुलन: टेक्नोलॉजी कैसे मदद कर रही है",
        desc: "नई टेक सॉल्यूशन से सेहत और प्रोडक्टिविटी दोनों में सुधार...",
        img: "https://images.yourstory.com/cs/12/087c64901fd011eaa59d31af0875fe47/balancing-technology-and-health-digital-evolution-in-self-health-care-1695520618422.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=750&q=75",
      },
      {
        title: "बेहतर नींद के लिए स्मार्ट डिवाइसेज की भूमिका",
        desc: "नींद ट्रैकिंग डिवाइस आपके सोने के पैटर्न को समझने में मदद करते हैं...",
        img: "https://www.health.com/thmb/1Lu--Z-mL2wslnGUWEQQoJCHQxI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-HealthiestWayToSleep-b0a2363c9cfb4ab3b2ab5d394f592b14.jpg",
      },
      {
        title: "सस्टेनेबल जीवनशैली: भविष्य का नया रास्ता",
        desc: "इको-फ्रेंडली लाइफस्टाइल अपनाने वाले लोगों की संख्या बढ़ रही है...",
        img: "https://ethikainc.com/cdn/shop/articles/Sustainability_and_AI_Shaping_a_Greener_Lifestyle_for_the_Future.png?v=1689624985",
      },
    ];

    setNewsList(hindiNews);
  }, []);

  return (
    <>
      <div id="latest_news" className="latest-news section panel">
        <div className="section-outer panel py-4 lg:py-6">
          <div className="container max-w-xl">
            <div className="section-inner">
              <div className="content-wrap row child-cols-12 g-4 lg:g-6" data-uc-grid>
                <div className="md:col-9">
                  <div className="main-wrap panel vstack gap-3 lg:gap-6">
                    <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
                      <div className="block-header panel pt-1 border-top">
                        <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                          Latest
                        </h2>
                      </div>

                      <div className="block-content">
                        <div className="row child-cols-12 g-2 lg:g-4 sep-x">
                          
                          {/* ---- NEWS LOOP WITH SHARE BUTTON ---- */}
                          {newsList.map((item, index) => (
                            <div key={index}>
                              <article className="post type-post panel uc-transition-toggle">
                                <div className="row child-cols g-2 lg:g-3" data-uc-grid>
                                  
                                  <div className="col-auto">
                                    <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                      <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                        <img
                                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                          src="/assets/images/common/img-fallback.png"
                                          data-src={item.img}
                                          alt={item.title}
                                          data-uc-img="loading: lazy"
                                        />
                                      </div>
                                      <a href="blog-details.html" className="position-cover"></a>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="post-header panel vstack justify-between gap-1">
                                      <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                        <a className="text-none hover:text-primary duration-150" href="blog-details.html">
                                          {item.title}
                                        </a>
                                      </h3>
                                    </div>

                                    <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                      {item.desc}
                                    </p>

                                    {/* ---- READ MORE + SHARE BUTTON ---- */}
                                    <div className="post-link hstack items-center gap-3">
                                      <a
                                        href="blog-details.html"
                                        className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white"
                                      >
                                        <span>और पढ़ें</span>
                                      </a>

                                      <button
                                        onClick={() => handleShare(item)}
                                        className="p-1 rounded-circle bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
                                        style={{ border: "none" }}
                                      >
                                        <i className="uil-share-alt" style={{ fontSize: "20px" }}></i>
                                      </button>
                                    </div>

                                  </div>
                                </div>
                              </article>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="block-footer cstack lg:mt-2">
                        <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white border w-100">
                          <span>Load more posts</span>
                          <i className="uil-angle-right" style={{ fontSize: "30px", marginLeft: "20px" }}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="md:col-3">
                  <div
                    className="sidebar-wrap panel vstack gap-2 pb-2"
                    data-uc-sticky="end: .content-wrap; offset: 150; media: @m;"
                  >
                    <div className="widget ad-widget vstack gap-2 text-center p-2 border">
                      <div className="widgt-content">
                        <a
                          className="cstack max-w-300px mx-auto text-none"
                          href="https://themeforest.net/user/reacthemes/portfolio"
                          target="_blank"
                          rel="nofollow"
                        >
                          <img
                            className="d-block dark:d-none"
                            src="https://www.clickadu.com/wp-content/uploads/2024/10/ad_slot_seo_creatives_2-1024x536.png"
                            alt="Ad slot"
                          />
                          <img
                            className="d-none dark:d-block"
                            src="https://www.clickadu.com/wp-content/uploads/2024/10/ad_slot_seo_creatives_2-1024x536.png"
                            alt="Ad slot"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="widget popular-widget vstack gap-2 p-2 border">
                      <div className="widget-title text-center">
                        <h5 className="fs-7 ft-tertiary text-uppercase m-0">
                          Popular now
                        </h5>
                      </div>
                      <div className="widget-content">
                        <div
                          className="row child-cols-12 gx-4 gy-3 sep-x"
                          data-uc-grid
                        >
                          <div>
                            <article className="post type-post panel uc-transition-toggle">
                              <div
                                className="row child-cols g-2 lg:g-3"
                                data-uc-grid
                              >
                                <div>
                                  <div className="hstack items-start gap-3">
                                    <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
                                      1
                                    </span>
                                    <div className="post-header panel vstack justify-between gap-1">
                                      <h3 className="post-title h6 m-0">
                                        <a
                                          className="text-none hover:text-primary duration-150"
                                          href="blog-details.html"
                                        >
                                          Virtual Reality and Mental Health:
                                          Exploring the Therapeutic
                                        </a>
                                      </h3>
                                      <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                        <div className="meta">
                                          <div className="hstack gap-2">
                                            <div>
                                              <div className="post-date hstack gap-narrow">
                                                <span>2mo ago</span>
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle">
                              <div
                                className="row child-cols g-2 lg:g-3"
                                data-uc-grid
                              >
                                <div>
                                  <div className="hstack items-start gap-3">
                                    <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
                                      2
                                    </span>
                                    <div className="post-header panel vstack justify-between gap-1">
                                      <h3 className="post-title h6 m-0">
                                        <a
                                          className="text-none hover:text-primary duration-150"
                                          href="blog-details.html"
                                        >
                                          The Future of Sustainable Living:
                                          Driving Eco-Friendly Lifestyles
                                        </a>
                                      </h3>
                                      <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                        <div className="meta">
                                          <div className="hstack gap-2">
                                            <div>
                                              <div className="post-date hstack gap-narrow">
                                                <span>2mo ago</span>
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
                                                <span>1</span>
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle">
                              <div
                                className="row child-cols g-2 lg:g-3"
                                data-uc-grid
                              >
                                <div>
                                  <div className="hstack items-start gap-3">
                                    <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
                                      3
                                    </span>
                                    <div className="post-header panel vstack justify-between gap-1">
                                      <h3 className="post-title h6 m-0">
                                        <a
                                          className="text-none hover:text-primary duration-150"
                                          href="blog-details.html"
                                        >
                                          Smart Homes, Smarter Living: Exploring
                                          IoT and AI
                                        </a>
                                      </h3>
                                      <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                        <div className="meta">
                                          <div className="hstack gap-2">
                                            <div>
                                              <div className="post-date hstack gap-narrow">
                                                <span>23d ago</span>
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle">
                              <div
                                className="row child-cols g-2 lg:g-3"
                                data-uc-grid
                              >
                                <div>
                                  <div className="hstack items-start gap-3">
                                    <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
                                      4
                                    </span>
                                    <div className="post-header panel vstack justify-between gap-1">
                                      <h3 className="post-title h6 m-0">
                                        <a
                                          className="text-none hover:text-primary duration-150"
                                          href="blog-details.html"
                                        >
                                          How Businesses Are Adapting to
                                          E-Commerce and AI Integration
                                        </a>
                                      </h3>
                                      <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                        <div className="meta">
                                          <div className="hstack gap-2">
                                            <div>
                                              <div className="post-date hstack gap-narrow">
                                                <span>29d ago</span>
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
                                                <span>20</span>
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
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget social-widget vstack gap-2 text-center p-2 border">
                      <div className="widgt-title">
                        <h4 className="fs-7 ft-tertiary text-uppercase m-0">
                          Follow @News5
                        </h4>
                      </div>
                      <div className="widgt-content">
                        <form className="vstack gap-1">
                          <input
                            className="form-control form-control-sm fs-6 fw-medium h-40px w-full bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15"
                            type="email"
                            placeholder="Your email"
                            required=""
                          />
                          <button
                            className="btn btn-sm btn-primary"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </form>
                        <ul className="nav-x justify-center gap-1 mt-3">
                          <li>
                            <a
                              href="#fb"
                              className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
                            >
                              <i
                                className="uil-facebook-f"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#x"
                              className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
                            >
                              <i
                                className="uil-twitter"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#in"
                              className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
                            >
                              <i
                                className="uil-instagram"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#yt"
                              className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150"
                            >
                              <i
                                className="uil-youtube"
                                style={{ fontSize: "20px" }}
                              ></i>
                              {/* <i className="icon icon-1 unicon-logo-youtube"></i> */}
                            </a>
                          </li>
                        </ul>
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
