import { Link, useParams } from 'react-router-dom';

export default function BlogCategory() {
  const { category } = useParams();
  const currentYear = new Date().getFullYear();

  // Sample data for different categories
  const categoryData = {
   politics: {
  title: "Politics",
  description: "Showed 15 posts out of 20 total under Politics category.",
  posts: [
    { 
      id: 1, 
      title: "Election Reforms: How Policy Changes Could Shape the Future", 
      image: "https://vajiramandravi.com/upsc-exam/wp-content/uploads/2025/02/Electoral-Reforms-in-India-1536x922.webp", 
      category: "Politics", 
      author: "Sarah Eddrissi", 
      authorImg: "/assets/images/avatars/03.png", 
      date: `Mar 8, ${currentYear}`, 
      comments: 0 
    },
    { 
      id: 2, 
      title: "Government Spending 2025: Key Budget Priorities Explained", 
      image: "https://images.indianexpress.com/2025/02/budget-2025-upsc.jpg?w=640", 
      category: "Politics", 
      author: "Anna Luis", 
      authorImg: "/assets/images/avatars/04.png", 
      date: `Mar 7, ${currentYear}`, 
      comments: 1 
    },
    { 
      id: 3, 
      title: "Foreign Policy Shifts: How International Relations Are Evolving", 
      image: "https://pwonlyias.com/wp-content/uploads/2023/12/indias-foreign-policy-65785d0a6b552-1568x882.webp", 
      category: "Politics", 
      author: "David Peterson", 
      authorImg: "/assets/images/avatars/01.png", 
      date: `Feb 8, ${currentYear}`, 
      comments: 20 
    },
    { 
      id: 4, 
      title: "State Elections 2025: Major Issues Influencing Voter Decisions", 
      image: "https://www.newsonair.gov.in/wp-content/uploads/2025/11/Bihar-vote-english-1-1-1-1024x576.jpeg", 
      category: "Politics", 
      author: "Anna Luis", 
      authorImg: "/assets/images/avatars/04.png", 
      date: "Dec 8, 2023", 
      comments: 19 
    },
  ]
}

  };

  const currentCategory = categoryData[category] || categoryData.politics;

  return (
    <div id="wrapper" className="wrap overflow-hidden-x">
      {/* Breadcrumbs */}
      <div className="breadcrumbs panel z-1 py-2 bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white">
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center gap-1 fs-7 sm:fs-6 m-0">
            <li><Link to="/">Home</Link></li>
            <li><i className="unicon-chevron-right opacity-50"></i></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><i className="unicon-chevron-right opacity-50"></i></li>
            <li><span className="opacity-50">{currentCategory.title}</span></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="section py-3 sm:py-6 lg:py-9">
        <div className="container max-w-xl">
          <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
            <header className="page-header panel vstack text-center">
              <h1 className="h3 lg:h1">Category: {currentCategory.title}</h1>
              <span className="m-0 opacity-60">{currentCategory.description}</span>
            </header>
            
            <div className="row g-4 xl:g-8">
              <div className="col">
                <div className="panel text-center">
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                    {currentCategory.posts.map((post) => (
                      <div key={post.id}>
                        <article className="post type-post panel vstack gap-2">
                          <div className="post-image panel overflow-hidden">
                            <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img 
                                className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                src={post.image} 
                                data-src={post.image} 
                                alt={post.title}
                                data-uc-img="loading: lazy" 
                              />
                              <Link to={`/blog/${post.id}`} className="position-cover" data-caption={post.title}></Link>
                            </figure>
                            <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                              <Link className="text-none" to={`/blog-category/${post.category.toLowerCase()}`}>
                                {post.category}
                              </Link>
                            </div>
                            <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                            <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                              <i className="icon-narrow unicon-play-filled-alt"></i>
                            </span>
                          </div>
                          
                          <div className="post-header panel vstack gap-1 lg:gap-2">
                            <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                              <Link className="text-none" to={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <div>
                              <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <div className="meta">
                                  <div className="hstack gap-2">
                                    <div>
                                      <div className="post-author hstack gap-1">
                                        <Link to={`/author/${post.author.toLowerCase().replace(' ', '-')}`} data-uc-tooltip={post.author}>
                                          <img src={post.authorImg} alt={post.author} className="w-24px h-24px rounded-circle" />
                                        </Link>
                                        <Link to={`/author/${post.author.toLowerCase().replace(' ', '-')}`} className="text-black dark:text-white text-none fw-bold">
                                          {post.author}
                                        </Link>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="post-date hstack gap-narrow">
                                        <span>{post.date}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <Link to={`/blog/${post.id}#post_comment`} className="post-comments text-none hstack gap-narrow">
                                        <i className="icon-narrow unicon-chat"></i>
                                        <span>{post.comments}</span>
                                      </Link>
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
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                    <ul className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
                      <li className="uc-first-column">
                        <Link to="#"><span className="icon icon-1 unicon-chevron-left"></span></Link>
                      </li>
                      <li><Link to="#">1</Link></li>
                      <li><Link to="#" className="uc-active">2</Link></li>
                      <li><Link to="#">3</Link></li>
                      <li className="uc-disabled"><span>…</span></li>
                      <li><Link to="#">8</Link></li>
                      <li><Link to="#">9</Link></li>
                      <li>
                        <Link to="#"><span className="icon icon-1 unicon-chevron-right"></span></Link>
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
  );
}