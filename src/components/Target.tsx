import TargetBox from "./TargetBox";

export default function Target() {
  return (
    <section className="space-y-4 px-10 py-8">
      <h2 className="text-xl font-semibold tracking-tight">targets</h2>

      <div className="flex flex-col gap-3 rounded-lg">
        <TargetBox title="data structure and algorithm" length={50} />
        <TargetBox title="competetive programming" length={25} />
        <TargetBox title="sql" length={25} />
        <TargetBox title="project-1" length={75} />
        <TargetBox title="project-2" length={25} />
        <TargetBox title="advanced backend" length={50} />
        <TargetBox title="devops" length={25} />
        <TargetBox title="system design" length={25} />
        <TargetBox title="open source" length={25} />
        <TargetBox title="ai modules" length={25} />
        <TargetBox title="theory subjects" length={50} />
        <TargetBox title="interview modules" length={25} />
      </div>
    </section>
  );
}
