import { IconArrowRight, IconFile, IconPdf } from "@tabler/icons-react";

const SingleSec = () => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-sky-600 p-6 shadow-lg sm:flex-row sm:justify-between m-5">
      <strong className="text-xl text-white sm:text-xl">
        <div className="flex items-center gap-2">
          {<IconFile />}Laporan Tata Kelola BPR Cahaya Fajar
        </div>
      </strong>

      <a
        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-600 hover:shadow-xl hover:text-blue focus:outline-none focus:ring active:bg-white/90"
        href="/"
      >
        <span className="text-sm font-medium"> Lihat </span>
        {<IconArrowRight />}
      </a>
    </div>
  );
};

export default SingleSec;
