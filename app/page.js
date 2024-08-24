"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="bg-blue-200 min-h-screen flex justify-center items-center space">
        <div className="text-center">
          <div className="text-blue-chill-500 text-6xl mb-2">Heart Insignt</div>
          <div className="text-blue-chill-600 text-xl font-thin mb-5">Comprehensive ECG Analysis</div>
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
