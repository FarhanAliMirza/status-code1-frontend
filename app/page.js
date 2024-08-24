"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex justify-center items-center space">
        <div className="text-center">
          

          <div className="text-blue-chill-500 text-6xl mb-2 flex">He<svg
            width="50"
            height="50"
            viewBox="0 0 266 266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-2"
          >
            <path
              d="M178.719 33.25C197.191 33.25 212.663 40.0847 225.136 53.7542C237.608 67.4236 243.841 83.6792 243.833 102.521C243.833 105.846 243.648 109.126 243.279 112.363C242.91 115.599 242.263 118.784 241.339 121.917H172.069L153.504 93.6542H133.554L118.592 141.312L105.569 121.917H24.6603C23.7366 118.776 23.0901 115.592 22.7207 112.363C22.3512 109.134 22.1665 105.946 22.1665 102.798C22.1665 83.7715 28.3547 67.4236 40.7311 53.7542C53.1075 40.0847 68.5318 33.25 87.004 33.25C95.8707 33.25 104.231 35.0049 112.086 38.5146C119.94 42.0243 126.911 46.9194 133 53.2C138.911 46.9194 145.794 42.0243 153.648 38.5146C161.502 35.0049 169.859 33.25 178.719 33.25ZM132.723 243.279L41.0082 151.01C39.8998 149.902 38.8839 148.794 37.9603 147.685C37.0366 146.577 36.113 145.376 35.1894 144.083H93.654L112.773 172.623H132.446L147.408 124.687L160.154 144.083H230.533L227.762 147.408L224.992 150.733L132.723 243.279Z"
              fill="#5FAAB1"
            />
          </svg>rt Insignt</div>
          <div className="text-blue-chill-600 text-xl font-thin mb-5">
            Comprehensive ECG Analysis
          </div>
          <button
            className="bg-blue-chill-400 text-white p-2 rounded-lg self-center"
            onClick={() => router.push("/ecg")}
          >
            Proceed
          </button>
        </div>
      </div>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </>
  );
}
