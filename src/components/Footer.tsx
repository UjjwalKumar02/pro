import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";
import Twitter from "../icons/Twitter";

export default function Footer() {
  return (
    <div className="h-40 flex justify-center items-center md:gap-2 gap-1.5 text-sky-500">
      <p className="text-gray-600 text-lg">Contact via</p>
      <a
        href="https://github.com/ujjwalkumar02"
        target="_blank"
        className="cursor-pointer"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
        target="_blank"
        className="cursor-pointer"
      >
        <Linkedin />
      </a>
      <a
        href="mailto:ujjwal.kumar.id@gmail.com"
        target="_blank"
        className="cursor-pointer"
      >
        <Mail />
      </a>
      <a
        href="https://x.com/regressor__"
        target="_blank"
        className="cursor-pointer"
      >
        <Twitter />
      </a>
    </div>
  );
}
