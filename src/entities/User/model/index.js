import { makeAutoObservable, runInAction } from 'mobx';

class User {
  isRegisterLoading = false;
  isAuthLoading = false;
  isAuthError = false;
  userInformation = {
    id: null,
    username: '',
    email: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  register = async (username, email, password) => {
    try {
      runInAction(() => {
        this.isRegisterLoading = true;
      });
      const request = new Request(
        'https://api.mediagrab.ru:228/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        },
      );
      const response = await fetch(request);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isRegisterLoading = false;
      });
    }
  };

  auth = async (email, password) => {
    try {
      runInAction(() => {
        this.isAuthLoading = true;
      });
      const requestTokens = new Request(
        'https://api.mediagrab.ru:228/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );
      const responseTokens = await fetch(requestTokens);
      const dataTokens = await responseTokens.json();
      console.log(responseTokens, dataTokens);
      if (dataTokens.user_id) {
        const aboutUserResponse = await fetch(
          'https://api.mediagrab.ru:228/authorized/about_user',
        );
        const dataAbout = await aboutUserResponse.json();
        console.log(dataAbout);
        runInAction(() => {
          this.userInformation.id = dataAbout.id;
          this.userInformation.email = dataAbout.email;
          this.userInformation.username = dataAbout.username;
        });
      } else {
        runInAction(() => {
          this.isAuthError = true;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isAuthLoading = false;
      });
    }
  };
}

export const userStore = new User();
