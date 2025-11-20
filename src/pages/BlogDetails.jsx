import React from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

// Sample blog data
const blogPosts = {
  1: {
    id: 1,
    title: "The Rise of Gourmet Street Food: Trends and Top Picks",
    image: "/assets/images/demo-seven/posts/post-full.jpg",
    category: "Strategy",
    author: "Amir Nisi",
    authorImage: "/assets/images/demo-two/posts/post-author.jpg",
    date: "February 28, 2025",
    tags: ["Food", "Life Style", "Tech", "Travel"],
    content: `
      <p>She started her blog exactly six months before I launched Camels &amp; Chocolate, and she really set the bar high for my own blog birthday, Y'all this summer! I've already been brainstorming party ideas … who wants to come? It's no coincidence that Buster Keaton and Charlot's movies of the and award-winning chefs about what exactly makes their hometowns In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. A range of amenities provides many things to do in Bellevue. About 40 percent of the city's population are minorities, which contributes to an overall diverse range of lifestyles and ideas.</p>
      <p class="mt-3">I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun.</p>
    `,
    description: "Discover the latest trends in gourmet street food and explore top picks from around the world."
  },
  2: {
    id: 2,
    title: "Hidden Gems: Underrated Travel Destinations Around the World",
    image: "/assets/images/demo-seven/posts/image copy.png",
    category: "Travel",
    author: "Travel Enthusiast",
    authorImage: "/assets/images/demo-two/posts/post-author.jpg",
    date: "February 14, 2025",
    tags: ["Travel", "Adventure", "Culture"],
    content: `
      <p>Discover the world's most beautiful underrated travel destinations that are off the beaten path.</p>
    `,
    description: "Explore hidden travel gems around the world"
  },
  // Add more posts as needed
};

