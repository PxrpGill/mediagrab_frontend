import styles from './MainLoader.module.css';


export const MainLoader = () => {
  return (
    <dialog className={styles.modal}>
      <article className={styles.block}>
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.loader}>
          <g clipPath="url(#clip0_119_352)">
            <g filter="url(#filter0_d_119_352)">
              <path d="M41.0002 75.1666C36.3307 75.1666 31.9175 74.2698 27.7606 
              72.476C23.6036 70.6823 19.9734 68.2337 16.87 65.1302C13.7665 62.0267 
              11.3179 58.3965 9.52412 54.2396C7.73037 50.0826 6.8335 45.6694 6.8335 
              41C6.8335 36.2736 7.73037 31.8462 9.52412 27.7177C11.3179 23.5892 13.7665 
              19.9732 16.87 16.8698C19.9734 13.7663 23.6036 11.3177 27.7606 9.52394C31.9175 
              7.73019 36.3307 6.83331 41.0002 6.83331C41.9682 6.83331 42.7797 7.16074 43.4345 
              7.8156C44.0894 8.47047 44.4168 9.28192 44.4168 10.25C44.4168 11.218 44.0894 12.0295 
              43.4345 12.6844C42.7797 13.3392 41.9682 13.6666 41.0002 13.6666C33.4266 13.6666 
              26.9776 16.3288 21.6533 21.6531C16.329 26.9774 13.6668 33.4264 13.6668 41C13.6668 
              48.5736 16.329 55.0225 21.6533 60.3469C26.9776 65.6712 33.4266 68.3333 41.0002 
              68.3333C48.5738 68.3333 55.0227 65.6712 60.347 60.3469C65.6713 55.0225 68.3335 
              48.5736 68.3335 41C68.3335 40.0319 68.6609 39.2205 69.3158 38.5656C69.9706 37.9107 
              70.7821 37.5833 71.7502 37.5833C72.7182 37.5833 73.5297 37.9107 74.1845 38.5656C74.8394 
              39.2205 75.1668 40.0319 75.1668 41C75.1668 45.6694 74.27 50.0826 72.4762 54.2396C70.6825 
              58.3965 68.2338 62.0267 65.1304 65.1302C62.0269 68.2337 58.4109 70.6823 54.2825 
              72.476C50.154 74.2698 45.7266 75.1666 41.0002 75.1666Z" fill="#D5D4DA" />
            </g>
          </g>
          <defs>
            <filter id="filter0_d_119_352" x="2.8335" y="6.83331" width="76.3335" height="76.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_352" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_352" result="shape" />
            </filter>
            <clipPath id="clip0_119_352">
              <rect width="82" height="82" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h2 className={styles.title}>Загрузка видео</h2>
      </article>
    </dialog>
  )
}