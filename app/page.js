import Image from "next/image";

export default function Home() {
  return (
  <>
  <div class="bg-blue-200 min-h-screen flex items-center">
    <div class="w-full">
      <h1 class="text-center font-bold">*Fill up the following Basic details needed to proceed</h1>
      <a href="/ecg">Proceed</a>
    </div>
  </div>

  <div class="ocean">
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
  </>
  );
}
