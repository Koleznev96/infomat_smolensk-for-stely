import React from "react";

import styles from "./Tag.module.scss";

interface TagProps {
  text?: string;
  icon?: {
    name?: "geo" | "time" | "route" | "cal";
    color?: string;
    size?: "small" | "large";
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
          {icon?.name === "time" &&
            (icon.size === "small" ? (
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
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                  stroke="#C63927"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
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
          {icon?.name === "cal" &&
            (icon.size === "small" ? (
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 6.66683H1M9.66667 1.3335V4.00016M4.33333 1.3335V4.00016M4.2 14.6668H9.8C10.9201 14.6668 11.4802 14.6668 11.908 14.4488C12.2843 14.2571 12.5903 13.9511 12.782 13.5748C13 13.147 13 12.5869 13 11.4668V5.86683C13 4.74672 13 4.18667 12.782 3.75885C12.5903 3.38252 12.2843 3.07656 11.908 2.88482C11.4802 2.66683 10.9201 2.66683 9.8 2.66683H4.2C3.0799 2.66683 2.51984 2.66683 2.09202 2.88482C1.71569 3.07656 1.40973 3.38252 1.21799 3.75885C1 4.18667 1 4.74672 1 5.86683V11.4668C1 12.5869 1 13.147 1.21799 13.5748C1.40973 13.9511 1.71569 14.2571 2.09202 14.4488C2.51984 14.6668 3.0799 14.6668 4.2 14.6668Z"
                  stroke="#5624D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                  stroke="#C63927"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
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
