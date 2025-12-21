import Document from "../icons/Document";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

export default function Nav() {
  return (
    <div className="min-w-2xl fixed bottom-6 flex justify-center items-center">
      <div className="bg-white flex items-center justify-between gap-4 border border-gray-200 px-6 py-1 rounded-full shadow">
        <a
          href="https://github.com/ujjwalkumar02"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-3 rounded-full"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-3 rounded-full"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-3 rounded-full"
        >
          <Mail />
        </a>
        <a
          href="/portfolio/assets/Ujjwal_RESUME-COTZWrna.pdf"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-3 rounded-full"
        >
          <Document />
        </a>
      </div>
    </div>
  );
}
