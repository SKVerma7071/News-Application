import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Calendar,
  TrendingUp,
  Lightbulb,
  Target,
  Award,
  BookOpen,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Clock4,
  Brain,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [savedArticles, setSavedArticles] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Article categories
  const categories = [
    { id: "all", name: "All Articles", icon: BookOpen, count: 28 },
    { id: "exam-tips", name: "Exam Tips & Tricks", icon: Target, count: 8 },
    { id: "study-hacks", name: "Study Hacks", icon: Lightbulb, count: 7 },
    {
      id: "career-guidance",
      name: "Career Guidance",
      icon: GraduationCap,
      count: 6,
    },
    {
      id: "inspirational",
      name: "Inspirational Stories",
      icon: Sparkles,
      count: 5,
    },
    { id: "time-management", name: "Time Management", icon: Clock4, count: 4 },
    { id: "note-making", name: "Note Making", icon: Brain, count: 3 },
  ];

  // Sample articles data
  const articles = [
    {
      id: 1,
      title: "10 Proven Strategies to Ace Your Board Exams",
      excerpt:
        "Discover expert-recommended techniques to maximize your scores in board examinations with smart preparation strategies.",
      content: `
        <h3>1. Create a Realistic Study Schedule</h3>
        <p>Divide your syllabus into manageable chunks and allocate specific time slots for each subject. Remember to include breaks!</p>
        
        <h3>2. Master the Art of Revision</h3>
        <p>The 1-2-7 revision rule: Revise within 1 day, then after 2 days, and finally after 7 days for better retention.</p>
        
        <h3>3. Practice Previous Year Papers</h3>
        <p>Solve at least 5 years of question papers to understand the pattern and important topics.</p>
        
        <h3>4. Focus on NCERT Textbooks</h3>
        <p>For CBSE students, NCERT books cover 90% of the board exam questions.</p>
        
        <h3>5. Develop Smart Note-making</h3>
        <p>Create concise notes using mind maps, flow charts, and bullet points for quick revision.</p>
      `,
      category: "exam-tips",
      author: "Dr. Priya Sharma",
      authorRole: "Education Psychologist",
      readTime: "8 min read",
      views: "12.4K",
      likes: 856,
      date: "2024-02-15",
      featured: true,
      tags: ["Board Exams", "Study Techniques", "CBSE", "ICSE"],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Effective Time Management for Students",
      excerpt:
        "Learn how to balance studies, extracurricular activities, and personal life with proven time management techniques.",
      content: `
        <h3>Pomodoro Technique</h3>
        <p>Study for 25 minutes, then take a 5-minute break. After four cycles, take a longer 15-30 minute break.</p>
        
        <h3>Eisenhower Matrix</h3>
        <p>Prioritize tasks based on urgency and importance to focus on what truly matters.</p>
        
        <h3>Time Blocking</h3>
        <p>Schedule specific time blocks for different subjects and activities throughout your day.</p>
        
        <h3>Digital Detox</h3>
        <p>Designate phone-free study hours to minimize distractions and improve focus.</p>
      `,
      category: "time-management",
      author: "Rahul Mehta",
      authorRole: "Productivity Coach",
      readTime: "6 min read",
      views: "8.7K",
      likes: 623,
      date: "2024-02-10",
      featured: true,
      tags: ["Productivity", "Focus", "Study Schedule"],
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400",
    },
    {
      id: 3,
      title: "From Average to Topper: The Inspiring Journey of Rohan Singh",
      excerpt:
        "How a student from a small town transformed his academic performance and secured AIR 47 in JEE Advanced.",
      content: `
        <h3>The Turning Point</h3>
        <p>Rohan failed in his first pre-board examination but didn't lose hope. He analyzed his mistakes and created a strategic plan.</p>
        
        <h3>Daily Routine</h3>
        <p>4:30 AM: Wake up and meditation<br>
           5:00 AM: Study toughest subjects<br>
           8:00 AM: School<br>
           4:00 PM: Self-study and practice<br>
           9:00 PM: Revision<br>
           10:30 PM: Sleep</p>
        
        <h3>Key Strategies</h3>
        <p>• Focused on understanding concepts rather than rote learning<br>
           • Regular mock tests and analysis<br>
           • Consistent revision schedule<br>
           • Healthy lifestyle with proper sleep</p>
      `,
      category: "inspirational",
      author: "Rohan Singh",
      authorRole: "JEE Topper",
      readTime: "10 min read",
      views: "15.2K",
      likes: 1245,
      date: "2024-02-08",
      featured: true,
      tags: ["Success Story", "JEE", "Motivation"],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
    },
    {
      id: 4,
      title: "Cornell Note-Taking System: Revolutionize Your Study Notes",
      excerpt:
        "Master the Cornell method to take organized, effective notes that boost your learning and retention.",
      content: `
        <h3>How to Set Up Cornell Notes</h3>
        <p>Divide your page into three sections:<br>
           • Right Section (70%): Main notes during class<br>
           • Left Section (20%): Cues and questions<br>
           • Bottom Section (10%): Summary</p>
        
        <h3>Benefits</h3>
        <p>• Better organization<br>
           • Active learning during review<br>
           • Easy to identify key concepts<br>
           • Effective for exam preparation</p>
        
        <h3>Implementation Tips</h3>
        <p>• Use abbreviations and symbols<br>
           • Review within 24 hours<br>
           • Create summary immediately after class<br>
           • Use for all subjects</p>
      `,
      category: "note-making",
      author: "Dr. Anjali Patel",
      authorRole: "Learning Specialist",
      readTime: "5 min read",
      views: "6.3K",
      likes: 412,
      date: "2024-02-05",
      featured: false,
      tags: ["Note Taking", "Study Methods", "Learning"],
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400",
    },
    {
      id: 5,
      title:
        "Career Options After Class 12 Science: Beyond Engineering and Medicine",
      excerpt:
        "Explore diverse career paths available for science students that you might not have considered.",
      content: `
        <h3>Emerging Fields</h3>
        <p>• Data Science and Analytics<br>
           • Biotechnology and Bioinformatics<br>
           • Environmental Science<br>
           • Astrophysics and Space Technology<br>
           • Forensic Science</p>
        
        <h3>Interdisciplinary Careers</h3>
        <p>• Computational Biology<br>
           • Neuroeconomics<br>
           • Environmental Law<br>
           • Science Communication<br>
           • Patent Law</p>
        
        <h3>Skill-Based Careers</h3>
        <p>• Scientific Writing<br>
           • Research Analysis<br>
           • Laboratory Management<br>
           • Quality Assurance<br>
           • Technical Consulting</p>
      `,
      category: "career-guidance",
      author: "Career Counsellor Team",
      authorRole: "Career Experts",
      readTime: "7 min read",
      views: "9.8K",
      likes: 534,
      date: "2024-02-03",
      featured: false,
      tags: ["Career Planning", "Science Stream", "Future Careers"],
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
    },
    {
      id: 6,
      title: "Memory Techniques: How to Remember Everything You Study",
      excerpt:
        "Powerful mnemonic devices and memory techniques used by top students to retain information longer.",
      content: `
        <h3>Mnemonic Devices</h3>
        <p>• Acronyms: Create words from first letters<br>
           • Acrostics: Make sentences<br>
           • Method of Loci: Memory palace technique<br>
           • Rhymes and Songs: Musical memory</p>
        
        <h3>Spaced Repetition</h3>
        <p>Use apps like Anki or create your own flashcard system to review at optimal intervals.</p>
        
        <h3>Visual Memory Techniques</h3>
        <p>• Create vivid mental images<br>
           • Use mind maps and diagrams<br>
           • Associate concepts with familiar objects<br>
           • Use color coding effectively</p>
      `,
      category: "study-hacks",
      author: "Memory Expert",
      authorRole: "Cognitive Scientist",
      readTime: "6 min read",
      views: "7.2K",
      likes: 489,
      date: "2024-02-01",
      featured: false,
      tags: ["Memory", "Learning", "Study Techniques"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    },
    {
      id: 7,
      title: "Stress Management During Exams: Stay Calm and Perform Better",
      excerpt:
        "Practical techniques to manage exam anxiety and perform at your best when it matters most.",
      content: `
        <h3>Breathing Exercises</h3>
        <p>4-7-8 Technique: Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds.</p>
        
        <h3>Mindfulness Practices</h3>
        <p>• 5-minute meditation before study sessions<br>
           • Progressive muscle relaxation<br>
           • Visualization techniques<br>
           • Grounding exercises</p>
        
        <h3>Lifestyle Adjustments</h3>
        <p>• Regular physical exercise<br>
           • Balanced nutrition<br>
           • Adequate sleep<br>
           • Social support system</p>
      `,
      category: "exam-tips",
      author: "Dr. Sameer Verma",
      authorRole: "Clinical Psychologist",
      readTime: "5 min read",
      views: "5.6K",
      likes: 321,
      date: "2024-01-28",
      featured: false,
      tags: ["Stress Management", "Mental Health", "Exam Anxiety"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    },
    {
      id: 8,
      title: "Digital Tools Every Student Should Use in 2024",
      excerpt:
        "Essential apps and software to enhance productivity, organization, and learning efficiency.",
      content: `
        <h3>Productivity Apps</h3>
        <p>• Notion: All-in-one workspace<br>
           • Forest: Focus timer<br>
           • Todoist: Task management<br>
           • Trello: Project organization</p>
        
        <h3>Study and Learning</h3>
        <p>• Anki: Spaced repetition<br>
           • Khan Academy: Free courses<br>
           • Grammarly: Writing assistant<br>
           • Wolfram Alpha: Computational knowledge</p>
        
        <h3>Collaboration Tools</h3>
        <p>• Google Workspace<br>
           • Miro: Online whiteboard<br>
           • Slack: Team communication<br>
           • Zoom: Virtual meetings</p>
      `,
      category: "study-hacks",
      author: "Tech Education Team",
      authorRole: "EdTech Specialists",
      readTime: "4 min read",
      views: "4.9K",
      likes: 298,
      date: "2024-01-25",
      featured: false,
      tags: ["Technology", "Apps", "Digital Learning"],
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
    },
  ];

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Sort articles
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "latest":
        return new Date(b.date) - new Date(a.date);
      case "popular":
        return b.views - a.views;
      case "likes":
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const toggleSaveArticle = (articleId) => {
    setSavedArticles((prev) => {
      if (prev.includes(articleId)) {
        return prev.filter((id) => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const toggleLikeArticle = (articleId) => {
    setLikedArticles((prev) => {
      if (prev.includes(articleId)) {
        return prev.filter((id) => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const toggleExpandArticle = (articleId) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = sortedArticles.filter((article) => !article.featured);

  return (
    <div className="wrap overflow-hidden-x">
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              {/* Page Header */}
              <div className="block-header panel pt-4 border-top text-center">
                <h1 className="h3 lg:h2 ft-primary fw-bold m-0 text-black dark:text-white">
                  Knowledge Hub
                </h1>
                <p className="fs-6 mt-2 text-gray-900 dark:text-white text-opacity-60">
                  Expert guidance, study tips, career advice, and inspirational
                  stories to help you succeed
                </p>
              </div>

              {/* Search and Filters */}
              <div className="search-filters-section panel vstack gap-3">
                <div className="hstack gap-2">
                  <form className="flex-1 hstack gap-1 border rounded p-2 bg-gray-25 dark:bg-gray-800">
                    <Search size={20} className="opacity-50" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control-plaintext ms-1 fs-6 w-full dark:text-white"
                      placeholder="Search articles, tips, and guides..."
                      aria-label="Search knowledge hub"
                    />
                  </form>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} className="me-1" />
                    Filters
                    {showFilters ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                </div>

                {showFilters && (
                  <div className="filters-panel panel border rounded bg-white dark:bg-gray-800 p-3">
                    <div className="row child-cols-12 md:child-cols-4 g-3">
                      <div>
                        <label className="form-label fs-7 fw-medium text-black dark:text-white">
                          Sort By
                        </label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="form-select fs-7"
                        >
                          <option value="latest">Latest First</option>
                          <option value="popular">Most Popular</option>
                          <option value="likes">Most Liked</option>
                        </select>
                      </div>
                      <div>
                        <label className="form-label fs-7 fw-medium text-black dark:text-white">
                          Read Time
                        </label>
                        <select className="form-select fs-7">
                          <option>Any Length</option>
                          <option>Under 5 minutes</option>
                          <option>5-10 minutes</option>
                          <option>Over 10 minutes</option>
                        </select>
                      </div>
                      <div>
                        <label className="form-label fs-7 fw-medium text-black dark:text-white">
                          Content Type
                        </label>
                        <select className="form-select fs-7">
                          <option>All Content</option>
                          <option>Articles Only</option>
                          <option>Guides Only</option>
                          <option>Stories Only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Categories Navigation */}
              <div className="categories-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Browse by Category
                  </h2>
                  <div className="row child-cols-12 md:child-cols-4 lg:child-cols-7 g-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.id}>
                          <button
                            onClick={() => setActiveCategory(category.id)}
                            className={`category-btn panel vstack gap-1 p-3 border rounded w-100 text-none bg-white dark:bg-gray-800 hover:shadow-sm transition-all duration-150 ${
                              activeCategory === category.id
                                ? "border-primary text-primary"
                                : "text-gray-900 dark:text-white"
                            }`}
                          >
                            <IconComponent size={20} />
                            <span className="fs-7 fw-medium text-center">
                              {category.name}
                            </span>
                            <span className="badge bg-light text-dark fs-7">
                              {category.count}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Featured Articles */}
              {featuredArticles.length > 0 && (
                <div className="featured-articles-section panel">
                  <div className="vstack gap-3">
                    <div className="hstack justify-between">
                      <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                        <Star size={20} className="me-2 text-warning" />
                        Featured Articles
                      </h2>
                      <span className="badge bg-warning text-dark fs-7">
                        Editor's Pick
                      </span>
                    </div>

                    <div className="row child-cols-12 md:child-cols-2 g-4">
                      {featuredArticles.map((article) => (
                        <div
                          key={article.id}
                          className="featured-article-card panel"
                        >
                          <div className="border rounded bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 h-100">
                            <div className="position-relative">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-100 h-200px object-cover"
                              />
                              <div className="position-absolute top-0 start-0 m-2">
                                <span className="badge bg-primary fs-7">
                                  {
                                    categories.find(
                                      (c) => c.id === article.category
                                    )?.name
                                  }
                                </span>
                              </div>
                              <div className="position-absolute top-0 end-0 m-2">
                                <button
                                  className={`btn btn-xs ${
                                    savedArticles.includes(article.id)
                                      ? "btn-warning"
                                      : "btn-light"
                                  }`}
                                  onClick={() => toggleSaveArticle(article.id)}
                                >
                                  <Bookmark
                                    size={12}
                                    fill={
                                      savedArticles.includes(article.id)
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="p-3 vstack gap-2 h-100">
                              <h3 className="h5 m-0 text-black dark:text-white text-truncate-2">
                                {article.title}
                              </h3>
                              <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0 flex-1">
                                {article.excerpt}
                              </p>

                              <div className="vstack gap-2">
                                <div className="hstack gap-2 justify-between">
                                  <div className="hstack gap-1">
                                    <User
                                      size={12}
                                      className="text-gray-900 dark:text-white text-opacity-60"
                                    />
                                    <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                      {article.author}
                                    </span>
                                  </div>
                                  <div className="hstack gap-1">
                                    <Calendar
                                      size={12}
                                      className="text-gray-900 dark:text-white text-opacity-60"
                                    />
                                    <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                      {formatDate(article.date)}
                                    </span>
                                  </div>
                                </div>

                                <div className="hstack gap-3 justify-between">
                                  <div className="hstack gap-2">
                                    <div className="hstack gap-1">
                                      <Clock
                                        size={12}
                                        className="text-gray-900 dark:text-white text-opacity-60"
                                      />
                                      <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                        {article.readTime}
                                      </span>
                                    </div>
                                    <div className="hstack gap-1">
                                      <Eye
                                        size={12}
                                        className="text-gray-900 dark:text-white text-opacity-60"
                                      />
                                      <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                        {article.views}
                                      </span>
                                    </div>
                                  </div>

                                  <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() =>
                                      toggleExpandArticle(article.id)
                                    }
                                  >
                                    Read More
                                    <ArrowRight size={12} className="ms-1" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* All Articles */}
              <div className="articles-section panel">
                <div className="vstack gap-3">
                  <div className="hstack justify-between">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      {activeCategory === "all"
                        ? "All Articles"
                        : categories.find((c) => c.id === activeCategory)?.name}
                      <span className="fs-6 text-gray-900 dark:text-white text-opacity-60 ms-2">
                        ({sortedArticles.length} articles)
                      </span>
                    </h2>
                    <div className="hstack gap-2">
                      <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                        Sort by:
                      </span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="form-select form-select-sm fs-7 border-0 bg-transparent"
                      >
                        <option value="latest">Latest</option>
                        <option value="popular">Popular</option>
                        <option value="likes">Most Liked</option>
                      </select>
                    </div>
                  </div>

                  {sortedArticles.length === 0 ? (
                    <div className="text-center py-8">
                      <BookOpen size={48} className="text-gray-400 mb-3" />
                      <h3 className="h5 text-gray-900 dark:text-white">
                        No articles found
                      </h3>
                      <p className="text-gray-900 dark:text-white text-opacity-60">
                        Try adjusting your search or filter criteria
                      </p>
                    </div>
                  ) : (
                    <div className="vstack gap-4">
                      {regularArticles.map((article) => (
                        <div
                          key={article.id}
                          className="article-card panel border rounded bg-white dark:bg-gray-800 overflow-hidden"
                        >
                          <div className="p-4">
                            {/* Article Header */}
                            <div className="hstack justify-between align-start mb-3">
                              <div className="vstack gap-1 flex-1">
                                <div className="hstack gap-2">
                                  <span className="badge bg-primary fs-7">
                                    {
                                      categories.find(
                                        (c) => c.id === article.category
                                      )?.name
                                    }
                                  </span>
                                  <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {formatDate(article.date)}
                                  </span>
                                </div>
                                <h3 className="h5 m-0 text-black dark:text-white">
                                  {article.title}
                                </h3>
                                <p className="fs-6 text-gray-900 dark:text-white text-opacity-60 m-0">
                                  {article.excerpt}
                                </p>
                              </div>
                              <div className="hstack gap-1">
                                <button
                                  className={`btn btn-xs ${
                                    likedArticles.includes(article.id)
                                      ? "btn-danger"
                                      : "btn-outline-secondary"
                                  }`}
                                  onClick={() => toggleLikeArticle(article.id)}
                                >
                                  <Heart
                                    size={12}
                                    fill={
                                      likedArticles.includes(article.id)
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                  <span className="ms-1">{article.likes}</span>
                                </button>
                                <button
                                  className={`btn btn-xs ${
                                    savedArticles.includes(article.id)
                                      ? "btn-warning"
                                      : "btn-outline-secondary"
                                  }`}
                                  onClick={() => toggleSaveArticle(article.id)}
                                >
                                  <Bookmark
                                    size={12}
                                    fill={
                                      savedArticles.includes(article.id)
                                        ? "currentColor"
                                        : "none"
                                    }
                                  />
                                </button>
                                <button className="btn btn-xs btn-outline-secondary">
                                  <Share2 size={12} />
                                </button>
                              </div>
                            </div>

                            {/* Article Meta */}
                            <div className="row child-cols-12 md:child-cols-4 g-3 mb-3">
                              <div className="hstack gap-2">
                                <User size={16} className="text-primary" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Author
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {article.author}
                                    <span className="ms-1">
                                      • {article.authorRole}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="hstack gap-2">
                                <Clock size={16} className="text-success" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Read Time
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {article.readTime}
                                  </div>
                                </div>
                              </div>
                              <div className="hstack gap-2">
                                <Eye size={16} className="text-info" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Views
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {article.views}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="hstack gap-1 mb-3">
                              {article.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="badge bg-light text-dark fs-7"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>

                            {/* Expandable Content */}
                            {expandedArticle === article.id ? (
                              <>
                                <div
                                  className="article-content fs-6 text-gray-900 dark:text-white text-opacity-80 mb-3"
                                  dangerouslySetInnerHTML={{
                                    __html: article.content,
                                  }}
                                />

                                <div className="hstack gap-2 justify-between pt-3 border-top">
                                  <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() =>
                                      toggleExpandArticle(article.id)
                                    }
                                  >
                                    Show Less
                                  </button>
                                  <div className="hstack gap-2">
                                    <button className="btn btn-sm btn-outline-primary">
                                      <Download size={14} className="me-1" />
                                      Save PDF
                                    </button>
                                    <button className="btn btn-sm btn-primary">
                                      <Play size={14} className="me-1" />
                                      Watch Video
                                    </button>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="hstack gap-2 justify-between">
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() =>
                                    toggleExpandArticle(article.id)
                                  }
                                >
                                  Read Full Article
                                  <ArrowRight size={14} className="ms-1" />
                                </button>
                                <div className="hstack gap-2">
                                  <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {article.readTime}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="newsletter-section panel p-4 border rounded bg-primary text-white text-center">
                <div className="vstack gap-2 max-w-500px mx-auto">
                  <h3 className="h5 m-0">
                    <TrendingUp size={20} className="me-2" />
                    Stay Updated with Latest Insights
                  </h3>
                  <p className="fs-6 text-white text-opacity-90 m-0">
                    Get weekly articles on study tips, career guidance, and
                    success stories delivered to your inbox.
                  </p>
                  <div className="hstack gap-2 justify-center mt-2">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Enter your email address"
                    />
                    <button className="btn btn-sm btn-light">Subscribe</button>
                  </div>
                  <p className="fs-7 text-white text-opacity-80 m-0">
                    No spam ever. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Quick Resources */}
              <div className="resources-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Quick Learning Resources
                  </h2>

                  <div className="row child-cols-12 md:child-cols-4 g-3">
                    {[
                      {
                        title: "Study Planner Template",
                        description:
                          "Download our free study schedule template",
                        icon: Download,
                        type: "download",
                      },
                      {
                        title: "Video Tutorials",
                        description: "Watch expert-led study technique videos",
                        icon: Play,
                        type: "video",
                      },
                      {
                        title: "Community Forum",
                        description: "Connect with other students and experts",
                        icon: Users,
                        type: "community",
                      },
                    ].map((resource, index) => {
                      const IconComponent = resource.icon;
                      return (
                        <div key={index} className="resource-card panel">
                          <div className="border rounded bg-white dark:bg-gray-800 p-3 text-center hover:shadow-sm transition-all duration-150">
                            <IconComponent
                              size={32}
                              className="text-primary mb-2"
                            />
                            <h5 className="h6 m-0 text-black dark:text-white">
                              {resource.title}
                            </h5>
                            <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0 mt-1">
                              {resource.description}
                            </p>
                            <button className="btn btn-sm btn-outline-primary w-100 mt-2">
                              Access Now
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
