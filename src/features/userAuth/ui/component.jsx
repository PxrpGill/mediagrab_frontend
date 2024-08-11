import style from './style.module.css';
import { Cabinet } from '../../../entities/User';
import { RegisterModal } from './registerModal';
import { useState } from 'react';
import { AuthModal } from './authModal';

export const UserAuth = ({ opened, setOpen }) => {
  const [isRegisterOpen, toggleRegister] = useState(false);
  const [isAuthOpen, toggleAuth] = useState(false);

  return (
    <Cabinet>
      <button className={style.button} onClick={() => toggleRegister(true)}>
        Зарегистрироваться
      </button>
      <p className={style.del}>/</p>
      <button className={style.button} onClick={() => toggleAuth(true)}>
        Войти
      </button>
      <RegisterModal isOpen={isRegisterOpen} toggle={toggleRegister} />
      <AuthModal isOpen={isAuthOpen} toggle={toggleAuth} />
    </Cabinet>
  );
};
