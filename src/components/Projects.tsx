import ProjectBox from "./ProjectBox";
import img1 from "../../public/circles2-BJTJxEzE.png";
import img2 from "../../public/app.png";

export default function Projects() {
  return (
    <div className="space-y-6 py-8 px-8">
      <h2 className="text-xl font-semibold tracking-tight">projects</h2>

      <div className="flex items-center justify-center gap-8 flex-wrap w-full">
        {/* <ProjectBox
          image={img1}
          title="hirable"
          desc="ai-powered hiring app"
          github="https://google.com"
          live="https://google.com"
          stack={["next.js", "postgresql"]}
        />
        <ProjectBox
          image={img1}
          title="openss"
          desc="oss finding app"
          github="https://google.com"
          live="https://google.com"
          stack={["next.js", "postgresql"]}
        />
        <ProjectBox
          image={img1}
          title="payx"
          desc="upi payment app"
          github="https://google.com"
          live="https://google.com"
          stack={["next.js", "postgresql"]}
        />
        <ProjectBox
          image={img1}
          title="drawer"
          desc="collaborative whitboard app"
          github="https://google.com"
          live="https://google.com"
          stack={["next.js", "postgresql"]}
        /> */}
        <ProjectBox
          image={img1}
          title="circles"
          desc="a community based social app"
          github="https://github.com/UjjwalKumar02/circles"
          live="/"
          stack1={["react.js", "express.js"]}
          stack2={["postgresql", "typescript"]}
        />
        <ProjectBox
          image={img2}
          title="brainbox"
          desc="a dashboard for saving links"
          github="https://github.com/UjjwalKumar02/brainbox"
          live="/"
          stack1={["react.js", "express.js"]}
          stack2={["mongodb", "typescript"]}
        />
      </div>
    </div>
  );
}
