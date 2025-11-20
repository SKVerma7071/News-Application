import React, { useState } from "react";

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [savedArticles, setSavedArticles] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  const [expandedArticleId, setExpandedArticleId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // --- Configuration ---
  // Using standard Unicon class names found in your theme
  const categories = [
    { id: "all", name: "All Articles", icon: "unicon-notebook", count: 28 },
    { id: "exam-tips", name: "Exam Tips & Tricks", icon: "unicon-target", count: 8 },
    { id: "study-hacks", name: "Study Hacks", icon: "unicon-bulb", count: 7 },
    { id: "career-guidance", name: "Career Guidance", icon: "unicon-graduation-cap", count: 6 },
    { id: "inspirational", name: "Inspirational Stories", icon: "unicon-star", count: 5 },
    { id: "time-management", name: "Time Management", icon: "unicon-hourglass", count: 4 },
    { id: "note-making", name: "Note Making", icon: "unicon-document-edit", count: 3 },
  ];

  const articles = [
    {
      id: 1,
      title: "10 Proven Strategies to Ace Your Board Exams",
      excerpt: "Discover expert-recommended techniques to maximize your scores in board examinations with smart preparation strategies.",
      content: `
        <p class="lead">Board exams can be stressful, but with the right strategy, you can turn anxiety into achievement.</p>
        <h3>1. Create a Realistic Study Schedule</h3>
        <p>Divide your syllabus into manageable chunks and allocate specific time slots for each subject. Remember to include breaks!</p>
        <h3>2. Master the Art of Revision</h3>
        <p>The 1-2-7 revision rule: Revise within 1 day, then after 2 days, and finally after 7 days for better retention.</p>
        <h3>3. Practice Previous Year Papers</h3>
        <p>Solve at least 5 years of question papers to understand the pattern and important topics.</p>
      `,
      category: "exam-tips",
      author: "Dr. Priya Sharma",
      authorRole: "Education Psychologist",
      readTime: "8 min read",
      views: "12.4K",
      likes: 856,
      date: "2024-02-15",
      featured: true,
      tags: ["Board Exams", "Study Techniques", "CBSE"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Effective Time Management",
      excerpt: "Learn how to balance studies, extracurricular activities, and personal life with proven time management techniques.",
      content: `<h3>Pomodoro Technique</h3><p>Study for 25 minutes, then take a 5-minute break.</p><h3>Eisenhower Matrix</h3><p>Prioritize tasks based on urgency and importance.</p>`,
      category: "time-management",
      author: "Rahul Mehta",
      authorRole: "Productivity Coach",
      readTime: "6 min read",
      views: "8.7K",
      likes: 623,
      date: "2024-02-10",
      featured: true,
      tags: ["Productivity", "Focus"],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    },
    {
      id: 3,
      title: "From Average to Topper: The Inspiring Journey of Rohan",
      excerpt: "How a student from a small town transformed his academic performance and secured AIR 47 in JEE Advanced.",
      content: `<h3>The Turning Point</h3><p>Rohan failed in his first pre-board examination but didn't lose hope.</p>`,
      category: "inspirational",
      author: "Rohan Singh",
      authorRole: "JEE Topper",
      readTime: "10 min read",
      views: "15.2K",
      likes: 1245,
      date: "2024-02-08",
      featured: true,
      tags: ["Success Story", "JEE", "Motivation"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    },
    {
      id: 4,
      title: "Cornell Note-Taking System: Revolutionize Your Notes",
      excerpt: "Master the Cornell method to take organized, effective notes that boost your learning and retention.",
      content: `<h3>How to Set Up Cornell Notes</h3><p>Divide your page into three sections: Cues, Notes, and Summary.</p>`,
      category: "note-making",
      author: "Dr. Anjali Patel",
      authorRole: "Learning Specialist",
      readTime: "5 min read",
      views: "6.3K",
      likes: 412,
      date: "2024-02-05",
      featured: false,
      tags: ["Note Taking", "Study Methods"],
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80",
    },
    {
      id: 5,
      title: "Career Options After Class 12 Science",
      excerpt: "Explore diverse career paths available for science students that you might not have considered beyond Engineering.",
      content: `<h3>Emerging Fields</h3><p>Data Science, Biotechnology, and Environmental Science are booming.</p>`,
      category: "career-guidance",
      author: "Career Team",
      authorRole: "Career Experts",
      readTime: "7 min read",
      views: "9.8K",
      likes: 534,
      date: "2024-02-03",
      featured: false,
      tags: ["Career Planning", "Science Stream"],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    },
    {
      id: 6,
      title: "Memory Techniques: How to Remember Everything",
      excerpt: "Powerful mnemonic devices and memory techniques used by top students to retain information longer.",
      content: `<h3>Mnemonic Devices</h3><p>Use Acronyms and the Method of Loci to remember lists.</p>`,
      category: "study-hacks",
      author: "Memory Expert",
      authorRole: "Cognitive Scientist",
      readTime: "6 min read",
      views: "7.2K",
      likes: 489,
      date: "2024-02-01",
      featured: false,
      tags: ["Memory", "Learning"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    },
  ];

  // --- Logic ---
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "popular") return b.views.replace('K', '000').replace('.', '') - a.views.replace('K', '000').replace('.', '');
    if (sortBy === "likes") return b.likes - a.likes;
    return 0;
  });

  const toggleSaveArticle = (e, id) => {
    e.stopPropagation();
    setSavedArticles(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleLikeArticle = (e, id) => {
    e.stopPropagation();
    setLikedArticles(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = sortedArticles.filter((article) => !article.featured);
  const activeArticleData = articles.find(a => a.id === expandedArticleId);

  return (
    <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-white overflow-x-hidden font-sans">
      
      {/* --- Page Header --- */}
      <div className="section py-6 lg:py-8 border-bottom dark:border-gray-800">
        <div className="container max-w-xl">
          <div className="panel text-center vstack gap-2">
            <h1 className="h2 md:h1 fw-bold m-0">Knowledge Hub</h1>
            <p className="fs-5 opacity-60 max-w-md mx-auto">
              Expert guidance, study hacks, and inspirational stories to fuel your academic journey.
            </p>
            
            {/* Search Bar */}
            <div className="panel max-w-sm mx-auto mt-4 w-full">
              <div className="form-icon-group">
                <span className="form-icon text-gray opacity-50">
                    <i className="unicon-search icon-1"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control form-control-md h-48px ps-5 bg-gray-25 dark:bg-gray-800 dark:border-gray-700" 
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="section py-6 lg:py-8">
        <div className="container max-w-xl">
          
          {/* Categories & Filter */}
          <div className="panel vstack gap-4 mb-6 lg:mb-8">
            <div className="hstack justify-between flex-wrap gap-3">
              <div className="nav-x gap-2 overflow-x-auto flex-nowrap pb-2 scrollbar-hide w-full md:w-auto">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`btn btn-sm rounded-pill border whitespace-nowrap transition-all duration-200 ${
                        isActive 
                        ? "btn-primary text-white border-primary" 
                        : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary"
                      }`}
                    >
                      <i className={`${cat.icon} me-1`}></i>
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              <div className="hstack gap-2 ms-auto">
                <button 
                  className={`btn btn-sm border ${showFilters ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <i className="unicon-filter me-1"></i> Filter
                </button>
                <select 
                  className="form-select form-select-sm w-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                  <option value="likes">Most Liked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Featured Section (Only shows on 'All' or if featured articles match filter) */}
          {activeCategory === 'all' && !searchQuery && (
            <div className="panel mb-8">
              <div className="hstack gap-2 mb-4">
                <i className="unicon-star-filled icon-2 text-warning"></i>
                <h3 className="h5 m-0 fw-bold">Featured Reads</h3>
              </div>
              <div className="row g-4">
                {featuredArticles.slice(0, 2).map(article => (
                  <div key={article.id} className="col-12 col-md-6">
                    <div 
                      className="card h-100 border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group dark:bg-gray-800"
                      onClick={() => setExpandedArticleId(article.id)}
                    >
                      <div className="position-relative overflow-hidden rounded-top">
                        <img src={article.image} alt={article.title} className="w-100 h-250px object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="position-absolute top-0 start-0 p-3">
                          <span className="badge bg-white text-dark shadow-sm">
                            {categories.find(c => c.id === article.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div className="card-body p-4 vstack gap-3">
                        <div className="hstack gap-3 fs-7 opacity-60">
                          <span className="hstack gap-1"><i className="unicon-calendar"></i> {formatDate(article.date)}</span>
                          <span className="hstack gap-1"><i className="unicon-clock"></i> {article.readTime}</span>
                        </div>
                        <h3 className="h4 card-title m-0 group-hover:text-primary transition-colors">{article.title}</h3>
                        <p className="card-text opacity-70 m-0 line-clamp-2">{article.excerpt}</p>
                        <div className="hstack justify-between mt-auto pt-2">
                          <div className="hstack gap-2">
                            <div className="avatar w-24px h-24px rounded-circle bg-primary text-white d-flex items-center justify-center fs-8 fw-bold">
                              {article.author.charAt(0)}
                            </div>
                            <span className="fs-7 fw-medium">{article.author}</span>
                          </div>
                          <span className="btn btn-link p-0 text-none fs-7 fw-bold hstack gap-1">Read <i className="unicon-arrow-right"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Grid */}
          <div className="panel">
             <div className="hstack gap-2 mb-4">
                <i className="unicon-notebook icon-2 text-primary"></i>
                <h3 className="h5 m-0 fw-bold">
                  {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === activeCategory)?.name}
                </h3>
              </div>

              {regularArticles.length === 0 ? (
                <div className="panel p-5 text-center border rounded dashed border-gray-300 dark:border-gray-700">
                  <div className="opacity-30 mb-3"><i className="unicon-search icon-3"></i></div>
                  <h5>No articles found</h5>
                  <p className="fs-7 opacity-60">Try adjusting your search or filters.</p>
                </div>
              ) : (
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4">
                  {regularArticles.map(article => (
                    <div key={article.id}>
                      <div 
                        className="card h-100 border border-gray-200 dark:border-gray-800 dark:bg-gray-800 hover:border-primary transition-colors duration-200 cursor-pointer"
                        onClick={() => setExpandedArticleId(article.id)}
                      >
                        <div className="card-body p-4 vstack gap-3 h-100">
                           <div className="hstack justify-between mb-1">
                             <span className="badge bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white fs-8 fw-bold">
                               {categories.find(c => c.id === article.category)?.name}
                             </span>
                             <button 
                              onClick={(e) => toggleSaveArticle(e, article.id)}
                              className={`btn btn-icon btn-xs rounded-circle ${savedArticles.includes(article.id) ? 'text-primary bg-primary-subtle' : 'text-gray hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                             >
                               <i className={`unicon-bookmark ${savedArticles.includes(article.id) ? 'fw-bold' : ''}`}></i>
                             </button>
                           </div>
                           
                           <h4 className="h6 card-title m-0 line-clamp-2">{article.title}</h4>
                           <p className="fs-7 opacity-60 m-0 line-clamp-3 flex-1">{article.excerpt}</p>
                           
                           <div className="border-top dark:border-gray-700 pt-3 mt-2">
                             <div className="hstack justify-between fs-7 opacity-70">
                               <span>{formatDate(article.date)}</span>
                               <div className="hstack gap-3">
                                 <span className="hstack gap-1"><i className="unicon-eye"></i> {article.views}</span>
                                 <span className="hstack gap-1 cursor-pointer hover:text-danger" onClick={(e) => toggleLikeArticle(e, article.id)}>
                                   <i className={`unicon-favorite ${likedArticles.includes(article.id) ? 'text-danger fw-bold' : ''}`}></i> 
                                   {article.likes}
                                 </span>
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

        </div>
      </div>

      {/* --- Newsletter CTA --- */}
      <div className="section py-8 bg-gray-900 text-white mt-6">
        <div className="container max-w-lg text-center">
          <div className="panel vstack gap-3 items-center">
             <div className="w-48px h-48px rounded-circle bg-primary bg-opacity-20 text-primary d-flex justify-center items-center mb-2">
               <i className="unicon-email icon-2"></i>
             </div>
             <h3 className="h3 m-0">Don't Miss a Study Hack!</h3>
             <p className="fs-6 opacity-60">Join 10,000+ students receiving weekly tips and career advice.</p>
             <div className="hstack gap-2 w-full max-w-sm mt-2">
               <input type="email" className="form-control border-0 bg-white bg-opacity-10 text-white placeholder-white-50" placeholder="Your email address" />
               <button className="btn btn-primary">Subscribe</button>
             </div>
          </div>
        </div>
      </div>

      {/* --- Article Reading Modal --- */}
      {activeArticleData && (
        <div className="fixed inset-0 z-999 d-flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm p-3 animate-fade-in">
          <div className="panel w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3 shadow-xl h-100 max-h-90vh d-flex flex-column overflow-hidden animate-slide-up">
            
            {/* Modal Header */}
            <div className="hstack justify-between p-4 border-bottom dark:border-gray-800 bg-white dark:bg-gray-900 z-1">
              <div className="hstack gap-3">
                 <button onClick={() => setExpandedArticleId(null)} className="btn btn-icon btn-sm btn-outline-gray-200 dark:border-gray-700 text-dark dark:text-white">
                   <i className="unicon-close"></i>
                 </button>
                 <span className="fs-7 fw-bold text-uppercase tracking-wide text-primary">
                   {categories.find(c => c.id === activeArticleData.category)?.name}
                 </span>
              </div>
              <div className="hstack gap-2">
                <button className="btn btn-icon btn-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"><i className="unicon-share"></i></button>
                <button 
                  className={`btn btn-icon btn-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${savedArticles.includes(activeArticleData.id) ? 'text-primary' : ''}`}
                  onClick={(e) => toggleSaveArticle(e, activeArticleData.id)}
                >
                  <i className={`unicon-bookmark ${savedArticles.includes(activeArticleData.id) ? 'fw-bold' : ''}`}></i>
                </button>
              </div>
            </div>

            {/* Modal Content (Scrollable) */}
            <div className="p-0 overflow-y-auto custom-scrollbar flex-1">
               {/* Hero Image */}
               <div className="w-100 h-300px sm:h-400px position-relative">
                 <img src={activeArticleData.image} alt={activeArticleData.title} className="w-100 h-100 object-cover" />
                 <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-black to-transparent p-4 sm:p-6 pt-8">
                    <h2 className="h3 sm:h2 text-white m-0 mb-2 shadow-sm">{activeArticleData.title}</h2>
                    <div className="hstack gap-3 text-white text-opacity-80 fs-7">
                      <span className="hstack gap-1"><i className="unicon-user"></i> {activeArticleData.author}</span>
                      <span className="hstack gap-1"><i className="unicon-clock"></i> {activeArticleData.readTime}</span>
                    </div>
                 </div>
               </div>

               {/* Body Text */}
               <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
                 <div 
                    className="article-content fs-6 leading-relaxed text-gray-800 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: activeArticleData.content }} 
                 />
                 
                 {/* Tags */}
                 <div className="mt-6 pt-4 border-top dark:border-gray-800">
                   <div className="hstack gap-2 flex-wrap">
                     {activeArticleData.tags.map(tag => (
                       <span key={tag} className="badge bg-gray-100 text-dark dark:bg-gray-800 dark:text-white rounded-pill fw-normal px-3 py-2">#{tag}</span>
                     ))}
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; }
        .article-content h3 { font-size: 1.25rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.5rem; color: inherit; }
        .article-content p { margin-bottom: 1rem; }
        .article-content .lead { font-size: 1.1rem; font-weight: 500; opacity: 0.8; }
      `}</style>

    </div>
  );
};

export default KnowledgeHub;