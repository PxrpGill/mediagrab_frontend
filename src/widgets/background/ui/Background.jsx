import React, { useEffect, useState } from 'react';
import styles from './BackGround.module.css';
import { smallWindow } from '../../../shared/consts/window';

export default function BackGround() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < smallWindow);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < smallWindow);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.background}>
      {isSmallScreen ? (
        <svg width="390" height="584" viewBox="0 0 390 584" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_67_173)">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M57.0138 100.468C109.802 96.606 165.276 116.726 198.555 
              157.884C229.68 196.377 222.233 250.114 217.888 299.425C214.057 
              342.89 205.553 386.285 175.627 418.039C144.839 450.708 101.615 
              465.037 57.0138 470.126C5.12488 476.047 -51.8493 481.805 -92.1536 
              448.592C-134.952 413.324 -155.61 354.612 -150.135 299.425C-145.044 
              248.102 -102.426 212.909 -65.2288 177.182C-29.1603 142.54 7.13693 
              104.117 57.0138 100.468Z" fill="#FD8232" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M407.839 141.246C455.106 144.891 498.879 168.865 525.235 
              208.272C549.2 244.104 541.458 288.268 534.639 330.833C526.88 
              379.257 525.942 434.948 484.673 461.44C439.299 490.566 376.179 
              490.916 330.928 461.599C289.795 434.95 293.988 378.146 282.548 
              330.489C270.818 281.621 237.565 230.132 265.308 188.228C294.362 
              144.343 355.364 137.2 407.839 141.246Z" fill="#4C2BC0" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M255.414 129.465C282.479 130.812 310.712 130.345 333.548 144.937C356.409 
              159.545 365.594 186.722 380.498 209.392C398.437 236.674 427.37 259.07 429.989 
              291.616C432.772 326.191 416.235 360.025 394.816 387.308C372.777 415.379 341.354 
              433.17 308.297 446.62C272.334 461.252 230.328 486.661 196.22 468.111C160.715 
              448.801 163.076 397.039 148.108 359.497C138.278 334.842 133.02 310.237 123.412 
              285.495C110.197 251.466 69.7135 221.591 81.0824 186.901C92.0873 153.323 138.552 
              147.955 172.113 136.897C199.137 127.993 226.995 128.049 255.414 129.465Z" fill="#2D9DE7" />
          </g>
          <defs>
            <filter id="filter0_f_67_173" x="-251" y="0" width="892.49"
              height="583.436" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_67_173" />
            </filter>
          </defs>
        </svg>

      ) : (
        <svg viewBox="25 20 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FD8232" transform="translate(120 100)" className="first">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M47.4,-53.1C56.3,-38.6,54.7,-19.3,54.3,
                    -0.5C53.8,18.4,54.5,36.7,45.6,46C36.7,55.3,18.4,
                    55.6,1.2,54.3C-16,53.1,-31.9,50.5,-46.9,41.2C-61.8,
                    31.9,-75.7,16,-75.3,0.4C-74.9,-15.1,-60.2,
                    -30.3,-45.2,-44.8C-30.3,-59.4,-15.1,-73.3,2.1,-75.4C19.3,-77.4,38.6,-67.6,47.4,-53.1Z;

                    M51,-50.9C67.6,-34.3,83.8,-17.2,86.4,2.6C89,22.4,
                    78.1,44.8,61.5,55.9C44.8,66.9,22.4,66.5,3.1,63.3C-16.2,
                    60.2,-32.3,54.4,-47.6,43.3C-62.9,32.3,-77.2,16.2,-76.8,
                    0.5C-76.3,-15.2,-61,-30.5,-45.7,-47.1C-30.5,-63.7,-15.2,-81.6,1,-82.6C17.2,-83.6,34.3,-67.5,51,-50.9Z;

                    M44.5,-48.2C54,-35.1,55.4,-17.5,56.2,0.8C57,19.2,57.3,38.4,
                    47.8,47.6C38.4,56.7,19.2,55.9,2.6,53.3C-14.1,50.8,-28.2,46.5,
                    -40.3,37.3C-52.5,28.2,-62.7,14.1,-66.2,-3.5C-69.7,-21.1,-66.5,
                    -42.1,-54.3,-55.2C-42.1,-68.3,-21.1,-73.5,-1.8,-71.7C17.5,-69.9,35.1,-61.3,44.5,-48.2Z;

                    M44.3,-45.9C57.4,-31.1,68.2,-15.6,67.1,-1C66.1,13.5,53.2,
                    26.9,40.1,41.9C26.9,56.8,13.5,73.3,-1,74.2C-15.4,75.2,-30.9,60.7,
                    -39.5,45.8C-48.2,30.9,-50.1,15.4,-53.4,-3.2C-56.6,-21.9,-61.2,
                    -43.8,-52.5,-58.6C-43.8,-73.4,-21.9,-81.1,-3.2,-78C15.6,-74.8,31.1,-60.7,44.3,-45.9Z;

                    M47.4,-53.1C56.3,-38.6,54.7,-19.3,54.3,
                    -0.5C53.8,18.4,54.5,36.7,45.6,46C36.7,55.3,18.4,
                    55.6,1.2,54.3C-16,53.1,-31.9,50.5,-46.9,41.2C-61.8,
                    31.9,-75.7,16,-75.3,0.4C-74.9,-15.1,-60.2,
                    -30.3,-45.2,-44.8C-30.3,-59.4,-15.1,-73.3,2.1,-75.4C19.3,-77.4,38.6,-67.6,47.4,-53.1Z;
                    ">
            </animate>
          </path>
          <path fill="#4C2BC0" transform="translate(280 100)" width="1204" height="830" className="third">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values=" M44.3,-45.9C57.4,-31.1,68.2,-15.6,67.1,-1C66.1,13.5,53.2,
                    26.9,40.1,41.9C26.9,56.8,13.5,73.3,-1,74.2C-15.4,75.2,-30.9,60.7,
                    -39.5,45.8C-48.2,30.9,-50.1,15.4,-53.4,-3.2C-56.6,-21.9,-61.2,
                    -43.8,-52.5,-58.6C-43.8,-73.4,-21.9,-81.1,-3.2,-78C15.6,-74.8,31.1,-60.7,44.3,-45.9Z;

                    M43,-42.8C58.4,-27.7,75.2,-13.8,75,-0.2C74.9,13.5,57.7,27,42.4,
                    35.5C27,44,13.5,47.4,-2.1,49.5C-17.7,51.5,-35.4,52.3,-46.7,
                    43.8C-58,35.4,-63,17.7,-62.1,0.9C-61.2,-15.9,-54.4,-31.7,
                    -43.1,-46.9C-31.7,-62,-15.9,-76.3,-1,-75.3C13.8,-74.3,27.7,-57.9,43,-42.8Z;

                    M34.6,-26.8C49.7,-19.4,70.2,-9.7,72.4,2.2C74.6,14.1,
                    58.5,28.3,43.4,35.7C28.3,43.2,14.1,44,3.8,40.2C-6.5,36.4,
                    -13,27.9,-25.3,20.5C-37.6,13,-55.7,6.5,-58.7,-3C-61.7,-12.5,
                    -49.6,-25,-37.3,-32.4C-25,-39.7,-12.5,-41.9,-1.4,-40.5C9.7,-39.1,19.4,-34.1,34.6,-26.8Z;

                    M45.3,-50.3C55.6,-35,58.7,-17.5,53.7,-4.9C48.8,7.6,35.8,
                    15.3,25.5,26.7C15.3,38.1,7.6,53.4,-5.2,58.6C-18.1,63.8,
                    -36.2,59,-51.3,47.6C-66.5,36.2,-78.8,18.1,-74.9,4C-70.9,
                    -10.2,-50.7,-20.3,-35.5,-35.6C-20.3,-50.9,-10.2,-71.2,3.7,-74.9C17.5,-78.6,35,-65.6,45.3,-50.3Z;

                    M44.3,-45.9C57.4,-31.1,68.2,-15.6,67.1,-1C66.1,13.5,53.2,
                    26.9,40.1,41.9C26.9,56.8,13.5,73.3,-1,74.2C-15.4,75.2,-30.9,60.7,
                    -39.5,45.8C-48.2,30.9,-50.1,15.4,-53.4,-3.2C-56.6,-21.9,-61.2,
                    -43.8,-52.5,-58.6C-43.8,-73.4,-21.9,-81.1,-3.2,-78C15.6,-74.8,31.1,-60.7,44.3,-45.9Z;
                    ">
            </animate>
          </path>
          <path fill="#2D9DE7" transform="translate(200 100)" width="1204" height="830" className="second">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M51.8,-55C63.7,-39.9,67.5,-20,64.7,-2.8C61.8,14.3,
                    52.3,28.5,40.4,42.2C28.5,56,14.3,69.1,1.1,68.1C-12.1,67,-24.2,
                    51.7,-36.3,37.9C-48.4,24.2,-60.5,12.1,-64.9,-4.4C-69.4,-21,
                    -66.1,-41.9,-54,-57C-41.9,-72.1,-21,-81.4,-0.5,-80.9C20,-80.4,39.9,-70.1,51.8,-55Z;

                    M49.6,-53.7C60.1,-39,61.8,-19.5,60,-1.8C58.2,16,53.1,31.9,42.5,
                    41.1C31.9,50.2,16,52.5,1.2,51.4C-13.7,50.2,-27.3,45.6,-39.3,
                    36.5C-51.2,27.3,-61.4,13.7,-61.4,0C-61.4,-13.7,-51.2,-27.3,
                    -39.3,-42C-27.3,-56.8,-13.7,-72.6,2.9,-75.5C19.5,-78.4,39,-68.5,49.6,-53.7Z;

                    M43,-42.8C58.4,-27.7,75.2,-13.8,75,-0.2C74.9,13.5,57.7,27,42.4,
                    35.5C27,44,13.5,47.4,-2.1,49.5C-17.7,51.5,-35.4,52.3,-46.7,
                    43.8C-58,35.4,-63,17.7,-62.1,0.9C-61.2,-15.9,-54.4,-31.7,
                    -43.1,-46.9C-31.7,-62,-15.9,-76.3,-1,-75.3C13.8,-74.3,27.7,-57.9,43,-42.8Z;

                    M36.3,-36.4C45.1,-27.5,49,-13.7,50,0.9C50.9,15.6,48.8,31.2,40,
                    40.3C31.2,49.4,15.6,52.1,-0.9,53C-17.4,53.9,-34.8,53,-43.5,
                    43.9C-52.2,34.8,-52.3,17.4,-55.1,-2.8C-58,-23.1,-63.6,-46.1,-54.8,
                    -55C-46.1,-63.9,-23.1,-58.6,-4.7,-53.9C13.7,-49.3,27.5,-45.3,36.3,-36.4Z;

                    M51.8,-55C63.7,-39.9,67.5,-20,64.7,-2.8C61.8,14.3,
                    52.3,28.5,40.4,42.2C28.5,56,14.3,69.1,1.1,68.1C-12.1,67,-24.2,
                    51.7,-36.3,37.9C-48.4,24.2,-60.5,12.1,-64.9,-4.4C-69.4,-21,
                    -66.1,-41.9,-54,-57C-41.9,-72.1,-21,-81.4,-0.5,-80.9C20,-80.4,39.9,-70.1,51.8,-55Z;
                    ">
            </animate>
          </path>
        </svg>)}
    </div>
  )
}