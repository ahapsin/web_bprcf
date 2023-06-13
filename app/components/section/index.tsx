import Image from "next/image";

const Section = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image alt="Party" src="/bg.jpg" width={625} height={523} />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kembangkan Bisnis Anda Bersama kami
            </h2>

            <p className="mt-4 text-gray-600">
              Kami menawarkan berbagai solusi untuk permasalahan anda mulai dari
              kredit dengan suku bunga yang kompetitif, tabungan dengan suku
              bunga besar serta deposito untuk keuntungan maksimal dari
              investasi anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
