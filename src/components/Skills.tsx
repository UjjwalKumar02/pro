import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <div className="space-y-6 py-6 px-8">
      <h2 className="text-xl font-semibold tracking-tight">skills</h2>

      <div className="flex gap-1.5 items-center flex-wrap">
        <SkillBox variant="primary" name={"react.js"} />
        <SkillBox variant="primary" name={"next.js"} />
        <SkillBox variant="primary" name={"express.js"} />
        <SkillBox variant="primary" name={"javascript"} />
        <SkillBox variant="primary" name={"typescript"} />
        {/* <SkillBox variant="primary" name={"turborepo"} /> */}
        <SkillBox variant="primary" name={"c++"} />
      </div>
    </div>
  );
}
