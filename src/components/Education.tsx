import img from "../../public/maitLogo.jpg";

export default function Education() {
  return (
    <div className="space-y-6 py-6 px-8">
      <h2 className="text-xl font-semibold tracking-tight">education</h2>

      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <div className="flex items-center md:gap-4 gap-8">
          <img
            src={img}
            alt="projectImage"
            className="w-14 h-14 rounded-lg object-cover border border-gray-200"
          />
          <div>
            <h2 className="font-medium">
              maharaja agrasen institute of technology, delhi
            </h2>
            <p className="text-gray-500">bachelors of technology, ece</p>
          </div>
        </div>

        <div className="space-x-1 flex text-gray-500">
          <p>2022</p>
          <p>-</p>
          <p>2026</p>
        </div>
      </div>
    </div>
  );
}