export default function BlogDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const post = location.state?.post || blogPosts[id];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1>Post not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary mt-4"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();

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
            <li><Link to={`/blog-category/${post.category?.toLowerCase()}`}>{post.category}</Link></li>
            <li><i className="unicon-chevron-right opacity-50"></i></li>
            <li><span className="opacity-50">{post.title}</span></li>
          </ul>
        </div>
      </div>

      {/* Main Article */}
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">{post.title}</h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-logo-facebook icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-logo-x-filled icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-logo-linkedin icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-logo-pinterest icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-email icon-1"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-md p-0 border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                      <i className="unicon-link icon-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img 
                    className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                    src={post.image} 
                    data-src={post.image} 
                    alt={post.title}
                    data-uc-img="loading: lazy" 
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>

        <div className="panel position-relative mt-4 lg:mt-6 xl:mt-9">
          <div className="container">
            <div className="content-wrap row child-col-12 lg:child-cols g-4 lg:g-6">
              {/* Main Content */}
              <div className="lg:col-8 uc-first-column">
                <div className="max-w-lg">
                  {/* Post Content */}
                  <div className="post-content panel fs-6 md:fs-5" data-uc-lightbox="animation: scale">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    
                    {/* Additional content sections from your HTML */}
                    <div className="panel mt-3">
                      <figure className="float-end ms-3 mb-1">
                        <figure className="featured-image m-0 ratio ratio-1x1 sm:w-300px rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img 
                            className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                            src="/assets/images/demo-two/posts/post-1.jpg" 
                            data-src="/assets/images/demo-two/posts/post-1.jpg" 
                            alt="Holding flower, by Anthony Tran" 
                            data-uc-img="loading: lazy" 
                          />
                          <a href="/assets/images/demo-two/posts/post-1.jpg" className="position-cover" data-caption="Holding flower, by Anthony Tran" role="button"></a>
                        </figure>
                        <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Holding flower, by Anthony Tran
                        </figcaption>
                      </figure>
                      <p>Bike paths and sidewalks make getting to and from the city's many festivals, museums, restaurants and music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the city's population are minorities, which contributes to an overall diverse range of lifestyles and ideas.</p>
                      <p className="mt-3">While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun.</p>
                      <p className="mt-3">In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words.</p>
                    </div>

                    <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Capital of Texas</h4>
                    <p>Visual storytelling is simply the way most brands will decide to go in 2016 &amp; beyond, as they try to tell their story to their customers the oldest and most important unwritten rule in film industry says that you shouldn't rely much on words to tell your story. In fact, you should rely on them as less as possible. It's no coincidence that Buster Keaton and Charlot's movies remain among the biggest classic movies of all time. In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words.</p>
                    
                    {/* Continue with the rest of your content structure */}
                  </div>

                  {/* Post Footer - Tags and Share */}
                  <div className="post-footer panel vstack sm:hstack gap-3 justify-between border-top py-4 mt-4 xl:py-9 xl:mt-9">
                    <ul className="nav-x gap-narrow text-primary">
                      <li><span className="text-black dark:text-white me-narrow">Tags:</span></li>
                      {post.tags?.map((tag, index) => (
                        <li key={index}>
                          <a href="#" className="uc-link gap-0 dark:text-white">
                            {tag}
                            {index < post.tags.length - 1 && <span className="text-black dark:text-white">,</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="post-share-icons nav-x gap-narrow">
                      <li className="me-1"><span className="text-black dark:text-white">Share:</span></li>
                      <li>
                        <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                          <i className="unicon-logo-facebook icon-1"></i>
                        </a>
                      </li>
                      <li>
                        <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                          <i className="unicon-logo-x-filled icon-1"></i>
                        </a>
                      </li>
                      <li>
                        <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                          <i className="unicon-email icon-1"></i>
                        </a>
                      </li>
                      <li>
                        <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                          <i className="unicon-link icon-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Author Bio */}
                  <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-10 rounded lg:rounded-2">
                    <div className="row g-4 items-center">
                      <div className="col-12 sm:col-5 xl:col-3">
                        <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img 
                            className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                            src={post.authorImage} 
                            data-src={post.authorImage} 
                            alt={post.author}
                            data-uc-img="loading: lazy" 
                          />
                        </figure>
                      </div>
                      <div className="col">
                        <div className="panel vstack items-start gap-2 md:gap-3">
                          <h4 className="h5 lg:h4 m-0">{post.author}</h4>
                          <p className="fs-6 lg:fs-5">Creative and experienced content writer with 6+ years of experience lazy to create unique content strategy for News5 to turn website visitors into customers.</p>
                          <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                            <li>
                              <a href="#medium"><i className="icon-2 unicon-logo-medium"></i></a>
                            </li>
                            <li>
                              <a href="#twitter"><i className="icon-2 unicon-logo-x-filled"></i></a>
                            </li>
                            <li>
                              <a href="#instagram"><i className="icon-2 unicon-logo-linkedin"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Navigation */}
                  <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9">
                    <div className="new-post panel hstack w-100 sm:w-1/2">
                      <div className="panel hstack justify-center w-100px h-100px">
                        <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img 
                            className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                            src="/assets/images/demo-two/posts/img-02.jpg" 
                            data-src="/assets/images/demo-two/posts/img-02.jpg" 
                            alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" 
                            data-uc-img="loading: lazy" 
                          />
                          <Link to="/blog/2" className="position-cover" data-caption="Tech Innovations Reshaping the Retail Landscape: AI Payments"></Link>
                        </figure>
                      </div>
                      <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                        <span className="fs-7 opacity-60">Prev Article</span>
                        <h6 className="h6 lg:h5 m-0">Tech Innovations Reshaping the Retail Landscape: AI Payments</h6>
                      </div>
                      <Link to="/blog/2" className="position-cover"></Link>
                    </div>
                    <div className="new-post panel hstack w-100 sm:w-1/2">
                      <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end">
                        <span className="fs-7 opacity-60">Next Article</span>
                        <h6 className="h6 lg:h5 m-0">The Rise of AI-Powered Personal Assistants: How They Manage</h6>
                      </div>
                      <div className="panel hstack justify-center w-100px h-100px">
                        <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img 
                            className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                            src="/assets/images/demo-two/posts/img-01.jpg" 
                            data-src="/assets/images/demo-two/posts/img-01.jpg" 
                            alt="The Rise of AI-Powered Personal Assistants: How They Manage" 
                            data-uc-img="loading: lazy" 
                          />
                          <Link to="/blog/3" className="position-cover" data-caption="The Rise of AI-Powered Personal Assistants: How They Manage"></Link>
                        </figure>
                      </div>
                      <Link to="/blog/3" className="position-cover"></Link>
                    </div>
                  </div>

                  {/* Related Posts */}
                  <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
                    <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
                    <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                      {/* Related post items */}
                      <div>
                        <article className="post type-post panel vstack gap-2">
                          <figure className="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img 
                              className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                              src="/assets/images/demo-two/posts/img-07.jpg" 
                              data-src="/assets/images/demo-two/posts/img-07.jpg" 
                              alt="The Art of Baking: From Classic Bread to Artisan Pastries" 
                              data-uc-img="loading: lazy" 
                            />
                            <Link to="/blog/4" className="position-cover" data-caption="The Art of Baking: From Classic Bread to Artisan Pastries"></Link>
                          </figure>
                          <div className="post-header panel vstack gap-1">
                            <h5 className="h6 md:h5 m-0">
                              <Link className="text-none" to="/blog/4">The Art of Baking: From Classic Bread to Artisan Pastries</Link>
                            </h5>
                            <div className="post-date hstack gap-narrow fs-7 opacity-60">
                              <span>Feb 28, {currentYear}</span>
                            </div>
                          </div>
                        </article>
                      </div>
                      {/* Add more related posts */}
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div id="blog-comment" className="panel border-top pt-2 mt-8 xl:mt-9">
                    <h4 className="h5 xl:h4 mb-5 xl:mb-6">Comments (5)</h4>
                    
                    {/* Comments list would go here */}
                    
                    {/* Comment Form */}
                    <div id="comment-form-wrapper" className="panel pt-2 mt-8 xl:mt-9">
                      <h4 className="h5 xl:h4 mb-5 xl:mb-6">Leave a Comment</h4>
                      <div className="comment_form_holder">
                        <form className="vstack gap-2">
                          <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="text" placeholder="First name" required />
                          <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="text" placeholder="Last name" required />
                          <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="email" placeholder="Your email" required />
                          <textarea className="form-control h-250px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" placeholder="Your comment" required></textarea>
                          <button className="btn btn-primary btn-sm mt-1" type="submit">Send</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-4">
                <div className="uc-sticky-placeholder" style={{height: '0px', width: '0px', margin: '0px'}} hidden></div>
                <div className="sidebar-wrap panel vstack gap-2 uc-sticky" data-uc-sticky="end: true;" style={{position: 'sticky', top: '0px'}}>
                  {/* Sidebar content from your HTML */}
                  <div className="right-sidebar">
                    {/* Recent Posts Widget */}
                    <div className="recent-widget widget">
                      <h2 className="widget-title">Recent Posts</h2>
                      <div className="recent-post-widget clearfix">
                        {/* Recent posts would go here */}
                      </div>
                    </div>
                    
                    {/* Category Widget */}
                    <div className="recent-widget widget">
                      <h2 className="widget-title">Category</h2>
                      <ul>
                        <li>Latest <span>3</span></li>
                        <li>Politics <span>2</span></li>
                        <li>Opinions <span>4</span></li>
                        <li>World <span>1</span></li>
                        <li>Media <span>2</span></li>
                        <li>Tech <span>3</span></li>
                        <li>Business <span>4</span></li>
                        <li>Fashion <span>5</span></li>
                        <li>Art <span>7</span></li>
                        <li>Food <span>2</span></li>
                        <li>E-books <span>1</span></li>
                      </ul>
                    </div>
                    
                    {/* Newsletter Widget */}
                    <div className="recent-widget widget newsletter">
                      <h4 className="widget-title">Subscribe To Our Newsletter</h4>
                      <p>No spam, notifications only about new products, updates.</p>
                      <form action="#" className="newsletter-form">
                        <input type="email" placeholder="Your Email" />
                        <button className="btn btn-primary btn-sm mt-1" type="submit">Sign Up</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}