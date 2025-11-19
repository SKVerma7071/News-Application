import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Users,
  BookOpen,
  GraduationCap,
  Building,
  Calendar,
  Phone,
  Mail,
  Globe,
  Award,
  TrendingUp,
  Home,
  Clock,
  Bookmark,
  Share2,
  Download,
  ChevronDown,
  ChevronUp,
  GitCompareArrows,
} from "lucide-react";

const InstitutionDirectory = () => {
  const [activeTab, setActiveTab] = useState("schools");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedBoard, setSelectedBoard] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStream, setSelectedStream] = useState("all");
  const [expandedInstitution, setExpandedInstitution] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Locations for filters
  const locations = [
    { id: "all", name: "All Locations" },
    { id: "delhi", name: "Delhi" },
    { id: "mumbai", name: "Mumbai" },
    { id: "bangalore", name: "Bangalore" },
    { id: "chennai", name: "Chennai" },
    { id: "kolkata", name: "Kolkata" },
    { id: "hyderabad", name: "Hyderabad" },
  ];

  // Board types for schools
  const boards = [
    { id: "all", name: "All Boards" },
    { id: "cbse", name: "CBSE" },
    { id: "icse", name: "ICSE" },
    { id: "state", name: "State Board" },
    { id: "igcse", name: "IGCSE" },
    { id: "ib", name: "International Baccalaureate" },
  ];

  // Institution types for colleges
  const institutionTypes = [
    { id: "all", name: "All Types" },
    { id: "government", name: "Government" },
    { id: "private", name: "Private" },
    { id: "deemed", name: "Deemed University" },
    { id: "autonomous", name: "Autonomous" },
  ];

  // Streams for colleges
  const streams = [
    { id: "all", name: "All Streams" },
    { id: "science", name: "Science" },
    { id: "commerce", name: "Commerce" },
    { id: "arts", name: "Arts" },
    { id: "engineering", name: "Engineering" },
    { id: "medical", name: "Medical" },
    { id: "management", name: "Management" },
  ];

  // Sample Schools Data
  const schools = [
    {
      id: 1,
      name: "Delhi Public School, RK Puram",
      type: "school",
      board: "cbse",
      location: "delhi",
      established: "1972",
      rating: 4.5,
      reviews: 1247,
      address: "Dr. S. Radhakrishnan Marg, RK Puram, New Delhi",
      fees: "₹85,000 - ₹1,20,000 p.a.",
      facilities: [
        "Smart Classrooms",
        "Swimming Pool",
        "Science Labs",
        "Library",
        "Sports Ground",
      ],
      admissionProcess:
        "Entrance Test + Interview. Forms available online from January.",
      contact: {
        phone: "+91-11-26171267",
        email: "admissions@dpsrkp.net",
        website: "www.dpsrkp.com",
      },
      gallery: [
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
        "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400",
      ],
      featured: true,
    },
    {
      id: 2,
      name: "The Doon School",
      type: "school",
      board: "icse",
      location: "delhi",
      established: "1935",
      rating: 4.8,
      reviews: 892,
      address: "Mall Road, Dehradun, Uttarakhand",
      fees: "₹12,00,000 - ₹15,00,000 p.a.",
      facilities: [
        "Boarding",
        "Horse Riding",
        "Tennis Courts",
        "Art Studio",
        "Music Room",
      ],
      admissionProcess: "Common Entrance Test for Class 7 & 9. Limited seats.",
      contact: {
        phone: "+91-135-2526400",
        email: "admissions@doonschool.com",
        website: "www.doonschool.com",
      },
      gallery: [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Kendriya Vidyalaya, IIT Mumbai",
      type: "school",
      board: "cbse",
      location: "mumbai",
      established: "1965",
      rating: 4.2,
      reviews: 567,
      address: "IIT Campus, Powai, Mumbai",
      fees: "₹12,000 - ₹25,000 p.a.",
      facilities: ["Computer Lab", "Playground", "Science Lab", "Library"],
      admissionProcess:
        "Based on KV admission guidelines. Priority for IIT staff.",
      contact: {
        phone: "+91-22-25764545",
        email: "kviitmumbai@gmail.com",
        website: "kviitmumbai.edu.in",
      },
      gallery: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
      ],
      featured: false,
    },
  ];

  // Sample Colleges Data
  const colleges = [
    {
      id: 4,
      name: "Sri Venkateswara College, University of Delhi",
      type: "college",
      institutionType: "government",
      stream: "science",
      location: "delhi",
      established: "1961",
      rating: 4.4,
      reviews: 2156,
      address: "Benito Juarez Road, Dhaula Kuan, New Delhi",
      courses: [
        "B.Sc. (Hons) Computer Science",
        "B.Sc. (Hons) Physics",
        "B.Sc. (Hons) Chemistry",
        "B.A. (Hons) Economics",
      ],
      faculty: {
        total: 145,
        phd: 89,
        experience: "15+ years average",
      },
      placement: {
        averagePackage: "₹8.5 LPA",
        highestPackage: "₹32 LPA",
        topCompanies: ["Microsoft", "Amazon", "Goldman Sachs", "Deloitte"],
      },
      hostel: {
        available: true,
        capacity: "400 students",
        fees: "₹85,000 p.a.",
      },
      contact: {
        phone: "+91-11-24111956",
        email: "principal@svc.ac.in",
        website: "www.svc.ac.in",
      },
      featured: true,
    },
    {
      id: 5,
      name: "St. Xavier's College, Mumbai",
      type: "college",
      institutionType: "private",
      stream: "arts",
      location: "mumbai",
      established: "1869",
      rating: 4.7,
      reviews: 1890,
      address: "5, Mahapalika Marg, Mumbai",
      courses: [
        "B.A. in Psychology",
        "B.A. in Economics",
        "B.Com",
        "B.Sc. in Computer Science",
      ],
      faculty: {
        total: 200,
        phd: 120,
        experience: "18+ years average",
      },
      placement: {
        averagePackage: "₹6.5 LPA",
        highestPackage: "₹18 LPA",
        topCompanies: ["KPMG", "EY", "TCS", "Wipro"],
      },
      hostel: {
        available: true,
        capacity: "250 students",
        fees: "₹1,20,000 p.a.",
      },
      contact: {
        phone: "+91-22-22620661",
        email: "admissions@xaviers.ac.in",
        website: "www.xaviers.ac.in",
      },
      featured: true,
    },
  ];

  // Sample Universities Data
  const universities = [
    {
      id: 6,
      name: "University of Delhi",
      type: "university",
      institutionType: "government",
      location: "delhi",
      established: "1922",
      rating: 4.6,
      reviews: 4567,
      address: "University Road, Delhi",
      departments: [
        "Faculty of Science",
        "Faculty of Arts",
        "Faculty of Commerce",
        "Faculty of Law",
      ],
      courses: ["Undergraduate", "Postgraduate", "PhD", "Diploma Courses"],
      researchAreas: [
        "Artificial Intelligence",
        "Environmental Science",
        "Social Sciences",
        "Biotechnology",
      ],
      notifications: [
        "Admission 2024: UG courses application starts from May 15",
        "PhD entrance exam scheduled for June 30, 2024",
        "Summer vacation from May 15 to June 30, 2024",
      ],
      contact: {
        phone: "+91-11-27667893",
        email: "info@du.ac.in",
        website: "www.du.ac.in",
      },
      featured: true,
    },
    {
      id: 7,
      name: "Indian Institute of Technology, Bombay",
      type: "university",
      institutionType: "government",
      location: "mumbai",
      established: "1958",
      rating: 4.9,
      reviews: 3123,
      address: "Powai, Mumbai, Maharashtra",
      departments: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
      ],
      courses: ["B.Tech", "M.Tech", "PhD", "Dual Degree"],
      researchAreas: [
        "Machine Learning",
        "Renewable Energy",
        "Nanotechnology",
        "Space Technology",
      ],
      notifications: [
        "JEE Advanced 2024 counseling starts from June 25",
        "Research fellowship applications open",
        "International conference on AI - July 2024",
      ],
      contact: {
        phone: "+91-22-25722545",
        email: "admissions@iitb.ac.in",
        website: "www.iitb.ac.in",
      },
      featured: true,
    },
  ];

  // Combine all institutions
  const allInstitutions = [...schools, ...colleges, ...universities];

  // Filter institutions based on active tab and filters
  const filteredInstitutions = allInstitutions.filter((institution) => {
    if (institution.type !== activeTab.slice(0, -1)) return false;

    const matchesSearch =
      institution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      institution.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation === "all" || institution.location === selectedLocation;

    let matchesAdditionalFilter = true;
    if (activeTab === "schools") {
      matchesAdditionalFilter =
        selectedBoard === "all" || institution.board === selectedBoard;
    } else if (activeTab === "colleges") {
      matchesAdditionalFilter =
        (selectedType === "all" ||
          institution.institutionType === selectedType) &&
        (selectedStream === "all" || institution.stream === selectedStream);
    } else if (activeTab === "universities") {
      matchesAdditionalFilter =
        selectedType === "all" || institution.institutionType === selectedType;
    }

    return matchesSearch && matchesLocation && matchesAdditionalFilter;
  });

  const toggleInstitutionExpand = (institutionId) => {
    setExpandedInstitution(
      expandedInstitution === institutionId ? null : institutionId
    );
  };

  const toggleCompare = (institutionId) => {
    setCompareList((prev) => {
      if (prev.includes(institutionId)) {
        return prev.filter((id) => id !== institutionId);
      } else if (prev.length < 3) {
        return [...prev, institutionId];
      } else {
        alert("You can compare up to 3 institutions at a time.");
        return prev;
      }
    });
  };

  const renderStars = (rating) => {
    return (
      <div className="hstack gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={
              star <= rating ? "text-warning fill-warning" : "text-gray-400"
            }
          />
        ))}
        <span className="fs-7 text-gray-900 dark:text-white text-opacity-60 ms-1">
          ({rating})
        </span>
      </div>
    );
  };

  const renderSchoolDetails = (school) => (
    <div className="vstack gap-3 mt-3">
      <div className="row child-cols-12 md:child-cols-6 g-3">
        <div className="hstack gap-2">
          <Calendar size={16} className="text-primary" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Established
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {school.established}
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <Award size={16} className="text-success" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Annual Fees
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {school.fees}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h6 className="fw-medium text-black dark:text-white mb-2">
          Facilities
        </h6>
        <div className="hstack gap-1 flex-wrap">
          {school.facilities.map((facility, index) => (
            <span key={index} className="badge bg-light text-dark fs-7">
              {facility}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h6 className="fw-medium text-black dark:text-white mb-2">
          Admission Process
        </h6>
        <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
          {school.admissionProcess}
        </p>
      </div>

      <div className="row child-cols-12 md:child-cols-4 g-2">
        <div className="hstack gap-2">
          <Phone size={16} className="text-info" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Phone
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {school.contact.phone}
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <Mail size={16} className="text-info" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Email
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {school.contact.email}
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <Globe size={16} className="text-info" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Website
            </div>
            <a
              href={`https://${school.contact.website}`}
              className="fs-7 text-primary text-decoration-none"
            >
              {school.contact.website}
            </a>
          </div>
        </div>
      </div>

      {school.gallery && school.gallery.length > 0 && (
        <div>
          <h6 className="fw-medium text-black dark:text-white mb-2">
            Photo Gallery
          </h6>
          <div className="row child-cols-12 md:child-cols-6 g-2">
            {school.gallery.map((photo, index) => (
              <div key={index}>
                <img
                  src={photo}
                  alt={`${school.name} ${index + 1}`}
                  className="w-100 h-80px object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCollegeDetails = (college) => (
    <div className="vstack gap-3 mt-3">
      <div className="row child-cols-12 md:child-cols-4 g-3">
        <div className="hstack gap-2">
          <Calendar size={16} className="text-primary" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Established
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {college.established}
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <Users size={16} className="text-success" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Faculty
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {college.faculty.total} ({college.faculty.phd} PhDs)
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <Home size={16} className="text-warning" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Hostel
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {college.hostel.available
                ? `Available (${college.hostel.fees})`
                : "Not Available"}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h6 className="fw-medium text-black dark:text-white mb-2">
          Courses Offered
        </h6>
        <div className="hstack gap-1 flex-wrap">
          {college.courses.map((course, index) => (
            <span key={index} className="badge bg-primary fs-7">
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="row child-cols-12 md:child-cols-2 g-3">
        <div>
          <h6 className="fw-medium text-black dark:text-white mb-2">
            Placement Records
          </h6>
          <div className="vstack gap-1">
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              Average: {college.placement.averagePackage}
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              Highest: {college.placement.highestPackage}
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              Top Companies: {college.placement.topCompanies.join(", ")}
            </div>
          </div>
        </div>
        <div>
          <h6 className="fw-medium text-black dark:text-white mb-2">
            Contact Information
          </h6>
          <div className="vstack gap-1">
            <div className="hstack gap-1">
              <Phone size={14} className="text-info" />
              <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                {college.contact.phone}
              </span>
            </div>
            <div className="hstack gap-1">
              <Mail size={14} className="text-info" />
              <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                {college.contact.email}
              </span>
            </div>
            <div className="hstack gap-1">
              <Globe size={14} className="text-info" />
              <a
                href={`https://${college.contact.website}`}
                className="fs-7 text-primary text-decoration-none"
              >
                {college.contact.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUniversityDetails = (university) => (
    <div className="vstack gap-3 mt-3">
      <div className="row child-cols-12 md:child-cols-3 g-3">
        <div className="hstack gap-2">
          <Calendar size={16} className="text-primary" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Established
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {university.established}
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <BookOpen size={16} className="text-success" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Departments
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {university.departments.length}+
            </div>
          </div>
        </div>
        <div className="hstack gap-2">
          <GraduationCap size={16} className="text-warning" />
          <div>
            <div className="fs-7 fw-medium text-black dark:text-white">
              Courses
            </div>
            <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
              {university.courses.join(", ")}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h6 className="fw-medium text-black dark:text-white mb-2">
          Research Areas
        </h6>
        <div className="hstack gap-1 flex-wrap">
          {university.researchAreas.map((area, index) => (
            <span key={index} className="badge bg-info text-dark fs-7">
              {area}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h6 className="fw-medium text-black dark:text-white mb-2">
          Official Notifications
        </h6>
        <div className="vstack gap-2">
          {university.notifications.map((notification, index) => (
            <div
              key={index}
              className="hstack gap-2 p-2 border rounded bg-gray-25 dark:bg-gray-800"
            >
              <Clock size={14} className="text-warning" />
              <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                {notification}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hstack gap-3">
        <div className="hstack gap-1">
          <Phone size={14} className="text-info" />
          <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
            {university.contact.phone}
          </span>
        </div>
        <div className="hstack gap-1">
          <Mail size={14} className="text-info" />
          <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
            {university.contact.email}
          </span>
        </div>
        <div className="hstack gap-1">
          <Globe size={14} className="text-info" />
          <a
            href={`https://${university.contact.website}`}
            className="fs-7 text-primary text-decoration-none"
          >
            {university.contact.website}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wrap overflow-hidden-x">
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              {/* Page Header */}
              <div className="block-header panel pt-4 border-top text-center">
                <h1 className="h3 lg:h2 ft-primary fw-bold m-0 text-black dark:text-white">
                  Institution Directory
                </h1>
                <p className="fs-6 mt-2 text-gray-900 dark:text-white text-opacity-60">
                  Discover and compare schools, colleges, and universities
                  across India
                </p>
              </div>

              {/* Compare Bar */}
              {compareList.length > 0 && (
                <div className="compare-bar panel p-3 border rounded bg-warning text-dark">
                  <div className="hstack gap-3 justify-between">
                    <div className="hstack gap-2">
                      <GitCompareArrows size={20} />
                      <span className="fw-medium">
                        {compareList.length} institution(s) selected for
                        comparison
                      </span>
                    </div>
                    <div className="hstack gap-2">
                      <button className="btn btn-sm btn-dark">
                        Compare Now
                      </button>
                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => setCompareList([])}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Tabs */}
              <div className="navigation-section panel">
                <div className="border rounded bg-white dark:bg-gray-800">
                  <div className="row child-cols-3 g-0">
                    {[
                      { id: "schools", name: "Schools", icon: Building },
                      { id: "colleges", name: "Colleges", icon: GraduationCap },
                      { id: "universities", name: "Universities", icon: Award },
                    ].map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <div key={tab.id} className="col">
                          <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-btn panel vstack gap-1 p-3 w-100 text-none border-end ${
                              activeTab === tab.id
                                ? "bg-primary text-white"
                                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            }`}
                          >
                            <IconComponent size={20} />
                            <span className="fs-7 fw-medium">{tab.name}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
                      placeholder={`Search ${activeTab}...`}
                      aria-label={`Search ${activeTab}`}
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
                          Location
                        </label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="form-select fs-7"
                        >
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {activeTab === "schools" && (
                        <div>
                          <label className="form-label fs-7 fw-medium text-black dark:text-white">
                            Board Type
                          </label>
                          <select
                            value={selectedBoard}
                            onChange={(e) => setSelectedBoard(e.target.value)}
                            className="form-select fs-7"
                          >
                            {boards.map((board) => (
                              <option key={board.id} value={board.id}>
                                {board.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {(activeTab === "colleges" ||
                        activeTab === "universities") && (
                        <div>
                          <label className="form-label fs-7 fw-medium text-black dark:text-white">
                            Institution Type
                          </label>
                          <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="form-select fs-7"
                          >
                            {institutionTypes.map((type) => (
                              <option key={type.id} value={type.id}>
                                {type.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {activeTab === "colleges" && (
                        <div>
                          <label className="form-label fs-7 fw-medium text-black dark:text-white">
                            Stream
                          </label>
                          <select
                            value={selectedStream}
                            onChange={(e) => setSelectedStream(e.target.value)}
                            className="form-select fs-7"
                          >
                            {streams.map((stream) => (
                              <option key={stream.id} value={stream.id}>
                                {stream.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Institutions Grid */}
              <div className="institutions-grid panel vstack gap-3">
                <div className="hstack justify-between">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    <span className="fs-6 text-gray-900 dark:text-white text-opacity-60 ms-2">
                      ({filteredInstitutions.length} found)
                    </span>
                  </h2>
                  <div className="hstack gap-2">
                    <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                      Sort by:
                    </span>
                    <select className="form-select form-select-sm fs-7 border-0 bg-transparent">
                      <option>Rating: High to Low</option>
                      <option>Rating: Low to High</option>
                      <option>Name: A to Z</option>
                      <option>Name: Z to A</option>
                      <option>Fees: Low to High</option>
                    </select>
                  </div>
                </div>

                {filteredInstitutions.length === 0 ? (
                  <div className="text-center py-8">
                    <Building size={48} className="text-gray-400 mb-3" />
                    <h3 className="h5 text-gray-900 dark:text-white">
                      No institutions found
                    </h3>
                    <p className="text-gray-900 dark:text-white text-opacity-60">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                ) : (
                  <div className="vstack gap-3">
                    {filteredInstitutions.map((institution) => (
                      <div
                        key={institution.id}
                        className="institution-card panel border rounded bg-white dark:bg-gray-800 overflow-hidden"
                      >
                        <div className="p-4">
                          {/* Header */}
                          <div className="hstack justify-between align-start mb-3">
                            <div className="vstack gap-1 flex-1">
                              <div className="hstack gap-2">
                                <h3 className="h5 m-0 text-black dark:text-white">
                                  {institution.name}
                                </h3>
                                {institution.featured && (
                                  <span className="badge bg-warning text-dark fs-7">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <div className="hstack gap-2">
                                <MapPin
                                  size={14}
                                  className="text-gray-900 dark:text-white text-opacity-60"
                                />
                                <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                  {institution.address}
                                </span>
                              </div>
                            </div>
                            <div className="hstack gap-1">
                              <button
                                className={`btn btn-xs ${
                                  compareList.includes(institution.id)
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                }`}
                                onClick={() => toggleCompare(institution.id)}
                              >
                                <GitCompareArrows size={12} />
                              </button>
                              <button className="btn btn-xs btn-outline-secondary">
                                <Bookmark size={12} />
                              </button>
                              <button className="btn btn-xs btn-outline-secondary">
                                <Share2 size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Basic Info */}
                          <div className="row child-cols-12 md:child-cols-4 g-3 mb-3">
                            <div className="hstack gap-2">
                              <Calendar size={16} className="text-primary" />
                              <div>
                                <div className="fs-7 fw-medium text-black dark:text-white">
                                  Established
                                </div>
                                <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                  {institution.established}
                                </div>
                              </div>
                            </div>
                            <div className="hstack gap-2">
                              <Star size={16} className="text-warning" />
                              <div>
                                <div className="fs-7 fw-medium text-black dark:text-white">
                                  Rating & Reviews
                                </div>
                                <div className="hstack gap-1">
                                  {renderStars(institution.rating)}
                                  <span className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    ({institution.reviews})
                                  </span>
                                </div>
                              </div>
                            </div>
                            {institution.type === "school" && (
                              <div className="hstack gap-2">
                                <Award size={16} className="text-success" />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Board
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {
                                      boards.find(
                                        (b) => b.id === institution.board
                                      )?.name
                                    }
                                  </div>
                                </div>
                              </div>
                            )}
                            {institution.type === "college" && (
                              <div className="hstack gap-2">
                                <TrendingUp
                                  size={16}
                                  className="text-success"
                                />
                                <div>
                                  <div className="fs-7 fw-medium text-black dark:text-white">
                                    Placement
                                  </div>
                                  <div className="fs-7 text-gray-900 dark:text-white text-opacity-60">
                                    {institution.placement.averagePackage}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Expandable Details */}
                          {expandedInstitution === institution.id ? (
                            <>
                              {institution.type === "school" &&
                                renderSchoolDetails(institution)}
                              {institution.type === "college" &&
                                renderCollegeDetails(institution)}
                              {institution.type === "university" &&
                                renderUniversityDetails(institution)}

                              <div className="hstack gap-2 justify-between mt-3 pt-3 border-top">
                                <button
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() =>
                                    toggleInstitutionExpand(institution.id)
                                  }
                                >
                                  Show Less
                                </button>
                                <div className="hstack gap-2">
                                  <button className="btn btn-sm btn-outline-primary">
                                    <Download size={14} className="me-1" />
                                    Brochure
                                  </button>
                                  <button className="btn btn-sm btn-primary">
                                    Enquire Now
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="hstack gap-2 justify-between">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() =>
                                  toggleInstitutionExpand(institution.id)
                                }
                              >
                                View Details
                              </button>
                              <button className="btn btn-sm btn-primary">
                                Apply Now
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Future Scope Notice */}
              <div className="future-scope panel p-4 border rounded bg-info text-dark">
                <div className="vstack gap-2 text-center">
                  <h3 className="h5 m-0">
                    <TrendingUp size={20} className="me-2" />
                    Coming Soon Features
                  </h3>
                  <p className="fs-6 m-0">
                    We're working on advanced comparison tools and direct
                    application forms to make your institution search even
                    better!
                  </p>
                  <div className="hstack gap-3 justify-center mt-2">
                    <span className="badge bg-dark fs-7">
                      Compare Institutions
                    </span>
                    <span className="badge bg-dark fs-7">
                      Direct Applications
                    </span>
                    <span className="badge bg-dark fs-7">
                      Virtual Campus Tours
                    </span>
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

export default InstitutionDirectory;
