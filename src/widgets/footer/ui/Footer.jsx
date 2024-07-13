import styles from './Footer.module.css';
import vkLogo from '@/shared/assets/images/vkLogo.png';
import ytLogo from '@/shared/assets/images/ytLogo.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.link} target="_blank">
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none"
          xmlns="http://www.w3.org/2000/svg" className={styles.gitLogo}>
          <g clipPath="url(#clip0_69_652)">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M15.4538 0C6.90826 0 0 6.875 0 15.3803C0 22.1791 4.42636 27.9341 
              10.5669 29.9709C11.3346 30.1241 11.6158 29.64 11.6158 29.2328C11.6158 
              28.8762 11.5905 27.6541 11.5905 26.3806C7.29164 27.2975 6.39644 24.5472 
              6.39644 24.5472C5.70558 22.7647 4.68195 22.3066 4.68195 22.3066C3.27493 
              21.3644 4.78444 21.3644 4.78444 21.3644C6.34519 21.4662 7.16416 22.9431 
              7.16416 22.9431C8.54556 25.2856 10.7716 24.6237 11.6671 24.2162C11.7949 
              23.2231 12.2045 22.5356 12.6395 22.1537C9.2108 21.7972 5.60341 20.4731 
              5.60341 14.5653C5.60341 12.8847 6.21708 11.5097 7.18947 10.4403C7.03605 
              10.0584 6.49861 8.47937 7.3432 6.36594C7.3432 6.36594 8.64805 5.95844 
              11.5902 7.94469C12.8498 7.60802 14.1489 7.43675 15.4538 7.43531C16.7587 
              7.43531 18.0888 7.61375 19.3171 7.94469C22.2596 5.95844 23.5644 6.36594 
              23.5644 6.36594C24.409 8.47937 23.8713 10.0584 23.7178 10.4403C24.7159 
              11.5097 25.3042 12.8847 25.3042 14.5653C25.3042 20.4731 21.6968 21.7716 
              18.2425 22.1537C18.8056 22.6375 19.2915 23.5541 19.2915 25.0056C19.2915 
              27.0681 19.2662 28.7234 19.2662 29.2325C19.2662 29.64 19.5477 30.1241 
              20.3151 29.9712C26.4557 27.9337 30.882 22.1791 30.882 15.3803C30.9073 
              6.875 23.9738 0 15.4538 0Z" fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_69_652">
              <rect width="31" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      <a href="#" className={styles.link} target="_blank">
        <p className={styles.gitText}>github</p>
      </a>
      <img src={vkLogo} alt="Логотип Вконтакте" className={styles.vkLogo} />
      <img src={ytLogo} alt="Логотип YouTube" className={styles.ytLogo} />
    </footer>
  );
}