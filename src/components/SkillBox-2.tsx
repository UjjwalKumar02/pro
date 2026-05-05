interface SkillBox2 {
  children: React.ReactNode;
}

export default function SkillBox2(props: SkillBox2) {
  return (
    <div className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 py-[4.5px] px-2.5 rounded-lg flex items-center gap-1 border border-gray-200 text-sm">
      {props.children}
    </div>
  );
}
