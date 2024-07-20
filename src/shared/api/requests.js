import { httpClient } from "./httpClient.js";


export const getVideo = (params) =>
  httpClient.get(
    'information',
    { searchParams: params }
  ).json();


export const downloadVideo = (params) =>
  httpClient.get(
    'video_audio',
    { searchParams: params }
  ).json();


export const getHistory = (params) =>
  httpClient.get(
    'authorized/history',
    { searchParams: params }
  ).json();


export const deleteHistory = (params) =>
  httpClient.post(
    'authorized/history_remove',
    { searchParams: params }
  );


export const getUserInfo = () =>
  httpClient.get(
    'authorized/about_user'
  ).json();


export const register = () =>
  httpClient.post(
    'auth/register'
  );


export const login = () =>
  httpClient.post(
    'auth/login'
  );


export const logout = () =>
  httpClient.post(
    'auth/logout'
  );