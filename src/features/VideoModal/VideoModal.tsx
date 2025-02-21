import { FC } from "react";
import { createPortal } from "react-dom";
import { Modal } from "antd";

interface IVideoModal {
  showModal: string | null;
  setShowModal: (value: string | null) => void;
  videoSrc: string;
}

const VideoModal: FC<IVideoModal> = ({ showModal, setShowModal, videoSrc }) => {
  if (showModal !== "video") return null;

  return createPortal(
    <Modal
      title={
        <span className="text-2xl font-bold text-gray-800">Просмотр видео</span>
      }
      visible={showModal === "video"}
      centered
      onCancel={() => {
        setShowModal(null);
      }}
      width={800}
      footer={null}
    >
      <div className="flex justify-center">
        <video
          className="rounded-lg w-full max-w-[700px] shadow-md"
          controls
          autoPlay
        >
          <source src={videoSrc} type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
      </div>
    </Modal>,
    document.body
  );
};

export default VideoModal;
