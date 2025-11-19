import React, { useState } from "react";
import VideoLectures from "./VideoLectures";

const VideoModal = ({ video, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex justify-center items-center z-9999">
      <div className="modal-content bg-white dark:bg-gray-800 rounded shadow-lg max-w-800px w-100 mx-2">
        <div className="modal-header hstack justify-between p-4 border-bottom">
          <h3 className="h5 m-0 text-black dark:text-white">{video.title}</h3>
          <button
            onClick={onClose}
            className="btn btn-sm btn-ghost text-gray-900 dark:text-white"
          >
            <i className="lucide lucide-x icon-2"></i>
          </button>
        </div>
        <div className="modal-body p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-100 h-100"
            ></iframe>
          </div>
        </div>
        <div className="modal-footer p-4 border-top">
          <div className="vstack gap-2 w-100">
            <p className="text-gray-900 dark:text-white m-0">
              {video.description}
            </p>
            <div className="hstack justify-between text-gray-900 dark:text-white text-opacity-60 fs-7">
              <span>Instructor: {video.instructor}</span>
              <span>Duration: {video.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced VideoLectures component with modal
const VideoLecturesEnhanced = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // ... (rest of the component remains same, just update the watch button)

  // In the video card, update the watch button:
  // <button
  //     onClick={() => openVideoModal(video)}
  //     className="btn btn-xs btn-outline-primary flex-1"
  // >
  //     <i className="lucide lucide-play me-1"></i>
  //     Watch Now
  // </button>

  return (
    <>
      {/* Main component JSX */}
      <VideoLectures />

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          isOpen={isModalOpen}
          onClose={closeVideoModal}
        />
      )}
    </>
  );
};

export default VideoLecturesEnhanced;
