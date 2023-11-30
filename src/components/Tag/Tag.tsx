import React from "react";

import styles from "./Tag.module.scss";

interface TagProps {
  text?: string;
  icon?: {
    name?: "geo" | "time" | "route" | "cal";
    color?: string;
  };
  padding?: string;
  size?: "small" | "large";
  color?: {
    bg?: string;
    text?: string;
  };
}

const Tag = ({ text, color, icon, padding, size = "small" }: TagProps) => {
  return (
    <div className={styles.tag}>
      <div
        style={{
          padding: padding,
          backgroundColor: color?.bg,
        }}
      >
        <>
          {icon?.name === "geo" && (
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00033 8.66671C8.10489 8.66671 9.00033 7.77128 9.00033 6.66671C9.00033 5.56214 8.10489 4.66671 7.00033 4.66671C5.89576 4.66671 5.00033 5.56214 5.00033 6.66671C5.00033 7.77128 5.89576 8.66671 7.00033 8.66671Z"
                stroke={icon.color || color?.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.00033 14.6667C9.66699 12 12.3337 9.61223 12.3337 6.66671C12.3337 3.72119 9.94584 1.33337 7.00033 1.33337C4.05481 1.33337 1.66699 3.72119 1.66699 6.66671C1.66699 9.61223 4.33366 12 7.00033 14.6667Z"
                stroke={icon.color || color?.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {icon?.name === "time" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2052_6205)">
                <path
                  d="M7.99967 4.00004V8.00004L10.6663 9.33337M14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004Z"
                  stroke={icon.color || color?.text}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2052_6205">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
          {icon?.name === "route" && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66634 3.33337H7.95594C9.98744 3.33337 11.0032 3.33337 11.3888 3.69823C11.7221 4.01362 11.8698 4.47823 11.7798 4.92818C11.6757 5.44872 10.8464 6.03528 9.18786 7.20839L6.47815 9.12502C4.81961 10.2981 3.99033 10.8847 3.88623 11.4052C3.79625 11.8552 3.94395 12.3198 4.27725 12.6352C4.66283 13 5.67858 13 7.71008 13H8.33301M5.33301 3.33337C5.33301 4.43794 4.43758 5.33337 3.33301 5.33337C2.22844 5.33337 1.33301 4.43794 1.33301 3.33337C1.33301 2.2288 2.22844 1.33337 3.33301 1.33337C4.43758 1.33337 5.33301 2.2288 5.33301 3.33337ZM14.6663 12.6667C14.6663 13.7713 13.7709 14.6667 12.6663 14.6667C11.5618 14.6667 10.6663 13.7713 10.6663 12.6667C10.6663 11.5621 11.5618 10.6667 12.6663 10.6667C13.7709 10.6667 14.6663 11.5621 14.6663 12.6667Z"
                stroke={icon.color || color?.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {icon?.name === "cal" && (
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9H1M14 1V5M6 1V5M5.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H5.8C4.11984 3 3.27976 3 2.63803 3.32698C2.07354 3.6146 1.6146 4.07354 1.32698 4.63803C1 5.27976 1 6.11984 1 7.8V16.2C1 17.8802 1 18.7202 1.32698 19.362C1.6146 19.9265 2.07354 20.3854 2.63803 20.673C3.27976 21 4.11984 21 5.8 21Z"
                stroke="#C63927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </>
        <span
          style={{
            fontSize: size === "small" ? "16px" : "20px",
            color: color?.text,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Tag;
