import { useState } from "react";
import img from "../../public/pro.jpeg";
// import { Codeforces } from "../icons/Codeforces";
import Document from "../icons/Document";
import Github from "../icons/Github";
import Leetcode from "../icons/Leetcode";
import Linkedin from "../icons/Linkedin";
import Mail from "../icons/Mail";
import ModuleBox from "./ModuleBox";
import ProjectBox2 from "./ProjectBox-2";
import img4 from "../../public/hirableImage.png";
import ProjectBox from "./ProjectBox";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white flex flex-col justify-between gap-7 py-6 px-10">
      <div className="bg-white flex justify-between md:items-center gap-4 py-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tighter">ujjwal</h1>
          <p>aspiring software engineer</p>
        </div>

        <button onClick={() => setOpen((prev) => !prev)}>
          <img
            src={img}
            alt=""
            className="w-22 h-fit object-contain rounded-2xl"
          />
        </button>
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

      {open && (
        <div className="flex flex-col gap-1.5">
          <h2 className="font-medium mb-2">Things i am learning...</h2>
          <ModuleBox
            title="aptitude"
            content={["quant", "logical", "english"]}
          />
          <ModuleBox
            title="cs theory"
            content={["operating system", "computer network", "dbms"]}
          />
          <ModuleBox
            title="sql"
            content={[
              "filtering",
              "aggregation",
              "joins",
              "subquery",
              "window function",
              "rank",
              "case statements",
              "indexes",
              "view",
            ]}
          />
          <ModuleBox
            title="dsa"
            content={[
              "math",
              "array",
              "string",
              "sliding window",
              "binary search",
              "stack",
              "queue",
              "recursion",
              "dp",
              "greedy",
              "bit manipulation",
              "linked list",
              "binary tree",
              "binary search tree",
              "graphs",
              "heaps",
            ]}
          />
          <ModuleBox
            title="competitive programming"
            content={["pattern questions"]}
          />
          <ModuleBox
            title="frontend"
            content={[
              "hooks",
              "priority and rules",
              "state management",
              "shadcn",
              "static",
              "pagination",
            ]}
          />
          <ModuleBox
            title="backend"
            content={[
              "auth",
              "api",
              "asynchronous",
              "payments",
              "file handling",
              "rate limiting",
              "testing",
              "microservices",
              "go",
              "message brokers",
              "search engines",
              "web scraping",
              "indexing",
            ]}
          />
          <ModuleBox
            title="ai"
            content={[
              "rag - embedding, retrieval, routing, similarity search, vector db",
              "sandboxes",
              "agents",
              "workflow",
              "agentic ai",
            ]}
          />
          <ModuleBox
            title="devops"
            content={[
              "ci and cd",
              "github actions",
              "nginx, pm2, https, ssh, key-pair",
              "aws - ec2, s3, lambda, auto-scaling",
              "docker - container, network, volume",
              "vertical scaling",
              "kubernatives",
            ]}
          />
          <ModuleBox
            title="python environment"
            content={["django", "fastapi", "langchain", "langgraph", "uv"]}
          />
          <ModuleBox title="open source contribution" />
          <ModuleBox
            title="c# environment"
            content={["c#", "dotnet", "aspnet"]}
          />
          <ModuleBox title="system design" />
          <ModuleBox title="machine coding" />

          <div className="mt-4 md:hidden">
            <ProjectBox
              image={img4}
              title="hirable"
              desc="a custom form builder, response tracker & query using llm"
              github="https://github.com/UjjwalKumar02/hirable-org"
              live="#"
              stack1={["next.js", "express.js"]}
              stack2={["typescript", "postgresql"]}
            />
          </div>
          <div className="mt-4 hidden md:block">
            <ProjectBox2
              image={img4}
              title="hirable"
              desc="a custom form builder, response tracker & query using llm"
              github="https://github.com/UjjwalKumar02/hirable-org"
              live="#"
              stack={["next.js", "express.js", "typescript", "postgresql"]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
