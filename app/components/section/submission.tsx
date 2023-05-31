"use client";
import { Input } from "@nextui-org/react";

const Submission = () => {
  return (
    <section className="bg-slate-200">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-10 place-content-between">
        <div className="items-center flex">
          <div className="mb-8">
            <a href="" className="text-2xl font-bold text-sky-500">
              Pengajuan Permintaan Kredit
            </a>
            <p className="max-w-xl lg:text-lg sm:text-sm">
              Form pengajuan permintaan kredit
            </p>
          </div>
        </div>
        <div className="grid rounded-lg shadow bg-white p-10">
          <form action="">
            <div className="grid lg:grid-cols-2">
              <div>
                <Input label="Nama" placeholder="Nama Anda" />
              </div>
              <div>
                <Input label="No KTP" placeholder="No KTP" />
              </div>
              <div>
                <Input
                  label="Handphone"
                  type="number"
                  placeholder="Handphone"
                />
              </div>
              <div>
                <Input label="Tujuan" placeholder="Tujuan" />
              </div>
              <div>
                <Input label="Nominal" placeholder="Nominal" />
              </div>
              <div>
                <Input label="Jangka Waktu" placeholder="Jangka Waktu" />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-sky-900 px-5 py-3 font-medium text-white sm:w-auto"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Submission;
