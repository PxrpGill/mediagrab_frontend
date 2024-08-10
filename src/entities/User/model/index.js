import { makeAutoObservable, runInAction } from 'mobx';

class User {
  constructor() {
    makeAutoObservable(this);
  }

  register = async (username, email, password) => {
    try {
      const request = new Request('https://mediagrab.ru:228/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const response = await fetch(request);
    } catch (error) {}
  };
}

export const user = new User();
