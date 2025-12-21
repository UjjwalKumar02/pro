import ProjectBox from "./ProjectBox";
import img1 from "../../public/circlesImage.png";
import img2 from "../../public/brainboxImage.png";
export default function Projects() {
  return (
    <div className="space-y-6 py-8 px-8">
      <h2 className="text-2xl font-semibold tracking-tight">recent projects</h2>

      <div className="w-full space-y-14">
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
          desc="social media app"
          github="https://google.com"
          live="https://google.com"
          stack={["react.js", "express.js", "postgresql", "typescript"]}
        />
        <ProjectBox
          image={img2}
          title="brainbox"
          desc="a dashboard for saving links"
          github="https://google.com"
          live="https://google.com"
          stack={["react.js", "express.js", "mongodb", "typescript"]}
        />
      </div>
    </div>
  );
}
