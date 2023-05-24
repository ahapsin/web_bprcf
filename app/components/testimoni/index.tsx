import { IconBuilding, IconDeviceLandlinePhone } from "@tabler/icons-react";

const Testimoni = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Kantor Pelayanan Cabang
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              {<IconBuilding />}
              <div>
                <p className="mt-1 text-lg font-medium text-gray-700">
                  Kantor Pusat
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Jl. Karanggetas No. 142 Cirebon <br />
              Telp : <strong>0231 - 248400, 248600,248222</strong> <br />
              Fax: <strong>0231 - 204520</strong>
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              {<IconBuilding />}
              <div>
                <p className="mt-1 text-lg font-medium text-gray-700">
                  Kantor Cabang Pabuaran
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Jl. Letjen S Parman, Pabuaran Kidul Kab. Cirebon <br />
              Telp : <strong>0231 - 663790, 663789</strong> <br />
              Fax: <strong>0231 - 663788</strong>
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              {<IconBuilding />}
              <div>
                <p className="mt-1 text-lg font-medium text-gray-700">
                  Kantor Cabang Jatibarang
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Jl. Raya Bulak No.13-14 Jatibarang Kab. Indramayu
              <br />
              Telp : <strong>0234 - 355583, 355585</strong> <br />
              Fax: <strong>0234 - 351210</strong>
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              {<IconBuilding />}
              <div>
                <p className="mt-1 text-lg font-medium text-gray-700">
                  Kantor KAS Plered
                </p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Jl. Ir. H Juanda No. 22 Plered
              <br />
              Telp : <strong>0231 - 321666</strong> <br />
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
