import { useRef, useEffect, useState } from 'react';
import style from './style.module.css';
import { userStore } from '../../../entities/User';
import { observer } from 'mobx-react-lite';

export const RegisterModal = observer(({ isOpen, toggle }) => {
  const { register } = userStore;
  const dialogRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRequired, setErrorRequired] = useState({
    usernameInput: false,
    emailInput: false,
    passwordInput: false,
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const validateForm = () => {
    let isValid = true;
    const newErrorRequired = {
      usernameInput: !username,
      emailInput: !email,
      passwordInput: !password,
    };

    if (!username) {
      isValid = false;
    }
    if (!email) {
      isValid = false;
    }
    if (!password) {
      isValid = false;
    }

    setErrorRequired(newErrorRequired);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      sendData();
      register(username, email, password);
    }
  };

  const sendData = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <dialog ref={dialogRef} className={style.modal}>
      <div className={style.container}>
        <article className={style.modalTitle}>
          <h2 className={style.title}>Регистрация</h2>
          <button onClick={() => toggle(false)} className={style.closeButton}>
            Закрыть
          </button>
        </article>
        <form onSubmit={handleSubmit} className={style.form}>
          <label className={style.label}>
            Никнейм
            <input
              type="text"
              className={`${style.input} ${
                errorRequired.usernameInput ? style.error : ''
              }`}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {errorRequired.usernameInput && (
              <span className={style.errorText}>
                Это поле обязательно для заполнения
              </span>
            )}
          </label>
          <label className={style.label}>
            Почта
            <input
              type="email"
              className={`${style.input} ${
                errorRequired.emailInput ? style.error : ''
              }`}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errorRequired.emailInput && (
              <span className={style.errorText}>
                Это поле обязательно для заполнения
              </span>
            )}
          </label>
          <div className={style.label}>
            <div className={style.passwordLabel}>
              <p>Пароль</p>
              <button
                type="button"
                className={style.hide}
                onClick={() => setHidden(!hidden)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8822 4.88129L19.1463 4.14535C18.9383 3.93736 18.5543 3.96937 18.3143 4.25731L15.7541 6.80128C14.602 6.30533 13.3382 6.06533 12.0101 6.06533C8.05798 6.08127 4.6342 8.38524 2.98608 11.6974C2.89006 11.9054 2.89006 12.1614 2.98608 12.3374C3.75402 13.9054 4.90609 15.2014 6.34609 16.1774L4.2501 18.3053C4.0101 18.5453 3.97809 18.9293 4.13813 19.1373L4.87408 19.8733C5.08207 20.0812 5.46606 20.0492 5.70606 19.7613L19.754 5.7134C20.058 5.47354 20.09 5.08958 19.882 4.88156L19.8822 4.88129ZM12.8581 9.71318C12.5861 9.64916 12.2981 9.5692 12.0261 9.5692C10.6661 9.5692 9.57818 10.6572 9.57818 12.0171C9.57818 12.2891 9.64219 12.5771 9.72215 12.8491L8.65003 13.9051C8.33008 13.3452 8.15409 12.7211 8.15409 12.0172C8.15409 9.88919 9.86611 8.17717 11.9941 8.17717C12.6982 8.17717 13.3221 8.35315 13.8821 8.67311L12.8581 9.71318Z"
                    fill="white"
                  />
                  <path
                    d="M21.0347 11.6974C20.4747 10.5774 19.7386 9.56942 18.8267 8.75339L15.8507 11.6974V12.0174C15.8507 14.1453 14.1387 15.8574 12.0107 15.8574H11.6907L9.80273 17.7453C10.5068 17.8893 11.2427 17.9853 11.9627 17.9853C15.9149 17.9853 19.3386 15.6814 20.9868 12.3532C21.1307 12.1292 21.1307 11.9052 21.0347 11.6972L21.0347 11.6974Z"
                    fill="white"
                  />
                </svg>
                <p>{hidden ? 'Спрятать' : 'Показать'}</p>
              </button>
            </div>
            <input
              type={hidden ? 'text' : 'password'}
              className={`${style.input} ${
                errorRequired.passwordInput ? style.error : ''
              }`}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errorRequired.passwordInput && (
              <span className={style.errorText}>
                Это поле обязательно для заполнения
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Создать аккаунт"
            className={style.buttonSubmit}
          />
        </form>
      </div>
    </dialog>
  );
});
