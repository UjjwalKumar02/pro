import ExternalLink from "../icons/ExternalLink";
import Github from "../icons/Github";
import SkillBox from "./SkillBox";

interface Props {
  image: string;
  title: string;
  desc: string;
  github: string;
  live: string;
  stack1: string[];
  stack2: string[];
}

export default function ProjectBox({
  image,
  title,
  desc,
  github,
  live,
  stack1,
  stack2,
}: Props) {
  return (
    <div className="sm:max-w-[45%] flex flex-col items-center justify-between border border-gray-200 rounded-xl">
      <img
        src={image}
        alt="projectImage"
        className="w-full rounded-t-xl border-b border-gray-100"
      />

      <div className="md:w-full w-[90%] space-y-3 md:px-7 px-4 py-6">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-black text-xl font-medium tracking-tight text-">
            {title}
          </h2>

          <div className="flex items-center gap-2">
            <a
              href={github}
              className="transition-all hover:-translate-y-1 duration-200 rounded-full"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href={live}
              className="transition-all hover:-translate-y-1 duration-200 rounded-full"
              target="_blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-4">{desc}</p>

        <div className="space-y-1.5 mt-4">
          <div className="flex gap-1.5">
            {stack1.map((s) => (
              <SkillBox variant="secondary" fullWidth={true} name={s} />
            ))}
          </div>
          <div className="flex gap-1.5">
            {stack2.map((s) => (
              <SkillBox variant="secondary" fullWidth={true} name={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
