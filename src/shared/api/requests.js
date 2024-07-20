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


export const getUserInfo = (params) =>
  httpClient.get(
    'authorized/about_user',
    { json: params }
  ).json();


export const register = (params) =>
  httpClient.post(
    'auth/register',
    { json: params }
  ).json();


export const login = (params) =>
  httpClient.post(
    'auth/login',
    { json: params }
  ).json();


export const logout = (params) =>
  httpClient.post(
    'auth/logout',
    { json: params }
  ).json();