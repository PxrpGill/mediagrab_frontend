import ky from 'ky';


export const httpClient = ky.create({
  prefixUrl: 'http://37.128.205.70:8000',
});
