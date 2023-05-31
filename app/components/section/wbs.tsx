const Wbs = () => {
  return (
    <section className="bg-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mb-8">
                <a href="" className="text-2xl font-bold text-sky-500">
                  Pengaduan
                </a>
              </div>
              <p className="max-w-xl lg:text-lg sm:text-sm">
                Jelaskan kasus dugaan Tempat Kejadian Pelanggaran (TKP) secara
                rinci. Mohon untuk mengisi alinea pertama dengan judul / nama
                kasus TKP yang dilaporkan. Selanjutnya silahkan diuraikan
                mengenai apa dugaan TKP, siapa yang diduga terlibat, di instansi
                mana terjadi TKP, dan kapan terjadinya TKP tersebut.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <div className="py-2">Uraian Pengaduan*</div>
                  <textarea
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Tuliskan Uraian Pengaduan"
                    rows={8}
                    id="message"
                  ></textarea>
                </div>
                <div>
                  Uraian Pihak Yang Terduga Terlibat*
                  <br />
                  <small>Minimal harus berisi data 1 (satu) pihak.</small>
                </div>
                <div>
                  <textarea
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="1.Nama - jabatan"
                    rows={5}
                    id="message"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wbs;
