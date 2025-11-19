import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Calendar,
  Bookmark,
  ExternalLink,
  GraduationCap,
  Briefcase,
  BookOpen,
  TrendingUp,
  MapPin,
  DollarSign,
  Users,
  Clock,
  ArrowRight,
  Star,
  FileText,
  Target,
  Award,
  Lightbulb,
} from "lucide-react";

const ScholarshipsCareer = () => {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [savedScholarships, setSavedScholarships] = useState([]);

  // Scholarship categories
  const categories = [
    { id: "all", name: "All Scholarships" },
    { id: "merit", name: "Merit-Based" },
    { id: "means", name: "Means-Based" },
    { id: "sports", name: "Sports" },
    { id: "minority", name: "Minority" },
    { id: "women", name: "Women" },
    { id: "disability", name: "Disability" },
  ];

  // Education levels
  const educationLevels = [
    { id: "all", name: "All Levels" },
    { id: "school", name: "School Level" },
    { id: "undergraduate", name: "Undergraduate" },
    { id: "postgraduate", name: "Postgraduate" },
    { id: "phd", name: "PhD/Research" },
    { id: "diploma", name: "Diploma/Certificate" },
  ];

  // Sample scholarship data
  const scholarships = [
    {
      id: 1,
      title: "National Merit Scholarship",
      provider: "Ministry of Education",
      category: "merit",
      level: "undergraduate",
      amount: "₹50,000 per year",
      deadline: "2024-03-15",
      eligibility: "Class 12 passed with 90%+ marks, family income < ₹8 LPA",
      applicationProcess:
        "Online application through National Scholarship Portal",
      website: "https://scholarships.gov.in",
      tags: ["National", "Merit-based", "Renewable"],
      saved: false,
    },
    {
      id: 2,
      title: "Post Matric Scholarship for SC/ST",
      provider: "State Government",
      category: "minority",
      level: "undergraduate",
      amount: "Full tuition + maintenance",
      deadline: "2024-04-20",
      eligibility: "SC/ST students, family income < ₹2.5 LPA",
      applicationProcess: "State scholarship portal with caste certificate",
      website: "https://state-scholarship.gov.in",
      tags: ["State", "SC/ST", "Full Coverage"],
      saved: false,
    },
    {
      id: 3,
      title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
      provider: "Department of Science & Technology",
      category: "merit",
      level: "school",
      amount: "₹5,000-7,000 monthly + contingency grant",
      deadline: "2024-07-31",
      eligibility: "Class 11/12 students with interest in basic sciences",
      applicationProcess: "National level aptitude test + interview",
      website: "https://kvpy.iisc.ac.in",
      tags: ["Science", "Research", "Prestigious"],
      saved: false,
    },
    {
      id: 4,
      title: "Sports Scholarship Scheme",
      provider: "Sports Authority of India",
      category: "sports",
      level: "all",
      amount: "₹10,000-25,000 monthly",
      deadline: "2024-05-10",
      eligibility: "National/State level sports achievers",
      applicationProcess: "Through recognized sports associations",
      website: "https://sportsauthorityofindia.nic.in",
      tags: ["Sports", "Achievement", "Monthly Stipend"],
      saved: false,
    },
    {
      id: 5,
      title: "Women in STEM Scholarship",
      provider: "AICTE",
      category: "women",
      level: "undergraduate",
      amount: "₹50,000 one-time",
      deadline: "2024-06-15",
      eligibility: "Female students pursuing engineering/technology",
      applicationProcess: "Direct application through college",
      website: "https://aicte-india.org",
      tags: ["Women", "STEM", "Engineering"],
      saved: false,
    },
    {
      id: 6,
      title: "Prime Minister's Scholarship Scheme",
      provider: "Ministry of Home Affairs",
      category: "merit",
      level: "undergraduate",
      amount: "₹2,500-3,000 monthly",
      deadline: "2024-08-20",
      eligibility: "Wards of ex-servicemen, 60%+ in Class 12",
      applicationProcess: "Online through KSB portal",
      website: "https://ksb.gov.in",
      tags: ["Defense", "Merit", "Monthly"],
      saved: false,
    },
  ];

  // Career guidance articles
  const careerArticles = [
    {
      id: 1,
      title: "What to do after Class 12? Complete Guide 2024",
      category: "career-planning",
      readTime: "8 min read",
      excerpt:
        "Comprehensive guide to choosing the right path after Class 12 - Science, Commerce, Arts, and professional courses.",
      content: `
        <h3>Science Stream Options</h3>
        <ul>
          <li><strong>Engineering:</strong> JEE Main/Advanced, BITSAT, State CETs</li>
          <li><strong>Medical:</strong> NEET, AIIMS, JIPMER</li>
          <li><strong>Pure Sciences:</strong> BSc programs with research opportunities</li>
          <li><strong>Other Options:</strong> Architecture, Design, Pharmacy</li>
        </ul>

        <h3>Commerce Stream Options</h3>
        <ul>
          <li><strong>Professional Courses:</strong> CA, CS, CMA</li>
          <li><strong>Undergraduate:</strong> BCom, BBA, Economics</li>
          <li><strong>Management:</strong> Integrated MBA programs</li>
        </ul>

        <h3>Arts/Humanities Options</h3>
        <ul>
          <li><strong>Traditional:</strong> BA in Psychology, Sociology, Literature</li>
          <li><strong>Professional:</strong> Mass Communication, Hotel Management</li>
          <li><strong>Creative:</strong> Design, Fine Arts, Performing Arts</li>
        </ul>
      `,
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 Emerging Careers in Technology",
      category: "emerging-careers",
      readTime: "6 min read",
      excerpt:
        "Discover the fastest-growing tech careers and the skills needed to succeed in the digital age.",
      content: `
        <h3>High-Demand Tech Careers</h3>
        <ul>
          <li><strong>Data Scientist:</strong> Python, ML, Statistics</li>
          <li><strong>Cybersecurity Analyst:</strong> Network security, ethical hacking</li>
          <li><strong>AI/ML Engineer:</strong> Python, TensorFlow, neural networks</li>
          <li><strong>Cloud Architect:</strong> AWS, Azure, cloud computing</li>
          <li><strong>Blockchain Developer:</strong> Solidity, smart contracts</li>
        </ul>
      `,
      featured: false,
    },
    {
      id: 3,
      title: "Skill Development Programs for Students",
      category: "skill-development",
      readTime: "5 min read",
      excerpt:
        "Government and private initiatives to enhance employability skills while studying.",
      content: `
        <h3>Government Initiatives</h3>
        <ul>
          <li>National Skill Development Corporation (NSDC)</li>
          <li>Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</li>
          <li>Skill India Mission</li>
        </ul>

        <h3>Online Platforms</h3>
        <ul>
          <li>NPTEL for technical courses</li>
          <li>SWAYAM for academic courses</li>
          <li>Internshala for internships and training</li>
        </ul>
      `,
      featured: false,
    },
  ];

  // Internship opportunities
  const internships = [
    {
      id: 1,
      title: "Summer Research Internship",
      company: "IIT Delhi",
      duration: "2 months",
      stipend: "₹15,000 monthly",
      category: "research",
      deadline: "2024-04-30",
      eligibility: "2nd/3rd year engineering students",
      description: "Hands-on research experience in emerging technologies",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Startup India",
      duration: "3 months",
      stipend: "₹10,000 monthly",
      category: "business",
      deadline: "2024-03-20",
      eligibility: "Any graduate/postgraduate student",
      description: "Digital marketing and social media management",
    },
    {
      id: 3,
      title: "Software Development Intern",
      company: "Tech Mahindra",
      duration: "6 months",
      stipend: "₹25,000 monthly",
      category: "technology",
      deadline: "2024-05-15",
      eligibility: "CS/IT students with programming skills",
      description: "Full-stack development and agile methodology",
    },
  ];

  // Filter scholarships
  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || scholarship.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || scholarship.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const toggleSaveScholarship = (scholarshipId) => {
    setSavedScholarships((prev) => {
      if (prev.includes(scholarshipId)) {
        return prev.filter((id) => id !== scholarshipId);
      } else {
        return [...prev, scholarshipId];
      }
    });
  };

  const getDaysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="wrap overflow-hidden-x">
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              {/* Page Header */}
              <div className="block-header panel pt-4 border-top text-center">
                <h1 className="h3 lg:h2 ft-primary fw-bold m-0 text-black dark:text-white">
                  Scholarships & Career Guidance
                </h1>
                <p className="fs-6 mt-2 text-gray-900 dark:text-white text-opacity-60">
                  Discover scholarships, career paths, and skill development
                  opportunities
                </p>
              </div>

              {/* Navigation Tabs */}
              <div className="navigation-section panel">
                <div className="border rounded bg-white dark:bg-gray-800">
                  <div className="row child-cols-3 g-0">
                    <div className="col">
                      <button
                        onClick={() => setActiveTab("scholarships")}
                        className={`tab-btn panel vstack gap-1 p-3 w-100 text-none border-end ${
                          activeTab === "scholarships"
                            ? "bg-primary text-white"
                            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        }`}
                      >
                        <GraduationCap size={20} />
                        <span className="fs-7 fw-medium">Scholarships</span>
                      </button>
                    </div>
                    <div className="col">
                      <button
                        onClick={() => setActiveTab("career")}
                        className={`tab-btn panel vstack gap-1 p-3 w-100 text-none border-end ${
                          activeTab === "career"
                            ? "bg-primary text-white"
                            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        }`}
                      >
                        <Briefcase size={20} />
                        <span className="fs-7 fw-medium">Career Guidance</span>
                      </button>
                    </div>
                    <div className="col">
                      <button
                        onClick={() => setActiveTab("internships")}
                        className={`tab-btn panel vstack gap-1 p-3 w-100 text-none ${
                          activeTab === "internships"
                            ? "bg-primary text-white"
                            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        }`}
                      >
                        <TrendingUp size={20} />
                        <span className="fs-7 fw-medium">Internships</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scholarships Tab */}
              {activeTab === "scholarships" && (
                <div className="scholarships-tab panel vstack gap-4">
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
                          placeholder="Search scholarships..."
                          aria-label="Search scholarships"
                        />
                      </form>
                      <button className="btn btn-outline-primary">
                        <Filter size={16} className="me-1" />
                        Filters
                      </button>
                    </div>

                    <div className="row child-cols-12 md:child-cols-6 g-2">
                      <div>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="form-select fs-7"
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select
                          value={selectedLevel}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="form-select fs-7"
                        >
                          {educationLevels.map((level) => (
                            <option key={level.id} value={level.id}>
                              {level.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Scholarships Grid */}
                  <div className="scholarships-grid panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Available Scholarships
                      <span className="fs-6 text-gray-900 dark:text-white text-opacity-60 ms-2">
                        ({filteredScholarships.length} found)
                      </span>
                    </h2>

                    {filteredScholarships.length === 0 ? (
                      <div className="text-center py-8">
                        <GraduationCap
                          size={48}
                          className="text-gray-400 mb-3"
                        />
                        <h3 className="h5 text-gray-900 dark:text-white">
                          No scholarships found
                        </h3>
                        <p className="text-gray-900 dark:text-white text-opacity-60">
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    ) : (
                      <div className="vstack gap-3">
                        {filteredScholarships.map((scholarship) => {
                          const daysUntilDeadline = getDaysUntilDeadline(
                            scholarship.deadline
                          );
                          const isSaved = savedScholarships.includes(
                            scholarship.id
                          );

                          return (
                            <div
                              key={scholarship.id}
                              className="scholarship-card panel border rounded bg-white dark:bg-gray-800 overflow-hidden"
                            >
                              <div className="p-4">
                                <div className="hstack justify-between align-start mb-3">
                                  <div className="vstack gap-1 flex-1">
                                    <h3 className="h5 m-0 text-black dark:text-white">
                                      {scholarship.title}
                                    </h3>
                                    <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                      by {scholarship.provider}
                                    </p>
                                  </div>
                                  <button
                                    onClick={() =>
                                      toggleSaveScholarship(scholarship.id)
                                    }
                                    className={`btn btn-xs ${
                                      isSaved
                                        ? "btn-warning"
                                        : "btn-outline-secondary"
                                    }`}
                                  >
                                    <Bookmark
                                      size={14}
                                      fill={isSaved ? "currentColor" : "none"}
                                    />
                                  </button>
                                </div>

                                <div className="row child-cols-12 md:child-cols-4 g-3 mb-3">
                                  <div className="hstack gap-2">
                                    <DollarSign
                                      size={16}
                                      className="text-success"
                                    />
                                    <div>
                                      <div className="fs-7 fw-medium text-black dark:text-white">
                                        Amount
                                      </div>
                                      <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                        {scholarship.amount}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2">
                                    <Calendar
                                      size={16}
                                      className="text-warning"
                                    />
                                    <div>
                                      <div className="fs-7 fw-medium text-black dark:text-white">
                                        Deadline
                                      </div>
                                      <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                        {scholarship.deadline}
                                        <span
                                          className={`ms-1 badge bg-${
                                            daysUntilDeadline < 30
                                              ? "danger"
                                              : "success"
                                          } fs-7`}
                                        >
                                          {daysUntilDeadline} days left
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hstack gap-2">
                                    <Users size={16} className="text-info" />
                                    <div>
                                      <div className="fs-7 fw-medium text-black dark:text-white">
                                        Category
                                      </div>
                                      <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                        {
                                          categories.find(
                                            (c) => c.id === scholarship.category
                                          )?.name
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vstack gap-2">
                                  <div>
                                    <strong className="fs-7 text-black dark:text-white">
                                      Eligibility:
                                    </strong>
                                    <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                      {scholarship.eligibility}
                                    </p>
                                  </div>
                                  <div>
                                    <strong className="fs-7 text-black dark:text-white">
                                      Application Process:
                                    </strong>
                                    <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                      {scholarship.applicationProcess}
                                    </p>
                                  </div>
                                </div>

                                <div className="hstack gap-2 justify-between mt-3 pt-3 border-top">
                                  <div className="hstack gap-1">
                                    {scholarship.tags.map((tag, index) => (
                                      <span
                                        key={index}
                                        className="badge bg-light text-dark fs-7"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <a
                                    href={scholarship.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-primary"
                                  >
                                    Apply Now
                                    <ExternalLink size={14} className="ms-1" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Career Guidance Tab */}
              {activeTab === "career" && (
                <div className="career-tab panel vstack gap-4">
                  {/* Featured Article */}
                  <div className="featured-article panel">
                    <div className="border rounded bg-gradient-to-r from-primary to-blue-600 text-white overflow-hidden">
                      <div className="row g-0">
                        <div className="col-md-8 p-4">
                          <div className="vstack gap-2 h-100 justify-center">
                            <span className="badge bg-white text-primary fs-7 align-self-start">
                              Featured
                            </span>
                            <h2 className="h4 m-0">
                              What to do after Class 12? Complete Guide 2024
                            </h2>
                            <p className="fs-6 text-white text-opacity-90 m-0">
                              Comprehensive guide to choosing the right path
                              after Class 12 - Science, Commerce, Arts, and
                              professional courses.
                            </p>
                            <div className="hstack gap-2 mt-2">
                              <span className="fs-7 text-white text-opacity-80">
                                <Clock size={14} className="me-1" />8 min read
                              </span>
                              <span className="fs-7 text-white text-opacity-80">
                                <BookOpen size={14} className="me-1" />
                                Career Planning
                              </span>
                            </div>
                            <button className="btn btn-light btn-sm align-self-start mt-2">
                              Read Full Guide
                              <ArrowRight size={14} className="ms-1" />
                            </button>
                          </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                          <div
                            className="h-100 bg-cover bg-center"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Articles Grid */}
                  <div className="career-articles panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Career Guidance Articles
                    </h2>

                    <div className="row child-cols-12 md:child-cols-6 g-4">
                      {careerArticles
                        .filter((article) => !article.featured)
                        .map((article) => (
                          <div key={article.id} className="article-card panel">
                            <div className="border rounded bg-white dark:bg-gray-800 h-100 hover:shadow-sm transition-all duration-150">
                              <div className="p-3 vstack gap-2 h-100">
                                <div className="hstack gap-2 justify-between">
                                  <span className="badge bg-primary fs-7">
                                    {article.category
                                      .split("-")
                                      .map(
                                        (word) =>
                                          word.charAt(0).toUpperCase() +
                                          word.slice(1)
                                      )
                                      .join(" ")}
                                  </span>
                                  <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    <Clock size={12} className="me-1" />
                                    {article.readTime}
                                  </span>
                                </div>
                                <h4 className="h6 m-0 text-black dark:text-white flex-1">
                                  {article.title}
                                </h4>
                                <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                  {article.excerpt}
                                </p>
                                <button className="btn btn-outline-primary btn-sm align-self-start mt-1">
                                  Read More
                                  <ArrowRight size={12} className="ms-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="quick-links panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Quick Career Resources
                    </h2>

                    <div className="row child-cols-12 md:child-cols-4 g-3">
                      {[
                        {
                          title: "Career Assessment Test",
                          description: "Discover your ideal career path",
                          icon: Target,
                          color: "primary",
                        },
                        {
                          title: "Skill Development",
                          description: "Enhance your employability skills",
                          icon: TrendingUp,
                          color: "success",
                        },
                        {
                          title: "Resume Builder",
                          description: "Create professional resumes",
                          icon: FileText,
                          color: "info",
                        },
                      ].map((resource, index) => (
                        <div key={index} className="resource-card panel">
                          <div
                            className={`border rounded bg-${resource.color} text-white p-3 text-center hover:shadow-sm transition-all duration-150`}
                          >
                            <resource.icon size={32} className="mb-2" />
                            <h5 className="h6 m-0">{resource.title}</h5>
                            <p className="fs-7 text-white text-opacity-90 m-0 mt-1">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Internships Tab */}
              {activeTab === "internships" && (
                <div className="internships-tab panel vstack gap-4">
                  {/* Internship Opportunities */}
                  <div className="internships-grid panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Internship Opportunities
                    </h2>

                    <div className="vstack gap-3">
                      {internships.map((internship) => (
                        <div
                          key={internship.id}
                          className="internship-card panel border rounded bg-white dark:bg-gray-800 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="hstack justify-between align-start mb-3">
                              <div className="vstack gap-1">
                                <h3 className="h5 m-0 text-black dark:text-white">
                                  {internship.title}
                                </h3>
                                <p className="fs-7 text-primary m-0">
                                  {internship.company}
                                </p>
                              </div>
                              <span className="badge bg-light text-dark fs-7">
                                {internship.category}
                              </span>
                            </div>

                            <div className="row child-cols-12 md:child-cols-3 g-3 mb-3">
                              <div className="hstack gap-2">
                                <Clock size={16} className="text-info" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Duration
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {internship.duration}
                                  </div>
                                </div>
                              </div>
                              <div className="hstack gap-2">
                                <DollarSign
                                  size={16}
                                  className="text-success"
                                />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Stipend
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {internship.stipend}
                                  </div>
                                </div>
                              </div>
                              <div className="hstack gap-2">
                                <Calendar size={16} className="text-warning" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Apply By
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {internship.deadline}
                                    <span className="ms-1 badge bg-warning text-dark fs-7">
                                      {getDaysUntilDeadline(
                                        internship.deadline
                                      )}{" "}
                                      days left
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="vstack gap-2">
                              <div>
                                <strong className="fs-7 text-black dark:text-white">
                                  Eligibility:
                                </strong>
                                <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                  {internship.eligibility}
                                </p>
                              </div>
                              <div>
                                <strong className="fs-7 text-black dark:text-white">
                                  Description:
                                </strong>
                                <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                                  {internship.description}
                                </p>
                              </div>
                            </div>

                            <div className="hstack gap-2 justify-between mt-3 pt-3 border-top">
                              <button className="btn btn-sm btn-outline-primary">
                                <Bookmark size={14} className="me-1" />
                                Save
                              </button>
                              <button className="btn btn-sm btn-primary">
                                Apply Now
                                <ExternalLink size={14} className="ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Development */}
                  <div className="skill-development panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Skill Development Programs
                    </h2>

                    <div className="row child-cols-12 md:child-cols-6 g-3">
                      {[
                        {
                          title: "Digital Marketing",
                          provider: "Google Digital Garage",
                          duration: "40 hours",
                          level: "Beginner",
                          free: true,
                        },
                        {
                          title: "Python Programming",
                          provider: "Coursera",
                          duration: "3 months",
                          level: "Intermediate",
                          free: false,
                        },
                        {
                          title: "Data Analysis",
                          provider: "Microsoft Learn",
                          duration: "6 weeks",
                          level: "Beginner",
                          free: true,
                        },
                        {
                          title: "Web Development",
                          provider: "freeCodeCamp",
                          duration: "300 hours",
                          level: "Advanced",
                          free: true,
                        },
                      ].map((course, index) => (
                        <div key={index} className="course-card panel">
                          <div className="border rounded bg-white dark:bg-gray-800 p-3 hover:shadow-sm transition-all duration-150">
                            <div className="hstack justify-between align-start mb-2">
                              <h5 className="h6 m-0 text-black dark:text-white flex-1">
                                {course.title}
                              </h5>
                              <span
                                className={`badge bg-${
                                  course.free ? "success" : "warning"
                                } fs-7`}
                              >
                                {course.free ? "Free" : "Paid"}
                              </span>
                            </div>
                            <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                              by {course.provider}
                            </p>
                            <div className="hstack gap-3 mt-2">
                              <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                <Clock size={12} className="me-1" />
                                {course.duration}
                              </span>
                              <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                <TrendingUp size={12} className="me-1" />
                                {course.level}
                              </span>
                            </div>
                            <button className="btn btn-sm btn-outline-primary w-100 mt-2">
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Call to Action */}
              <div className="cta-section panel p-4 border rounded bg-primary text-white text-center">
                <div className="vstack gap-2 max-w-500px mx-auto">
                  <h3 className="h5 m-0">
                    <Award size={20} className="me-2" />
                    Need Personalized Guidance?
                  </h3>
                  <p className="fs-6 text-white text-opacity-90 m-0">
                    Book a free career counseling session with our experts to
                    get personalized advice.
                  </p>
                  <div className="hstack gap-2 justify-center mt-2">
                    <button className="btn btn-sm btn-light">
                      <Lightbulb size={16} className="me-1" />
                      Book Free Session
                    </button>
                    <button className="btn btn-sm btn-outline-light">
                      <FileText size={16} className="me-1" />
                      Download Brochure
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

export default ScholarshipsCareer;
