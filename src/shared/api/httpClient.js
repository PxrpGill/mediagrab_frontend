import ky from 'ky';


export const httpClient = ky.create({
  prefixUrl: 'https://api.mediagrab.ru',
});
