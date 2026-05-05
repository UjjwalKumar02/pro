import img from "../../public/pro.jpeg";
// import { Codeforces } from "../icons/Codeforces";
import Document from "../icons/Document";
import Github from "../icons/Github";
import Leetcode from "../icons/Leetcode";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

export default function Hero() {
  return (
    <div className="bg-white flex flex-col justify-between gap-7 mt-3 py-8 px-8">
      <div className="bg-white flex justify-between md:items-center gap-4 py-7">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tighter">ujjwal</h1>
          <p>aspiring software engineer</p>
        </div>

        <img
          src={img}
          alt=""
          className="w-22 h-fit object-contain rounded-2xl"
        />
      </div>

      <div className="w-fit flex flex-wrap items-center gap-3">
        <a
          href="/pro/UjjwalKumar-RESUME.pdf"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Document /> Resume
        </a>

        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Linkedin /> LinkedIn
        </a>

        <a
          href="https://github.com/ujjwalkumar02"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Github /> Github
        </a>

        <a
          href="https://leetcode.com/u/Ujjwal_Kumar02"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Leetcode /> Leetcode
        </a>

        {/* <a
          href="https://codeforces.com/profile/Ujjwal.xyz"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Codeforces /> Codeforces
        </a> */}

        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          target="_blank"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-xs"
        >
          <Mail /> Email
        </a>
      </div>
    </div>
  );
}
