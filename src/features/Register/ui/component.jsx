import style from './style.module.css';

export const Register = ({ opened, setOpen }) => {

  return (
    <dialog opened>
      <form method="POST">
        <label>
          Никнейм
          <input type="text" />
        </label>
        <label>
          Почта
          <input type="mail" />
        </label>
        <label>
          Пароль
          <input type="password" />
        </label>
        <button>Создать аккаунт</button>
      </form>
    </dialog>
  );
};
