import React, { useState, useEffect } from "react";
import {
  PlayCircle,
  Calculator,
  BookOpen,
  Clock,
  TrendingUp,
  Briefcase,
  Search,
  VideoOff,
  Play,
  User,
  Bookmark,
  BellRing,
  Bell,
  Video,
  TestTube,
  Youtube,
} from "lucide-react";

const VideoLectures = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Video categories
  const categories = [
    { id: "all", name: "All Videos", icon: PlayCircle },
    { id: "math", name: "Mathematics", icon: Calculator },
    { id: "science", name: "Science", icon: TestTube },
    { id: "english", name: "English", icon: BookOpen },
    { id: "explainer", name: "Short Explainer", icon: Clock },
    { id: "motivation", name: "Motivational", icon: TrendingUp },
    { id: "career", name: "Career Guidance", icon: Briefcase },
  ];

  // Sample video data - in real app, this would come from API
  const videos = [
    // Subject-wise Lectures
    {
      id: 1,
      title: "Calculus Basics - Differentiation",
      description:
        "Complete guide to understanding differentiation with practical examples",
      category: "math",
      type: "subject",
      duration: "45:30",
      views: "125K",
      uploadDate: "2 weeks ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
      instructor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      title: "Organic Chemistry Fundamentals",
      description:
        "Master the basics of organic chemistry with interactive examples",
      category: "science",
      type: "subject",
      duration: "38:15",
      views: "89K",
      uploadDate: "1 month ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400",
      instructor: "Prof. Michael Chen",
    },
    {
      id: 3,
      title: "English Grammar - Tenses Masterclass",
      description:
        "Comprehensive guide to all English tenses with practice exercises",
      category: "english",
      type: "subject",
      duration: "52:10",
      views: "156K",
      uploadDate: "3 weeks ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      instructor: "Dr. Emily Roberts",
    },
    {
      id: 4,
      title: "Physics - Newton's Laws Explained",
      description:
        "Understanding Newton's laws of motion with real-world applications",
      category: "science",
      type: "subject",
      duration: "41:25",
      views: "78K",
      uploadDate: "2 months ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400",
      instructor: "Dr. Robert Williams",
    },

    // Short Explainer Videos
    {
      id: 5,
      title: "Photosynthesis in 3 Minutes",
      description: "Quick and easy explanation of photosynthesis process",
      category: "science",
      type: "explainer",
      duration: "2:45",
      views: "45K",
      uploadDate: "5 days ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400",
      instructor: "Botany Expert",
    },
    {
      id: 6,
      title: "Algebra Basics Explained",
      description: "Understand algebraic expressions in under 3 minutes",
      category: "math",
      type: "explainer",
      duration: "2:30",
      views: "67K",
      uploadDate: "1 week ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
      instructor: "Math Simplified",
    },
    {
      id: 7,
      title: "Grammar Tips - Common Mistakes",
      description: "Avoid these common English grammar mistakes",
      category: "english",
      type: "explainer",
      duration: "3:15",
      views: "34K",
      uploadDate: "3 days ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
      instructor: "Language Expert",
    },

    // Motivational Videos
    {
      id: 8,
      title: "Study Motivation for Students",
      description: "Get motivated to study with these powerful tips",
      category: "motivation",
      type: "motivation",
      duration: "8:20",
      views: "234K",
      uploadDate: "2 weeks ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400",
      instructor: "Success Coach",
    },
    {
      id: 9,
      title: "Overcoming Exam Fear",
      description: "Techniques to conquer exam anxiety and perform better",
      category: "motivation",
      type: "motivation",
      duration: "6:45",
      views: "189K",
      uploadDate: "1 month ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
      instructor: "Psychology Expert",
    },

    // Career Guidance
    {
      id: 10,
      title: "Engineering Career Paths",
      description:
        "Explore different engineering streams and career opportunities",
      category: "career",
      type: "career",
      duration: "15:30",
      views: "156K",
      uploadDate: "3 weeks ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400",
      instructor: "Career Counselor",
    },
    {
      id: 11,
      title: "Medical Career Options",
      description: "Complete guide to medical and healthcare careers",
      category: "career",
      type: "career",
      duration: "18:15",
      views: "142K",
      uploadDate: "2 months ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400",
      instructor: "Medical Professional",
    },
    {
      id: 12,
      title: "IT and Software Careers",
      description: "Future of IT industry and career growth opportunities",
      category: "career",
      type: "career",
      duration: "12:45",
      views: "98K",
      uploadDate: "1 week ago",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
      instructor: "Tech Industry Expert",
    },
  ];

  // Filter videos based on category and search query
  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      activeCategory === "all" || video.category === activeCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled in real-time through state
  };

  const getTypeBadge = (type) => {
    const badges = {
      subject: { label: "Full Lecture", color: "primary" },
      explainer: { label: "Short Explainer", color: "success" },
      motivation: { label: "Motivational", color: "warning" },
      career: { label: "Career Guidance", color: "info" },
    };
    const badge = badges[type] || { label: "Video", color: "secondary" };
    return (
      <span className={`badge bg-${badge.color} fs-7`}>{badge.label}</span>
    );
  };

  return (
    <div className="wrap overflow-hidden-x">
      {/* Video Lectures Section */}
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              {/* Page Header */}
              <div className="block-header panel pt-4 border-top text-center">
                <h1 className="h3 lg:h2 ft-primary fw-bold m-0 text-black dark:text-white">
                  Video Lectures
                </h1>
                <p className="fs-6 mt-2 text-gray-900 dark:text-white text-opacity-60">
                  Learn from expert instructors through comprehensive video
                  lectures and tutorials
                </p>
              </div>

              {/* Search Box */}
              <div className="search-section panel">
                <div className="vstack gap-2">
                  <form
                    onSubmit={handleSearch}
                    className="hstack gap-1 border rounded p-2 bg-gray-25 dark:bg-gray-800"
                  >
                    <span className="d-inline-flex justify-center items-center w-40px h-40px opacity-50">
                      <Search size={20} />
                    </span>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control-plaintext ms-1 fs-6 w-full dark:text-white"
                      placeholder="Search videos by title, subject or instructor..."
                      aria-label="Search video lectures"
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>

              {/* Categories Filter */}
              <div className="categories-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Browse by Category
                  </h2>
                  <div className="row child-cols-12 md:child-cols-6 lg:child-cols-7 g-2">
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
                            <IconComponent size={24} />
                            <span className="fs-7 fw-medium">
                              {category.name}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Video Gallery */}
              <div className="gallery-section panel">
                <div className="vstack gap-3">
                  <div className="hstack justify-between items-center">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      {activeCategory === "all"
                        ? "All Videos"
                        : categories.find((c) => c.id === activeCategory)?.name}
                      <span className="fs-6 text-gray-900 dark:text-white text-opacity-60 ms-2">
                        ({filteredVideos.length} videos)
                      </span>
                    </h2>
                    <div className="hstack gap-2">
                      <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                        Sort by:
                      </span>
                      <select className="form-select form-select-sm fs-7 border-0 bg-transparent">
                        <option>Most Popular</option>
                        <option>Newest First</option>
                        <option>Duration</option>
                      </select>
                    </div>
                  </div>

                  {filteredVideos.length === 0 ? (
                    <div className="text-center py-8">
                      <VideoOff size={48} className="text-gray-400 mb-3" />
                      <h3 className="h5 text-gray-900 dark:text-white">
                        No videos found
                      </h3>
                      <p className="text-gray-900 dark:text-white text-opacity-60">
                        Try adjusting your search or filter criteria
                      </p>
                    </div>
                  ) : (
                    <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-4">
                      {filteredVideos.map((video) => (
                        <div key={video.id} className="video-card-container">
                          <div className="video-card panel vstack gap-0 border rounded bg-white dark:bg-gray-800 overflow-hidden hover:shadow-md transition-all duration-150">
                            {/* Video Thumbnail */}
                            <div className="video-thumbnail position-relative">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-100 h-150px object-cover"
                              />
                              <div className="position-absolute top-0 end-0 m-2">
                                {getTypeBadge(video.type)}
                              </div>
                              <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-gradient-to-t from-black to-transparent">
                                <div className="hstack justify-between text-white fs-7">
                                  <span>{video.duration}</span>
                                  <span>{video.views} views</span>
                                </div>
                              </div>
                              <div className="position-absolute top-50 start-50 translate-middle">
                                <div className="play-button cstack w-48px h-48px bg-primary rounded-circle text-white">
                                  <Play size={20} />
                                </div>
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="video-info panel vstack gap-2 p-3">
                              <h3 className="video-title h6 m-0 text-black dark:text-white text-truncate-2">
                                {video.title}
                              </h3>
                              <p className="video-description fs-7 text-gray-900 dark:text-white text-opacity-60 m-0 text-truncate-2">
                                {video.description}
                              </p>

                              <div className="video-meta panel vstack gap-1">
                                <div className="hstack gap-2 justify-between">
                                  <div className="hstack gap-1">
                                    <User
                                      size={16}
                                      className="text-gray-900 dark:text-white text-opacity-60"
                                    />
                                    <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                      {video.instructor}
                                    </span>
                                  </div>
                                  <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {video.uploadDate}
                                  </span>
                                </div>
                              </div>

                              <div className="video-actions hstack gap-2 pt-2 border-top">
                                <button className="btn btn-xs btn-outline-primary flex-1">
                                  <Play size={16} className="me-1" />
                                  Watch Now
                                </button>
                                <button className="btn btn-xs btn-outline-secondary">
                                  <Bookmark size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Playlists */}
              <div className="playlists-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Featured Playlists
                  </h2>
                  <div className="row child-cols-12 md:child-cols-6 lg:child-cols-3 g-3">
                    {[
                      {
                        title: "JEE Preparation Series",
                        videos: 24,
                        instructor: "Physics Wallah",
                        thumbnail:
                          "https://images.unsplash.com/photo-1636466497217-26a8c3af2913?w=400",
                      },
                      {
                        title: "NEET Biology Mastery",
                        videos: 18,
                        instructor: "Biology Simplified",
                        thumbnail:
                          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
                      },
                      {
                        title: "CBSE Board Exam Guide",
                        videos: 32,
                        instructor: "Exam Expert",
                        thumbnail:
                          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400",
                      },
                    ].map((playlist, index) => (
                      <div key={index}>
                        <div className="playlist-card panel vstack gap-0 border rounded bg-white dark:bg-gray-800 overflow-hidden hover:shadow-sm transition-all duration-150">
                          <div className="position-relative">
                            <img
                              src={playlist.thumbnail}
                              alt={playlist.title}
                              className="w-100 h-120px object-cover"
                            />
                            <div className="position-absolute top-0 start-0 end-0 p-2 bg-gradient-to-b from-black to-transparent">
                              <span className="badge bg-dark fs-7">
                                <Video size={12} className="me-1" />
                                {playlist.videos} videos
                              </span>
                            </div>
                          </div>
                          <div className="p-3">
                            <h4 className="h6 m-0 text-black dark:text-white text-truncate">
                              {playlist.title}
                            </h4>
                            <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0 mt-1">
                              By {playlist.instructor}
                            </p>
                            <button className="btn btn-xs btn-primary w-100 mt-2">
                              <PlayCircle size={16} className="me-1" />
                              Start Watching
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="cta-section panel p-4 border rounded bg-primary text-white text-center">
                <div className="vstack gap-2 max-w-500px mx-auto">
                  <h3 className="h5 m-0">
                    <BellRing size={20} className="me-2" />
                    Never Miss New Content
                  </h3>
                  <p className="fs-6 text-white text-opacity-90 m-0">
                    Subscribe to get notified when we upload new video lectures
                    and tutorials.
                  </p>
                  <div className="hstack gap-2 justify-center mt-2">
                    <button className="btn btn-sm btn-light">
                      <Youtube size={16} className="me-1" />
                      Subscribe on YouTube
                    </button>
                    <button className="btn btn-sm btn-outline-light">
                      <Bell size={16} className="me-1" />
                      Get Notifications
                    </button>
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

export default VideoLectures;
