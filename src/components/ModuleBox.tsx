import { useState } from "react";

export default function ModuleBox({
  title,
  content,
}: {
  title: string;
  content?: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 flex flex-col py-1.5 px-5 rounded-lg border border-gray-200 ">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between"
      >
        <p className="italic">{title}</p>
        <p>&gt;</p>
      </div>

      {open && (
        <div className="border-t border-gray-200 pt-2">
          {content &&
            content.length > 0 &&
            content.map((c, i) => (
              <p className="before:content-['•'] before:mr-2" key={i}>
                {c}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}
