import { IconChartArcs, IconChevronRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-transparent"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl sm:text-5xl">
            Mitra Terpercaya Dalam Usaha Anda
          </h1>
          <h1 className="mt-4 max-w-lg sm:hidden">
            Membutuhkan modal kerja untuk membangun bisnis? Kesulitan dalam
            mencari investasi yang menguntungkan?
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:shadow-xl focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <div className="flex gap-2 place-items-start">
                Pelajari Lebih lanjut {<IconChevronRight />}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
