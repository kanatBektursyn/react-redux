import React from "react";
import { Button, Block } from "components";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { validateField as validation } from "utils/helpers";

const success = false;

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isValid
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат вам нужно Зарегестрироваться</p>
      </div>

      <Block>
        {!success ? (
          <Form className="register-form">
            <Form.Item
              validateStatus={validation("email", touched, errors)}
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-Mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              validateStatus={validation("password", touched, errors)}
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Пароль"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>
            {dirty && !isValid && <span>Заполните все поля</span>}
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегестрироваться
              </Button>
            </Form.Item>
            <Form.Item>
              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon
                style={{ fontSize: "50px" }}
                type="info-circle"
                theme="twoTone"
              ></Icon>
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
