import React from "react";
import styles from "./logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        className={styles.logoBackground}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient
            id="a"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stop-color="red">
              <animate
                attributeName="stop-color"
                values="red;purple;blue;green;yellow;orange;red;"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset=".5" stop-color="purple">
              <animate
                attributeName="stop-color"
                values="purple;blue;green;yellow;orange;red;purple;"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1" stop-color="blue">
              <animate
                attributeName="stop-color"
                values="blue;green;yellow;orange;red;purple;blue;"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 .5 .5"
              to="360 .5 .5"
              dur="20s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient
            id="b"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="1"
            y2="1"
          >
            <stop offset="0" stopColor="red">
              <animate
                attributeName="stop-color"
                values="red;purple;blue;green;yellow;orange;red;"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1" stop-color="purple" stopOpacity="0">
              <animate
                attributeName="stop-color"
                values="purple;blue;green;yellow;orange;red;purple;"
                dur="20s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              values="360 .5 .5;0 .5 .5"
              className="ignore"
              dur="10s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <rect fill="url(#a)" width="100%" height="100%" />
        <rect fill="url(#b)" width="100%" height="100%" />
      </svg>
      <div className={styles.logoStencilContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 300 300"
          fill="var(--primary-dark)"
          stroke="transparent"
          strokeWidth="2px"
          className={styles.logoStencil}
        >
          <path d="M0 152v152h304V0H0v152zM174.1 31.5c28.3 4.9 55.1 20.9 73.3 43.6 5.4 6.9 16.6 25.1 16.6 27.2 0 .4-.8.7-1.7.7-1.2 0-2.9-2.1-4.8-5.8-12.3-23.6-33.4-43.4-57.6-54C160.5 26 115 31.5 81 57.5c-12.6 9.7-26.1 25.8-32.9 39.2-1.7 3.5-3.8 6.3-4.6 6.3-1.9 0-1.9-.8.1-5.6 3.1-7.5 14.4-23.2 23.1-32C83.9 48 106.5 36 130.5 31.5c9.8-1.8 33.4-1.8 43.6 0zm-2.6 10.9c32.6 5.9 60.5 25.8 76.8 54.8 5.2 9.3 5.3 9.8 3.3 9.8-.8 0-2.9-2.6-4.6-5.8-15.7-27.7-38.9-46.2-67.8-53.9-8.5-2.3-11.7-2.6-25.7-2.7-13 0-17.7.4-25.3 2.2-28.9 6.7-56.5 28.2-69.5 53.9-2.7 5.1-4.3 7-5.4 5.9-2.4-2.3 12.2-23.9 23.3-34.6 21.4-20.5 46.1-30.8 74.9-30.9 6.6-.1 15.6.6 20 1.3zm-27 22.2c1.9 5.1 2.5 4.9 5-1.9 1.4-3.8 2.2-4.7 4.1-4.7 2.2 0 2.4.4 2.4 5.4 0 2.9.3 6.8.6 8.5.6 2.8.4 3.1-2 3.1s-2.6-.3-2.7-4.3l-.1-4.2-1.5 4.2c-1.8 5.3-4.3 5.6-6.6 1l-1.6-3.2v3.1c-.1 2.3-.7 3.3-2 3.7-1.1.3-2.2.2-2.5-.1-.3-.3-.6-4-.6-8.3 0-6.6.3-7.8 1.8-8.1 2.5-.6 3.7.6 5.7 5.8zm24.6-1.9 1.1 3.6 2-3.2c1.4-2.1 2.8-3.1 4.5-3.1 2.7 0 2.6.1-1.8 6.3-1.5 2.1-3.1 5.1-3.4 6.8-.5 2-1.3 2.9-2.6 2.9-1.5 0-1.9-.7-1.9-3.4 0-1.8-.7-5.3-1.5-7.6-2-5.7-1.9-6.9.5-6.3 1.1.3 2.4 2 3.1 4zM283 118.5c0 1.3-15.3 1.5-132 1.5s-132-.2-132-1.5 15.3-1.5 132-1.5 132 .2 132 1.5zm-173.1 12.1c1.5 2 2.1 4.1 2.1 8v5.4h-3.5c-3.5 0-3.5 0-3.5-4.5 0-3.8-.3-4.5-2-4.5-1.9 0-2 .7-2 14.5s.1 14.5 2 14.5c1.8 0 2-.7 2-5.4 0-3.9-.4-5.5-1.5-6-.8-.3-1.5-1.7-1.5-3.1 0-2.3.3-2.5 5-2.5h5v12c0 11.2-.1 12-1.9 12-1.1 0-2.1-.6-2.4-1.3-.4-1-.7-1-1.8 0-1.8 1.7-6 1.6-8.5-.2-3.9-2.6-4.6-6.4-4.2-21.8.3-13.8.4-14.7 2.7-17.1 2-2.1 3.4-2.6 7.2-2.6 3.9 0 5.1.4 6.8 2.6zm39.6.6c1.7 10.5 5.5 36.3 5.5 37.9 0 1.5-.7 1.9-3.4 1.9-3.1 0-3.4-.3-4-4-.5-3.4-1-4-3.1-4s-2.6.6-3.1 4c-.6 3.7-.9 4-4 4-2.6 0-3.4-.4-3.4-1.8 0-.9 1.2-10.6 2.7-21.5l2.7-19.7h4.8c4.5 0 4.7.1 5.3 3.2zm42-1.2c1.1 1.3 2 4.1 2.3 7.5l.4 5.5h-3.5c-3.5 0-3.6-.1-3.9-4.3-.3-4.8-3.1-6.1-3.6-1.6-.2 2 1 4.1 4.8 8.4 5.5 6.4 7.5 11.6 6.4 17.2-1 5.2-4.4 8.3-9.1 8.3-6.4-.1-9.3-4-9.3-12.6 0-4.4 0-4.4 3.4-4.4s3.5.1 3.8 4.7c.2 3.6.7 4.9 2.1 5.1 1.4.3 1.7-.4 1.7-3.8s-.7-4.8-4.4-8.8c-5.6-6.1-6.6-8.1-6.6-13.5 0-6.7 2.8-9.7 8.9-9.7 3.5 0 5.3.5 6.6 2zM127 167.6c0 3.4-.1 3.5-3.2 3.2-2.9-.3-3.3-.7-3.6-3.6-.3-3.1-.2-3.2 3.2-3.2 3.5 0 3.6.1 3.6 3.6zm41-.1c0 3.2-.2 3.5-3 3.5s-3-.3-3-3.5.2-3.5 3-3.5 3 .3 3 3.5zm40 .1c0 3.4-.1 3.5-3.2 3.2-2.9-.3-3.3-.7-3.6-3.6-.3-3.1-.2-3.2 3.2-3.2 3.5 0 3.6.1 3.6 3.6zm75 15.9c0 1.3-15.3 1.5-132 1.5s-132-.2-132-1.5 15.3-1.5 132-1.5 132 .2 132 1.5zM60.1 201.7c14.9 25.9 36.9 43.1 65.6 51 8.9 2.5 11.4 2.8 26.8 2.8 14.6 0 18.2-.3 25.5-2.3 30.1-8.2 53.6-26.6 68.4-53.5 2.1-3.7 4.4-6.7 5.2-6.7 1.9 0 1.8.2-1.2 6.3-16.8 33.1-50.6 56.1-87.7 59.6-38 3.6-74.6-12.8-98-44C59.3 207.7 53 196.5 53 194c0-2.8 2.7.2 7.1 7.7zm-11 5.2c8 15.1 19.5 28.4 33.4 38.7 47.6 35.2 112.6 30 154.1-12.2 8.1-8.2 17.2-20.7 21.5-29.7 1.5-3 2.9-4.7 4.1-4.7 1 0 1.8.3 1.8.6 0 .4-1.9 4.2-4.1 8.4-14.4 26.9-39.6 48.2-68.9 58.2-22.8 7.7-52.3 7.8-76 .3-28.6-9.1-55.3-31.4-69-57.7-4.3-8.3-4.7-9.8-2.6-9.8.8 0 3.4 3.6 5.7 7.9zm179.2 3.5c4 7.4 4.1 7.8 2.3 9.1-1.6 1.2-2.5 1-7-1.6-2.9-1.6-5.6-2.9-5.9-2.9-.4 0 .3 2 1.5 4.6 1.9 3.9 2 4.6.8 5.4-.8.5-1.8 1-2.2 1-.4 0-2.6-3.6-4.8-8.1-3.9-7.6-4-8.2-2.3-9.4 1.6-1.2 2.5-1 6.9 1.6 2.8 1.6 5.4 2.9 5.8 2.9.3 0-.4-2-1.6-4.6-1.9-3.9-2-4.6-.8-5.4.8-.5 1.9-.9 2.3-.7.5.1 2.7 3.8 5 8.1zm-121.5 4.3c2.4 2.1 3.3 5.9 1.5 5.7-.7-.1-2-.2-2.8-.3-.8 0-1.5-.8-1.5-1.6s-.7-1.5-1.5-1.5c-2.4 0-1.7 2.5 1.5 5.3 3.2 2.9 3.6 4.6 2 7.8-1.5 2.7-8.3 2.6-11-.1-2.5-2.5-2.8-6.5-.4-5.6.9.3 2 .6 2.5.6s.9.7.9 1.5.9 1.5 2 1.5c2.9 0 2.4-2.3-1-4.8-3.5-2.6-4.1-7.4-1.2-9.1 2.6-1.6 6.8-1.3 9 .6zm95.6.4c3.8 1.8 6 7.1 4.6 11.4-2.3 7.1-10.7 8.9-16.1 3.6-7.8-7.9 1.2-19.6 11.5-15zm-78.1 3.9c4.5.9 5.7 1.5 5.7 3 0 1.4-.7 1.8-2.7 1.7-2.6-.2-2.8.1-4.2 7-1.4 7.1-2.2 8.1-4.9 6.5-1-.7-1-2.2.2-7.8 1.5-7 1.1-8.3-2.1-8.4-1.3 0-1.8-2.2-.7-3.3.3-.3 1.1-.4 1.7-.2.7.2 3.8.9 7 1.5zm58 8.6c1.7 9.3 1.6 10.4-1.2 10.4-1.5 0-2.1-1.6-3.5-8.3-2.1-10.5-2-10.7.7-10.7 2.1 0 2.5.8 4 8.6zm-36.5-5.1c.3.3 5.2 16.8 5.2 17.7 0 .5-1.1.8-2.5.8-1.5 0-2.5-.6-2.5-1.4 0-2.1-6.2-3-7.6-1.1-1.1 1.5-5.4 2.1-5.4.7 0-.4 1.6-4.6 3.6-9.4 3.5-8.4 3.8-8.7 6.3-8.1 1.4.3 2.7.7 2.9.8zm25.2-.1c0 .8-1 1.6-2.2 1.8-2.2.3-2.3.7-2.1 8 .3 7.6.2 7.8-2.1 7.8-2.2 0-2.4-.5-3.1-7.5-.6-7.1-.8-7.5-3.1-7.5-2.8 0-3.3-2.6-.6-3.3.9-.3 4.3-.5 7.5-.6 4.3-.1 5.7.2 5.7 1.3z" />
          <path d="M143.7 147.5c-1.1 6.5-.9 9.5.8 9.5 1.7 0 1.9-2.9.6-9.5l-.7-4-.7 4zM194.6 219.6c-3.2 3.1-1 9.4 3.3 9.4 2.2 0 5.1-3.1 5.1-5.3 0-2.1-3.5-5.7-5.4-5.7-.8 0-2.2.7-3 1.6zM141.2 230.8c-1 2.9-.9 3.2.9 3.2 2 0 2.3-1.2 1-4.4-.7-1.8-.9-1.6-1.9 1.2z" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
