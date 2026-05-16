interface TargetBoxProps {
  title: string;
  length: 25 | 50 | 75 | 100;
}

export default function TargetBox(props: TargetBoxProps) {
  const lineMap = {
    25: "w-1/4 border-red-500",
    50: "w-1/2 border-sky-400",
    75: "w-3/4 border-green-500",
    100: "w-full",
  };

  return (
    <div className=" flex flex-col gap-2 py-3 rounded-xl hover:bg-gray-50">
      <h2 className="tracking-tight">{props.title}</h2>

      {/* outer cover */}
      <div className="border border-gray-100  rounded-lg">
        <div className={`border-4 rounded-lg  ${lineMap[props.length]}`}></div>
      </div>
    </div>
  );
}
