
export default function About() {
  return (
    <div id="about_us" className="about-us section panel">
      <div className="section-outer panel py-4 lg:py-6">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div className="content-wrap row child-cols-12 g-4 lg:g-6" data-uc-grid>
              <div className="col-12">
                <div className="main-wrap panel vstack gap-3 lg:gap-6">
                  <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
                    <div className="block-header panel pt-1 border-top">
                      <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">About Us</h2>
                    </div>
                    <div className="block-content">
                      {/* Mission & Vision Section */}
                      <div className="row child-cols-12 g-4 lg:g-6 mb-4 lg:mb-6">
                        <div className="col-12">
                          <div className="panel vstack gap-3 p-4 border rounded">
                            <h3 className="h4 text-black dark:text-white">Our Mission & Vision</h3>
                            <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                              Campus Bulletin's mission is to provide timely, accurate, and engaging content that connects the campus community. 
                              We strive to be the primary source of information for students, faculty, and staff, fostering a well-informed and 
                              connected academic environment.
                            </p>
                            <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                              Our vision is to create a dynamic platform that not only informs but also inspires dialogue, collaboration, 
                              and innovation across campus. We aim to be the voice that represents the diverse perspectives and experiences 
                              within our academic community.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Satvik Creative Media Innovations Section */}
                      <div className="row child-cols-12 g-4 lg:g-6 mb-4 lg:mb-6">
                        <div className="col-12">
                          <div className="panel vstack gap-3 p-4 border rounded">
                            <h3 className="h4 text-black dark:text-white">Satvik Creative Media Innovations</h3>
                            <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                              Campus Bulletin is proudly powered by Satvik Creative Media Innovations, a forward-thinking media company 
                              dedicated to creating innovative digital experiences. With expertise in content creation, digital strategy, 
                              and multimedia production, Satvik Creative Media Innovations brings cutting-edge solutions to campus journalism.
                            </p>
                            <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                              Our partnership with Satvik Creative Media Innovations enables us to deliver high-quality, engaging content 
                              through modern platforms and technologies, ensuring that Campus Bulletin remains at the forefront of campus media.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Our Team Section */}
                      <div className="row child-cols-12 g-4 lg:g-6">
                        <div className="col-12">
                          <div className="panel vstack gap-3">
                            <h3 className="h4 text-black dark:text-white text-center">Our Team</h3>
                            <div className="row child-cols-12 md:child-cols-6 lg:child-cols-4 g-4">
                              {/* Founder */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://as2.ftcdn.net/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
                                        data-src="https://as2.ftcdn.net/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" 
                                        alt="Founder Name" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Founder Name</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Founder & CEO</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Visionary leader with a passion for campus journalism and digital innovation.
                                  </p>
                                </div>
                              </div>

                              {/* Core Team Member 1 */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4" 
                                        data-src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4" 
                                        alt="Team Member 1" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Team Member 1</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Editor-in-Chief</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Experienced journalist with a keen eye for compelling campus stories.
                                  </p>
                                </div>
                              </div>

                              {/* Core Team Member 2 */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg" 
                                        data-src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg" 
                                        alt="Team Member 2" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Team Member 2</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Digital Content Manager</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Creative professional specializing in multimedia content and social media strategy.
                                  </p>
                                </div>
                              </div>

                              {/* Core Team Member 3 */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" 
                                        data-src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" 
                                        alt="Team Member 3" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Team Member 3</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Technical Lead</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Tech enthusiast ensuring our platform runs smoothly and efficiently.
                                  </p>
                                </div>
                              </div>

                              {/* Core Team Member 4 */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://www.georgetown.edu/wp-content/uploads/2022/08/NatsuOnodaPower-1050x1050-c-default.jpeg" 
                                        data-src="https://www.georgetown.edu/wp-content/uploads/2022/08/NatsuOnodaPower-1050x1050-c-default.jpeg" 
                                        alt="Team Member 4" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Team Member 4</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Campus Correspondent</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Student journalist bringing fresh perspectives and campus insights.
                                  </p>
                                </div>
                              </div>

                              {/* Core Team Member 5 */}
                              <div className="col-12 md:col-6 lg:col-4">
                                <div className="panel vstack gap-2 text-center p-3 border rounded">
                                  <div className="team-photo panel overflow-hidden rounded-circle w-150px h-150px mx-auto">
                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                      <img 
                                        className="media-cover image uc-transition-scale-up uc-transition-opaque" 
                                        src="https://www.georgetown.edu/wp-content/uploads/2022/03/7-scaled-1050x1050-c-default.jpg" 
                                        data-src="https://www.georgetown.edu/wp-content/uploads/2022/03/7-scaled-1050x1050-c-default.jpg" 
                                        alt="Team Member 5" 
                                        data-uc-img="loading: lazy"
                                      />
                                    </div>
                                  </div>
                                  <h4 className="h5 m-0 text-black dark:text-white">Team Member 5</h4>
                                  <p className="fs-7 text-gray-900 dark:text-white text-opacity-60">Visual Designer</p>
                                  <p className="fs-6 text-gray-900 dark:text-white text-opacity-60">
                                    Creative professional crafting engaging visual content and layouts.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}