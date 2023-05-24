const Section = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1589793463357-5fb813435467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
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
