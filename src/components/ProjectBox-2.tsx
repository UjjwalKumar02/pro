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

export default function ProjectBox2({
  image,
  title,
  desc,
  github,
  live,
  stack,
}: Props) {
  return (
    <div className="w-full flex gap-6.5 items-center border border-gray-200 rounded-2xl">
      <img
        src={image}
        alt="projectImage"
        className="w-[46%] h-42 object-cover rounded-l-2xl border-r border-gray-200"
      />

      <div className="space-y-3">
        <div className="w-full flex items-center justify-between gap-4">
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

        
          <div className="flex gap-1 mt-3">
            {stack.map((s) => (
              <SkillBox variant="secondary" fullWidth={true} name={s} />
            ))}
          </div>
        
      </div>
    </div>
  );
}
