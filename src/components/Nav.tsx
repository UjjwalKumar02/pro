import Document from "../icons/Document";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";

export default function Nav() {
  return (
    <div className="md:w-2xl w-full fixed bottom-4 flex justify-center items-center">
      <div className="bg-gray-900 text-gray-100 flex items-center justify-between gap-5 px-5 rounded-xl shadow">
        <a
          href="https://github.com/ujjwalkumar02"
          className="transition-all hover:-translate-y-1 duration-200 px-2 py-2.5 rounded-full"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          className="transition-all hover:-translate-y-1 duration-200 px-2 py-2.5 rounded-full"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          className="transition-all hover:-translate-y-1 duration-200 px-2 py-2.5 rounded-full"
        >
          <Mail />
        </a>
        <a
          href="/portfolio/assets/Ujjwal_RESUME-COTZWrna.pdf"
          className="transition-all hover:-translate-y-1 duration-200 px-2 py-2.5 rounded-full"
        >
          <Document />
        </a>
      </div>
    </div>
  );
}
