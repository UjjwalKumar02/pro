import AWS from "../icons/AWS";
import Cplusplus from "../icons/C++";
import Docker from "../icons/Docker";
import Expressjs from "../icons/Expressjs";
import Git from "../icons/Git";
import GithubActions from "../icons/GithubActions";
import JavaScript from "../icons/Javascript";
import Mongodb from "../icons/Mongodb";
import Mongoose from "../icons/Mongoose";
import Nextjs from "../icons/Nextjs";
import Nodejs from "../icons/Nodejs";
import Postgres from "../icons/Postgres";
import Prisma from "../icons/Prisma";
import Reactjs from "../icons/Reactjs";
import Render from "../icons/Render";
import Sql from "../icons/Sql";
import Tailwind from "../icons/Tailwind";
import Turborepo from "../icons/Turborepo";
import Typescript from "../icons/Typescript";
import Vercel from "../icons/Vercel";
import SkillBox2 from "./SkillBox-2";

export default function Skills() {
  return (
    <div id="skills" className="space-y-6.5 py-8 px-10">
      <h2 className="text-xl font-semibold">skills</h2>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">languages :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <JavaScript /> javascript
          </SkillBox2>

          <SkillBox2>
            <Typescript /> typescript
          </SkillBox2>

          <SkillBox2>
            <Cplusplus /> c++
          </SkillBox2>

          <SkillBox2>
            <Sql /> sql
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">frontend :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <Reactjs /> react.js
          </SkillBox2>

          <SkillBox2>
            <Nextjs /> next.js
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">backend :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <Nodejs /> node.js
          </SkillBox2>

          <SkillBox2>
            <Expressjs /> express.js
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">databases :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <Postgres /> postgresql
          </SkillBox2>

          <SkillBox2>
            <Mongodb /> mongodb
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">orm/odm :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <Prisma /> prisma
          </SkillBox2>

          <SkillBox2>
            <Mongoose /> mongoose
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">deployment :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <AWS /> aws
          </SkillBox2>

          <SkillBox2>
            <Vercel /> vercel
          </SkillBox2>

          <SkillBox2>
            <Render /> render
          </SkillBox2>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3 font-medium">misc :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox2>
            <Docker /> docker
          </SkillBox2>

          <SkillBox2>
            <Git /> git
          </SkillBox2>

          <SkillBox2>
            <GithubActions /> github actions
          </SkillBox2>

          <SkillBox2>
            <Turborepo /> turborepo
          </SkillBox2>

          <SkillBox2>
            <Tailwind /> tailwind css
          </SkillBox2>
        </div>
      </div>
    </div>
  );
}
