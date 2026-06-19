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
            content={["quant", "logical", "grammer"]}
          />
          <ModuleBox
            title="cs theory"
            content={["operating system", "dbms", "oops", "computer networks"]}
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
              "views",
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
            title="backend"
            content={[
              "framworks/runtime : node.js, bun, trpc, nest.js, express.js",
              "api styles : webhooks, server-side events, polling, graphql, gRPC, websocket, rest",
              "git and bash",
              "auth",
              "theory : hashing and api security",
              "(file, image, video) handling",
              "payments handling",
              "rate limiting",
              "background jobs and message brokers (queues & workers, event streaming)",
              "search engines",
              "testing basics and ci",
              "distributed sytems & microservices",
              "go basics",
              "indexing",
              "extra : web scraping basics, webrtc basics, linux",
            ]}
          />
          <ModuleBox
            title="ai"
            content={[
              "rag - embedding, retrieval, routing, similarity search, vector db",
              "inngest & sandbox",
              "agents",
              "mcp",
              "skills",
              "workflow",
              "agentic ai",
            ]}
          />
          <ModuleBox
            title="devops"
            content={[
              "ci/cd",
              "docker (containerization)",
              "kubernatives (container orchestration)",
              "vertical scaling",
              "nginx, pm2, https, ssh, key-pair, github actions",
              "aws - ec2, s3, auto-scaling, lambda",
            ]}
          />
          <ModuleBox
            title="python environment"
            content={[
              "python",
              "uv",
              "langchain",
              "langgraph",
              "langsmith",
              "fastapi",
              "django",
            ]}
          />

          <ModuleBox title="system design" content={["basics"]} />
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
          <ModuleBox title="open source contribution" />
          <ModuleBox
            title="atlas"
            content={[
              "prompt to ui component",
              "agents",
              "inngest",
              "sandbox",
              "microservices ?",
            ]}
          />

          <ModuleBox
            title="c# environment"
            content={["c#", "dotnet", "aspnet"]}
          />
          {/* <ModuleBox title="machine coding" /> */}

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
