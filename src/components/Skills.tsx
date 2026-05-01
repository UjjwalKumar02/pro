import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <div className="space-y-6 py-6 px-8">
      <h2 className="text-xl font-semibold">skills</h2>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">languages :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox
            variant="primary"
            className="text-sm "
            name={"javascript/ typescript"}
          />
          <SkillBox variant="primary" className="text-sm " name={"c++"} />
          <SkillBox variant="primary" className="text-sm " name={"sql"} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">frontend :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox variant="primary" className="text-sm " name={"react.js"} />
          <SkillBox variant="primary" className="text-sm " name={"next.js"} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">backend :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox variant="primary" className="text-sm " name={"node.js"} />
          <SkillBox
            variant="primary"
            className="text-sm "
            name={"express.js"}
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">databases :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox
            variant="primary"
            className="text-sm "
            name={"postgresql"}
          />
          {/* <SkillBox variant="primary" className="text-sm " name={"mysql"} /> */}
          <SkillBox variant="primary" className="text-sm " name={"mongodb"} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">orm/odm :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox variant="primary" className="text-sm " name={"prisma"} />
          <SkillBox variant="primary" className="text-sm " name={"mongoose"} />
          {/* <SkillBox variant="primary" className="text-sm " name={"sequelize"} /> */}
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">deployment :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox variant="primary" className="text-sm " name={"aws"} />
          <SkillBox variant="primary" className="text-sm " name={"vercel"} />
          <SkillBox variant="primary" className="text-sm " name={"render"} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-1.5 md:items-center">
        <p className="mr-3">miscellaneous :</p>
        <div className="flex flex-wrap gap-1.5 items-center">
          <SkillBox variant="primary" className="text-sm " name={"docker"} />
          <SkillBox variant="primary" className="text-sm " name={"git"} />
          <SkillBox
            variant="primary"
            className="text-sm "
            name={"github actions"}
          />
          <SkillBox variant="primary" className="text-sm " name={"turborepo"} />
          <SkillBox
            variant="primary"
            className="text-sm "
            name={"tailwindcss"}
          />
        </div>
      </div>
    </div>
  );
}
