import React, { useState } from "react";

const StudyResources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - in a real app, this would come from an API
  const classResources = [
    {
      id: 1,
      title: "Grade 9",
      icon: "unicon-book-open",
      description: "Mathematics, Science, Social Studies, English",
      link: "#",
    },
    {
      id: 2,
      title: "Grade 10",
      icon: "unicon-book-open",
      description: "All subjects for CBSE, ICSE & State Boards",
      link: "#",
    },
    {
      id: 3,
      title: "Grade 11",
      icon: "unicon-book-open",
      description: "Science, Commerce & Arts streams",
      link: "#",
    },
    {
      id: 4,
      title: "Grade 12",
      icon: "unicon-book-open",
      description: "Board exam preparation materials",
      link: "#",
    },
    {
      id: 5,
      title: "Undergraduate",
      icon: "unicon-graduation-hat",
      description: "B.Tech, B.Sc, B.Com, B.A & other courses",
      link: "#",
    },
    {
      id: 6,
      title: "Postgraduate",
      icon: "unicon-graduation-hat",
      description: "M.Tech, M.Sc, MBA & other courses",
      link: "#",
    },
  ];

  const examGuides = [
    {
      id: 1,
      title: "UP Board",
      icon: "unicon-file-document",
      description: "High School & Intermediate exams",
      link: "#",
    },
    {
      id: 2,
      title: "CBSE",
      icon: "unicon-file-document",
      description: "Class 10 & 12 board exams",
      link: "#",
    },
    {
      id: 3,
      title: "JEE",
      icon: "unicon-file-document",
      description: "Main & Advanced preparation",
      link: "#",
    },
    {
      id: 4,
      title: "NEET",
      icon: "unicon-file-document",
      description: "Medical entrance exam",
      link: "#",
    },
    {
      id: 5,
      title: "SSC",
      icon: "unicon-file-document",
      description: "Staff Selection Commission",
      link: "#",
    },
    {
      id: 6,
      title: "UPSC",
      icon: "unicon-file-document",
      description: "Civil Services examination",
      link: "#",
    },
  ];

  const previousPapers = [
    {
      id: 1,
      title: "CBSE Class 10 - 2023",
      description: "Mathematics, Science, Social Science",
      type: "pdf",
      link: "#",
    },
    {
      id: 2,
      title: "JEE Main - 2023",
      description: "Physics, Chemistry, Mathematics",
      type: "pdf",
      link: "#",
    },
    {
      id: 3,
      title: "NEET - 2023",
      description: "Biology, Physics, Chemistry",
      type: "pdf",
      link: "#",
    },
  ];

  const ebooksNotes = [
    {
      id: 1,
      title: "NCERT Textbooks",
      description: "Class 6-12 all subjects",
      icon: "unicon-book",
      link: "#",
    },
    {
      id: 2,
      title: "Reference Books",
      description: "RD Sharma, HC Verma, etc.",
      icon: "unicon-book",
      link: "#",
    },
    {
      id: 3,
      title: "Revision Notes",
      description: "Quick revision for exams",
      icon: "unicon-notes",
      link: "#",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="wrap overflow-hidden-x">
      {/* Study Resources Section */}
      <div className="section panel mb-4 lg:mb-6">
        <div className="section-outer panel">
          <div className="container max-w-xl">
            <div className="section-inner panel vstack gap-4">
              {/* Page Header */}
              <div className="block-header panel pt-4 border-top">
                <h1 className="h3 lg:h2 ft-primary fw-bold m-0 text-black dark:text-white">
                  Study Resources
                </h1>
                <p className="fs-6 mt-2 text-gray-900 dark:text-white text-opacity-60">
                  Comprehensive educational materials for students of all levels
                </p>
              </div>

              {/* Search Box */}
              <div className="search-section panel">
                <div className="vstack gap-2">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Find Your Study Materials
                  </h2>
                  <form
                    onSubmit={handleSearch}
                    className="hstack gap-1 border rounded p-2 bg-gray-25 dark:bg-gray-800"
                  >
                    <span className="d-inline-flex justify-center items-center w-40px h-40px opacity-50">
                      <i className="unicon-search icon-2"></i>
                    </span>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control-plaintext ms-1 fs-6 w-full dark:text-white"
                      placeholder="Search by class, subject, exam or topic..."
                      aria-label="Search study resources"
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>

              {/* Class-wise Resources */}
              <div className="resources-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Class-wise Resources
                  </h2>
                  <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-3">
                    {classResources.map((resource) => (
                      <div key={resource.id}>
                        <div className="resource-card panel vstack gap-2 p-3 border rounded bg-white dark:bg-gray-800 hover:shadow-sm transition-all duration-150">
                          <div className="hstack justify-between">
                            <h3 className="h6 m-0 text-black dark:text-white">
                              {resource.title}
                            </h3>
                            <i
                              className={`${resource.icon} icon-2 text-primary`}
                            ></i>
                          </div>
                          <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                            {resource.description}
                          </p>
                          <a
                            href={resource.link}
                            className="btn btn-xs btn-outline-primary mt-1"
                          >
                            View Resources
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exam Preparation Guides */}
              <div className="exam-section panel">
                <div className="vstack gap-3">
                  <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                    Exam Preparation Guides
                  </h2>
                  <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-3">
                    {examGuides.map((exam) => (
                      <div key={exam.id}>
                        <div className="exam-card panel vstack gap-2 p-3 border rounded bg-white dark:bg-gray-800 hover:shadow-sm transition-all duration-150">
                          <div className="hstack justify-between">
                            <h3 className="h6 m-0 text-black dark:text-white">
                              {exam.title}
                            </h3>
                            <i
                              className={`${exam.icon} icon-2 text-primary`}
                            ></i>
                          </div>
                          <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                            {exam.description}
                          </p>
                          <a
                            href={exam.link}
                            className="btn btn-xs btn-outline-primary mt-1"
                          >
                            Study Materials
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Previous Year Papers & eBooks Sections */}
              <div className="row child-cols-12 lg:child-cols g-4">
                <div className="lg:col-6">
                  {/* Previous Year Question Papers */}
                  <div className="papers-section panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      Previous Year Question Papers
                    </h2>
                    <div className="vstack gap-2">
                      {previousPapers.map((paper) => (
                        <div
                          key={paper.id}
                          className="paper-item panel hstack gap-2 p-3 border rounded bg-white dark:bg-gray-800"
                        >
                          <i className="unicon-file-pdf icon-2 text-red"></i>
                          <div className="vstack gap-1 flex-1">
                            <h4 className="h6 m-0 text-black dark:text-white">
                              {paper.title}
                            </h4>
                            <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                              {paper.description}
                            </p>
                          </div>
                          <a
                            href={paper.link}
                            className="btn btn-xs btn-primary"
                          >
                            Download PDF
                          </a>
                        </div>
                      ))}

                      <div className="cstack mt-2">
                        <a
                          href="#"
                          className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white border w-100"
                        >
                          <span>View All Question Papers</span>
                          <i className="icon icon-1 unicon-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-6">
                  {/* eBooks & Notes Section */}
                  <div className="ebooks-section panel vstack gap-3">
                    <h2 className="h5 ft-tertiary fw-bold m-0 text-black dark:text-white">
                      eBooks & Notes
                    </h2>
                    <div className="vstack gap-2">
                      {ebooksNotes.map((ebook) => (
                        <div
                          key={ebook.id}
                          className="ebook-item panel hstack gap-2 p-3 border rounded bg-white dark:bg-gray-800"
                        >
                          <i
                            className={`${ebook.icon} icon-2 text-primary`}
                          ></i>
                          <div className="vstack gap-1 flex-1">
                            <h4 className="h6 m-0 text-black dark:text-white">
                              {ebook.title}
                            </h4>
                            <p className="fs-7 text-gray-900 dark:text-white text-opacity-60 m-0">
                              {ebook.description}
                            </p>
                          </div>
                          <a
                            href={ebook.link}
                            className="btn btn-xs btn-primary"
                          >
                            View{" "}
                            {ebook.title.includes("Notes") ? "Notes" : "Books"}
                          </a>
                        </div>
                      ))}

                      <div className="cstack mt-2">
                        <a
                          href="#"
                          className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white border w-100"
                        >
                          <span>Browse All eBooks & Notes</span>
                          <i className="icon icon-1 unicon-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="newsletter-section panel p-4 border rounded bg-gray-25 dark:bg-gray-800 text-center">
                <div className="vstack gap-2 max-w-500px mx-auto">
                  <h3 className="h5 m-0 text-black dark:text-white">
                    Stay Updated with New Study Materials
                  </h3>
                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                    Get notified when we add new resources, question papers, and
                    study guides.
                  </p>
                  <form className="hstack gap-1 w-100">
                    <input
                      type="email"
                      className="form-control form-control-sm w-full fs-6 bg-white dark:bg-gray-800 dark:border-white dark:border-opacity-15"
                      placeholder="Your email address..."
                    />
                    <button type="submit" className="btn btn-sm btn-primary">
                      Subscribe
                    </button>
                  </form>
                  <p className="fs-7 mt-1 text-gray-900 dark:text-white text-opacity-60">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyResources;
