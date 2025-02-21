import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Form, Input, Modal } from "antd";

interface IAuthModal {
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthModal: FC<IAuthModal> = ({ showModal, setShowModal }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  if (showModal != "auth") return null;
  if (showModal === 'auth') return createPortal(
    <div>
      <Modal
        title={isRegister ? "Регистрация" : "Вход"}
        visible={showModal === 'auth'}
        centered={true}
        onCancel={() => {
          setIsRegister(false);
          setShowModal(null);
        }}
        footer={null}
      >
        {!isRegister && (
          <>
            <Form
              name="login"
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Пожалуйста, введите ваш email!" },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваш пароль!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  onClick={() => {}}
                >
                  Войти
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: "center" }}>
              <p>
                Хотите зарегистрироваться?{" "}
                <span
                  onClick={() => setIsRegister(true)}
                  className="cursor-pointer font-semibold text-blue-500"
                >
                  Кликайте!
                </span>
              </p>
            </div>
          </>
        )}
        {isRegister && (
          <>
            <Form
              name="register"
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Пожалуйста, введите ваш email!" },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваш пароль!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  onClick={() => {}}
                >
                  Войти
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: "center" }}>
              <p>
                Уже есть аккаунт?{" "}
                <span
                  onClick={() => setIsRegister(false)}
                  className="cursor-pointer font-semibold text-blue-500"
                >
                  Кликайте!
                </span>
              </p>
            </div>
          </>
        )}
      </Modal>
    </div>,
    document.body
  );
};

export default AuthModal;
