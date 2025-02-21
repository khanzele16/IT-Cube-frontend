import { Modal } from "antd";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import { FaInstagram, FaTelegramPlane, FaVk, FaYoutube } from "react-icons/fa";

interface IAboutModal {
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const AboutModal: FC<IAboutModal> = ({ showModal, setShowModal }) => {
  if (showModal != "about") return null;
  if (showModal === "about")
    return createPortal(
      <Modal
        title={"О нас"}
        visible={showModal === "about"}
        centered={true}
        onCancel={() => {
          setShowModal(null);
        }}
        width={600}
        footer={null}
      >
        <div className="text-gray-700">
          <p className="leading-relaxed mb-4">
            <b>IT-Куб (IT-Cube)</b> — образовательная компания в сфере IT,
            основанная в 2019 году. Она предлагает курсы по программированию,
            веб-разработке, Data Science, DevOps и другим направлениям.
          </p>
          <p className="leading-relaxed mb-4">
            Основное внимание уделяется практическим навыкам, что помогает
            студентам и специалистам быстро осваивать востребованные технологии.
            IT-Куб проводит онлайн-курсы, мастер-классы и тренинги, сотрудничая
            с экспертами отрасли для подготовки квалифицированных специалистов.
          </p>
          <p className="leading-relaxed mb-4">
            Компания также предоставляет корпоративное обучение для повышения
            квалификации сотрудников. Важной частью работы является реализация
            федеральных проектов, таких как «Успех каждого ребенка» и «Цифровая
            образовательная среда».
          </p>
          <p className="leading-relaxed mb-4">
            В рамках этих проектов создаются Центры цифрового образования детей{" "}
            <b>"IT-Куб"</b>, что способствует развитию цифровых навыков среди
            молодежи.
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <a
              href="https://t.me/ITcube_metod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://www.youtube.com/@it-cube1678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://vk.com/itcube_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-violet-500 transition-colors"
            >
              <FaVk size={24} />
            </a>
          </div>
        </div>
      </Modal>,
      document.body
    );
};

export default AboutModal;
