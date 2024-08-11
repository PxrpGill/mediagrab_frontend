import style from './style.module.css';
import { Cabinet } from '../../../entities/user';
import { RegisterModal } from './registerModal';
import { useState } from 'react';
import { AuthModal } from './authModal';
import { userStore } from '../../../entities/user';

export const UserAuth = ({ opened, setOpen }) => {
  const [isRegisterOpen, toggleRegister] = useState(false);
  const [isAuthOpen, toggleAuth] = useState(false);
  const { userInformation } = userStore;

  return (
    <Cabinet>
      {userInformation.id ? (
        <>
          <button className={style.button}>{userInformation.username}</button>
        </>
      ) : (
        <>
          <button className={style.button} onClick={() => toggleRegister(true)}>
            Зарегистрироваться
          </button>
          <p className={style.del}>/</p>
          <button className={style.button} onClick={() => toggleAuth(true)}>
            Войти
          </button>
          <RegisterModal isOpen={isRegisterOpen} toggle={toggleRegister} />
          <AuthModal isOpen={isAuthOpen} toggle={toggleAuth} />
        </>
      )}
    </Cabinet>
  );
};
