import ExternalLink from "../icons/ExternalLink";
import Github from "../icons/Github";
import SkillBox from "./SkillBox";

interface Props {
  image: string;
  title: string;
  desc: string;
  github: string;
  live: string;
  stack: string[];
}

export default function ProjectBox({
  image,
  title,
  desc,
  github,
  live,
  stack,
}: Props) {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-10 w-full">
      <img
        src={image}
        alt="projectImage"
        className="w-full h-40 rounded-xl border border-gray-200"
      />

      <div className="md:w-full w-[90%] space-y-4">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-black text-xl font-medium tracking-tight">
            {title}
          </h2>

          <div className="flex items-center gap-2.5 text-gray-600">
            <a
              href={github}
              className="transition-all hover:-translate-y-1 duration-200 rounded-full"
            >
              <Github />
            </a>
            <a
              href={live}
              className="transition-all hover:-translate-y-1 duration-200 rounded-full"
            >
              <ExternalLink />
            </a>
          </div>
        </div>

        <p className="text-gray-500">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {stack.map((s) => (
            <SkillBox variant="secondary" name={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
