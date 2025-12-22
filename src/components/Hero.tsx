// import Document from "../icons/Document";
// import Github from "../icons/Github";
// import Linkedin from "../icons/Linkedin";
// import Mail from "../icons/Mail";

export default function Hero() {
  return (
    <div className="bg-white flex justify-between md:items-center gap-4 mt-3 py-14 px-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tighter">ujjwal</h1>
        <p>aspiring software engineer</p>
      </div>

      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_A_BFmrBMb5hDUuIx5raOsW39EFQDuDUoSDLOPngHHFgvhi-CnuLHH2Aa42mprPnIV5SvhAHmktdksrEj6ERbqkgsVlvrGM8NdVwWmH_jjDv8Qu11AVIdBWtONY2AF2GkpzZ7R-xQUb2Zd1Wo9PG-RYIBvW29hMHm9iP3w94CaHicBHuDRksVjaj5wgIl/s16000-d/gojo-pfp-58.jpg"
        alt=""
        className="w-20 h-20 object-cover rounded-full"
      />

      {/* <div className="w-fit flex items-center justify-between">
        <a
          href="https://github.com/ujjwalkumar02"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-2 rounded-full"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-2 rounded-full"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-2 rounded-full"
        >
          <Mail />
        </a>
        <a
          href="/portfolio/assets/Ujjwal_RESUME-COTZWrna.pdf"
          className="hover:bg-gray-100 transition-all hover:-translate-y-1 duration-200 p-2 rounded-full"
        >
          <Document />
        </a>
      </div> */}
    </div>
  );
}
