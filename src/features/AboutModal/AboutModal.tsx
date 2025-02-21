import { Modal } from "antd";
import React, { FC } from "react";
import { createPortal } from "react-dom";

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
        <p>
          <b>IT-Куб (IT-Cube)</b> — образовательная компания в сфере IT,
          основанная в 2019 году. Она предлагает курсы по программированию,
          веб-разработке, Data Science, DevOps и другим направлениям.
          <br />
          <br />
          Основное внимание уделяется практическим навыкам, что помогает
          студентам и специалистам быстро осваивать востребованные технологии.
          IT-Куб проводит онлайн-курсы, мастер-классы и тренинги, сотрудничая с
          экспертами отрасли для подготовки квалифицированных специалистов.
          Компания также предоставляет корпоративное обучение для повышения
          квалификации сотрудников.
          <br />
          <br />
          На решение задачи IT-Куб направлена реализация федерального проекта
          «Успех каждого ребенка» и «Цифровая образовательная среда». В рамках
          указанных проектов, в том числе, создаются Центры цифрового
          образования детей <b>"IT-Куб"</b>
        </p>
      </Modal>,
      document.body
    );
};

export default AboutModal;
